//setting up a boilerplate
//1. setting up basic React code from scratch
//2.create a functional component named MyInfo that returns:
//a. H1 with name
//b. paragraph with little something about you
//c. list of top 3 vacation spots
//3.render an instance

import React from "react";
import ReactDom from "react-dom";
import App from "./Components/App";

ReactDom.render(<App />, document.getElementById("root"));
