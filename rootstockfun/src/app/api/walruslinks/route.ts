import { NextResponse } from 'next/server';

export async function generateLink() {
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

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const contractAddress = searchParams.get('contractAddress');
    const page = searchParams.get('page') || '1';
    const offset = searchParams.get('offset') || '100';
  
    if (!contractAddress) {
      return NextResponse.json({ error: 'Contract address is required' }, { status: 400 });
    }
  
    try {
      const baseUrl = 'https://rootstock-testnet.blockscout.com/api';
      const params = new URLSearchParams({
        module: 'token',
        action: 'getTokenHolders',
        contractaddress: contractAddress,
        page: page,
        offset: offset
      });
  
      const url = `${baseUrl}?${params.toString()}`;
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log("Token holders data:", data);
  
      if (data.status === '1' && Array.isArray(data.result)) {
        const holders = data.result.map((holder: any) => ({
          address: holder.address,
          balance: parseFloat(holder.value) / 1e18
        }));
        return NextResponse.json({
          success: true,
          holders: holders,
          totalCount: holders.length
        });
      } else {
        throw new Error('Unexpected data structure from API');
      }
    } catch (error) {
      console.error('Error fetching token holders:', error);
      return NextResponse.json({
        success: false,
        error: error instanceof Error ? error.message : String(error)
      }, { status: 500 });
    }
}

interface Holder {
  address: string;
  balance: number;
  value: string;
}