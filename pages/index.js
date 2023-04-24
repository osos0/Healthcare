import React from "react";
import Header from "@/componente.js/Header";
import AboutUs from "@/componente.js/About";
import Working from "@/componente.js/Working";
import LastestNews from "@/componente.js/LastestNews";
import Mobile from "@/componente.js/Mobile";

function Home() {
  return (
    <>
      <Header />
      <AboutUs />
      <Working />
      <Mobile />
      <LastestNews />
    </>
  );
}

export default Home;
