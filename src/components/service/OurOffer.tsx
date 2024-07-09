import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import COffer from '../../constant/offer';

export default function OurOffer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F0F7FF]">
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-32">
        <div className="text-center md:my-4">
          <h1 className="text-xl md:text-4xl mb-4 font-semibold">
            What We Offer
          </h1>
          <p className="text-sm md:text-lg text-gray-500 max-w-2xl mx-auto">
            Flexible client interaction can range from client providing us a
            problem state in which we would requires some data provide a
            proposal.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 md:gap-10 mt-8 md:mt-20 items-center">
          <div className="">
            <img src="/service/offer.png" alt="our story" />
          </div>
          <div className="">
            {COffer.map((item, index) => (
              <div
                className="shadow-lg px-2 py-3 rounded-xl border mb-4"
                key={index}
              >
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => handleToggle(index)}
                >
                  <p className="p-2  font-semibold text-gray-700">
                    {item.question}
                  </p>
                  {openIndex === index ? (
                    <IoIosArrowDown className="text-[#007AFF] text-4xl p-1" />
                  ) : (
                    <MdArrowForwardIos className="text-[#007AFF] text-3xl p-1" />
                  )}
                </div>
                {openIndex === index && (
                  <p className="border-t px-2 pt-4 pb-3  text-gray-500">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
