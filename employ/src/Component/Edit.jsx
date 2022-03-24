import React,{useState,useEffect} from 'react';
import axios  from "axios";
import {useParams,Link} from "react-router-dom";

function Edit(){
 
 const [employ,setEmploy]=useState({
   fname:"",
    lname:"",
    email:"",
   employId:""
   
  });
  
const {id}=useParams()
//get data
useEffect(()=>{
  async function getemploy(){
    try{
      const employ = await axios.get(`https://6214b78289fad53b1f1c7b08.mockapi.io/employee/${id}`)
     console.log(employ.data ,3333)
      setEmploy(employ.data)
    }catch(error){
       console.log("error data is found")
    }
   }
  
  getemploy()
},[id])
  console.log(employ,"ee")

//handle on change
const onhandle=(e)=>{

  setEmploy({
           ...employ, [e.target.name]:e.target.value})
          
     }
//put tdata
     async function onclickbtn(){
      try{
           await axios.put(`https://6214b78289fad53b1f1c7b08.mockapi.io/employee/${id}`,employ)
          
        }catch(error){
        console.log("somthing error");
      }
    }
   
  return(
    <>
 
        <div class=" container w-50 shadow p-3 bg-warning rounded-3">
    <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">First Name</label>
    <input type="text"
      class="form-control" placeholder="Enter the first Name"  name="fname"  value={employ.fname} onChange={e=> onhandle(e)} />
    
  </div>
       <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Last Name</label>
    <input type="text" class="form-control" placeholder="Enter the Last Name" name="lname" value={employ.lname}   onChange={e=> onhandle(e)}/>
    
  </div>
       <div class="mb-3 ">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" placeholder="Enter the email" class="form-control" name="email" value={employ.email}   onChange={e=> onhandle(e)}/>
    
  </div>
   <div class="mb-3 ">
  <label for="exampleInputEmail1" class="form-label">Employ id</label>
  <input type="text" class="form-control"  value={id} disabled  />
    
  </div>
     <button type="submit" class="btn btn-primary form-control " onClick={(e)=>onclickbtn(e)} >Update</button>   
       <Link to="/">  <button class="btn btn-primary form-control mt-3 btn"><i class="fa fa-arrow-left" aria-hidden="true"> Back</i></button> </Link>
     </div>
    </>  )
}
export default Edit;