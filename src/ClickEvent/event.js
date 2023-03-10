import React from "react";

function Event(){

     function myfunc(){
        let a = 10;
        let b = 20;
        alert(a+b)
     }


     function myfunc2(c, d){
        alert(c+d)
     }

    return(<div>
        <h1>First Event Class</h1>

        <button onClick={myfunc}>On Click</button>
        <button onClick={()=>{myfunc2(60, 50)}}>On Click</button>
    </div>)
}
export default Event