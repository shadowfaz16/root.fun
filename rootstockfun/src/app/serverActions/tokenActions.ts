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
      const response = await fetch('/api/generateToken', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(tokenData)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate token data');
      }
  
      const data = await response.json();
      toast.success('Token data generated successfully!');
      return data;
    } catch (error) {
      console.error('Error generating token data:', error);
      toast.error(`Error generating token data: ${error instanceof Error ? error.message : 'Unknown error'}`);
      throw error;
    }
  }