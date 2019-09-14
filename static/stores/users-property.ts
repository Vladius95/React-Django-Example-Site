import { Property } from "kefir";
import { propertyFromAPI, ExternalEmitter } from "static/core/streams";

interface IUser {
  id: number;
  name: string;
  avatar: string;
  age: number;
  instagram: string;
}

type IUserList = IUser[];

class UserStore {
  private static _instance: UserStore;
  pPlainList: Property<IUserList, void>;
  protected _pEmitter: ExternalEmitter<IUserList, void>;

  constructor() {
    if (UserStore._instance) {
      throw new Error("Error: Instantiation failed: Use SingletonClass.getInstance() instead of new");
    } else {
      UserStore._instance = this;
    }
  }

  static getInstance(): UserStore {
    if (!UserStore._instance) {
      UserStore._instance = new UserStore();
      UserStore._instance.load();
    }

    return UserStore._instance;
  }

  load() {
    [this.pPlainList, this._pEmitter] = propertyFromAPI<IUserList>("data/users.json");
    this.pPlainList = this.pPlainList.map(users =>
      users.map(u => {
        const avatar = `data/users/${u.avatar}`;
        u["avatar"] = avatar;
        return u;
      })
    );
  }

  getFilteredUserList = (users: IUserList, searchText: string): IUserList => {
    const isMatch = (name: string): boolean => name.toLocaleLowerCase().indexOf(searchText) !== -1;
    const filteredUserList = users.filter((user: IUser) => isMatch(user.name));

    return filteredUserList;
  };
}

const users = UserStore.getInstance();
const usersStore = users;
const pPlainUserList = users.pPlainList;
