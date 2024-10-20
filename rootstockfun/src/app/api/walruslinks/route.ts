export async function generateLink(tokenData: {
    name: string;
    symbol: string;
    imageUrl: string;
    description: string;
  }) {
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' ,'Access-Control-Allow-Origin': '*'},
        body: '{"name":"MoonDoge","symbol":"MDOGE","img":"https://example.com/moondoge.png","description":"MoonDoge is the next generation meme coin, combining the lovable Shiba Inu meme with the dream of going to the moon. Our community-driven project aims to revolutionize the crypto space with fun, engagement, and potential astronomical gains. Join the MoonDoge pack and prepare for liftoff!"}'
};
  
      const response = await fetch('https://wapo-testnet.phala.network/ipfs/QmdeYyPzw9c3WHBdd9nmTrUHqQ666YPefbPxhtQCM5WvS7', options);

      console.log("response: ", response);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("data: ", data);
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

export async function getHoldersByAddress(tokenAddress: string) {
  try {
    const baseUrl = 'https://instance_base_url/api';
    const params = new URLSearchParams({
      module: 'token',
      action: 'getTokenHolders',
      contractaddress: tokenAddress,
      page: '1',
      offset: '100'
    });

    const url = `${baseUrl}?${params.toString()}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching token holders:', error);
    throw error;
  }
}

export async function getTokenHolders() {
  try {
    const tokenAddress = "0x2E1474D466CA2827313e12b46E09520Cf72F8a14";
    console.log("tokenAddress", tokenAddress);
    const chainName = "rsk-testnet";
    const baseUrl = 'https://api.covalenthq.com/v1';
    const endpoint = `${baseUrl}/${chainName}/tokens/${tokenAddress}/token_holders_v2/`;
    
    const options = {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer cqt_rQB7YDDmdxVkwcB7HB3vhF78qYdc'
      }
    };

    const response = await fetch(endpoint, options);
    console.log("response", {
      body: response.body,
      bodyUsed: response.bodyUsed,
      headers: response.headers,
      ok: response.ok,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("data!!!:", data);
    return data;
  } catch (error) {
    console.error('Error fetching token holders:', error);
    throw error;
  }
}
