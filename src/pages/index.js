import Accomplishments from '../components/Accomplishments/Accomplishments';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';



const Home = () => {
  return (
    <Layout>
       <Section grid> 
        <Hero />
      </Section> 
      <br /><br />
      <Projects />
      <br /><br />
      <Technologies />
      <br /><br />
      <Timeline />
      <br /><br />
      <Accomplishments />
      <br /><br />
    </Layout>
  );
};

export default Home;
