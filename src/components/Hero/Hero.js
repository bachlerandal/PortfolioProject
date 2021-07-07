import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, ImageContainer, Img } from './HeroStyles';

const Hero = () => (
  
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Randal Bachle
      </SectionTitle>
      <SectionTitle main center>
        Welcome To My Online CV
      </SectionTitle>
      <br/>
      <SectionText>
        *This portfolio is a work in progress*
      </SectionText>
      <br/>
    </LeftSection>
  </Section>
);

export default Hero;