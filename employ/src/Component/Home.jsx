import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'
function Home() {
   const [employ, setEmploy] = useState([]);
 const [search, setSearch] = useState("");
  
 

   useEffect(()=>{
  async function getemploy(){
    try{
      const employ = await axios.get(`https://6214b78289fad53b1f1c7b08.mockapi.io/employee`)
     console.log(employ.data ,3333)
      setEmploy(employ.data)
    }catch(error){
     document.write("error data is not found")
    }
   }
  
  getemploy()
},[])


  // delet 
  async function deletemploy(id){
            await axios.delete(`https://6214b78289fad53b1f1c7b08.mockapi.io/employee/${id}`);
      var newemploy=employ.filter((item)=>{
        // console.log(item)
        return item.id!==id;
       
      })
       setEmploy(newemploy)
      
      }
 console.log(employ,"emplou")
  //search box
   
  return (
  <div >
    <div className=" container w-50">
    
    <div className='text-center'>
   <h1> Employee Details </h1> </div>
    <div className="d-flex border-bottom">  <input class="form-control border-0" type="search "  placeholder="Search"  onChange={(e)=>{setSearch(e  .target.value)}} aria-label="Search"/>
   
 

        <button class="btn btn-outline-primary" ><i class="fa fa-search" aria-hidden="true"></i></button>
   <Link to="/add"> <button class="btn btn-outline-success btn-sm  ">Add Employee</button></Link>
    </div>
      
       </div>
   
    <div className="container">
      
       <hr/>
    <table class="table" id="myTable">
  <thead className="table-dark">
    <tr>
    
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
        <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
            employ.filter((val) =>{
              if(search == ""){
                return val
              }else if(val.fname.toLowerCase().includes(search.toLowerCase()) || val.lname.toLowerCase().includes(search.toLowerCase())){
                return val
              }
            }).map((ele, i) => {
              return <tr key={i}>
                
                <td>{ele.fname}</td>
                <td>{ele.lname}</td>
                <td>{ele.email}</td>
                <td>
                  <Link className='btn btn-primary btn -sm' to={`edit/${ele.id}`}>Edit</Link>
                  <button className='btn btn-danger btn-sm'onClick={() => deletemploy(ele.id)}>Delete</button>
                </td>
                
              </tr>
            })
          }
    
    
    
    
    
    
   
  </tbody>
</table></div>
  </div>
  
  );
}

export default Home;