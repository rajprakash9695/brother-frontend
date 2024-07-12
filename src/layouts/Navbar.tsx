import { Link, useLocation } from "react-router-dom";
import { CgMenuRightAlt } from "react-icons/cg";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const NavbarList = [
  { title: "Home", to: "/" },
  { title: "About Us", to: "/about" },
  { title: "Services", to: "/service" },
  { title: "Contact Us", to: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  console.log("path", location.pathname);

  const handleOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="fixed w-full z-50">
      <div className="bg-white">
        <div className="max-w-screen-xl mx-auto  px-3 py-4 text-[#464649]">
          <div className="flex gap-4 items-center justify-between">
            <div>
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="my-gold logo h-8 w-6"
                  className="h-16"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-5">
                {NavbarList.map((item) => (
                  <li key={item.title}>
                    <Link
                      to={item.to}
                      className={`${
                        location.pathname === item.to
                          ? "text-[#007aff] font-bold"
                          : ""
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block">
              <ul className="flex gap-5 items-center">
                <li
                  className={`${
                    location.pathname === "/login"
                      ? "text-[#007aff] font-bold"
                      : ""
                  }`}
                >
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
            <div className="md:hidden">
              {open ? (
                <IoClose
                  className="text-4xl cursor-pointer"
                  onClick={onClose}
                />
              ) : (
                <CgMenuRightAlt
                  className="text-4xl cursor-pointer"
                  onClick={handleOpen}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <dialog open={open} onClose={onClose} className="w-full md:hidden ">
        <div className=" w-full z-10" onClick={onClose}>
          <div className="relative">
            <div className="absolute right-0 bg-sky-100  w-44 p-2 rounded-bl-xl">
              <ul className="leading-7">
                {NavbarList.map((item) => (
                  <Link to={item.to} key={item.title}>
                    <li
                      className={`hover:bg-sky-300 text-[#05055F] p-2 rounded-xl my-1 cursor-pointer ${
                        location.pathname === item.to ? "bg-sky-300" : ""
                      }`}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}

                <Link to={"/login"}>
                  <li
                    className={`hover:bg-sky-300 text-[#05055F] p-2 rounded-xl my-1 cursor-pointer ${
                      location.pathname === "/login" ? "bg-sky-300" : ""
                    }`}
                  >
                    Login
                  </li>
                </Link>
                <Link to={"/register"}>
                  <li
                    className={`hover:bg-sky-300 text-[#05055F] p-2 rounded-xl my-1 cursor-pointer ${
                      location.pathname === "/register" ? "bg-sky-300" : ""
                    }`}
                  >
                    Register
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Navbar;
