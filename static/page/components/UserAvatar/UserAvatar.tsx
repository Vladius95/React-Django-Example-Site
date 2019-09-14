import * as React from "react";
import { useLazyImageLoad } from "static/hooks/lazy-image-load";

import "./UserAvatar.scss";

export interface UserAvatarProps {
  avatar: string;
  extraClass?: string;
}

function areEqualUserAvatarProps(prevProps: UserAvatarProps, nextProps: UserAvatarProps) {
  return true;
}

export const UserAvatar: React.FC<UserAvatarProps> = React.memo(({ avatar, extraClass = "" }) => {
  useLazyImageLoad("user-avatar--lazy");

  return (
    <img
      src="data/loading.png"
      data-src={avatar}
      alt="User Avatar"
      className={`user-avatar user-avatar--lazy ${extraClass}`}
    />
  );
}, areEqualUserAvatarProps);

UserAvatar.displayName = "UserAvatar";
