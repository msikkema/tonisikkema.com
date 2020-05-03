// AKA the About page
import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentPanel from '../components/ContentPanel';
import Heading from '../components/Heading';
import { secondary } from '../styles/palette';

const IndexPage: FunctionComponent = () => (
  <Layout heading="ABOUT">
    <SEO title="Home" />
    <ContentPanel>
      <Heading color={secondary.color}>Hello There!</Heading>
      <p>
        My name is Toni Sikkema, I am a recent Biochemistry graduate 
        from the University of Victoria.
      </p>
    </ContentPanel>

    <ContentPanel>
      <Heading color={secondary.color}>About Me</Heading>
      <p>
        I have a keen interest in the medical sciences and have worked 
        in provincial healthcare since 2013. My experience in both the 
        technical and bureaucratic side of healthcare has given me a
        unique perspective of the challenges these systems face in working
        together to provide patient care. I was born in Australia and
        immigrated to Canada in 2010, arriving in my teenage years by 
        myself which was a challenging new experience that
        I enjoyed. I am fortunate to have met some amazing people who have 
        helped me throughout the years to find my footing and shape my 
        development into the person I am today.
      </p>
      <p>
        I began my college journey as a mature student in 2015 and graduated 
        in 2020 with  abchelor's degree in biochemistry. I have always loved 
        science and found most of the concepts enjoyable to explore and took 
        electives in psychology, chemistry and theatre.
      </p>
      <p>
        In my college years I began volunteering and have amassed a large
        variety of experiences working with patients, the
        socio-economically disadvantaged and the college campus community.
        My favorite volunteering has been working in adult learning programs 
        to help make education more accessible for everyone.
      </p>
      <p>
        In my spare time I like to draw and go bird watching with my partner,
        and we have two adopted cockatiels aged 11 and 21!
      </p>
      <p>
        Australia is still my favorite place on the planet and I like 
        travelling home to see my family when I have time.
      </p>
    </ContentPanel>
  </Layout>
);

export default IndexPage;
