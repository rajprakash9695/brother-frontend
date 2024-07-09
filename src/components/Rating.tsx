import CRating from '../constant/rating';
import CustomButton from './CustomButton';
import RatingCard from './RatingCard';

export default function Rating() {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="heroCustom rounded-2xl p-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-16">
          <div className="flex flex-wrap gap-8 md:gap-10  ">
            {CRating.map((rating) => (
              <>
                <RatingCard
                  img={rating.img}
                  title={rating.title}
                  description={rating.description}
                  key={rating.title}
                />
              </>
            ))}
          </div>
          <div className=" md:p-5 text-white ">
            <p className="text-xl md:text-4xl font-semibold">
              Connect with our team to discuss where we can add value in your
              process
            </p>
            <p className=" text-sm md:text-lg my-4 md:my-8">
              Our experts offer tailored solutions to <br /> meet your unique
              needs
            </p>
            <CustomButton
              bgColor="white"
              text="Talk to Export "
              color="[#0A0A72]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
