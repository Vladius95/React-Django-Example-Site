import * as React from "react";

import { IUserList } from "static/stores/users";

import { Link, LinkProps } from "react-router-dom";
import { UserAvatar } from "static/page/components/UserAvatar/UserAvatar";

import "./UserGrid.scss";

export interface UserGridProps {
  users: IUserList;
  extraClass?: string;
}

export const UserGrid: React.FC<UserGridProps> = ({ users, extraClass = "" }) => {
  return (
    <ul className={`user-grid ${extraClass}`}>
      {users.map(user => (
        <li key={user.id} className="user-grid__item">
          <Link to={`/user/${user.id}`}>
            <UserAvatar avatar={user.avatar} extraClass="user-grid__avatar" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

UserGrid.displayName = "UserGrid";
