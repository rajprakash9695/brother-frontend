import CChooseCard from "../../constant/chooseCard";
import ChooseCard from "../ChooseCard";

export default function WhyChooseUs() {
  return (
    <div className="bg-[#F0F7FF] py-10 md:py-32">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 items-center">
          <div>
            <img
              src="/about/story.png"
              alt="Choose"
              className="w-full rounded-xl"
            />
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold">
              Why Choose Us
            </h1>
            <p className="text-gray-500 my-4">
              We know each customer is different and we take an agile method to
              implement a win-win strategy to ensure we are transparent in where
              we can add value.
            </p>
            <div className="flex gap-4 flex-wrap  ">
              {CChooseCard.map((item) => (
                <ChooseCard
                  img={item.img}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
