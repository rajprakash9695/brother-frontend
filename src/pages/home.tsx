import ChooseCard from '../components/ChooseCard';
import CustomHero from '../components/CustomHero';
import { Hero, Service, TalkToExpert, WhoWeAre } from '../components/homepage';
import { Faqs, GML, HowToJoin } from '../components/LeasePartner';
import RatingCard from '../components/RatingCard';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Service />
      <TalkToExpert />

      <div className="flex justify-center gap-5">
        <ChooseCard
          img="https://img.icons8.com/?size=50&id=1476&format=png"
          title="Resolution"
          description=" ea consequuntur cupiditate molestiae hic eum ratione? Tempore,
          nesciunt repellendus delectus vero, voluptates ipsa quam labore, "
        />
        <ChooseCard
          img="https://img.icons8.com/?size=50&id=1476&format=png"
          title="Resolution"
          description=" ea consequuntur cupiditate molestiae hic eum ratione? Tempore,
          nesciunt repellendus delectus vero, voluptates ipsa quam labore, "
        />
        <ChooseCard
          img="https://img.icons8.com/?size=50&id=1476&format=png"
          title="Resolution"
          description=" ea consequuntur cupiditate molestiae hic eum ratione? Tempore,
          nesciunt repellendus delectus vero, voluptates ipsa quam labore, "
        />
      </div>
      <div className="my-4">
        <RatingCard
          img="https://img.icons8.com/?size=50&id=1476&format=png"
          title="24/7"
          description=" eaconsequ untur cupid"
        />
      </div>
      {/* <Hero /> */}
      <GML />
      <HowToJoin />
      <Faqs />
    </div>
  );
}
