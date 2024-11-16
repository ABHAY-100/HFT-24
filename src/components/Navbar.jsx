"use client";

import {useState} from "react";
import Image from "next/image";
import {RxHamburgerMenu} from "react-icons/rx";
import {IoCloseOutline} from "react-icons/io5";

import Link from "next/link";

const Navbar = () => {
  const [mobilenav, setmobilenav] = useState(false);
  const NavItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/#about",
    },
    {
      title: "Why Participate",
      link: "/#why",
    },
    {
      title: "Timeline",
      link: "/#timeline",
    },
    // {
    //     title: "Speakers",
    //     link: "/#speakers"
    // },
    // {
    //     title: "Sponsors",
    //     link: "/#sponsors"
    // },

    {
      title: "FAQs",
      link: "/#faq",
    },
    {
      title: "Contacts",
      link: "/#contacts",
    },
  ];

  return (
    <div className="w-screen text-white flex flex-row items-center justify-between px-6 lg:px-0 lg:justify-around py-3 fixed top-0 z-20">
      <div className="tracking-[0.05rem] font-base-neue-black text-3xl">
        <a href="/">
          <p>HFT</p>
        </a>
      </div>

      <button
        onClick={() => setmobilenav(!mobilenav)}
        className="text-4xl block lg:hidden mr-3"
      >
        {!mobilenav ? (
          <RxHamburgerMenu className="text-[40px] text-gray-light" />
        ) : (
          <IoCloseOutline className="text-[40px] text-gray-light" />
        )}
      </button>

      <div
        className={`text-gray-light transition-all duration-300 ease-in-out font-medium lg:static lg:w-max lg:h-max lg:pt-0 lg:bg-transparent lg:block lg:mr-3 fixed top-0 w-screen pt-24 h-screen z-[-1] text-center items-center ${
          mobilenav
            ? "right-0 flex flex-col gap-8 bg-zinc-900"
            : "right-full flex flex-col gap-8 text-opacity-0"
        }`}
      >
        {NavItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="font-syne-medium text-sm group text-gray-light transition-all duration-300 ease-in-out lg:ml-8"
            onClick={() => setmobilenav(!mobilenav)}
          >
            <span className="bg-left-bottom font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-300 ease-out">
              {item.title}
            </span>
          </Link>
        ))}
        {/* <button className="lg:hidden block register text-xl text-gray-light bg-red px-10 py-2">
          <a href="https://app.formbricks.com/s/cm1ggwfvp000r123pzj996nkj">Register</a>
        </button> */}
      </div>
      {/* <button className="lg:block hidden register text-xl text-gray-light bg-red px-10 py-2">
        <a href="https://app.formbricks.com/s/cm1ggwfvp000r123pzj996nkj">Register</a>
      </button> */}
      <div className="hidden lg:block">
        <button className="font-syne-medium">Register</button>
      </div>
    </div>
  );
};

export default Navbar;
