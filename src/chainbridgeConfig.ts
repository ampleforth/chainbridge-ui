import AMPLIcon from "./media/ample-logo/logo.png";
// import AMPL_BSC_MP_Icon from "./media/ample-logo/ampl_bsc_mp.png";

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

// mainnet
export const chainbridgeConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 1,
      networkId: 1,
      name: "Ethereum",
      bridgeAddress: "0xa2A22B46B8df38cd7C55E6bf32Ea5a32637Cf2b1",
      genericHandlerAddress: "0x517828d2549cEC09386f89a67E92825E26740240",
      controller: "0x1B228a749077b8e307C5856cE62Ef35d96Dca2ea",
      approvalContract: "0x805c7Ecba41f9321bb098ec1cf31d86d9407de2F",
      rpcUrl:
        "https://eth-mainnet.alchemyapi.io/v2/x2jT9wfMVj9S3IjBoniQXNAF14Yaktg6",
      type: "Ethereum",
      blockExplorer: "https://etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      deployedBlockNumber: 12345342,
      tokens: [
        {
          address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
          imageUri: AMPLIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        },
      ],
    },
    {
      chainId: 4,
      networkId: 56,
      name: "BSC",
      bridgeAddress: "0xFd55eBc7bBde603A048648C6eAb8775c997C1001",
      genericHandlerAddress: "0x83Fc24eB56121FA2A05e0b5170E7310738425839",
      controller: "0x17F084dFF8a71e38521BCBD3Da871753Dc67aa81",
      approvalContract: "0x17F084dFF8a71e38521BCBD3Da871753Dc67aa81",
      rpcUrl: "https://bsc-dataseed.binance.org/",
      type: "Ethereum",
      blockExplorer: "https://bscscan.com/tx",
      nativeTokenSymbol: "BNB",
      deployedBlockNumber: 7028782,
      tokens: [
        {
          address: "0xDB021b1B247fe2F1fa57e0A87C748Cc1E321F07F",
          imageUri: AMPLIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        },
      ],
    },
    {
      chainId: 2,
      networkId: 43114,
      name: "AVAX",
      bridgeAddress: "0xF41e7FC4eC990298d36f667B93951c9dba65224e",
      genericHandlerAddress: "0x123455360bE78C9289B38bcb4DbA427D9a6cD440",
      controller: "0x24232ccAf8bB87908C419aD7dDCca8cc9e74746d",
      approvalContract: "0x24232ccAf8bB87908C419aD7dDCca8cc9e74746d",
      rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://snowtrace.io/tx",
      nativeTokenSymbol: "AVAX",
      deployedBlockNumber: 4754446,
      defaultGasPrice: 20,
      tokens: [
        {
          address: "0x027dbcA046ca156De9622cD1e2D907d375e53aa7",
          imageUri: AMPLIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        },
      ],
    },
    {
      chainId: 3,
      networkId: 82,
      name: "MTR",
      bridgeAddress: "0x3f396Af107049232Bc2804C171ecad65DBCC0323",
      genericHandlerAddress: "0x89CA53Bf11d24D32A7aC3aDb7750868360c90590",
      controller: "0x5353C43b3aF8E9F9c044B55Ea2c139aC977E0F19",
      approvalContract: "0x5353C43b3aF8E9F9c044B55Ea2c139aC977E0F19",
      rpcUrl: "https://rpc.meter.io",
      type: "Ethereum",
      blockExplorer: "https://scan.meter.io/tx",
      nativeTokenSymbol: "MTR",
      deployedBlockNumber: 14654758,
      tokens: [
        {
          address: "0x1cf09D1B5Da9d9d24365D87B932A7c4bD018A419",
          imageUri: AMPLIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        },
      ],
    },
  ],
};

// testnet
// export const chainbridgeConfig: ChainbridgeConfig = {
//   chains: [
//     {
//       chainId: 1,
//       networkId: 5,
//       name: "Goeril",
//       bridgeAddress: "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F",
//       genericHandlerAddress: "0xa023E6f6B4862EA38cbe45e377abD908abAb2f82",
//       controller: "0xE5D1351801aE21BA9A4d4880b58ce72F60b31546",
//       approvalContract: "0x7b939c0BC023bdffA520791A30628FCabE6164Ae",
//       rpcUrl:
//         "https://eth-goerli.alchemyapi.io/v2/x2jT9wfMVj9S3IjBoniQXNAF14Yaktg6",
//       type: "Ethereum",
//       blockExplorer: "https://goerli.etherscan.io/tx",
//       nativeTokenSymbol: "GETH",
//       deployedBlockNumber: 7554032,
//       tokens: [
//         {
//           address: "0x28C07523b22ADb47424A835a124C1A31236FFfE4",
//           imageUri: AMPLIcon,
//           resourceId:
//             "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
//         },
//       ],
//     },
//     {
//       chainId: 3,
//       networkId: 83,
//       name: "Meter Testnet",
//       bridgeAddress: "0xCf6ba7Eb4962e559f45CF61be1a1dB72872e3306",
//       genericHandlerAddress: "0xCD9211E3057313da2682F63d3410Bf231B38d769",
//       controller: "0x122ef99672eFD49123Ce54cE1Ca902fC3125678f",
//       approvalContract: "0x122ef99672eFD49123Ce54cE1Ca902fC3125678f",
//       rpcUrl: "https://rpctest.meter.io",
//       type: "Ethereum",
//       blockExplorer: "https://scan-warringstakes.meter.io/",
//       nativeTokenSymbol: "TMTR",
//       deployedBlockNumber: 19726633,
//       tokens: [
//         {
//           address: "0xEc133791822D441d2CA58A51D4b53cC23b2e7B73",
//           imageUri: AMPLIcon,
//           resourceId:
//             "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
//         },
//       ],
//     },
//   ],
// };
