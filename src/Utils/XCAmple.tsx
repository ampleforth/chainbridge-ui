import {
  BigNumber,
  BigNumberish,
  utils,
} from "ethers";


const toHex = (covertThis:number, padding:number):string => {
  return utils.hexZeroPad(utils.hexlify(covertThis), padding);
};

const createGenericDepositData = (hexMetaData:string):string => {
  if (hexMetaData === null) {
    return '0x' + toHex(0, 32).substr(2);
  }
  const hexMetaDataLength = hexMetaData.substr(2).length / 2;
  return '0x' + toHex(hexMetaDataLength, 32).substr(2) + hexMetaData.substr(2);
};

export const safeRound = (amount:number, decimals:number):string => {
  const nDecimals = decimals/2;
  const adjFactor = 10**(nDecimals);
  return (Math.floor(amount*adjFactor) / adjFactor).toFixed(nDecimals);
}

export const packXCTransferData = (depositor:string, recipient:string, amount:BigNumberish, totalSupply:BigNumberish):string => {
  return createGenericDepositData(
    utils.defaultAbiCoder.encode(
      ['address', 'address', 'uint256', 'uint256'],
      [depositor, recipient, amount, totalSupply],
    ),
  );
};

export type TransferData = {
  depositor: string;
  recipient: string;
  amount: BigNumber;
  totalSupply: BigNumber;
};

export const decodeXCTransferData = (data:string):TransferData => {
  const r = utils.defaultAbiCoder.decode(
    ['address', 'address', 'uint256', 'uint256'],
    data,
  );

  const t:TransferData = {
    depositor:r[0],
    recipient:r[1],
    amount:BigNumber.from(r[2]),
    totalSupply:BigNumber.from(r[3]),
  };

  return t;
};
