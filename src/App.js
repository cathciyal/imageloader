import './App.css';
import React from "react";
import {useState} from "react";



function App1() {
  
 
  const [url1, seturl1] = React.useState('');
  const [url2, seturl2] = React.useState('');
  const [url3, seturl3] = React.useState('');
  
  const [list,setList]=useState([])

  
 
  const [show,setShow]=React.useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    const date={url1,url2,url3}
    if(url1&&url2&&url3){
      setShow(true)
      list.push(url1)
      list.push(url2)
      list.push(url3)
     // setList((ls)=>[...ls,date])
      seturl1("")
      seturl2("")
      seturl3("")
      
      
      
      
    }

  }

 
       
  return (
    <div >
      <h2 style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold',}}>Image Loader</h2>
    <form onSubmit={handleSubmit}>
    <label>Image URL 1</label><br/>
    <input name="URL1" value={url1} onChange={(e)=>seturl1(e.target.value)}
   
     placeholder='Enter the Image URL 1'/><br/>
    <label>Image URL 2</label><br/>
    <input name="URL2" value={url2} onChange={(e)=>seturl2(e.target.value)}
   
     placeholder='Enter the Image URL 2' /><br/>
    <label>Image URL 3</label><br/>
    <input name="URL3" value={url3} onChange={(e)=>seturl3(e.target.value)}
  
    placeholder='Enter the Image URL 3' />
    <input type="submit" value={"Create"} className="submitButton" />
     
  </form>
   {
       <div style={{textAlign:"center"}}>
        
      {show?<h2 style={{textAlignVertical: "center",textAlign: "center",fontWeight: 'bold',}}>Image List</h2>:null}
      {show?<img style={{height:"200px",width:"250px",padding:"6px",borderRadius:"12px"}}
  src={list[0]}/>:null} 
  {show?<img style={{height:"200px",width:"250px",padding:"6px",borderRadius:"12px"}}
  src={list[1]}/>:null}
  {show? <img style={{height:"200px",width:"250px",padding:"6px",borderRadius:"12px"}}
  src={list[2]}/>:null}
 

  </div>}
  
  </div>
  );
      
    }

export default App1;
