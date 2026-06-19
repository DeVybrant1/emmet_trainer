import Navbar from '../components/Navbar'
import Card from '../components/Card'
import Footer from '../components/Footer'
import {CodeXml,FileSpreadsheet} from "lucide-react"
export default function Home(){

    const maintext=[{icon:<CodeXml />, title:"Go to practice", description:"Welcome to the Emmet trainer, where you can master emmet html shortcuts and improve your coding speed. Practice writing HTML and CSS using Emmet abbreviations to become more efficient!", linkText:"Start Practicing", link:"Main"},
        {icon:<FileSpreadsheet />, title:"Cheatsheet",description:"Quickly reference Emmet abbreviations and their corresponding HTML/CSS output with our comprehensive cheatsheet. Save time and boost your productivity by having all the essential Emmet shortcuts at your fingertips.",linkText:"View Cheatsheet",link:"Cheatsheet"}]


    return(
        <div>
            <Navbar />
            <div className='flex flex-col md:flex-row items-center justify-center'>
            {maintext.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    linkText={item.linkText}
                    link={item.link}
                    icon={item.icon}
                />
            ))}
            </div>
            <Footer />
        </div>
    )
}