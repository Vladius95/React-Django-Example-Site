import * as React from "react";
import { Logo } from "static/page/components/Logo/Logo";

import { BrowserRouter, Link } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";

import "./Header.scss";
import { RouteLink } from "static/page/components/CommonLink";
import { HeaderUserPanel } from "./HeaderUserPanel";

const history = createBrowserHistory();

export interface HeaderProps {}

export const Header: React.FC<HeaderProps> = React.memo(({}) => {
  return (
    <header className="header">
      <Link to="/main">
        <Logo />
      </Link>

      <nav className="navigation">
        <BrowserRouter>
          <ul className="navigation__list">
            <li className="navigation__item">
              <RouteLink to="/main">Main</RouteLink>
            </li>
            <li className="navigation__item">
              <RouteLink to="/users">Users</RouteLink>
            </li>
            <li className="navigation__item">
              <RouteLink to="/about">About</RouteLink>
            </li>
          </ul>
        </BrowserRouter>
      </nav>
      <HeaderUserPanel />
    </header>
  );
});

Header.displayName = "Header";
