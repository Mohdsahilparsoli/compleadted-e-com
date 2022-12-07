import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Appprovider } from "./Contextapi/Appprovider";
import { Filter } from "./Contextapi/Filter";
import { Auth0Provider } from "@auth0/auth0-react";
import { Cartcontext } from "./Contextapi/Cartcontext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appprovider>
      <Filter>
        <Auth0Provider
          domain="sahilecom.us.auth0.com"
          clientId="JXekJ2MtxukIEFeJhjcZbTAnoHfO10Ef"
          redirectUri={window.location.origin}
        >
          <Cartcontext>
          <App />
          </Cartcontext>          
        </Auth0Provider>
      </Filter>
    </Appprovider>
  </React.StrictMode>
);
