import { render } from "react-dom";
import App from "./App";
import React from "react";
import { AppProvider } from "./providers";


render(<AppProvider><App /></AppProvider>, document.getElementById("root"));
