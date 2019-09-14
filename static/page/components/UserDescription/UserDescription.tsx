import * as React from "react";
import { IUser } from "static/stores/users";
import { UserAvatar } from "static/page/components/UserAvatar/UserAvatar";
import { CommonLink } from "static/page/components/CommonLink";

import "./UserDescription.scss";

export interface UserDescriptionProps {
  user: IUser;
}

function areEqualUserDescriptionProps(prevProps: UserDescriptionProps, nextProps: UserDescriptionProps) {
  return true;
}

export const UserDescription: React.FC<UserDescriptionProps> = React.memo(({ user }) => {
  return (
    <div className="user-description">
      <UserAvatar avatar={user.avatar} extraClass="user-description__avatar" />
      <div className="user-description__desc">
        <div className="user-description__bio">
          <strong className="user-description__name">{user.name}</strong>
          <span className="user-description__age">{user.age} years old</span>
        </div>
        <p className="user-description__location">Russia, Moscow</p>
        {/* <CommonLink
          href={`https://www.instagram.com/${user.instagram}/`}
          target="_blank"
          className="user-description__email"
        >
          {`https://www.instagram.com/${user.instagram}/`}
        </CommonLink> */}
      </div>
    </div>
  );
}, areEqualUserDescriptionProps);

UserDescription.displayName = "UserDescription";
