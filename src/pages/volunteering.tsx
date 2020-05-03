import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentPanel from '../components/ContentPanel';
import Heading from '../components/Heading';
import { secondary, primary } from '../styles/palette';
import VolunteeringPanel from '../components/VolunteeringPanel';

const VolunteeringPanelContainer = styled.div`
  margin: 15px 0 15px 0;
`;

const Link = styled.a`
  color: ${primary.backgroundColor};
`;

const VolunteeringPage: FunctionComponent = () => (
  <Layout heading="VOLUNTEERING">
    <SEO title="Volunteering" />
    <ContentPanel>
      <Heading color={secondary.color}>My Volunteer Experience</Heading>
      <p>Sentence about volunteering</p>

      <VolunteeringPanelContainer>
        <VolunteeringPanel
          institution={'Volunteer - KIN Canada'}
          institutionUrl={'https://www.kincanada.ca/'}
          years={'2018 - present'}
        >
          <p>
          KIN is a volunteer organization founded in 1920. I cant describe it 
          better than is described on their website: “Kin Canada is an 
          all-Canadian service organization made up of dedicated member 
          volunteers who serve their community’s greatest need through hosting 
          and sponsoring events and community service projects. Since its 
          founding, Kin, Kinsmen and Kinette clubs across Canada have 
          contributed more than $1 billion to Canadian communities and 
          disaster relief programs beyond our borders.”
          </p>
          <p>
          I am a founding member of British Columbias first KIN {' '}
          <Link href="http://www.kinclubuvic.com" target="_blank">
            campus club
          </Link>. 
          Some of the volunteering projects I have been involved in include 
          bottle drives, distributing poppies around campus on behalf of 
          Canadian legion, and helping run our classes semesterly PASS 
          (panic, anxiety, stress, solutions) tent where we give free stress 
          relieving items to students on campus during exam season.
          </p>
        </VolunteeringPanel>
      </VolunteeringPanelContainer>

      <VolunteeringPanelContainer>
        <VolunteeringPanel
          institution={'Teaching Assistant - University of Victoria'}
          institutionUrl={'https://www.uvic.ca/uni101/'}
          years={'2018 - 2020'}
        >
          <p>
            For two years I was a teaching assistant in Uni 101. Uni 101 helps 
            bring higher education to adults who may not have access to 
            education otherwise. 
          </p>
          <p>
            Twice a week students of all ages and backgrounds meet on campus 
            to participate in this two part class: the first portion is a 
            seminar that involves discussing the weeks readings and working on 
            a collaborative semester long publication project, and after a 
            meal break (provided for free) the students are then treated to 
            a lecture presented by one of UVIC’s professors. 
          </p>
          <p>
            My role as a teaching assistant involved leading group discussions, 
            helping students gain confidence in their writing, and managing 
            (sometimes difficult) group dynamics. I love being a part of this 
            community and have made friends with people I would have never 
            met otherwise.
          </p>
        </VolunteeringPanel>
      </VolunteeringPanelContainer>

      <VolunteeringPanelContainer>
        <VolunteeringPanel
          institution={'Mentor - University of Victoria'}
          institutionUrl={'https://www.uvic.ca/hr/learning-development/mentorship/'}
          years={'2019 - 2020'}
        >
          <p>
            I was a mentor in the pilot year of the uvic mentorship program 
            where I was matched with a first year science student. My role 
            as a mentor was to support and advise my student in their 
            academics and help guide them into reaching their career goals. 
            The inaugural year of the program was a success and I wish I had 
            a mentor when I was a first year science student. 
          </p>
        </VolunteeringPanel>
      </VolunteeringPanelContainer>

      <VolunteeringPanelContainer>
        <VolunteeringPanel
          institution={'Medical Imaging Volunteer - Royal Jubilee Hospital'}
          institutionUrl={'https://www.islandhealth.ca/'}
          years={'2017'}
        >
          <p>
            I volunteered in the medical imaging department of Royal Jubilee 
            Hospital. I assisted decreased mobility, injured, and elderly 
            patients with getting changed into gowns for X-rays and managed 
            the waiting and change rooms to make the radiographers work flow 
            more efficient. I handled patient information with care and 
            compassion and learned hospital workflow.
          </p>
        </VolunteeringPanel>
      </VolunteeringPanelContainer>
    </ContentPanel>
  </Layout>
);

export default VolunteeringPage;