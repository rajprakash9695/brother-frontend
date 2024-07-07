import { Link } from 'react-router-dom';

import { GoArrowUpRight } from 'react-icons/go';

const NavbarList = [
  { title: 'Home', to: '/home' },
  { title: 'About Us', to: '/about' },
  { title: 'Services', to: '/service' },
  { title: 'Features', to: '/feature' },
  { title: 'Contact Us', to: '/contact' },
];

function Navbar() {
  return (
    <div className="fixed w-full z-50">
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto  px-3 py-4 text-[#464649]">
          <div className="flex gap-4 items-center justify-between">
            <div>
              <Link to="/">
                <img
                  src="https://www.shutterstock.com/image-vector/abstract-cube-logo-design-template-260nw-262214966.jpg"
                  alt="my-gold logo h-8 w-6"
                  className="h-16"
                />
              </Link>
            </div>
            <div>
              <ul className="flex gap-5 ">
                {NavbarList.map((items) => (
                  <li>
                    <Link to={items.to}>{items.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex gap-5 items-center">
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/register">
                    <button className="flex items-center gap-1 font-semibold bg-[#007aff] text-white px-5 py-4 rounded-full">
                      Register <GoArrowUpRight />
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
