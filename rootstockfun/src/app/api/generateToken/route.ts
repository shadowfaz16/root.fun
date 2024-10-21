import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const tokenData = await request.json();

  try {
    const response = await fetch('https://wapo-testnet.phala.network/ipfs/QmYVQ5VXTMaaVmeu6KGbozNJj56QZhAshMmScaxEG7emv1', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(tokenData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json({ error: errorData.error || 'Failed to generate token data' }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error generating token data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}