import React, {useState} from "react";

function ChangeEvent(){
let [newValue, updatefunc]= useState()
function inputHandlert(event){
	updatefunc(event.target.value)
	console.log(event.target.value)
}
return(
	<div>
		<h1>Change Event and Read Input Value</h1>
		<input onChange={inputHandlert} type="text" value={newValue} placeholder="Name" />

	</div>
	
)
}
export default ChangeEvent