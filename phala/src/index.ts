import { Request, Response, route } from './httpSupport'
import fs from 'fs/promises';
import path from 'path';
import os from 'os';
import FormData from 'form-data';


async function GET(req: Request): Promise<Response> {
    let result = { message: '' }
    const secrets = req.secret || {};
    const queries = req.queries;
    const anthropicApiKey = "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"
    const anthropicModel = 'claude-3-5-sonnet-20240620'
    const query = (queries.chatQuery) ? queries.chatQuery[0] as string : 'Who are you?'
    console.log("query", req.path)
    console.log("reqQuery", req.queries)



    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': anthropicApiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: "What is a good idea for a memecoin? give me a json object with name, symbol, and description" }],
                model: anthropicModel,
                max_tokens: 1024
            })
        });
        const responseData = await response.json();
        console.log("responsedata", responseData);
        result.message = responseData.content[0]?.text || 'Failed to get result';
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        result.message = error instanceof Error ? error.message : 'An unknown error occurred';
    }

    return new Response(JSON.stringify(result))
}

async function POST(req: Request): Promise<Response> {
    let result = { message: '' }
    const secrets = req.secret || {};
    const queries = req.queries;
    const anthropicApiKey = "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"
    const anthropicModel = 'claude-3-5-sonnet-20240620'
    const query = (queries.chatQuery) ? queries.chatQuery[0] as string : 'Who are you?'
    const body = await req.json();
    console.log("Body", JSON.stringify(body));
    const prompt = `Generate a static website for my meme coin named ${JSON.stringify(body.name)} with the symbol ${JSON.stringify(body.symbol)}. The website should have a ${JSON.stringify(body.img)} image and a description of ${JSON.stringify(body.description)}, Create some about us content based on the description. make sure the output is only the file needed to deploy the site and is ready to be copypasted into an html file`;

    function getCleanHTML(input: string): string {
        // Match everything from the opening <html> to the closing </html> tag
        const htmlMatch = input.match(/<html[\s\S]*<\/html>/);

        if (!htmlMatch) {
            throw new Error("No valid HTML content found");
        }

        // Clean up the result by removing newlines
        return htmlMatch[0].replace(/\n/g, '');
    }

    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': anthropicApiKey,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                messages: [{ role: "user", content: prompt }],
                model: anthropicModel,
                max_tokens: 1024
            })
        });
        const responseData = await response.json();
        result.message = responseData.content[0]?.text || 'Failed to get result';
        console.log(result.message)
    } catch (error) {
        console.error('Error fetching chat completion:', error);
        result.message = error instanceof Error ? error.message : 'An unknown error occurred';
    }

    const deployableHTML = getCleanHTML(result.message);
    console.log("deployableHTML", deployableHTML)
    const WalrusUrl = `$https://publisher.walrus-testnet.walrus.space/v1/store?epochs=5`;
    let walrusresp;
    try {
      const response = await fetch(WalrusUrl, {
        headers: {
            'Content-Type': 'text/html',
        },
        method: 'PUT',
        body: deployableHTML,
      });

      if (!response.ok) {
        throw new Error(`Error with: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(`Success with :`, data);
      walrusresp = data
    } catch (error) {
      console.error(`Attempt failed: ${error}`);
    }
    
    const url = `https://testnet-aggregator-walrus.kiliglab.io/v1/${walrusresp?.alreadyCertified?.blobId}`

    return new Response(JSON.stringify(url))


}

export default async function main(request: string) {
    return await route({ GET, POST }, request)
}
