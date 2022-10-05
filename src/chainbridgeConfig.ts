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
      bridgeAddress: "0xa7E2cE557980618253D9dafdEDb27ecCe2F82167",
      genericHandlerAddress: "0x5945432d6c0A4b30c1178888F776a4d430d5BC94",
      controller: "0x1B228a749077b8e307C5856cE62Ef35d96Dca2ea",
      approvalContract: "0x805c7Ecba41f9321bb098ec1cf31d86d9407de2F",
      rpcUrl:
        "https://eth-mainnet.alchemyapi.io/v2/x2jT9wfMVj9S3IjBoniQXNAF14Yaktg6",
      type: "Ethereum",
      blockExplorer: "https://etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      deployedBlockNumber: 15648033,
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
      bridgeAddress: "0x8209815136b35F21B8C0f5AA2E2f915a73530dF9",
      genericHandlerAddress: "0x431a7Bb43b6242225Ceb97Bde140219b4d043116",
      controller: "0x17F084dFF8a71e38521BCBD3Da871753Dc67aa81",
      approvalContract: "0x17F084dFF8a71e38521BCBD3Da871753Dc67aa81",
      rpcUrl: "https://bsc-dataseed.binance.org/",
      type: "Ethereum",
      blockExplorer: "https://bscscan.com/tx",
      nativeTokenSymbol: "BNB",
      deployedBlockNumber: 21787431,
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
      bridgeAddress: "0xB447acD21831F6615e208c9EEa7E6049dB3391Cd",
      genericHandlerAddress: "0x0B9709FE3aa76068f07d054fd4417445D5c7DA9A",
      controller: "0x24232ccAf8bB87908C419aD7dDCca8cc9e74746d",
      approvalContract: "0x24232ccAf8bB87908C419aD7dDCca8cc9e74746d",
      rpcUrl: "https://api.avax.network/ext/bc/C/rpc",
      type: "Ethereum",
      blockExplorer: "https://snowtrace.io/tx",
      nativeTokenSymbol: "AVAX",
      deployedBlockNumber: 20477952,
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
      bridgeAddress: "0x23894d2937A2a4A479f0407909DA5B028049568E",
      genericHandlerAddress: "0x701627e8638c452732eceCC7d0238746654fb365",
      controller: "0x5353C43b3aF8E9F9c044B55Ea2c139aC977E0F19",
      approvalContract: "0x5353C43b3aF8E9F9c044B55Ea2c139aC977E0F19",
      rpcUrl: "https://rpc.meter.io",
      type: "Ethereum",
      blockExplorer: "https://scan.meter.io/tx",
      nativeTokenSymbol: "MTR",
      deployedBlockNumber: 28698530,
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
//       bridgeAddress: "0x2Ff19376B6F27A03B621b5c018f852BFAa416835",
//       genericHandlerAddress: "0xEe373E583e313B0bd9d7dc6DEc694dc074212e86",
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
//       bridgeAddress: "0xcE785E92bc448de7c58D3f7D74F2BDcEd9Cc7c49",
//       genericHandlerAddress: "0x64BBA8492a0CfaB65a954860Cf1D99b28eD2D418",
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
