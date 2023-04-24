import Navbar from "@/componente.js/Navbar";
import "../styles/globals.css";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/componente.js/Footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
