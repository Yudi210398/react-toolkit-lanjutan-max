import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import data from "./data/dataIndex.js";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={data}>
    <App />
  </Provider>
);
