import AMPLIcon from "./media/ample-logo/logo.png";


export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  genericHandlerAddress: string;
  controller: string;
  approvalContract: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  // This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
  deployedBlockNumber?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 1,
      networkId: 3,
      name: "Ropsten",
      bridgeAddress: "0x6fC272eD9B6B947a7858DF30D7DD2D8173306EA8",
      genericHandlerAddress: "0xBAb8402E278F45d51BB342525716611fE1090027",
      controller: "0x7F93DE6733602f4606986389e4fbaC2010904aCE",
      approvalContract: "0xa0DF1131eFA62E487dF180Feb9ecF1cdE7aad632",
      rpcUrl: "https://eth-ropsten.alchemyapi.io/v2/x2jT9wfMVj9S3IjBoniQXNAF14Yaktg6",
      type: "Ethereum",
      blockExplorer: "https://ropsten.etherscan.io/tx",
      nativeTokenSymbol: "RETH",
      deployedBlockNumber: 10126635,
      tokens: [
        {
          address: "0xD0E9335817f7B7c2567b784FD55b203697177E2A",
          imageUri: AMPLIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        }
      ],
    }, {
      chainId: 4,
      networkId: 97,
      name: "BSC Testnet",
      bridgeAddress: "0xcCeA086cbb7DA6bA5eb004fAd435F9b7712bA80e",
      genericHandlerAddress: "0x56f03E0B73fa6Ff6704CA399CE88282EDcF9FeEA",
      controller: "0x22881e9feb1746109227397cAe6Cd86859b9C43e",
      approvalContract: "0x22881e9feb1746109227397cAe6Cd86859b9C43e",
      rpcUrl: "https://data-seed-prebsc-2-s3.binance.org:8545",
      type: "Ethereum",
      blockExplorer: "https://testnet.bscscan.io/tx",
      nativeTokenSymbol: "TBNB",
      deployedBlockNumber: 8356136,
      tokens: [
        {
          address: "0x75c00CF8B6C932AaD2E20fa238a57D389aE3842d",
          imageUri: AMPLIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        }
      ],
    }, {
      chainId: 2,
      networkId: 101,
      name: "Meter Testnet",
      bridgeAddress: "0x4E68f5f704878e69AF9d58D5616168d69f1D03e4",
      genericHandlerAddress: "0x56f03E0B73fa6Ff6704CA399CE88282EDcF9FeEA",
      controller: "0x073ebB139F18d78c2671a316336bB8e1B52e60EA",
      approvalContract: "0x073ebB139F18d78c2671a316336bB8e1B52e60EA",
      rpcUrl: "https://rpctest.meter.io",
      type: "Ethereum",
      blockExplorer: "https://scan-warringstakes.meter.io/tx",
      nativeTokenSymbol: "TMTR",
      deployedBlockNumber: 1092980,
      tokens: [
        {
          address: "0xd259ED8E7ACa1f5eA16fD58a860c09Af335b8198",
          imageUri: AMPLIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        }
      ],
    },
  ],
};
