import React from "react";
import profile from "../../assets/imgs/profile.png";
import menu from "../../assets/imgs/menu.png";
import { useState } from "react";
import close from "../../assets/imgs/close.png";
import chat from "../../assets/imgs/chat.png"
import advice from "../../assets/imgs/advice.png"
import contact from '../../assets/imgs/contact.png'
import logout from '../../assets/imgs/logout.png'

const SideBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header className="w-full h-[40px] bg-[#202135] flex items-center justify-between px-5 py-7 z-10">
      <div className="z-10 md:hidden">
        <img
          className={`w-[20px] cursor-pointer`}
          src={toggle ? close : menu}
          alt="menu"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div className="">
        <img className="w-[30px]" src={profile} alt="profile" />
      </div>
      <ul
        className={`${
          toggle ? "left-0" : "-left-96"
        } absolute md:hidden top-[56px] w-[80%] h-[88%] bg-[#202135] transition-all duration-300`}
      >
        <li className="text-center py-5">
          <a className="text-white uppercase font-bold text-4xl" href="#">
            Logo
          </a>
        </li>
        <div className="my-[100px] ">
          <li className="flex items-center justify-center gap-x-6">
            <img className="w-[30px]" src={chat} alt="" />
            <h2 className="text-white font-bold text-2xl">Chat</h2>
          </li>
          <li className="flex items-center justify-center gap-x-6 py-8">
            <img className="w-[30px]" src={advice} alt="" />
            <h2 className="text-white font-bold text-2xl">Chat</h2>
          </li>
          <li className="flex items-center justify-center gap-x-6">
            <img className="w-[30px]" src={contact} alt="" />
            <h2 className="text-white font-bold text-2xl">Chat</h2>
          </li>
        </div>
          <li className="flex items-center justify-center gap-x-6">
            <img className="w-[30px]" src={logout} alt="" />
            <h2 className="text-white font-bold text-2xl">Log out</h2>
          </li>
      </ul>
      <div></div>
    </header>
  );
};

export default SideBar;
