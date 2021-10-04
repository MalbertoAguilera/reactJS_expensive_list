import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Container from "./elements/Container";
import EditExpensive from "./components/EditExpensive";
import ExpensiveByCategory from "./components/ExpensiveByCategory";
import ExpensiveList from "./components/ExpensiveList";
import LogIn from "./components/LogIn";
import SignIn from "./components/SignIn";

WebFont.load({
  google: {
    //Work+Sans:wght@400;500;700
    families: ["Work+Sans: 400, 500, 700", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Container>
        <Switch>
          <Route path="/log-in" component={LogIn} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/categories" component={ExpensiveByCategory} />
          <Route path="/list" component={ExpensiveList} />
          <Route path="/edit/:id" component={EditExpensive} />
          <Route path="/" component={App} />
        </Switch>
      </Container>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
