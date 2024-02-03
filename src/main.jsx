import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Store from "./Redux/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
