import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter, FaLinkedin} from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink , SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      };
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                            
                            <FooterLink to="/signin">How it works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink> 
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                            
                            <FooterLink to="/">Submit Video</FooterLink>
                            <FooterLink to="/">Ambassadors</FooterLink>
                            <FooterLink to="/">Agency</FooterLink>
                            <FooterLink to="/">Influencer</FooterLink>
                    </FooterLinksItems>

                </FooterLinksWrapper>

                <FooterLinksWrapper>
                <FooterLinksItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            
                            <FooterLink to="/">Contact</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destinations</FooterLink>
                            <FooterLink to="/">Sponserships</FooterLink>
                    </FooterLinksItems>

                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                            
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinksItems>
                    
                </FooterLinksWrapper>

            </FooterLinksContainer>

            <SocialMedia>
                <SocialMediaWrap>
                   <SocialLogo to='/' onClick={toggleHome}>
                    wordbud
                   </SocialLogo>
                   <WebsiteRights>wordbud ~o {new Date().getFullYear()}
                   All rights reserved.</WebsiteRights>
                   <SocialIcons>
                    <SocialIconLink href="/" target="_blank"
                    aria-label="Facebook">
                        <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="/" target="_blank"
                    aria-label="Instagram">
                        <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                    aria-label="Youtube">
                        <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                    aria-label="Twitter">
                        <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                    aria-label="Linkedin">
                        <FaLinkedin />
                        </SocialIconLink>
                    
                   </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer