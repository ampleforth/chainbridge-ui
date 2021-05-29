import AMPLIcon from "./media/ample-logo/logo.png";
import AMPL_BSC_MP_Icon from "./media/ample-logo/ampl_bsc_mp.png";

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
      networkId: 1,
      name: "Ethereum",
      bridgeAddress: "0xbD515E41DF155112Cc883f8981CB763a286261be",
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
      bridgeAddress: "0x223fafbc2cA53A75CcfF5B2369128d3d1a828F36",
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
          imageUri: AMPL_BSC_MP_Icon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        },
      ],
    },
  ],
};
