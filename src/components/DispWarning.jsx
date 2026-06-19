import { CircleAlert,X } from 'lucide-react';

export default function DispWarning(){

    const handleClose=()=>{
        document.getElementById("dispwarning").style.display="none"
    }

    return(
        <div id="dispwarning" className="md:hidden w-full flex items-center gap-2 p-4 bg-red-100 border border-red-600">
            <CircleAlert className="text-red-500" />
            <p>This site is works best on larger screens. &gt;768px</p>
            <X className="text-red-500 ml-auto hover:text-red-700" onClick={handleClose} />
        </div>
    )
}