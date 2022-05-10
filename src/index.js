import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const WidgetDivs = document.querySelectorAll(".reddit_widget");

WidgetDivs.forEach((Div) => {
  ReactDOM.render(
    <React.StrictMode>
      <App domElement={Div} />
    </React.StrictMode>,
    Div
  );
});
