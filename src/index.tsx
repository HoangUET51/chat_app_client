import ReactDOM from "react-dom/client";
import App from "./app";
import "@core/styles/global.scss";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";
import store from "@app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
