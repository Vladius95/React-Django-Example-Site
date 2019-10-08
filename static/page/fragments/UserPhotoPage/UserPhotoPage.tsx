import * as React from "react";
import { IUser } from "static/stores/users";
import { RouteComponent } from "static/types/t_redux";
import { useRequest } from "static/hooks/use-request";
import { UserAction } from "static/stores/user";
import { RootState } from "static/stores/root";
import { connect } from "react-redux";
import { Message } from "static/page/components/Message/Message";
import { Loading } from "static/page/components/Loading/Loading";
import { UserPhoto } from "static/page/components/UserPhoto/UserPhoto";

import "./UserPhotoPage.scss";

export interface UserPhotoPageProps {
  user: IUser;
}

function areEqualUserPhotoPageProps(
  prevProps: RouteComponent<UserAction, UserPhotoPageProps>,
  nextProps: RouteComponent<UserAction, UserPhotoPageProps>
) {
  return false;
}

/**
 * Компонент страницы, рендерящий фотографию пользователя
 */
const UserPhotoPage: React.FC<RouteComponent<UserAction, UserPhotoPageProps>> = React.memo(props => {
  const userId: string = props.match.params["uid"];
  const photoId: number = Number(props.match.params["pid"]);
  console.log(props);

  const [isLoading, isError] = useRequest(`data/users/${userId}/${userId}.json`, "USER_SUCCESS", "user");

  if (isLoading) {
    return (
      <div className="users-page-loading">
        <Loading />
      </div>
    );
  }

  const photo = [].find(p => p.id === photoId);

  if (!photo) {
    return <Message message="User Not Found" extraClass="user-page__message" />;
  }

  return (
    <div className="user-photo-page">
      <UserPhoto photo={photo} />
    </div>
  );
}, areEqualUserPhotoPageProps);

UserPhotoPage.displayName = "UserPhotoPage";

export const UserPhotoConnect = connect((state: RootState) => {
  return { user: state.userReducer[0] };
})(UserPhotoPage);
