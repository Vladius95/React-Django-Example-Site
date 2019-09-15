import * as React from "react";
import { RouteComponentProps } from "react-router";
import { logIn, signUp } from "static/utils/requests";
import { TextField } from "static/page/components/TextField";
import { Button } from "static/page/components/buttons/CommonButton";

import "./LoginPage.scss";
import { RouteLink } from "static/page/components/CommonLink";

export interface LoginPageProps extends RouteComponentProps {}

export const LoginPage: React.FC<LoginPageProps> = React.memo(() => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onLoginChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }, []);

  const onPasswordChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const _onSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    logIn({ username: login, password });
  }, []);
  return (
    <article className="login-page">
      <header className="login-page__header">
        <h3 className="login-page__title">Login to continue</h3>
        <p className="login-page__header-text">
          <span className="login-page__ask-text">Don't have an account yet?</span>
          <RouteLink to="/registration">
            <span className="login-page__sign-up-text">Sign up</span>
          </RouteLink>
        </p>
      </header>
      <form onSubmit={_onSubmit} className="login-page__form">
        <TextField
          key="login"
          placeholder="Enter your login"
          onChange={onLoginChange}
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          required
          extraClass="login-page__text-field"
        />
        <TextField
          key="password"
          placeholder="Enter your password"
          onChange={onPasswordChange}
          required
          extraClass="login-page__text-field"
        />
        <Button type="submit">Log in</Button>
      </form>
    </article>
  );
});

LoginPage.displayName = "LoginPage";
