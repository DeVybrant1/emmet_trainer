import { useState } from "react";

function Subbar(){
const [lnum,setlnum]=useState(0)

const handleLessonInc=()=>{
    
    if(lnum<5){setlnum(prev=>prev+1)}

}
const handleLessonDec=()=>{
    if(lnum>0){setlnum(prev=>prev-1)}
    
}

return(
    <div className="bg-blue-200">
        <ul className="flex flex-row justify-between">
            <li  ><button onClick={handleLessonDec} className="w-10 h-10 text-2xl font-bold rounded-full border bg-blue-500">&lt;</button></li>
            <li>Lesson {lnum}</li>
            <li><button className="w-10 h-10 text-2xl font-bold rounded-full border bg-blue-500" onClick={handleLessonInc}>&gt;</button></li>
        </ul>
    </div>
)
}

export default Subbar;