import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ResponsiveProvider, ThemeProvider } from "app-studio";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import { theme } from "./configs/colorConfig";

import "./index.module.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {" "}
    <Provider store={store}>
      <ResponsiveProvider
        breakpoints={{
          xs: 0,
          sm: 340,
          md: 560,
          lg: 1080,
          xl: 1300,
        }}
        devices={{
          mobile: ["xs", "sm"],
          tablet: ["md", "lg"],
          desktop: ["lg", "xl"],
        }}
      >
        <ThemeProvider {...theme}>
          <App />
        </ThemeProvider>
      </ResponsiveProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
