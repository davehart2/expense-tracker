import React from "react";
import reactDom from "react-dom";
import { SpeechProvider } from "@speechly/react-client";
import App from "./App";
import "./index.css";
import { Provider } from "./context/context";

reactDom.render(
  <SpeechProvider appId="71a71d08-f093-4b1e-b166-fb3f40d3978e" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById("root")
);
