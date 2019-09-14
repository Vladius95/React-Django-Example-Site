import * as React from "react";
import { CommonButton } from "static/page/components/buttons/CommonButton";

import "./Close.scss";

const CloseImage = require("./imgs/close.svg");

export interface CloseProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  extraClass?: string;
}

export const Close: React.SFC<CloseProps> = ({ onClick, extraClass = "" }) => (
  <CommonButton onClick={onClick} extraClass={`close-button ${extraClass}`}>
    <img src={CloseImage} alt="Close" className="close-button__image" />
  </CommonButton>
);
