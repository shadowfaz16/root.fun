import { createHash } from "crypto";
import { uuidV4 } from "ethers";
import { toast } from "sonner";

interface TokenData {
  name: string;
  symbol: string;
  initialSupply: string;
  website?: string;
  twitter?: string;
  telegram?: string;
  description?: string;
  imageUrl?: string;
}

export async function generateTokenData(tokenData: TokenData) {
  try {
    const response = await fetch("/api/generateToken", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(tokenData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to generate token data");
    }

    const data = await response.json();
    toast.success("Token data generated successfully!");
    return data;
  } catch (error) {
    console.error("Error generating token data:", error);
    toast.error(
      `Error generating token data: ${
        error instanceof Error ? error.message : "Unknown error"
      }`
    );
    throw error;
  }
}

export async function getChatCompletion(userInput: string) {
  const apiKey = process.env.NEXT_PUBLIC_XAI_API_KEY; // Ensure this is set in your .env.local file
  const url = "https://api.x.ai/v1/chat/completions";

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content:
              "You are a meme token creator and you need to generate a description for a meme token. The description should be 30 words or less. The description should be creative and engaging.",
          },
          {
            role: "user",
            content: userInput,
          },
        ],
        model: "grok-beta",
        stream: false,
        temperature: 0,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch chat completion");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching chat completion:", error);
    throw error;
  }
}

export async function generateXAIWebsite(userInput: TokenData) {
  const apiKey = process.env.NEXT_PUBLIC_XAI_API_KEY; // Ensure this is set in your .env.local file
  const url = "https://api.x.ai/v1/chat/completions";

  const { name, symbol, imageUrl, description } = userInput;

  // Define the prompt template
  const promptTemplate = `
You are an expert web designer specializing in creating professional and modern single-page websites for meme token launchpads. Your task is to generate only the complete HTML code for the website, which includes embedded CSS and JavaScript. The generated code should be clean, well-organized, and ready to be embedded directly into an iframe without any additional text or explanations.

Inputs:

Name: ${name}
Symbol: ${symbol}
Description: ${description}

General Guidelines:

The website must be a single-page, responsive HTML file with embedded CSS and JavaScript.
Use professional design patterns, appropriate spacing, and consistent font sizes.
Incorporate placeholder images where necessary.
Ensure the design is visually appealing and follows a cohesive color scheme suitable for crypto and meme culture.
Optimize for fast loading times and ensure compatibility across different devices and browsers.
Always return the HTML code for the iframe to display the website, NOTHING ELSE.
ALWAYS start with <!DOCTYPE html>, nothing else before that EVER
ALWAYS use cool css.
don't use any external links.

Sections to Include:

Header Section:

Display the Token Name prominently alongside the Token Symbol.
Implement a sticky navigation bar with smooth scrolling to different sections such as Hero, Info, Tokenomics, and Footer. On mobile, the navigation bar should always be a dropdown menu.
Use a clean and modern font for all text elements.

Hero Section:

Feature the Token Image prominently as a central visual element.
Include a catchy tagline or slogan related to the meme token.
Add a visually appealing call-to-action button (e.g., "Launch Token", "Join Now") with hover effects.

Info Section:

Present the Token Description in a well-structured and readable format.
Use engaging typography and layout to maintain user interest.
Include relevant icons or illustrations to enhance the information presented.

Community Section:

Include an image and a paragraph about why this meme's community is strong and the best. The design should be modern and professional. Use a cool font.

Tokenomics Section:

Provide a detailed breakdown of the tokenomics, including total supply, distribution, and any unique features.
Use charts or graphs like pie charts implemented with JavaScript or just css to visually represent the data.
Ensure that the section is informative and easy to understand.

Footer Section:

Include links to social media profiles with appropriate icons.
Add necessary disclaimers or copyright information.
Ensure the footer has a clean layout that complements the overall design.
Styling (CSS):

Utilize a modern and cohesive color palette that aligns with the crypto and meme culture.
Implement responsive design techniques to ensure the website looks excellent on desktops, tablets, and mobile devices.
Incorporate smooth transitions and hover effects for interactive elements like buttons and links.
Use web-safe fonts and ensure readability across different devices and browsers.
Interactivity (JavaScript):

Add smooth scrolling behavior for navigation links.
Implement interactive elements such as animated charts or graphs in the Tokenomics section.
Ensure that all interactive features enhance user engagement without compromising performance.
Output: Provide only the complete HTML code with embedded CSS and JavaScript that fulfills the above requirements. The code should be free of any additional text, explanations, or markdown formatting. Ensure that the HTML is well-indented and includes comments where necessary for clarity.

Example Placeholder Replacement:

Token Name: MemeMaster
Token Symbol: MEME
Image URL: https://example.com/mememaster.png
Token Description: MemeMaster is the ultimate meme token designed to bring laughter and value to the crypto community. Join us in revolutionizing the meme economy!

Notes:
Ensure that the Image URL is valid and accessible. If an image is not available, use a relevant placeholder image URL.
The generated HTML should not include any input forms or external links beyond those specified (e.g., social media links in the footer).
Colors should make sense with the theme of the token.
`;

  // const createPrompt = promptTemplate
  //   .replace("{TOKEN_NAME}", name)
  //   .replace("{TOKEN_SYMBOL}", symbol)
  //   .replace("{IMAGE_URL}", imageUrl ?? "")
  //   .replace("{TOKEN_DESCRIPTION}", description!);

  try {
    console.log("Prompt template:", promptTemplate);
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content:
              "You are a meme token website generator and you need to generate a website for a meme token. The website should be professional and modern. The website should be responsive and mobile friendly. The website should be a single page website and it should be a single HTML file. Always return the HTML code for the iframe to display the website, NOTHING ELSE. don't use the <html> or <body> tags, just return the HTML code. Always use cool css.",
          },
          {
            role: "user",
            content: promptTemplate,
          },
        ],
        model: "grok-beta",
        stream: false,
        temperature: 0,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to fetch chat completion");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching chat completion:", error);
    throw error;
  }
}

// Function to deploy HTML to Vercel
export async function deployToVercel(htmlContent: string) {
  const apiToken = process.env.VERCEL_API_TOKEN; // Set in your environment variables
  const projectId = process.env.VERCEL_PROJECT_ID; // Set your Vercel project ID

  // generate random hash of html content
  const hash = createHash("sha256").update(htmlContent).digest("hex");

  // Generate a unique identifier for the deployment
  const deploymentName = `root4fun-${uuidV4(hash)}`;

  // Define the deployment payload
  const payload = {
    name: deploymentName,
    project: projectId,
    files: {
      'index.html': {
        content: htmlContent,
      },
    },
    // You can specify additional settings here
  };

  try {
    const response = await fetch('https://api.vercel.com/v13/deployments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Vercel Deployment Error: ${errorData.error.message}`);
    }

    const data = await response.json();
    console.log("Vercel deployment data:", data);
    console.log("Vercel deployment URL:", data.url);
    return data.url; // The URL of the deployed website
  } catch (error) {
    console.error('Error deploying to Vercel:', error);
    throw error;
  }
}