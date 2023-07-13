import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MeetupProvider, useMeetup } from "./contexts/meetup-context.jsx";

export { useMeetup };

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <MeetupProvider>
        <App />
      </MeetupProvider>
    </Router>
  </React.StrictMode>
);
