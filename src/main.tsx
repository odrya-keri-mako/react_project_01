import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";

console.log("Application started...");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
