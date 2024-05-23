import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { MyProvider } from "./components/GlobalVariableProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <MyProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </MyProvider>
);
