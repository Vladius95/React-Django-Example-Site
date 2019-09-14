import * as React from "react";

import "./Footer.scss";

export interface FooterProps {}

function areEqualFooterProps(prevProps: FooterProps, nextProps: FooterProps) {
  return false;
}

export const Footer: React.FC<FooterProps> = React.memo(({}) => {
  return <footer className="footer">Just for fun {new Date().getFullYear()}</footer>;
}, areEqualFooterProps);

Footer.displayName = "Footer";
