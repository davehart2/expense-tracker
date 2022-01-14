import React from "react";
import reactDom from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "./context/context";

reactDom.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
