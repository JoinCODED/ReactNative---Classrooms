import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";

// Stores
import * as actionCreators from "./Store/actions/authActions";
import { connect } from "react-redux";

import AppContainer from "./Navigation";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
