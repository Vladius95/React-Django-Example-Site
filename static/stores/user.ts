import { createStore, Action, Reducer } from "redux";
import { IUser } from "./users";
import { Photo } from "./photos";

export type UserState = IUser[];

export interface UserAction extends Action {
  user: IUser;
  type: "USER_SUCCESS";
}

function toPhoto(id: number, userId: number): Photo {
  return { likes: 0, comments: 0, id, url: `data/users/${userId}/photos/${id}.jpg` };
}

export const userReducer: Reducer<UserState, UserAction> = (user: UserState = [], action: UserAction) => {
  switch (action.type) {
    case "USER_SUCCESS":
      return [
        {
          ...action.user,
          avatar: `data/users/${action.user.id}/${action.user.id}.jpg`,
          photos: (action.user.photos as any).map(p => toPhoto(p, action.user.id))
        }
      ];
  }
  return user;
};

export const userStore = createStore(userReducer);
