import expand from 'emmet';
import { useState,useEffect } from 'react';
import { html as beautifyHtml } from "js-beautify";

function Question({output,setMyOut,myOut}){
    const [out,setOut]=useState("li/>E>G>a*5")

useEffect(()=>{
 let result=""

    try{
        result=expand(out)
        
    }catch{
        result="Invalid Question"
    }
    setMyOut(result)
},[out,setMyOut])
   


return(
<div className="h-[60vh] border"><h1 >Level 1: Recreate the html</h1>
<p className=" mb whitespace-pre-wrap font-mono">{myOut}</p ></div>)
}
export default Question;