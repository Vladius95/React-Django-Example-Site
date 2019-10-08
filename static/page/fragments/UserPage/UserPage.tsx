import * as React from "react";
import { connect } from "react-redux";
import { useRequest } from "static/hooks/use-request";

import { RouteComponent } from "static/types/t_redux";
import { IUser } from "static/stores/users";
import { UserAction } from "static/stores/user";
import { RootState } from "static/stores/root";

import { UserDescription } from "static/page/components/UserDescription/UserDescription";
import { Message } from "static/page/components/Message/Message";
import { InfiniteLoader } from "static/page/components/InfiniteLoader";
import { MasonryGrid } from "static/page/components/MasonryGrid/MasonryGrid";

import "./UserPage.scss";
import { Photo } from "static/stores/photos";

export interface UserProps {
  user: IUser;
}

function areEqualUserProps(
  prevProps: RouteComponent<UserAction, UserProps>,
  nextProps: RouteComponent<UserAction, UserProps>
) {
  return false;
}

const UserPage: React.FC<RouteComponent<UserAction, UserProps>> = React.memo(props => {
  const id = props.match.params["id"];
  const [isLoading, isError] = useRequest(`data/users/${id}/${id}.json`, "USER_SUCCESS", "user");

  if (isError) {
    return <Message message="User Not Found" extraClass="user-page__message" />;
  }

  if (isLoading) return <InfiniteLoader extraClass="users-page__loader" />;

  return (
    <div className="user-page">
      <div className="user-page__description">
        <UserDescription user={props.user} />
      </div>

      <div className="user-photos">
        <MasonryGrid>
          {[].map((photo: Photo, key: number) => (
            <div key={key} className="user-photos__item">
              <img src={photo.url} alt="User photo" className="user-photos__image" />
            </div>
          ))}
        </MasonryGrid>
      </div>
    </div>
  );
}, areEqualUserProps);

UserPage.displayName = "UserPage";

export const UserPageConnect = connect((state: RootState) => {
  return { user: state.userReducer[0] };
})(UserPage);
