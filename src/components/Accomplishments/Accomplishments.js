import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AccomplishmentsStyles';

const data = [
  { number: 1, text: 'Year(s) DevOps and Development experience.'},
  { number: 350, text: 'Graded Students over 3 years.', },
  { number: 4, text: 'Years remaining in CompTIA Sec+ Certification.', },
  { number: 9, text: 'Years remaining in Secret clearance.', }
];

const Accomplishments = () => (
  <Section>
    <SectionTitle>
      Certifications / Accomplishments / Experience
    </SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
