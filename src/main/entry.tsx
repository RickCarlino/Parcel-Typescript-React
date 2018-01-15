import * as React from "react";
import { render } from "react-dom";
import { Widget } from "./widget";

import "../common";

const el = document.querySelector("#app");
if (el) {
  render(<Widget />, el);
} else {
  document.write("You forgot to add a div to the page with an ID of 'app'.");
}
