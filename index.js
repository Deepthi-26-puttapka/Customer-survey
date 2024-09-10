import React from "react"
import ReactDom from "react-dom"
import App from "./App.js";

function Info() {
	
return(
<center>

<App/>



</center>

	)
}


const r=ReactDom.createRoot(document.getElementById('root'))
r.render(<Info/>)
	