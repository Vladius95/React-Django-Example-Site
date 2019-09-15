import React from "react";

import "./CommonButton.scss";

interface CommonButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  extraClass?: string;
}

export const CommonButton: React.SFC<CommonButtonProps> = ({ extraClass = "", ...buttonProps }) => {
  return <button {...buttonProps} className={`common-button ${extraClass}`} />;
};

// https://material.io/components/buttons/
export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> {
  extraClass?: string;
}

export const Button: React.FC<ButtonProps> = ({ extraClass = "", ...buttonProps }) => {
  return <button {...buttonProps} className={`button ${extraClass}`} />;
};

Button.displayName = "Button";
