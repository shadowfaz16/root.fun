export async function generateLink(tokenData: {
    name: string;
    symbol: string;
    imageUrl: string;
    description: string;
  }) {
    try {
        const options = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: '{"name":"MoonDoge","symbol":"MDOGE","img":"https://example.com/moondoge.png","description":"MoonDoge is the next generation meme coin, combining the lovable Shiba Inu meme with the dream of going to the moon. Our community-driven project aims to revolutionize the crypto space with fun, engagement, and potential astronomical gains. Join the MoonDoge pack and prepare for liftoff!"}'
          };
          
          fetch('https://wapo-testnet.phala.network/ipfs/QmdeYyPzw9c3WHBdd9nmTrUHqQ666YPefbPxhtQCM5WvS7', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

      console.log("options: ", options);
  
      const response = await fetch('https://wapo-testnet.phala.network/ipfs/QmdeYyPzw9c3WHBdd9nmTrUHqQ666YPefbPxhtQCM5WvS7', options);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      console.log("response: ", response);
  
      const data = await response.json();
      console.log("dataaa: ", data);
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

export async function getFillerItems() {
  try {
    const response = await fetch('https://wapo-testnet.phala.network/ipfs/QmePfWmPzbtb6mhiTXynrAV3f3tTVTkM2p1cqLbmAwf8Ge');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching filler items:', error);
    throw error;
  }
}