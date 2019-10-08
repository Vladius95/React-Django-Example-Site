import "./AvatarSelection.scss";
import * as React from "react";
import { useDropzone } from "react-dropzone";
import * as cn from "classnames";

import { UserAvatar } from "static/page/components/UserAvatar/UserAvatar";

// ограничение на размер загружаемой картинки
const MAX_IMG_SIZE = 5 * 1000 * 1000;

export interface AvatarSelectionProps {
  initialAvatar?: string;
  extraClass?: string;
}

export const AvatarSelection: React.FC<AvatarSelectionProps> = ({ initialAvatar, extraClass = "" }) => {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles } = useDropzone({
    accept: "image/jpeg, image/png",
    multiple: false,
    maxSize: MAX_IMG_SIZE
  });

  const className = React.useMemo(
    () =>
      cn("avatar-selection__image", {
        "avatar-selection__image--accepted": isDragAccept,
        "avatar-selection____image--rejected": isDragReject,
        "avatar-selection____image--active": isDragActive
      }),
    [isDragActive, isDragAccept, isDragReject]
  );

  return (
    <section className={`avatar-selection ${extraClass}`}>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <UserAvatar avatar={acceptedFiles[0] ? acceptedFiles[0]["path"] : undefined} extraClass={className} />
      </div>
    </section>
  );
};

AvatarSelection.displayName = "AvatarSelection";
