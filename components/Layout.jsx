import {Children} from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";

export default function Layout (props) {
  const {children} = props;
  return (
    <>
      <Header />
      <main>
        { children }
      </main>
      <Footer />
    </>
  )
}