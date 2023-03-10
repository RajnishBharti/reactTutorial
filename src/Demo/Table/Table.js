import React, {useState} from 'react';



function Table() {

  let [std, setStd]= useState({})
  let [stdList, setStdList]= useState([])

  let inputValue = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setStd({...std,
        id : new Date().getTime().toString(),
        [name] : value
    }) 
  }

  let submit = ()=>{
      setStdList([...stdList, std])
      setStd({
        stdName  : '',
        stdMarks : '',
        stdGrads : ''
      })
  }

  return (
      <>
          <h1>Add Table</h1>
          <div className='form-row'>
             <input type='text' name='stdName' placeholder='Name'  />
             <input type='number' name='stdMarks' placeholder='Marks'  />
             <input type='text' name='stdGrads' placeholder='Grads'  />
             <button onClick={()=>{submit()}}>Add</button>
          </div>
          <br/><br/>
          <table border='1' cellPadding={10} cellSpacing='0'>
                <thead>
                  <tr>
                    <td>Id</td>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Grade</th>
                    
                    <th>Delete</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                 <tbody>
          
                        <tr><td>1234</td>
                        <td>Ranesh </td>
                        <td>45</td>
                        <td>{data.stdGrads}</td>
                        <td> <button>Delete</button></td>
                        <td> <button>Edit</button></td>
                        </tr>
                                     
                </tbody> 
            </table>
  </>
  )
}
export default Table