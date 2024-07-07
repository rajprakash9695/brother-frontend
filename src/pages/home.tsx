import {
  CustomReview,
  Hero,
  Service,
  TalkToExpert,
  WhoWeAre,
} from "../components/homepage";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Service />
      <TalkToExpert />
      <CustomReview />
    </div>
  );
}
