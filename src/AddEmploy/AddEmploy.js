import React, { useState } from "react";

function AddEmploy() {
    let[newEmploy, setEmploy]= useState([]);


    let [name, setname] = useState('');
    let [salary, setsalary] = useState('')

    let nameHandler = (e) => {
        setname(e.target.value)
        //console.log(e.target.value)
    }

    let salaryHandler = (e) => {
        setsalary(e.target.value)
        // console.log(e.target.value)
    }

    function Addemploy(event) {
        event.preventDefault()

        let oldEmploy = {
            empName: name,
            empSalary: salary
        }

        setEmploy([...newEmploy, oldEmploy])
        //console.log(oldEmploy)
        setname('')
        setsalary('')


    }
console.log(newEmploy)

    return (<div>
        <h1>Add Employ Data</h1>
        <form onSubmit={Addemploy}>
            <input type="text" value={name} onChange={nameHandler} placeholder="Employ Name" /><br /><br />

            <input type="text" value={salary} onChange={salaryHandler} placeholder="Employ Salary" /><br /><br />
            <button>Submit</button>
        </form>

       <br /> <br />

       <table celpadding="10" border="1">
            <tr>
                <th>Name</th>
                <th>Salary</th>
            </tr>

            {
                newEmploy.map((x)=>{

                    return(

                        <tr>
                        <td>{x.empName}</td>
                        <td>{x.empSalary}</td>
                    </tr>
                    )

                })

            }
          
        </table>


    </div>)
}

export default AddEmploy