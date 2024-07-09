import { Contact } from '../components/Contact';
import CustomHero from '../components/CustomHero';

export default function Contacts() {
  return (
    <div>
      <div>
        <CustomHero
          page="Contact Us"
          title="Keep in Touch"
          description="Pantopes is a consulting and product development services company. The Team partners with companies to accelerate the adoption of Data Driven strategies. Through the collaboration of a diversified team of engineers we strive to identify and implement new process an d methodologies for our clients to enable them to reach new capabilities.  "
        />
        <Contact />
      </div>
    </div>
  );
}
