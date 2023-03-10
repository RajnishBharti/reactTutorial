import React, {useState, useEffect} from 'react'

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


function Table() {
  //use state for create object
  let [std, setStd]= useState({
    id:'',
    stdName :'',
    stdAge:'',
    stdMarks:''
  })
  let [stdList, setstdList]=useState(getLocalData())
  //let [stdList, setstdList]=useState([])
  let [onOffswitch, setOnOffswitch] =useState(false)
  let [editValue, setEditValue]=useState('')



  //read input value 
  let inpvalue = (e)=>{
    let name = e.target.name;//yah input field ka name hai jise object ke property(key) ke roop men use kiya jaayegaa
    let value = e.target.value;  
    setStd({
              ...std, 
              id :new Date().getTime().toString(),
              [name]:value
          })
  }
  function submit(){
      console.log(stdList);
      console.log(editValue.id)


        if(std.stdName.trim().length===0){
            alert('Please Input Student Name')
            return false;
        }
        else if(std.stdAge.trim().length===0){
            alert('Please Input Student Age')
            return false;
        }
        else if(std.stdMarks.trim().length===0){
          alert('Please Input Student Marks')
          return false;
        }
        else if(stdList && editValue){
          //alert('hello')
          setstdList(
            stdList.map((x)=>{
              if(x.id === editValue.id){ 
                setOnOffswitch(false)               
                return {...x, 
                  stdName :std.stdName,
                  stdAge:std.stdAge,
                  stdMarks:std.stdMarks
                }
              } 
                       
              return x;
              
            })
          )

        }
        else{
          setstdList([...stdList, std]);
        }
        setStd({
          stdName :'',
          stdAge:'',
          stdMarks:''
        }) 
    }

  //delete liste
  function deletes(d){
   let upDate = stdList.filter((x)=>{
      return x.id !==d
    })
    setstdList(upDate)
  }


  //Edit (find edit data )
  function edits(e){
    let curEdtData= stdList.find((cur)=>{
          return cur.stdName ===e
    })
    setStd(curEdtData);   
    setEditValue(curEdtData)
    setOnOffswitch(true)
   
  }

    useEffect(()=>{
      localStorage.setItem('locallist', JSON.stringify(stdList))
    },[stdList])


  return (
      <>
          <h1>Add Table</h1>
          <div className='form-row'>
             <input type='text' onChange={inpvalue} value={std.stdName} name='stdName' placeholder='Name'  />
             <input type='number' onChange={inpvalue} value={std.stdAge} name='stdAge' placeholder='Age'  />
             <input type='number' onChange={inpvalue} value={std.stdMarks} name='stdMarks' placeholder='Marks'  />
             <button onClick={()=>{submit()}}>{onOffswitch ? 'Edit Data' : 'Add Data'}</button>
          </div>
          <br/><br/>
          <table border='1' cellPadding={10} cellSpacing='0'>
                <thead>
                  <tr><td>Id</td><th>Name</th><th>Age</th><th>Marks</th><th>Delete</th><th>Edit</th></tr></thead>
                <tbody>
                  {
                    stdList.map((data)=>{
                      return(
                      <>
                        <tr><td>{data.id}</td><td>{data.stdName}</td>
                          <td>{data.stdAge}</td><td>{data.stdMarks}</td>
                          <td> <button onClick={()=>{deletes(data.id)}}>Delete</button></td>
                          <td> <button  onClick={()=>{edits(data.stdName)}}>Edit</button></td>
                        </tr>
                      </>
                      )
                    })
                  }                    
                </tbody>
            </table>
  </>
  )
}
export default Table