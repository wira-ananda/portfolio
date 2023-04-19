import React from "react";
import "./App.scss";
import Home from "./js/Home";
import About from "./js/About";
import Header from "./js/Navbar";
import Services from "./js/Services";
import Opening from "./js/Opening";
import Skills from "./js/Skills";
import Project from "./js/Project";
import Contact from "./js/Contact";
import Footer from "./js/Footer";

const Variants = {
  awal: {
    opacity: 0,
  },
  awal2: {
    opacity: 0,
  },
  skillsAwal: {
    opacity: 0,
    y: -100,
  },
  skillsAkhir: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  akhir: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
    },
  },
  akhir1: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 1,
    },
  },
  akhir2: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 2,
    },
  },
  akhir3: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 3,
    },
  },
};

export default function App() {
  return (
    <main className="App">
      <Opening Variants={Variants} />
      <>
        <Header />
        <Home Variants={Variants} />
        <About Variants={Variants} />
        <Services Variants={Variants} />
        <Skills Variants={Variants} />
        <Project Variants={Variants} />
        <Contact Variants={Variants} />
        <Footer Variants={Variants} />
      </>
    </main>
  );
}
