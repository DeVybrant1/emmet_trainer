import Userin from "./Userin";
import Userout from "./Userout";
import Question from "./Question";
import { useState } from "react";

export default function MainInt(){
    const [output,setOutput]=useState("")
    const [myOut,setMyOut]=useState("")
    
    return(
        <div className="grid grid-cols-2">
            <Question output={output} setMyOut={setMyOut} myOut={myOut}/>
            <Userout output={output}/>
            <div className="col-span-2">
            <Userin setOutput={setOutput} myOut={myOut}/>
            </div>
            
         
        </div>
    )
}