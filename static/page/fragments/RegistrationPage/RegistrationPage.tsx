import "./RegistrationPage.scss";
import * as React from "react";
import { RouteComponentProps, Redirect } from "react-router";
import { signUp } from "static/utils/requests";
import { TextField } from "static/page/components/TextField";
import { Button } from "static/page/components/buttons/CommonButton";

import { RouteLink } from "static/page/components/CommonLink";
import { AvatarSelection } from "./AvatarSelection/AvatarSelection";

export interface RegistrationPageProps extends RouteComponentProps {}

export const RegistrationPage: React.FC<RegistrationPageProps> = React.memo(() => {
  const [email, setEmail] = React.useState("");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isRedirectActive, setRedirectActive] = React.useState<boolean>(false);

  const onEmailChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const onLoginChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }, []);

  const onPasswordChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);

  const _onSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      signUp({ email, login, password }).then(() => setRedirectActive(true));
    },
    [email, login, password]
  );

  if (isRedirectActive) {
    return <Redirect to="/users/" />;
  }

  return (
    <article className="registration-page">
      <header className="registration-page__header">
        <h3 className="registration-page__title">Sign up to continue</h3>
        <p className="registration-page__header-text">
          <span className="registration-page__ask-text">Already have an account?</span>
          <RouteLink to="/login">
            <span className="registration-page__sign-up-text">Log in</span>
          </RouteLink>
        </p>
      </header>
      <form onSubmit={_onSubmit} className="registration-page__form">
        <AvatarSelection extraClass="registration-page__avatar" />

        <TextField
          key="email"
          placeholder="Enter your email"
          onChange={onEmailChange}
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          required
          extraClass="registration-page__text-field"
        />
        <TextField
          key="login"
          placeholder="Enter your login"
          onChange={onLoginChange}
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          required
          extraClass="registration-page__text-field"
        />
        <TextField
          key="password"
          placeholder="Enter your password"
          onChange={onPasswordChange}
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
          required
          extraClass="registration-page__text-field"
        />
        <Button type="submit">Sign up</Button>
      </form>
    </article>
  );
});

RegistrationPage.displayName = "RegistrationPage";
