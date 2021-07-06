import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, 
    FooterLinkItems, FooterLinkTitle, FooterLink,
    SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights,
    SocialIcons, SocialIconLink, } from './FooterElements';
    import {animateScroll as scroll} from 'react-scroll'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to="/">How It Works</FooterLink>
                            <FooterLink to="/">University</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Lenders</FooterLink>
                            <FooterLink to="/">Terms &amp; conditions</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact us</FooterLinkTitle>
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Location</FooterLink>
                            <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Tools</FooterLinkTitle>
                            <FooterLink to="/">EMI Calculator</FooterLink>
                            <FooterLink to="/">Check Eligibility</FooterLink>
                            <FooterLink to="/">SOP Review</FooterLink>
                            <FooterLink to="/">Repayment</FooterLink>
                            <FooterLink to="/">Calculator</FooterLink>
                        </FooterLinkItems>

                        {/* <FooterLinkItems>
                            <FooterLinkTitle>Social Meida</FooterLinkTitle>
                            <FooterLink to="/signin">How It Works</FooterLink>
                            <FooterLink to="/signin">University</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Lenders</FooterLink>
                            <FooterLink to="/signin">Terms&amp;conditions</FooterLink>
                        </FooterLinkItems> */}
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            GradScholars
                        </SocialLogo>
                        <WebsiteRights>Copyright &#169;{new Date().getFullYear()} GradScholars, All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target='_blank' aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target='_blank' aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target='_blank' aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>

                            <SocialIconLink href="/" target='_blank' aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
