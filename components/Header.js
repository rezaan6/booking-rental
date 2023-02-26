import Image from "next/image";
import React from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 p-5 bg-white shadow-md md:px-10">
      {/* Left */}
      <div className="relative flex items-center h-10 my-auto cursor-pointer">
        <Image src="/logo.png" alt="logo" layout="fill" objectFit="contain" objectPosition="left" />
      </div>

      {/* Middle - Search */}
      <div className="flex items-center py-2 md:border-2 rounded-full md:shadow-sm">
        <input
          className="text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent outline-none"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="md:mx-2 hidden md:inline-flex p-2 text-white bg-red-400 rounded-full cursor-pointer h-8" />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6"/>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6"/>
          <UserCircleIcon className="h-6"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
