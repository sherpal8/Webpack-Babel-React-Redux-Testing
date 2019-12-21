import React from "react";
import { render } from "react-dom";

function Hi() {
  return <p>Hey</p>;
}

render(<Hi />, document.getElementById("app"));
