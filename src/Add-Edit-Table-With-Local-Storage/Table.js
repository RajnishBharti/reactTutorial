import React,{useState, useEffect} from 'react'


let getLocalData = ()=>{
    let localData = localStorage.getItem('localTable');
    let dataloacal = JSON.parse(localData)
    if(dataloacal){
        return dataloacal
    }
    else{
        return []
    }
}


function Table() {
    let[std, setStd]=useState({})
    let[stdList, setStdList]=useState(getLocalData())
    let[btnValue, setBtnValue]=useState('Add Data')
    let [editValue, setEditvalue]= useState('')


    let inputValue =(e)=>{
        let namekey = e.target.name;
        let valuekey = e.target.value;
        setStd({...std, 
            id : new Date().getTime().toString(),
            [namekey] :valuekey})
    }

    let addData =()=>{
        if(stdList && editValue){
            setStdList(
                stdList.map((x)=>{
                    if(x.id === editValue.id){
                        setBtnValue('Add Data')
                        return{
                            ...x, 
                            stdName : std.stdName,
                            stdMarks : std.stdMarks,
                            stdGrads :std.stdGrads
                        }
                    }
                    return x
                })
            )
        }
        else{
            setStdList([...stdList, std])
        }
        
        
        setStd({
            stdName: '', 
            stdMarks : '',
            stdGrads : ''
        })
    }


    // Deleate Data
     let deleteData =(d)=>{
        let updateData = stdList.filter((x)=>{
            return x.id !==d
        })
        setStdList(updateData)
     }

     // read edit data and set data in input field
     let  editData = (e)=>{
        let editData = stdList.find((x)=>{
            return x.id ===e
        })
        setStd(editData)
        setBtnValue('Edit Data')
        setEditvalue(editData)

     
     }

   

    useEffect(()=>{ 
        // set local  storage
        localStorage.setItem('localTable', JSON.stringify(stdList) )
    },[stdList])






  return (
    <div>
        <h1>Add Table</h1>
          <div className='form-row'>
             <input onChange={inputValue} value={std.stdName}  type='text' name='stdName' placeholder='Name'  />
             <input onChange={inputValue} value={std.stdMarks}   type='number' name='stdMarks' placeholder='Marks'  />
             <input onChange={inputValue} value={std.stdGrads}   type='text' name='stdGrads' placeholder='Grads'  />
             <button onClick={()=>{addData()}}>{btnValue}</button>
          </div>
          <br/><br/>
          <table border='1' cellPadding={10} cellSpacing='0'>
                <thead>
                  <tr>
                    <td>Id</td>
                    <th>Name</th>
                    <th>Marks</th>
                    <th>Grade</th> 
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                 <tbody>

                    {
                        stdList.map((data)=>{
                            return <>

                        <tr>
                        <td>{data.id}</td>
                        <td>{data.stdName}</td>
                        <td>{data.stdMarks}</td>
                        <td>{data.stdGrads}</td>
                        <td> <button onClick={()=>{editData(data.id)}}>Edit</button></td>
                        <td> <button onClick={()=>{deleteData(data.id)}}>Delete</button></td>
                        </tr>
                            </>
                        })
                    }
          
                        
                                     
                </tbody> 
            </table>

        
    </div>
  )
}

export default Table