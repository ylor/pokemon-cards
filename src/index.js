import React from "react";
import ReactDOM from "react-dom";
import yall from "yall-js";

import "./scss/index.scss";

import App from "./App";

require("typeface-inter");
require("typeface-open-sans-condensed");

document.addEventListener("DOMContentLoaded", () => {
  yall({
    observeChanges: true
  });
});

ReactDOM.render(<App />, document.getElementById("root"));
