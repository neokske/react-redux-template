import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import rootReducer from "./rootReducer";
import welcome from "./packages/welcome";

import "./styles.css";

const store = configureStore(rootReducer, []);

const App: React.FC = () => (
  <Provider store={store}>
    <div>
      <span>template app with react redux config</span>
      <welcome.containers.WelcomeContainer />
    </div>
  </Provider>
);

const rootElement = document.getElementById("root");
render(<App />, rootElement);
