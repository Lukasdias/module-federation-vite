import React from "react";

import Header from "header/Header";
import Body from "body/Body";
import Footer from "footer/Footer";
import Cards from "cards/Cards";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col p-0 m-0 bg-indigo-600 overflow-hidden">
      <Header />
      <Body>
        <Cards />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
