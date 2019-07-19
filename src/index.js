import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import RestyProvider from "./context/restyContext";

import App from "./app.js";

class Main extends React.Component {
  render() {
    return (
      //wrap provider around everything below
      <BrowserRouter>
        <RestyProvider>
          <App />
        </RestyProvider>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
