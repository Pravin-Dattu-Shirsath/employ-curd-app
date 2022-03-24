import React,{useState} from "react"
import {useForm} from "react-hook-form";
import axios from 'axios'
import { Link } from "react-router-dom";
import Home from '../Component/Home'
function Add(){
    
      const{register,handleSubmit,formState:{errors}}=useForm()
     console.log(register)
async function submit (submission,e){
          
  try {
            
                  await axios.post('https://6214b78289fad53b1f1c7b08.mockapi.io/employee',submission);
             
                 
          e.target.reset();

                } catch (error) {
                  console.error(error);
                }
         
      
        
      }
     
    
  return(
    <>
     <div className="container w-50 p-5 border shadow bg-secondary p-2 text-dark bg-opacity-25 ">
     <form  onSubmit={handleSubmit(submit)}>
   <div>
    <label htmlFor="fname">First Name</label>
    <input class="form-control mb-2" type="text" placeholder="first Name" {...register("fname", {required: true,maxLength: 15,pattern: /^[A-Za-z]+$/i})} />
      {errors?.fname?.type === "required" && <span className="text-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>This field is required</span>}
      {errors?.fname?.type === "maxLength" && (
        <span>First Name less than 15 characters</span>
      )}
   </div> 
       <div>
       <label htmlFor="lname" className="mt-3">Last Name</label>
    <input class="form-control  mb-2" type="text" placeholder="Last Name" {...register("lname", {required: true,maxLength: 15,pattern: /^[A-Za-z]+$/i})} />
      {errors?.lname?.type === "required" && <span className="text-danger"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>This field is required</span>}
      {errors?.lname?.type === "maxLength" && (
        <span>Last Name less than 15 characters</span>
      )}
       </div>
        <div>
       
       <label htmlFor="email" className="mt-3">E-mail id</label>
    <input class="form-control  mb-2" type="email" placeholder="Enter the email" {...register("email", {required: true})} />
      {errors?.email?.type === "required" && <span className="text-danger"> <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>This field is required</span>}
        </div>
     
   
    <input className="btn btn-secondary mt-3" type="submit" value="Submit"/>
      
  </form>
       <Link to="/">  <button class="btn bg-secondary p-2 text-white bg-opacity-75   mt-3 btn "><i class="fa fa-arrow-left" aria-hidden="true"></i> </button> </Link>
     </div>
    </>
  )
}
export default Add;