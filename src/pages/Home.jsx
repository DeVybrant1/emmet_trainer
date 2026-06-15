import Navbar from '../components/Navbar'
import MainCard from '../components/MainCard'
import Footer from '../components/Footer'
export default function Home(){



    return(
        <div>
            <Navbar />
            <div className='flex items-center justify-center'>
            <MainCard />
            </div>
            <Footer />
        </div>
    )
}