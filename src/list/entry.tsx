import * as React from "react";
import { render } from "react-dom";

const el = document.querySelector("#app");
if (el) {
  render(<div>Hello, from React! TODO: This.</div>, el);
} else {
  document.write("You forgot to add a div to the page with an ID of 'app'.");
}
