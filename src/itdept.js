import React from "react";

function ItDept(props){
    return(<div>

        <table cellPadding='10' cellSpacing='0' border='1'>
        <tr><td><strong>Name</strong></td><td><strong>Post</strong></td></tr>
        {
        props.itemp.map((x)=>{
        return <tr> 
            <td>{x.name}</td>
            <td>{x.post}</td>
        </tr>
        })


        }
        

        </table>
    </div>)
}

export default ItDept