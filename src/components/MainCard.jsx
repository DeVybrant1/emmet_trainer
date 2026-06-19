import {Link} from 'react-router'

export default function MainCard(){

    return(
        <div className="flex flex-col my-4 items-center justify-center gap-4 p-8 border w-[97%] rounded-lg shadow-md">
            <h1 className='text-2xl font-bold font-mono'>Go to practice</h1>
            <p>Welcome to the Emmet trainer, where you can master emmet html shortcuts and improve your coding speed. Practice writing HTML and CSS using Emmet abbreviations to become more efficient!</p>
            
            <Link to="Main" className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                Start Practicing
            </Link>
        </div>
    )
}