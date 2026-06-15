

import expand from 'emmet';
import { useState,useEffect } from 'react';
import { html as beautifyHtml } from "js-beautify";
import Userout from './Userout';

function Userin({setOutput,myOut}){

    const [entry,setEntry]=useState("")

    const handleEntry=(e)=>{
        const newEnt=e.target.value;
        setEntry(newEnt)
    }
useEffect(()=>{     
let output = ""

  try {
    output = entry ? beautifyHtml(expand(entry)) : ""
  } catch (err) {
    output = "Invalid Emmet"
  }

  setOutput(output)},[entry,setOutput])
 
    return(
     
        <div className="border">
        
        <label htmlFor="emmetin" >Enter Emmet</label><br/>
        <textarea onChange={handleEntry} rows={5}
  className="w-full font-mono border p-2"/>
        <button className='absolute bottom-12 right-3 py-0.5 px-1.5 border'>Submit</button>
        </div>
        
     
       
    )
}

export default Userin;