import { createStore, Action, Reducer } from "redux";

export type AuthState = string;

export interface AuthAction extends Action {
  token: string;
  type: "AUTH_SUCCESS" | "AUTH_FAILED" | "REGISTRATION_SUCCESS";
}

export const userReducer: Reducer<AuthState, AuthAction> = (
  token = localStorage.getItem("token"),
  action: AuthAction
) => {
  switch (action.type) {
    case "AUTH_SUCCESS":
      return token;
  }
  return token;
};

export const userStore = createStore(userReducer);
