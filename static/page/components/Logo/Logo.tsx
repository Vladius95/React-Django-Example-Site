import * as React from "react";

const LogoIcon = require("./logo.svg");

import "./Logo.scss";

export interface LogoProps {
  extraClass?: string;
}

function areEqualLogoProps(prevProps: LogoProps, nextProps: LogoProps) {
  return true;
}

export const Logo: React.FC<LogoProps> = React.memo(({ extraClass }) => {
  return <img src={LogoIcon} width="60px" height="60px" alt="Logo" className={`logo ${extraClass}`} />;
}, areEqualLogoProps);

Logo.displayName = "Logo";
