import React, { useState } from "react";
import ig from "../svg/instagram.svg";
import google from "../svg/google.svg";
import github from "../svg/github.svg";
import dribble from "../svg/dribble.svg";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";

export default function Contact(props) {
  const AnimationVariants = props.Variants;
  return (
    <div
      id="Contact"
      className="w-[100vw] h-[60vh] md:h-[80vh] lg:h-[70vh] 2xl:h-[60vh] bg-backgroundColor"
    >
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className="w-[70%] top-[5vh] mx-auto text-white"
      >
        <h1 className="text-[4rem] font-bold mb-3">
          Thanks for stopping here ✌️
        </h1>
        <h1 className="text-[2.3rem]">
          I'm currently opening a freelance as a designer and developer, if you
          are interested in using my services, you can{" "}
          <a
            id="contactButton"
            className="cursor-pointer font-bold"
            href="https://wa.me/62895632449666"
          >
            contact
          </a>{" "}
          me or send me an{" "}
          <a
            id="emailButton"
            className="cursor-pointer font-bold"
            href="mailto:wira007911@gmail.com?subject=Hai👋"
          >
            email
          </a>
          ...
        </h1>
        <div className="mt-[10vh]">
          <h1 className="text-[4rem] font-bold mb-1">Dont be a stranger 👋</h1>
          <h1 className="text-[2rem]">connect with me online...</h1>
          <div className="flex gap-[1rem] mt-[.7vh] right-[.3rem]">
            <SocialComponent
              image={ig}
              link="https://www.instagram.com/wraa_gnn/"
            />
            <SocialComponent
              image={google}
              link="mailto:wira007911@gmail.com?subject=Hai👋"
            />
            <SocialComponent
              image={github}
              link="https://github.com/Wira-Ananda"
            />
            <SocialComponent
              image={dribble}
              link="https://dribbble.com/dragwild911"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialComponent(props) {
  return (
    <a href={props.link} className="cursor-pointer">
      <img src={props.image} className="w-[30px] md:w-[45px]" />
    </a>
  );
}
