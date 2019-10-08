import { createStore, Action, Reducer } from "redux";
import { IUserList } from "./users";
import { flatten } from "lodash";

export interface Photo {
  id: number;
  url: string;
  likes: number;
  comments: number;
}

export type PhotosState = Photo[];

export interface PhotosAction extends Action {
  users: IUserList;
  type: "PHOTOS_SUCCESS";
}

function toPhoto(params: Photo, userId: number): Photo {
  return { ...params, url: `data/users/${userId}/photos/${params.id}.jpg` };
}

export const photosReducer: Reducer<PhotosState, PhotosAction> = (users: PhotosState = [], action: PhotosAction) => {
  switch (action.type) {
    case "PHOTOS_SUCCESS":
      return [];
    // return flatten(action.users.map(u => u.photos));
  }
  return users;
};

export const photosStore = createStore(photosReducer);
