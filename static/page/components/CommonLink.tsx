import React from "react";
import { Link, LinkProps } from "react-router-dom";
import * as classNames from "classnames";

import "./CommonLink.scss";

interface RouteLinkProps extends LinkProps {
  disabled?: boolean;
  extraClass?: string;
}

export const RouteLink: React.FC<RouteLinkProps> = ({ disabled = false, extraClass = "", ...linkProps }) => (
  <Link {...linkProps} className={classNames(`common-link ${extraClass}`, { "common-link-disabled": disabled })} />
);

interface CommonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  disabled?: boolean;
  extraClass?: string;
}

export const CommonLink: React.FC<CommonLinkProps> = ({ disabled = false, extraClass = "", ...aProps }) => (
  <a {...aProps} className={classNames(`common-link ${extraClass || ""}`, { "common-link-disabled": disabled })} />
);

export interface ContentLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  extraClass?: string;
}
