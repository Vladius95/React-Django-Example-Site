import React from "react";
// BrowserRouter - синхронизация ui и адреса
import { Redirect, Route, Switch, HashRouter, RouteProps } from "react-router-dom";

import { Header } from "./fragments/Header/Header";
import { Footer } from "./fragments/Footer/Footer";
import { UserPageConnect } from "./fragments/UserPage/UserPage";
import { UsersPageConnect } from "./fragments/UsersPage/UsersPage";
import { Provider } from "react-redux";
import { mergedReducers } from "static/stores/root";
import { createStore } from "redux";

import "./Page.scss";
import { UserPhotoConnect } from "./fragments/UserPhotoPage/UserPhotoPage";

const rootStore = createStore(mergedReducers);

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
    return (
      <main className="page-layout">
        <Switch>
          <Redirect exact from="/" to="/users" />
          <Route key="users" path="/users/" component={UsersPageConnect} />
          <Route path="/user/:id" component={UserPageConnect} />
          <Route path="/photos/:uid/:pid" component={UserPhotoConnect} />
        </Switch>
      </main>
    );
  }
}
