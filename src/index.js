import React from "react";
import ReactDOM from "react-dom";
import App from "./App";  // Import your App component
import "./index.css";  // Optional: Import global styles (create index.css if you don't have it)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // This will attach your app to the div with id="root" in index.html
);
