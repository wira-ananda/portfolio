import React from "react";
import wiraa from "../../public/iconPortfolio.svg";
import {
  motion,
  AnimatePresence,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";

export default function Footer(props) {
  const AnimationVariants = props.Variants;
  return (
    <div id="Footer" className="   h-[8vh] md:h-[9vh] lg:h-[10.5vh] w-[100vw] ">
      <motion.div
        variants={AnimationVariants}
        initial="awal"
        whileInView="akhir"
        className=" w-[75%] flex justify-between m-auto items-center text-white"
      >
        <div className="flex items-center gap-[1rem]">
          <img src={wiraa} className="w-[40px] md:w-[50px] left-[-.5rem]" />
          <h1 className="text-[1.5rem]">DESIGN & DEVELOPMENT</h1>
        </div>
        <h1 className="text-[1.78rem]">
          created by <a className="font-semibold">Wiraa</a>
        </h1>
      </motion.div>
    </div>
  );
}
