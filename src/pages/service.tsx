import CustomHero from '../components/CustomHero';
import { IntroduceService, OurOffer } from '../components/service';
import { CustomReview, Service } from '../components/homepage';

export default function Services() {
  return (
    <div>
      <div>
        <div>
          <CustomHero
            page="Services"
            title="Business Intelligence"
            description="Pantopes is a consulting and product development services company. The Team partners with companies to accelerate the adoption of Data Driven strategies. Through the collaboration of a diversified team of engineers we strive to identify and implement new process an d methodologies for our clients to enable them to reach new capabilities.  "
          />
        </div>
        <IntroduceService />
        <OurOffer />
        <Service />
        <CustomReview />
      </div>
    </div>
  );
}
