import React, {useState}  from "react";

function State(){

    let mydata =  "Teach Coders"

     let [newData, updatefunc] =   useState(mydata) // use state call and pass old value

    function myfunc(){
        mydata = "Hello Teach Coders"

        updatefunc(mydata)

        alert(mydata)
    }

    return(<div>

            <h1>{newData}</h1>


            <button onClick={myfunc}>Click Me</button>
    </div>)
}

export default State