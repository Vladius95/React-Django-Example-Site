import { createStore, Action, Store, Reducer } from "redux";
import { Photo } from "./photos";

export interface IUser {
  id: number;
  name: string;
  avatar: string;
  age: number;
  instagram: string;
  photos: Photo[];
}

export type IUserList = IUser[];

export type UsersState = IUserList;

export interface UsersAction extends Action {
  users: IUserList;
  type: "USERS_SUCCESS";
}

export const usersReducer: Reducer<UsersState, UsersAction> = (users: UsersState = [], action: UsersAction) => {
  switch (action.type) {
    case "USERS_SUCCESS":
      return action.users.map(u => {
        const avatar = `data/users/${u.id}/${u.id}.jpg`;
        u["avatar"] = avatar;
        return u;
      });
  }

  return users;
};

export const usersStore = createStore(usersReducer);

function toObservable(store: Store) {
  return {
    subscribe({ onNext }) {
      let dispose = store.subscribe(() => onNext(store.getState()));
      onNext(store.getState());
      return { dispose };
    }
  };
}

export function getFilteredUserList(users: IUserList, searchText: string): IUserList {
  const isMatch = (name: string): boolean => name.toLocaleLowerCase().indexOf(searchText) !== -1;
  const filteredUserList = users.filter((user: IUser) => isMatch(user.name));

  return filteredUserList;
}
