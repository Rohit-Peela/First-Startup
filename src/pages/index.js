import React, {useState} from 'react'
import HeroSection from '../components/Hero';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { homeObjOne, homeObjTwo } from '../components/InfoSection/Data';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = ({setWts, wts}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
        setWts(!wts)
        console.log('wats app',wts);
    }

    return (
        <>
        <Sidebar isOpen={isOpen}  toggle = {toggle} />
        <Navbar toggle={toggle}/>   
        <HeroSection/>
        <InfoSection {...homeObjOne}/>
        <InfoSection {...homeObjTwo}/>
        <Pricing/>
        <Testimonials/>
        <Footer/>
        </>
    )
}

export default Home
