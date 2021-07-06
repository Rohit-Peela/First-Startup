import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setrScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setrScrollNav(true);
        } else {
            setrScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>GradScholars</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                                activeClass="active">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={0}
                                activeClass="active">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="pricing"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={0}
                                activeClass="active">Pricing</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="testimonials"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={0}
                                activeClass="active">Testimonials</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={0}
                                activeClass="active">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
