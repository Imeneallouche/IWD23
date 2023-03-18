import { useState, useEffect } from "react";
import menu from "../../assets/imgs/menu.png";
import close from "../../assets/imgs/close.png";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        hasScrolled ? "bg-blue-400" : ""
      } fixed w-full h-[60px] left-0 top-0  flex items-center justify-between bg-transparent px-5 md:px-10 md:py-5 z-10`}
    >
      <div className="logo">
        <a
          className="text-white font-bold uppercase text-2xl md:ml-[30px]"
          href="#"
        >
          Logo
        </a>
      </div>
      <div className="menu md:hidden w-[25px] cursor-pointer">
        <img
          src={navToggle ? close : menu}
          alt="menu and close menu"
          onClick={() => setNavToggle((prev) => !prev)}
        />
        <ul
          className={`${
            navToggle ? "top-[60px] && " : "-top-[100vh]"
          } navMenuPhone absolute w-screen min-h-[300px] bg-white left-0 text-center py-4 duration-300`}
        >
          <li className="navItemPhone">
            <a href="#" className="navLinkPhone">
              Home
            </a>
          </li>
          <li className="navItemPhone">
            <a href="#" className="navLinkPhone">
              About
            </a>
          </li>
          <li className="navItemPhone">
            <a href="#" className="navLinkPhone">
              Services
            </a>
          </li>
          <li className="navItemPhone">
            <a href="#" className="navLinkPhone">
              Testmonials
            </a>
          </li>
          <li className="navItemPhone">
            <a href="#" className="navLinkPhone">
              Contacts
            </a>
          </li>
          <div className="my-10 text-center">
            <a className="text-black text-[25px] block" href="#">
              Log in
            </a>
            <button className="bg-[#5665FB] px-[8px] py-[16px] rounded-md my-6">
              <a className="text-white font-bold text-[25px]" href="#">
                Register
              </a>
            </button>
          </div>
        </ul>
      </div>
      <div className="max-sm:hidden">
        <ul className="navMenuDesktop flex items-center gap-x-10">
          <li className="navItemDesktop">
            <a href="#" className="navLinkDesktop">
              Home
            </a>
          </li>
          <li className="navItemDesktop">
            <a href="#" className="navLinkDesktop">
              About
            </a>
          </li>
          <li className="navItemDesktop">
            <a href="#" className="navLinkDesktop">
              Services
            </a>
          </li>
          <li className="navItemDesktop">
            <a href="#" className="navLinkDesktop">
              Testmonials
            </a>
          </li>
          <li className="navItemDesktop">
            <a href="#" className="navLinkDesktop">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div className="Auth flex items-center gap-x-5 max-sm:hidden">
        <a className="text-white" href="#">
          Log in
        </a>
        <button className="bg-[#5665FB] px-3 py-1 rounded-md md:hover:bg-[#3848f7] md:hover:duration-300">
          <a className="text-white font-bold" href="#">
            Register
          </a>
        </button>
      </div>
    </header>
  );
};

export default Header;
