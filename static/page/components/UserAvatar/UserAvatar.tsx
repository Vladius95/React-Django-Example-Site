import "./UserAvatar.scss";
import * as React from "react";
import { useLazyImageLoad } from "static/hooks/lazy-image-load";

const defaultAvatar = require("./default-avatar.svg");

export interface UserAvatarProps {
  avatar?: string;
  extraClass?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = React.memo(({ avatar = defaultAvatar, extraClass = "" }) => {
  useLazyImageLoad("user-avatar--lazy");

  return (
    <img
      src="data/loading.png"
      data-src={avatar}
      alt="User Avatar"
      className={`user-avatar user-avatar--lazy ${extraClass}`}
    />
  );
});

UserAvatar.displayName = "UserAvatar";
