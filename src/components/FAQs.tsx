import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6';
interface IProps {
  faqs: {
    question: string;
    answer: string;
  }[];
}

export default function FAQsPges({ faqs }: IProps) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(faqs);

  const handleSearch = (event: any) => {
    const searchTerm = event.target.value;

    setSearchTerm(searchTerm);
    // console.log("log", searchTerm);
    const filtered = faqs.filter((item) =>
      item.answer
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase() ||
            item.question.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredData(filtered);
  };
  return (
    <div className=" px-2">
      <div className=" ">
        <div className=" w-full  mt-6">
          <div className="flex items-center gap-2 p-3 md:p-4 border w-full rounded-xl mb-2 outline-none ">
            <CiSearch />

            <input
              id="searchFaqs"
              type="text"
              placeholder="Search FAQs  "
              className="outline-none w-full"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <div className="rounded-lg border-2">
            {(searchTerm.length ? filteredData : faqs).map((faq, index) => (
              <div
                key={index}
                className="group flex flex-col border-b-2"
                tabIndex={index + 1}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex cursor-pointer items-center justify-between border-b p-2 md:p-4 ">
                  <span className=" text-sm md:text-lg pr-6">
                    {faq.question}
                  </span>
                  {activeAccordion === index ? (
                    <div>
                      <FaChevronUp className=" h-8  w-8 p-2 rounded-full bg-[#62113F] text-white" />
                    </div>
                  ) : (
                    <div>
                      <FaChevronDown
                        className="h-8 rounded-full w-8 p-2 bg-[#FBEDF5]  text-[#3E4265]"
                        onClick={() => toggleAccordion(index)}
                      />
                    </div>
                  )}
                </div>
                <div
                  className={`${
                    activeAccordion === index
                      ? 'visible max-h-screen opacity-100 transition duration-1000 p-2 md:p-4'
                      : 'invisible max-h-0 opacity-0 transition duration-1000'
                  }`}
                >
                  <p className="text-sm md:text-lg pr-6 text-gray-500">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
