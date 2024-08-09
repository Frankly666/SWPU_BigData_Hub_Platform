import React, { Suspense } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "normalize.css";
import "./assets/style/index.less";

import { HashRouter } from "react-router-dom";
import store from "./store";
import Loading from "./components/loading";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <App />
        </Provider>
      </Suspense>
    </HashRouter>
  </React.StrictMode>
);

reportWebVitals();
