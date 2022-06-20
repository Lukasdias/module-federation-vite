import React from "react";
import Header from "header/Header";
import Body from "body/Body";
import Footer from "footer/Footer";
import Cards from "cards/Cards";
import useTheme from "cards/Theme";

function App() {
  const { clickCount } = useTheme();
  return (
    <div className="w-screen h-screen flex flex-col p-0 m-0 bg-indigo-300 dark:bg-indigo-900 overflow-hidden">
      <Header />
      <Body>
        <h1 className="text-2xl dark:text-zinc-100">
          HOST: Botão de Tema foi clicado {clickCount} vezes
        </h1>
        <Cards />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
