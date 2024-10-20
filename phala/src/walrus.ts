const publishers = [
    "https://publisher.walrus-testnet.walrus.space",
    "https://wal-publisher-testnet.staketab.org",
    "https://walrus-testnet-publisher.bartestnet.com",
    "https://walrus-testnet-publisher.nodes.guru",
    "https://sui-walrus-testnet.bwarelabs.com/publisher",
    "https://walrus-testnet-publisher.stakin-nodes.com",
    "https://testnet-publisher-walrus.kiliglab.io",
    "https://walrus-testnet-publisher.nodeinfra.com",
    "https://walrus-testnet.blockscope.net:11444",
    "https://walrus-publish-testnet.chainode.tech:9003",
    "https://walrus-testnet-publisher.starduststaking.com:11445",
    "http://walrus-publisher-testnet.overclock.run:9001",
    "http://walrus-testnet-publisher.everstake.one:9001",
    "http://walrus.testnet.pops.one:9001",
    "http://ivory-dakar-e5812.walrus.bdnodes.net:9001",
    "http://publisher.testnet.sui.rpcpool.com:9001",
    "http://walrus.krates.ai:9001",
    "http://walrus-publisher-testnet.latitude-sui.com:9001",
    "http://walrus-tn.juicystake.io:9090",
    "http://walrus-testnet.stakingdefenseleague.com:9001",
    "http://walrus.sui.thepassivetrust.com:9001"
  ];
  
  export const uploadFile = async (file: string) => {  // Exporting the function
    for (let i = 0; i < publishers.length; i++) {
      const url = `${publishers[i]}/v1/store?epochs=5`;
  
      try {
        const response = await fetch(url, {
          method: 'PUT',
          body: file,
        });
  
        if (!response.ok) {
          throw new Error(`Error with ${publishers[i]}: ${response.statusText}`);
        }
  
        const data = await response.json();
        console.log(`Success with ${publishers[i]}:`, data);
        return data
      } catch (error) {
        console.error(`Attempt ${i + 1} failed: ${error}`);
      }
      
    }

  };
  