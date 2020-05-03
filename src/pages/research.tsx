/* eslint-disable max-len */
// AKA the About page
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentPanel from '../components/ContentPanel';
import Heading from '../components/Heading';
import { secondary, primary } from '../styles/palette';
import ResearchPanel from '../components/ResearchPanel';

const hoflabDescription = `
  The Hof research group in the department of 
  Chemistry at the University of Victoria focuses on medicinal and 
  supramolecular chemistry. Fraser Hof has been an incredible mentor to me 
  and has helped me develop my scientific writing skills.
`;

const borastonLabDescription = `
  The Boraston research group specializes in carbohydrate biochemistry, 
  with an emphasis on protein interactions and structure.
`;

const Link = styled.a`
  color: ${primary.backgroundColor};
`;

const ResearchPanelContainer = styled.div`
  margin: 15px 0 15px 0;
`;

const IndexPage: FunctionComponent = () => (
  <Layout heading="RESEARCH">
    <SEO title="Research" />
    <ContentPanel>
      <Heading color={secondary.color}>My Research Experience</Heading>
      <p>Brief sentence here about your volunteering and what you got out of it</p>
      
      <ResearchPanelContainer>
        <ResearchPanel
          heading={'Hoflab'}
          description={hoflabDescription}
          headingUrl={'https://hoflab.com/'}
        >
          My research in Hoflab involved a traditional approach to research, 
          I managed my own research project and designed my own techniques and 
          experiments. My project goal was to increase the sensitivity of an 
          analyte sensing compound to be used in the development of a 
          road-side test strip. Analytes included nicotine, cocaine, and 
          metabolites of THC, all of which I handled in the lab following 
          proper procedures. 
        </ResearchPanel>
      </ResearchPanelContainer>

      <ResearchPanelContainer>
        <ResearchPanel
          heading={'Boraston Lab'}
          description={borastonLabDescription}
          headingUrl={
            'https://www.uvic.ca/research/learnabout/home/researchers/experts/expert/boraston-alisdair.php'
          }
        >
          I worked closely with <Link href="https://www.researchgate.net/profile/Joanne_Hobbs" target="_blank">Dr. Joanne Hobbs</Link> performing 
          technician work; PCR reactions, DNA extractions, culture growth, conjugation and buffer preparations.
        </ResearchPanel>
      </ResearchPanelContainer>
    </ContentPanel>
  </Layout>
);

export default IndexPage;
