import * as React from "react";
import { Photo } from "static/stores/photos";
import { CommonButton } from "../buttons/CommonButton";

import "./UserPhoto.scss";

const Like = require("./like.svg");

export interface UserPhotoProps {
  photo: Photo;
}

function areEqualPhotoProps(prevProps: UserPhotoProps, nextProps: UserPhotoProps) {
  return prevProps.photo.likes === nextProps.photo.likes;
}

export const UserPhoto: React.FC<UserPhotoProps> = React.memo(({ photo }) => {
  return (
    <section className="user-photo">
      <img src={photo.url} alt="User photo" className="user-photo__image" />
      <CommonButton extraClass="user-photo__like-btn">
        <img src={Like} alt="Like on photo" className="user-photo__like-image user-photo__like-big" />
      </CommonButton>
      <p className="user-photo__likes">
        <img src={Like} alt="Like on photo" className="user-photo__like-image-count user-photo__like-small" />
        {photo.likes} likes
      </p>
    </section>
  );
}, areEqualPhotoProps);

UserPhoto.displayName = "UserPhoto";
