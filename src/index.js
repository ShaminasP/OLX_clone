import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { FirebaseContext } from "./Store/FirebaseContext";
import  Context  from "./Store/FirebaseContext";
import {app} from "./Firebase/Config";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContext.Provider value={{ app }}>
        <Context>
        <App />
        </Context>
      </FirebaseContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// ReactDOM.render(
//   <FirebaseContext.Provider value={{ app }}>
//     <App />
//   </FirebaseContext.Provider>,
//   document.getElementById("root")
// );
