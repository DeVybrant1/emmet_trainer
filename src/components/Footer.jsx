import git_logo from '../assets/github-svg.svg'


export default function Footer(){

    return(
        <div className="flex items-center flex-row justify-center p-4 bg-gray-800 text-white fixed bottom-0 w-full">
            <p>2026 Emmet Trainer. No rights reserved, yet. 😊 </p>
            <a href="https://github.com/emmett-trainer" target="_blank" rel="noopener noreferrer">
                <img src={git_logo} className="h-6 w-6 ml-6" alt="Github Link" />
            </a>
        </div>
    )
}