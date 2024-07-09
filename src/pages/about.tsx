import { OurStory, OurTeam, WhyChooseUs } from '../components/About';
import CustomHero from '../components/CustomHero';

export default function About() {
  return (
    <div>
      <div>
        <CustomHero
          page="About"
          title="Get to Know Us"
          description="Pantopes is a consulting and product development services company. The Team partners with companies to accelerate the adoption of Data Driven strategies. Through the collaboration of a diversified team of engineers we strive to identify and implement new process an d methodologies for our clients to enable them to reach new capabilities.  "
        />
        <OurStory />
        <WhyChooseUs />
        <OurTeam />
      </div>
    </div>
  );
}
