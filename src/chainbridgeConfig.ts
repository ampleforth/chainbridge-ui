import ETHIcon from "./media/tokens/eth.svg";
import WETHIcon from "./media/tokens/weth.svg";

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
  tokenVaultAddress: string;
  controllerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  // NOTE: This should be the full path to display a tx hash,
  // without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 251,
      networkId: 99999991,
      name: "gethBaseChain",
      bridgeAddress: "0xF9FB5a5D90a4cE57ef66488BD5737d1da934b65d",
      genericHandlerAddress: "0xB78b87EdBE1598EC399fC369AbfA4370D4D764bc",
      tokenVaultAddress: "0xB6b88D3Bf5F7e3E10a17b34098387fD1e81Bb43C",
      controllerAddress: "0x58487019cf0d712519fAF6741132b015407A3B1A",
      rpcUrl: "http://localhost:7545",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "AMPL",
      tokens: [
        {
          address: "0x299D8C3c7C8DBb12D4f1E5bC87FA298E2Eab8f9d",
          name: "Ampleforth",
          symbol: "AMPL",
          imageUri: WETHIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        }
      ],
    },
    {
      chainId: 252,
      networkId: 99999992,
      name: "gethSatChain1",
      bridgeAddress: "0xD7e36FC5540986f20e42a5941777Ec333b4Cf875",
      genericHandlerAddress: "0xF63DC56cD7B55DE02A0341A5F4bbFAf9657721D9",
      tokenVaultAddress: "0xF63DC56cD7B55DE02A0341A5F4bbFAf9657721D9",
      controllerAddress: "0x6EcA26B05c70D2c63Cebc53Dd73aaa8fE579F56C",
      rpcUrl: "http://localhost:7550",
      type: "Ethereum",
      blockExplorer: "https://goerli.etherscan.io/tx",
      nativeTokenSymbol: "ETH",
      tokens: [
        {
          address: "0x299D8C3c7C8DBb12D4f1E5bC87FA298E2Eab8f9d",
          name: "XC-Ample",
          symbol: "xcAmple",
          imageUri: WETHIcon,
          resourceId:
            "0x1f3eb8ee12ce38ffa19fc4c635621ad2c9a0bd609def9ddce77680e33bc2224b",
        }
      ],
    }
  ],
};
