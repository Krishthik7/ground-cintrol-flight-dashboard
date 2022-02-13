import { hot } from "react-hot-loader/root";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import MainConsole from "./Spacex/MainConsole";
//Directs the main landing page to the MainConsole page
const App = () => (
  <>
    <MainConsole />
  </>
);

export default hot(App);
