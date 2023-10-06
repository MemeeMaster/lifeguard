import React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./views/Root/Root";
import ContextProvider from "./providers/ContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <ContextProvider>
      <Root />
    </ContextProvider>
  </Router>
);
