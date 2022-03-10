import React from "react";
import ReactDOM from "react-dom";

import "../styles/style.css";

import SecondsCounter from "../js/component/home.jsx";

let counter = 0;

setInterval(function () {
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.getElementById("root")
	);
	counter += 1;
}, 1000);
