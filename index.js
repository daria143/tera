import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Login from "./App1";
import Pass from "./App2";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Login />
    <h5>Логин</h5>
    <Pass />
    <h5>Пароль </h5>
    <App />
  </StrictMode>,
  rootElement
);
