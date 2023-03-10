import React, {useState, useEffect} from 'react'


// get the localStorage data back
const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
  
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  }; 

function TodoList() {
    
    const [inputdata, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEditItem, setIsEditItem] = useState("");
    const [toggleButton, setToggleButton] = useState(false);



    function addItem(){ 
        if(!inputdata){
          alert("plz fill the data");
        } 
        else if(inputdata && toggleButton){
         
            setItems(
                items.map((x)=>{
                  console.log(x.id)
                    if(x.id===isEditItem){
                        return{...x, name:inputdata}
                        
                    }
                   return x
                })   
            )
                setInputData("");
                setIsEditItem(null);
                setToggleButton(false);

            


        } else {
            let olddata={          
                id : new Date().getTime().toString(),
                name :inputdata
            }
            setInputData('')
            setItems([...items, olddata]);
            setInputData("");
        }
      };



   function EditData(a){
    let edtData = items.find((b)=>{
        return b.id === a
    })

    //console.log(edtData.Name)
    setToggleButton(true)
    setInputData(edtData.name)
    setIsEditItem(a)

    // console.log(edtname.Name)
   }





    function DeleteData(a){
        // alert(a)
        // console.log(addname)
      let updatedata =  items.filter((b)=>{
            return b.id !== a
      })
      setItems(updatedata)
    }

    //set Local storage
 useEffect(()=>{
    localStorage.setItem('mytodolist', JSON.stringify(items))
 },[items])
  return (
    <div>
        
<div className='row'>     
    {/* <input type="text" onChange={getValue} value={edtname.Name} placeholder="Input Name" />  */}
    <input type="text" onChange={(e)=>(setInputData(e.target.value))} value={inputdata} placeholder="Input Name" />
    <button onClick={()=>{addItem()}}> {toggleButton? 'Update Data' : 'Add Data' }</button>                   
</div>
       <br /><br />

        <table cellPadding={10} cellSpacing={0} border="1">
                <tr>
                    <td>Id</td>
                    <td><strong>Name</strong></td>
                    <td><strong>Edit</strong></td>
                    <td><strong>Delete</strong></td>
                </tr>

{

items.map((x)=>{

 return(
<>

<tr>                
                <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td><button onClick={()=>{EditData(x.id)}}>Edit</button></td>
                    <td><button  onClick={()=>{DeleteData(x.id)}}>Delete</button></td>
                </tr>
</>

 )
})
}

             

            </table>
        
        </div>
  )
}

export default TodoList