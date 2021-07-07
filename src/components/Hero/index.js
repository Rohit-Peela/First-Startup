import React, {useState} from 'react'
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import LightSpeed from 'react-reveal/LightSpeed';
import Fade from 'react-reveal/Fade';
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from '../Hero/HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
            <LightSpeed left><HeroH1>Loan Sanctions Made Easy</HeroH1></LightSpeed>
                <HeroP>
                <LightSpeed right>Sign Up immediately and sanction your loan as soon as possible without any hassle...</LightSpeed>
                </HeroP>
                <HeroBtnWrapper>
                <Fade bottom><Button to='signup' 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    >
                        Get Started{hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button></Fade>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
