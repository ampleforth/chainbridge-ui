import React, { useEffect, useState } from "react";
import { useField } from "formik";
import {
  IFormikSelectInputProps,
  FormikSelectInput,
} from "@chainsafe/common-components";
import { Tokens } from "@meterio/web3-context/dist/context/tokensReducer";
import {safeRound} from "../../Utils/XCAmple";

interface ITokenSelectInput extends IFormikSelectInputProps {
  tokens: Tokens;
  sync?: (value: string) => void;
}

const TokenSelectInput: React.FC<ITokenSelectInput> = ({
  className,
  label,
  name,
  tokens,
  sync,
  ...rest
}: ITokenSelectInput) => {
  const [field] = useField(name);
  const roundedBalance = safeRound(tokens[field.value]?.balance, tokens[field.value]?.decimals);
  const amountToDisplay = parseFloat(roundedBalance).toLocaleString();
  const labelParsed = tokens[field.value]
    ? `${label} ${amountToDisplay} ${tokens[field.value]?.symbol}`
    : "Please select token";

  const tokenList = Object.keys(tokens);
  const nTokens = tokenList.length;

  const [synced, setSynced] = useState();
  useEffect(() => {
    if (sync && field.value !== synced) {
      setSynced(field.value);
      if (field.value !== "") {
        sync(field.value);
      }
    }
    // eslint-disable-next-line
  }, [field]);

  return (
    <FormikSelectInput
      name={name}
      className={className}
      label={labelParsed}
      {...rest}
    />
  );
};

export default TokenSelectInput;
