import { combineReducers, Reducer } from "redux";
import { userReducer, UserAction, UserState } from "./user";
import { usersReducer, UsersAction, UsersState, IUserList, IUser } from "./users";
import { AuthAction, AuthState } from "./auth";

export interface State {
  authReducer: AuthAction;
  usersReducer: UsersAction;
  userReducer: UserAction;
}

export type rootReducers = {
  authReducer: Reducer<AuthState, AuthAction>;
  usersReducer: Reducer<UsersState, UsersAction>;
  userReducer: Reducer<UserState, UserAction>;
};

export type RootState = {
  authReducer: string;
  usersReducer: IUserList;
  userReducer: [IUser];
};

export const mergedReducers = combineReducers({ usersReducer, userReducer });
