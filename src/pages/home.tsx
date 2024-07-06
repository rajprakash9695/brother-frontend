import ChooseCard from '../components/ChooseCard';
import CustomHero from '../components/CustomHero';
import { Faqs, GML, Hero, HowToJoin } from '../components/LeasePartner';
import RatingCard from '../components/RatingCard';
import ServiceCard from '../components/ServiceCard';

export default function Home() {
  return (
    <div>
      <CustomHero
        title="Welcome to Panoptes Groups"
        description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          suscipit officiis eligendi doloremque, amet, tenetur provident minus
          rerum voluptatibus impedit quaerat dolores ea perspiciatis cum a.
          Quas, aspernatur laboriosam reprehenderit, eius aliquid corrupti quis
          ea consequuntur cupiditate molestiae hic eum ratione? Tempore,
          nesciunt repellendus delectus vero, voluptates ipsa quam labore, 
          doloribus voluptatibus fuga saepe consequuntur laudantium minus totam
          at laboriosam. Sit illo praesentium pariatur est, fuga nulla amet
          aliquid, perspiciatis dignissimos molestias ab nemo consequuntur
          expedita dicta voluptatum saepe eum dolore libero obcaecati neque!
          Saepe, esse? Et aperiam, totam magnam quae, adipisci impedit quia
          perspiciatis harum quisquam voluptate nam mollitia."
      />
      <div className="flex justify-center gap-5 my-10">
        <ServiceCard
          img="https://img.icons8.com/?size=50&id=1476&format=png"
          title="Bussensess"
          description="lorem lorem lofvfrhj hsjkhs hgh hajkd hgajga kjkhgsdjhg ghjgh gjhgjh "
          lists={[{ items: 'lorem' }, { items: 'AMndd' }, { items: 'Manan' }]}
          to="/#"
        />
        <ServiceCard
          img="https://img.icons8.com/?size=50&id=1476&format=png"
          title="Bussensess"
          description="lorem lorem lofvfrhj hsjkhs hgh hajkd hgajga kjkhgsdjhg ghjgh gjhgjh "
          lists={[{ items: 'lorem' }, { items: 'AMndd' }, { items: 'Manan' }]}
          to="/#"
        />
        <ServiceCard
          img="https://img.icons8.com/?size=50&id=1476&format=png"
          title="Bussensess"
          description="lorem lorem lofvfrhj hsjkhs hgh hajkd hgajga kjkhgsdjhg ghjgh gjhgjh "
          lists={[{ items: 'lorem' }, { items: 'AMndd' }, { items: 'Manan' }]}
          to="/#"
        />
      </div>
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
      <Hero />
      <GML />
      <HowToJoin />
      <Faqs />
    </div>
  );
}
