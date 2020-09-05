import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home";
import store from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        {
          <Switch>
            <Route path="/" exact render={() => <HomePage />} />
          </Switch>
        }
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
