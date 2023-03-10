import React from "react";
import ItDept from "./itdept";
function Office (){
    let Employ = [
        {name : 'Harshika', post : 'Hr'},
        {name : 'Gaurav', post : 'Manager'},
        {name : 'Ram', post : 'Developer'},
        {name : 'Shyam', post : 'Designer'},
        {name : 'Nayan', post : 'FullStack Developer'},
        ]

    return(<div>

        <ItDept itemp= {Employ} />
            
    </div>)
}

export default Office