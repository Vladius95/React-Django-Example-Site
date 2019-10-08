import * as React from "react";
import { isAuthorizated, logout } from "static/utils/requests";
import { UserAvatar } from "static/page/components/UserAvatar/UserAvatar";
import { RouteLink } from "static/page/components/CommonLink";

export interface HeaderUserPanelProps {}

function areEqualHeaderUserPanelProps(prevProps: HeaderUserPanelProps, nextProps: HeaderUserPanelProps) {
  return false;
}

export const HeaderUserPanel: React.FC<HeaderUserPanelProps> = React.memo(({}) => {
  return (
    <section className="header-user-panel">
      {!isAuthorizated() ? (
        <p className="header-user-panel__text">
          <RouteLink to="/login">Log in</RouteLink>
        </p>
      ) : (
        <div>
          <UserAvatar />
          <p onClick={logout} className="header-user-panel__text">
            Test
          </p>
        </div>
      )}
    </section>
  );
}, areEqualHeaderUserPanelProps);

HeaderUserPanel.displayName = "HeaderUserPanel";
