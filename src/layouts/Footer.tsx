import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <div className="bg-[#0A0A72] text-gray-400">
        <div className="max-w-screen-xl mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-row-1 md:grid-cols-3 gap-10">
            <div>
              <Link to="/">
                <img src="/logo.png" alt="logo" className="h-32" />
              </Link>
              <p className="pt-4 text-sm">
                Explore our services, success stories, <br /> and insights to
                see how we can help you <br /> achieve your business goals.
              </p>
            </div>
            <div>
              <div>
                <h1 className="text-lg font-bold text-white">Quicklinks</h1>
                <hr className="divide-y divide-gray-400 my-3" />
                <div className="flex gap-2 items-center justify-between text-sm">
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                  <Link to="/about">
                    <p>About Us </p>
                  </Link>
                  <Link to="/service">
                    <p>Services</p>
                  </Link>
                  {/* <Link to="/feature">
                    <p>Features</p>
                  </Link> */}
                  <Link to="/contact">
                    <p>Contact Us</p>
                  </Link>
                </div>
              </div>
              <div className="mt-10">
                <h1 className="text-lg font-bold text-white">Contact Info</h1>
                <hr className="divide-y divide-gray-400 my-3" />

                <div className="flex gap-2 items-center mt-4">
                  <img
                    src="https://img.icons8.com/?size=40&id=52671&format=png"
                    alt=" location"
                    className="h-6 w-6"
                  />
                  <p className="text-sm leading-4">
                    4140 Parker Rd. Allentown, <br /> New Mexico 31134
                  </p>
                </div>
                <div className="flex gap-2 items-center mt-3 ">
                  <img
                    src="https://img.icons8.com/?size=30&id=ULeMjbnoKZpi&format=png"
                    alt="message"
                    className="h-6 w-6"
                  />
                  <p className="text-sm leading-4">panoptes@hello.com</p>
                </div>
                <div className="flex gap-2 items-center mt-3">
                  <img
                    src="https://img.icons8.com/?size=64&id=44034&format=png"
                    alt="call"
                    className="h-6 w-6"
                  />
                  <p className="text-sm leading-4">(239) 555-0108</p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white">Follow Us Here</h1>
              <hr className="divide-y divide-gray-400 my-3" />
              <div className="flex gap-4 mt-4 items-center flex-wrap">
                <Link to="#">
                  <img
                    src="https://img.icons8.com/?size=64&id=118501&format=png"
                    alt="facebook"
                    className="h-10 w-10 rounded-full  "
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://img.icons8.com/?size=64&id=bYzsf9Bmocst&format=png"
                    alt="twitter"
                    className="h-8 w-8 rounded-full border border-[#007AFF] p-0.5 "
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://img.icons8.com/?size=64&id=IXUU4h36YfmO&format=png"
                    alt="linkdin"
                    className="h-10 w-10 rounded-full "
                  />
                </Link>
                <Link to="#">
                  <img
                    src="https://img.icons8.com/?size=64&id=43625&format=png"
                    alt="instagram"
                    className="h-10 w-10 rounded-full "
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#05055F] text-gray-400 text-sm py-4 ">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex justify-between items-center flex-col md:flex-row text-center">
            <p className="">
              Copyright © 2024 Panoptes Group. All Rights Reserved.
            </p>
            <div className="flex items-center gap-3">
              <p>Privacy Policy</p>
              <hr className="border h-4 border-gray-400 my-3" />
              <p>Term and Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
