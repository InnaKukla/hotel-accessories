import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router";
import { store, persistor } from "./redux/store";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StrictMode>
        <HashRouter>
          <App />
        </HashRouter>
      </StrictMode>
    </PersistGate>
  </Provider>
);
