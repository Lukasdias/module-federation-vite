import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full p-3 flex justify-between">
      <h1 className="font-bold text-6xl">Header</h1>
      <ul className="flex gap-3 items-center">
        <li className="font-bold text-xl cursor-pointer text-white hover:text-purple-400 transition-colors duration-300">
          Option 1
        </li>
        <li className="font-bold text-xl cursor-pointer text-white hover:text-purple-400 transition-colors duration-300">
          Option 2
        </li>
        <li className="font-bold text-xl cursor-pointer text-white hover:text-purple-400 transition-colors duration-300">
          Option 3
        </li>
      </ul>
    </header>
  );
};

export default Header;
