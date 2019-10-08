import React from "react";
import * as classNames from "classnames";
import InputMask from "react-input-mask";

import "./TextField.scss";

interface CommonInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "className"> {
  extraClass?: string;
}

export const CommonInput: React.FC<CommonInputProps> = ({ extraClass = "", ...inputProps }) => (
  <input {...inputProps} className={`common-input ${extraClass}`} />
);

interface MaskInputProps extends CommonInputProps {
  mask: string;
  maskChar?: string;
  alwaysShowMask?: boolean;
  formatChars?: Record<string, string>;
  permanents?: number[];
}

export const MaskInput: React.FC<MaskInputProps> = ({ extraClass = "", ...inputProps }) => (
  <InputMask {...inputProps} type="" className={`common-input ${extraClass}`} />
);

// https://material.io/components/text-fields/#
export interface TextFieldProps extends Omit<CommonInputProps, "id" | "className"> {
  hasError?: boolean;
  errorMessage?: string;
  helperMessage?: string;
  extraClass?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  hasError = false,
  errorMessage = "",
  helperMessage = "",
  extraClass = "",
  ...inputProps
}) => {
  const [isFocused, setFocusActive] = React.useState(!!inputProps.value);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { placeholder: labelText, ...restProps } = inputProps;
  return (
    <div className={`text-field ${extraClass}`}>
      {labelText && (
        <label
          className={classNames("text-field__label", {
            "text-field__label--focused": isFocused,
            "text-field__label--has-error": hasError
          })}
          htmlFor="text-field"
        >
          {labelText}
        </label>
      )}
      <input
        ref={inputRef}
        id="text-field"
        type="text"
        onFocus={() => setFocusActive(true)}
        onBlur={() => {
          if (inputRef.current && inputRef.current.value.length === 0) {
            setFocusActive(false);
          }
        }}
        className={classNames("text-field__input", { "text-field__input--has-error": !!hasError })}
        {...restProps}
      />
      {errorMessage && <p className="text-field__error-message">{errorMessage}</p>}
      {helperMessage && <p className="text-field__helper-message">{helperMessage}</p>}
    </div>
  );
};

TextField.displayName = "TextField";
