import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./presentation/App";
import "./assets/global.scss";

const root = createRoot(document.getElementById("app"));
root.render(<App />);
