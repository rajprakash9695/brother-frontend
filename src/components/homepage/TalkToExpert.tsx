import CChooseCard from '../../constant/chooseCard';
import ChooseCard from '../ChooseCard';
import Rating from '../Rating';

export default function TalkToExpert() {
  return (
    <div className="bg-[#fffff] py-4">
      <div className="max-w-screen-xl mx-auto px-4 my-10 md:my-32  ">
        <Rating />
        <div className="grid md:grid-cols-2 md:gap-16 mt-16 mb-10">
          <div>
            <p className="text-xl md:text-4xl text-center md:text-start font-semibold mb-6 md:mb-14">
              You will Get Benefits by <br /> Taking our Services
            </p>
            <img src="/homepage/choose-card.svg" alt="expert" />
          </div>
          <div>
            <p className="text-[#464649] p-4 md:mb-14">
              Empowering your business with expert guidance and customized
              solutions. Our consulting and product development services are
              designed to help you innovate, streamline processes, and drive
              growth.
            </p>
            <div className="flex gap-4 flex-wrap p-4 ">
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
