import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonElements';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () =>{
        setHover(!hover)
    }

  return (
    <HeroContainer id='home'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>

        <HeroContent>
            <HeroH1>Language Learning Made Easy</HeroH1>
            <HeroP>
                Sign up for a new account today and recieve 200 points as a reward  to your right decision.
            </HeroP>
            <HeroBtnWrapper>
                <Button to='signup' onMouseEnter={onHover}
                onMouseLeave={onHover}
                primary='true'
                dark='true'
                smooth={true} duration={500} spy={true}
              exact='true' offset={-80}
                >
                    Get started {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>    
  );
};

export default HeroSection;