import * as React from "react";

import { IUserList } from "static/stores/users";

import "./UserList.scss";
import { UserDescription } from "static/page/components/UserDescription/UserDescription";
import { Link, LinkProps } from "react-router-dom";

export interface UserListProps {
  users: IUserList;
}

export const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <ul className="user-list">
      {users.map(user => (
        <li key={user.login} className="user-list__item">
          <Link to={`/user/${user.login}`}>
            <UserDescription user={user} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

UserList.displayName = "UserList";
