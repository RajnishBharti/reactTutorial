import React, {useState} from 'react'
import { useEffect } from 'react';


 // get local storage value
    const getLocalData = () => {    
      const listsString = localStorage.getItem("locallist"); 
      // convert local storage string value in object
      const lists = JSON.parse(listsString);
      if (lists) {
        return lists;
      } else {
        return [];
      }
    }; 


function AddStudent() {

  let[formdata, setformdata]=useState({
   id :'',
    StudentName : '' ,
    StudentAge : '' ,
    StudentMarks : '' ,
  })
  let [alldatalist , setformatalist]=useState(getLocalData())
  let[changeBtnText, setchangeBtnText]=useState(false)
  let [editvalue, setEditvalue]= useState('')



  function inputvalue(e){
        let name = e.target.name;
        let value=  e.target.value
        setformdata((formdata)=>{
          return {...formdata,  
            id: new Date().getTime().toString(), 
            [name]:value}        
          
        })
  }


  function submitdata(){  
   



    if(formdata.StudentName.trim().length === 0){
      alert('please input Student Name')
      return false
    }
    else if(formdata.StudentAge.trim().length === 0){
      alert('please input Student Age');
      return false
    }
    else if(formdata.StudentMarks.trim().length === 0){
      alert('please input Studen Marks')
      return false
    }
    else if(alldatalist && changeBtnText){
     setformatalist(
        alldatalist.map((x)=>{

            if(x.id === editvalue.id){   
            
              return {...x,
                StudentName:formdata.StudentName,
                StudentAge:formdata.StudentAge,
                StudentMarks:formdata.StudentMarks,
                
              }
             
            } 
            setchangeBtnText(false) 
            return x       
        })
 
      )
    }
    else{
      setformatalist([...alldatalist, formdata])
    }
   
    //setformatalist([...alldatalist, formdata])

   
   setformdata({
    StudentName : '' ,
    StudentAge : '' ,
    StudentMarks : '' ,
   })
  
  }

  function edit(t){
    //console.log(t)
    let editItem= alldatalist.find((a)=>{
          return a.id ===t
    })
    //console.log(editItem)
    setformdata(editItem)
    setchangeBtnText(true)
    setEditvalue(editItem)
  }

  // deleate
   function deleate(t){
   let updateItem= alldatalist.filter((x)=>{      
        return x.id !==t
    })
    setformatalist(updateItem)
   }
  
  useEffect(()=>{
    localStorage.setItem('locallist', JSON.stringify(alldatalist) )
  },[alldatalist])
  //console.log(alldatalist)


     
  return (

    <div>
      <br /><br /><br /><br />
<hr />
        <div>
            <h1>Add Data</h1>
            <div className='form-row'>
               <input type='text' onChange={inputvalue} value={formdata.StudentName} name='StudentName' placeholder='Name'  />
               <input type='number' onChange={inputvalue} value={formdata.StudentAge}  name='StudentAge' placeholder='Age'  />
               <input type='number' onChange={inputvalue} value={formdata.StudentMarks} name='StudentMarks' placeholder='Marks'  />
               <button onClick={()=>{submitdata()}}>{changeBtnText ? 'Edit Data' :'Add Data'}</button>
            </div>
            <br/>

            <table border='1'>
                  <thead>
                    <tr>
                      <td>Id</td>
                      <th>Name</th>
                      <th>Age</th>
                      <th>Marks</th>
                      <th>Deleate</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                        {
                        alldatalist.map((data)=>{
                          return(
                            <>
                                <tr>
                                  <td>{data.id}</td>
                                  <td>{data.StudentName}</td>
                                  <td> {data.StudentAge}</td>
                                  <td> {data.StudentMarks}</td>
                                  <td> <button onClick={()=>{deleate(data.id)}}>Delete</button></td>
                                  <td> <button onClick={()=>{edit(data.id)}}>Edit</button></td>
                                </tr>
                            </>
                          )
                        })
                      }
                  </tbody>
              </table>      
                        
            </div>
    </div>
  )
}

export default AddStudent