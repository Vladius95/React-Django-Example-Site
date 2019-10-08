import "./Page.scss";
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

import { isAuthorizated, logIn, logout } from "static/utils/requests";
import { LoginPage } from "./fragments/LoginPage/LoginPage";
import { RegistrationPage } from "./fragments/RegistrationPage/RegistrationPage";

const rootStore = createStore(mergedReducers);

export class Page extends React.Component {
  state = {
    isStart: false
  };

  // constructor(props) {
  //   super(props);
  //   logout();
  // }

  // componentDidMount() {
  //   if (!this.state.isStart) {
  //     logIn().then(() => this.setState({ isStart: true }));
  //   }
  // }

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
    console.log(localStorage.getItem("token"), isAuthorizated() ? "/users/" : "/registration/");

    return (
      <main className="page-layout">
        <Redirect exact from="/" to={isAuthorizated() ? "/users/" : "/registration/"} />
        <Switch>
          <Route key="registration" path="/registration/" component={RegistrationPage} />
          <Route key="login" path="/login/" component={LoginPage} />
          <Route key="users" path="/users/" component={UsersPageConnect} />
          <Route key="user" path="/user/:id" component={UserPageConnect} />
          <Route key="photos" path="/photos/:uid/:pid" component={UserPhotoConnect} />
        </Switch>
      </main>
    );
  }
}
