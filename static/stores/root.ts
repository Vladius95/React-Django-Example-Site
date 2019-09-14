import { combineReducers, Reducer } from "redux";
import { userReducer, UserAction, UserState } from "./user";
import { usersReducer, UsersAction, UsersState, IUserList, IUser } from "./users";

export interface State {
  usersReducer: UsersAction;
  userReducer: UserAction;
}

export type rootReducers = {
  usersReducer: Reducer<UsersState, UsersAction>;
  userReducer: Reducer<UserState, UserAction>;
};

export type RootState = {
  usersReducer: IUserList;
  userReducer: [IUser];
};

export const mergedReducers = combineReducers({ usersReducer, userReducer });
