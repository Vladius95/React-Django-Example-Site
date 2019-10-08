import React from "react";
import { useRequest } from "static/hooks/use-request";
import { UserList } from "static/page/fragments/UsersPage/UserList";
import { Search } from "static/page/components/Search/Search";
import { InfiniteLoader } from "static/page/components/InfiniteLoader";
import { Message } from "static/page/components/Message/Message";
import { connect } from "react-redux";
import { RootState } from "static/stores/root";
import { RouteComponent } from "static/types/t_redux";

import { IUserList, getFilteredUserList, UsersAction } from "static/stores/users";

import { Loading } from "static/page/components/Loading/Loading";
import { ViewType, ViewTypes } from "./ViewType/ViewType";
import { UserGrid } from "./UserGrid/UserGrid";

import "./UsersPage.scss";

interface UsersPageProps {
  users: IUserList;
}

const UsersPage: React.FC<RouteComponent<UsersAction, UsersPageProps>> = props => {
  const [isLoading] = useRequest("/api/get-user-list/", "USERS_SUCCESS", "users");

  const [searchText, changeSearchText] = React.useState("");
  const [viewType, setViewType] = React.useState(ViewTypes.list);

  let users = props.users;
  if (searchText) {
    users = getFilteredUserList(props.users, searchText);
  }

  const onChangeSearchText = (e: React.ChangeEvent<HTMLInputElement>) => changeSearchText(e.target.value);

  const onClear = React.useCallback(() => changeSearchText(""), []);
  const onChangeType = (type: ViewTypes) => setViewType(type);

  if (isLoading) {
    return (
      <div className="users-page-loading">
        <Loading />
      </div>
    );
  }

  return (
    <section className="users-page">
      <header className="user-page__header">
        <Search value={searchText} onChange={onChangeSearchText} extraClass="users-page__search" onClear={onClear} />
        <ViewType selected={viewType} onSelect={onChangeType} />
      </header>

      {users.length === 0 ? (
        <Message message="Nothing found" extraClass="users-page__empty-list-message" />
      ) : viewType === ViewTypes.grid ? (
        <UserGrid users={props.users} extraClass="users-page__user-grid" />
      ) : (
        <UserList users={props.users} />
      )}
    </section>
  );
};

export const UsersPageConnect = connect((state: RootState) => {
  return {
    users: state.usersReducer
  };
})(UsersPage);
