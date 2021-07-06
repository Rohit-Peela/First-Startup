import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";
import testimonial1 from '../../images/testimonial1.png';

export const TestimonialContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const TestimonialH1 = styled.h1`
    font-size: 2.5rem;
    margin-bottom:100px;
    margin-top: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export default class Testimonials extends Component {
    render() {
        return (
            <TestimonialContainer id="testimonials">
                <TestimonialH1>Testimonials</TestimonialH1>
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={6100}
                >
                    <div>
                        <img src="https://img-premium.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1625584853~hmac=192a859f5750226f5e7919a25afe9b9e" />
                        <div className="myCarousel">
                            <h3>Sanath Sayyaparaju</h3>
                            <h4>Incoming Masters in Finance student</h4>
                            <p>
                                I really love how GradScholars helped me in sanctioning the loan, would definetely recommend anyone
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src="https://image.flaticon.com/icons/png/512/2922/2922561.png" />
                        <div className="myCarousel">
                            <h3>Daniel Keystone</h3>
                            <h4>Incoming Grad Student</h4>
                            <p>
                                Service is damn good, sanath did a great job
                            </p>
                        </div>
                    </div>

                    <div>
                        <img src="https://image.flaticon.com/icons/png/512/949/949635.png" />
                        <div className="myCarousel">
                            <h3>Theo Sorel</h3>
                            <h4>Incoming MBA student</h4>
                            <p>
                                I love how rohit helped me in Shortlisting the universities, thank you rohit for your service :p
                            </p>
                        </div>
                    </div>
                </Carousel>
            </TestimonialContainer>
        );
    }
}