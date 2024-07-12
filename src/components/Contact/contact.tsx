import CConstant from '../../constant/contact';
import CustomButton from '../CustomButton';

export default function Contact() {
  const handleClick = () => {
    console.log('Submit');
  };
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-24">
        <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
          {CConstant.map((item, index) => (
            <div className="border rounded-xl p-4" key={index}>
              <img
                src={item.img}
                alt={item.title}
                className="h-14 w-14 object-cover bg-sky-100 rounded-full p-2"
              />
              <div className="mt-6 mb-2 md:mb-4">
                <p className="font-semibold mb-4">{item.title}</p>
                <p className="text-md text-gray-500 mb-3 md:mb-6">
                  {item.description}
                </p>
                <p className="text-md ">{item.contact}</p>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-8 md:mt-16 flex flex-col md:flex-row">
          <img
            src="/contact/contact.png"
            alt="contact"
            className="w-full md:w-1/2 rounded-t-xl md:rounded-l-xl "
          />
          <div className=" p-3 md:p-10 border w-full md:w-1/2 rounded-b-xl md:rounded-r-xl">
            <form>
              <h1 className=" text-lg md:text-2xl font-bold my-6">
                Are there any questions you would like us to answer
              </h1>
              <div className="flex gap-2 items-center flex-col md:flex-row mb-3 md:mb-6">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full p-3 border outline-none rounded-lg"
                />
                <input
                  type="text"
                  maxLength={10}
                  required
                  placeholder="Phone"
                  className="w-full p-3 border outline-none rounded-lg"
                />
              </div>
              <input
                type="email"
                required
                placeholder="Email"
                className="w-full p-3 border outline-none rounded-lg mb-3 md:mb-6"
              />
              <textarea
                rows={6}
                placeholder="Message"
                className="w-full p-3 border outline-none rounded-lg mb-3 md:mb-6"
              />
              <div className="mb-8 md: mb-0">
                <CustomButton
                  bgColor="[#007aff]"
                  text="Send Message"
                  color="white"
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
