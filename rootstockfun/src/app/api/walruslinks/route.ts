export async function generateLink(tokenData: {
    name: string;
    symbol: string;
    imageUrl: string;
    description: string;
  }) {
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: tokenData.name,
          symbol: tokenData.symbol,
          img: tokenData.imageUrl,
          description: tokenData.description
        })
      };
  
      const response = await fetch('https://wapo-testnet.phala.network/ipfs/QmdeYyPzw9c3WHBdd9nmTrUHqQ666YPefbPxhtQCM5WvS7', options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }