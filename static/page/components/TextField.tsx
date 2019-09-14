import React from "react";
import * as classNames from "classnames";
import InputMask from "react-input-mask";

import "./TextField.scss";

interface CommonInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
  extraClass?: string;
}

export const CommonInput: React.SFC<CommonInputProps> = ({ extraClass = "", hasError = false, ...inputProps }) => (
  <input {...inputProps} className={classNames(`text-field ${extraClass}`, { "text-field__error": hasError })} />
);

interface MaskInputProps extends CommonInputProps {
  mask: string;
  maskChar?: string;
  alwaysShowMask?: boolean;
  formatChars?: Record<string, string>;
  permanents?: number[];
}

export const MaskInput: React.SFC<MaskInputProps> = ({ extraClass = "", hasError = false, ...inputProps }) => (
  <InputMask
    {...inputProps}
    type="text"
    className={classNames(`text-field ${extraClass}`, { "text-field__error": hasError })}
  />
);
