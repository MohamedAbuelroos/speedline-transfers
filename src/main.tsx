import React from "react";
import ReactDOM from "react-dom/client";
import RootProvider from "./providers/RootProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RootProvider />
  </React.StrictMode>
);