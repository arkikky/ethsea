import React from "react";
import dynamic from "next/dynamic";

// @components
// const Navbar = dynamic(() => import("@layouts/Navbar"));
// const Footer = dynamic(() => import("@layouts/Footer"));

const Layouts = ({ children }) => {
  return (
    <>
      {/* @Navbar */}
      {/* <Navbar /> */}

      {/* @Main */}
      {children}

      {/* @Footer */}
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
