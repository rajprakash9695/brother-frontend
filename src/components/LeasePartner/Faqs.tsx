import FAQsPges from '../FAQs';

const faqsData = [
  {
    question: "What does the term 'Leasing Partner' signify?",
    answer:
      'Leasing Partners are essentially jewellery manufacturers collaborating with us to meet their gold needs through gold leasing services of MyVault',
  },
  {
    question:
      "What are the requirements to qualify for  MyVault's Gold leasing facility?",
    answer:
      'Simply register as a Leasing Partner in the MyVault Web App and meet essential criteria like providing a bank guarantee and possessing a valid GST.',
  },
  {
    question:
      "What advantages does MyVault's Gold leasing facility offer over Gold Metal Loan?",
    answer:
      'You can access Gold at a rate of just 0.75% per month, payable on a monthly basis, while with GML, Gold is available at a rate of 4% with compulsory price settlements every 6 months.',
  },
  {
    question:
      'What is the timeframe for returning the Gold or settling the Gold price with MyVault?',
    answer:
      "There's no requirement to return the Gold or settle the Gold price. You simply repay in Gold at a rate of 0.75% on a monthly basis. For instance, if you've borrowed 1kg of Gold from MyVault, you'll only need to repay 7.5 grams per month under MyVault's Gold Leasing facility.",
  },
  {
    question:
      'What is the role of BKS MyVault Pvt Ltd in the Bank Guarantee (BG) agreement? ',
    answer:
      'As the technology aggregator for Bailor (Gold Bank), BKS MyVault Pvt Ltd is a key party in the Bank Guarantee (BG) agreement, maintaining the right to invoke the Bank Guarantee (BG) to protect the interests of Bailor & Bailee, both.',
  },
  {
    question:
      'How does the irrevocable Bank Guarantee (BG) protect both parties? ',
    answer:
      "It guarantees the Bailee (Leasing Partner)'s commitment and ensures BKS MyVault Pvt Ltd can  recover dues for the Bailor(Gold Bank) without the risk of unilateral Bank Guarantee (BG) withdrawal or invocation, respectively. ",
  },
  {
    question:
      'What is the nature of the Bank Guarantee (BG) issued by the Bailee (Leasing Partner)? ',
    answer:
      "The Bank Guarantee (BG) is irrevocable, ensuring it cannot be cancelled unilaterally by the Bailee (Leasing Partner), which safeguards the Bailor (Gold Bank)'s interests. ",
  },
];

export default function Faqs() {
  return (
    <div className="relative">
      <div className="max-w-screen-xl  mx-auto md:my-4 ">
        <div className=" relative flex gap-4 my-4 justify-center max-[768px]:flex-col">
          <div className="md:w-2/5 p-5 w-full" data-aos="fade-down-right">
            <h1 className=" text-lg md:text-4xl font-semibold text-center md:text-start leading-6">
              For more informations <br />
              Check out the FAQs
            </h1>
            <p className=" text-center md:text-start leading-5 my-2 md:my-4 text-gray-600 text-sm  md:text-base ">
              Still have unanswered questions and need <br /> to get in touch?
            </p>

            <div className="flex items-center  justify-center md:justify-start gap-5">
              <img src="/lease-partner/telecom.svg" alt="telecom" />
              <div className="leading-6">
                <p className=" text-sm font-semibold">
                  <a href="mailto:contact@myvault.com">contact@myvault.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/5" data-aos="fade-down-left">
            <FAQsPges faqs={faqsData} />
          </div>
        </div>
      </div>
      <img
        src="/bg-round-light.svg"
        alt="bg-round-light"
        className="absolute  left-0 bottom-16 "
      />
    </div>
  );
}
