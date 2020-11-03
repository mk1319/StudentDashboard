import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import styled from "styled-components/macro";
import AdmissionForm from "./Profile/AdmissionForm";
import TopHeader from "./TopHeader";
import LoginForm from "./StudentLogin/Login";
import ChangePass from "./Profile/ChangePass";
import BookmarkClass from "./Profile/Bookmark";

const Conatainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  max-height: 100vh;
  overflow-y: scroll;
  padding: 50px 7%;
  scroll-behavior: smooth;
  /* input,
  textarea {
    border: solid 1px rgba(51, 51, 51, 0.3);
    padding: 12px;
    background: white;
    color: ${(props) => props.theme.colors.lHeading};
    border-radius: 5px;
    &:focus {
      border: solid 1px rgba(51, 51, 51, 0.9);
    }
  }
  input:disabled {
    background-color: ${(props) => props.theme.colors.dParagraph};
    border: 0;
  }
  input,
  label,
  textarea {
    transition: border 0.5s ease;
  }
  label.select-label {
    border: solid 1px rgba(51, 51, 51, 0.3);
    margin-right: 36px;
    background: white;
    border-radius: 5px;
    &:focus-within {
      border: solid 1px rgba(51, 51, 51, 0.9);
    }
  }
  select {
    padding: 12px 20px;
    font-size: 16px;
    color: ${(props) => props.theme.colors.lHeading};
    border-radius: 4px;
    width: stretch;
    background: transparent;
    border: none;
    outline: none;
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
  }

  button {
    background: transparent;
    cursor: pointer;
  }
  .add-button {
    color: ${(props) => props.theme.colors.dGreen};
  }
  .delete-button {
    color: ${(props) => props.theme.colors.google};
  }
  .add-button,
  .delete-button {
    opacity: 0.6;
    transition: opacity 0.5s ease;
    &:hover {
      opacity: 1;
    }
  } */
`;

function RightPanel({ Login }) {
  const ProtectedRouter = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Login ? (
          <Component {...props} />
        ) : (
          <Redirect to={`${process.env.PUBLIC_URL}/Login`} />
          // Add below line after making teacher login
          // (window.location.href = "https://educationmandal.com/Login/Teacher")
        )
      }
    />
  );

  return (
    <Conatainer>
      {Login ? <TopHeader /> : ""}
      <Switch>
        <ProtectedRouter exact path={`${process.env.PUBLIC_URL}/`}>
          <Redirect to={`${process.env.PUBLIC_URL}/AdmissionForm`} />
        </ProtectedRouter>
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/Login`}
          component={LoginForm}
        />
        <ProtectedRouter
          exact
          path={`${process.env.PUBLIC_URL}/AdmissionForm`}
          component={AdmissionForm}
        />
        <ProtectedRouter
          exact
          path={`${process.env.PUBLIC_URL}/BookmarkClass`}
          component={BookmarkClass}
        />
        <ProtectedRouter
          exact
          path={`${process.env.PUBLIC_URL}/ChangePassword`}
          component={ChangePass}
        />
      </Switch>
    </Conatainer>
  );
}

export default RightPanel;
