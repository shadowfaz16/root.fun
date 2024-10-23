import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{}>
) {
  const result = await fetch("https://api.vercel.com/v13/deployments", {
    body: JSON.stringify({
      name: "my-instant-deployment",
    }),
    headers: {
      Authorization: "Bearer F1HmGuTLw60LNA0TdEOLM4k6",
    },
    method: "post",
  });
  const data = await result.json();
  console.log("deployment data, ", data);
  response.status(200).json(data);
  if (data.error) {
    console.error("data.error, ", data.error);
  }
}
