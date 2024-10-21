import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  if (req.method === "POST") {
    const { htmlContent } = req.body;

    if (!htmlContent || typeof htmlContent !== "string") {
      res.status(400).json({ error: "Invalid HTML content" });
      return;
    }

    const iframePage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Content</title>
      </head>
      <body>
        <iframe srcdoc="${htmlContent}" style="width:100%; height:100vh; border:none;"></iframe>
      </body>
      </html>
    `;

    res.setHeader("Content-Type", "text/html");
    res.status(200).send(iframePage);
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
