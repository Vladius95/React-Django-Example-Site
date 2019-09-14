import React from "react";
// BrowserRouter - синхронизация ui и адреса
import { Redirect, Route, Switch, HashRouter, RouteProps } from "react-router-dom";

import { Header } from "./fragments/Header/Header";
import { Footer } from "./fragments/Footer/Footer";
import { UserPageConnect } from "./fragments/UserPage/UserPage";
import { UsersPageConnect } from "./fragments/UsersPage/UsersPage";
import { UserPhotoConnect } from "./fragments/UserPhotoPage/UserPhotoPage";

import { Provider } from "react-redux";
import { mergedReducers } from "static/stores/root";
import { createStore } from "redux";

import "./Page.scss";

const rootStore = createStore(mergedReducers);

const Login = () => <section className="login">Come in, please</section>;

export class Page extends React.Component {
  render() {
    return (
      <Provider store={rootStore}>
        <HashRouter>
          <div className="page">
            <Header />
            {this.renderLayout()}
            <Footer />
          </div>
        </HashRouter>
      </Provider>
    );
  }

  renderLayout() {
    console.log(localStorage.getItem("token"));
    return (
      <main className="page-layout">
        <Switch>
          <Redirect exact from="/" to="/login/" />
          <Route key="login" path="/login/" component={Login} />
          <Route key="users" path="/users/" component={UsersPageConnect} />
          <Route key="user" path="/user/:id" component={UserPageConnect} />
          <Route key="photos" path="/photos/:uid/:pid" component={UserPhotoConnect} />
        </Switch>
      </main>
    );
  }
}
