import React from 'react';
import { DiFirebase} from 'react-icons/di';
import { BiCreditCardFront} from 'react-icons/bi';
import {BsTools} from 'react-icons/bs';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development and DevOps world.
    </SectionText>
    <List>
      <ListItem>
        <BiCreditCardFront size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            React.js <br />
            HTML <br />
            CSS <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Java <br />
            Python <br />
            C# <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <BsTools size="3rem" />
        <ListContainer>
          <ListTitle>Tools/Utilities</ListTitle>
          <ListParagraph>
            Experience with: <br />
            Ansible <br />
            Jenkins <br />
            Splunk <br />
            VMWare <br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
