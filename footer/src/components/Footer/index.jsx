import React from "react";
import useTheme from "cards/Theme";

const Footer = () => {
  const { clickCount } = useTheme();
  return (
    <footer className="w-full flex p-3 justify-center items-center">
      <h1 className="font-bold text-4xl dark:text-indigo-400">
        Footer: Botão de tema foi clicado {clickCount} vezes{" "}
      </h1>
    </footer>
  );
};

export default Footer;
