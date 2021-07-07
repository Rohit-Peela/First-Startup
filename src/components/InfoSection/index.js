import React from 'react';
import { Button } from '../ButtonElements';
import {FaCheckCircle} from 'react-icons/fa';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
import {InfoContainer, InfoWrapper, InfoRow, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, Column1,Column2,ImgWrap, Img } from './InfoElements'

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                            <Flip top><TopLine>{topLine}</TopLine></Flip>
                            <Flip bottom><Heading lightText={lightText}>{headline}</Heading></Flip>
                            <Bounce bottom><Subtitle darkText={darkText} dangerouslySetInnerHTML={{ __html: description }}></Subtitle></Bounce>
                                <BtnWrap>
                                <Rotate bottom left><Button to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1: 0}
                                    dark={dark ? 1 : 0}
                                    dark2={dark2 ? 1: 0}
                                    >{buttonLabel}</Button></Rotate>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                        <Fade bottom><Img src={img} alt={alt}/></Fade>
                        </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
