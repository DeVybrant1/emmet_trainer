import {Link} from 'react-router'

export default function Card({title, description, linkText,link, icon}){

    return(
        <div className="flex flex-col my-4 mx-3 items-center justify-center gap-4 p-6 border w-[97%] rounded-lg shadow-md">
            {icon}
            <h1 className='text-2xl font-bold font-mono'>{title}</h1>
            <p>{description}</p>
            
            <Link to={link} className="bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                {linkText}
            </Link>
        </div>
    )
}