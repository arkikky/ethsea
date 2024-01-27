import React from "react";

// @components
import Navbar from "@layouts/Navbar";
import Footer from "@layouts/Footer";

const Layouts = ({ children }) => {
  return (
    <>
      {/* @navbar */}
      <Navbar />

      {/* @main */}
      {children}

      {/* @footer */}
      <Footer />
    </>
  );
};

export default Layouts;
