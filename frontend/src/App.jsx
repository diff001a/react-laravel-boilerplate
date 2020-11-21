import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import { Provider } from "contexts/contexts";

// components //
import Home from "components/pages/Home";
import Single from "components/pages/Single";
import { GlobalStyle } from "@diff001a/react-ui-components";

const Layout = styled.div`
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  nav {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    top: 0;
    left: calc((100vw - 950px) / 2);
    padding: 20px;
    a {
      padding: 5px;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
      &.active {
        color: var(--primary);
        text-decoration: underline;
      }
    }
  }
`;

const App = () => {
  return (
    <Layout className="wrapper">
      <Router>
        <Provider>
          <nav>
            <NavLink exact to="/">
              TODO
            </NavLink>
            <NavLink to="/single">COMPONENTS</NavLink>
          </nav>
          <Switch>
            <Home exact path="/" />
            <Single path="/single" />
          </Switch>
        </Provider>
      </Router>
      <GlobalStyle />
    </Layout>
  );
};

export default App;
