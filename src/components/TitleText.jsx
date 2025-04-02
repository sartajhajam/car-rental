"use client";
import React from "react";
import { motion } from "framer-motion";
import { textVariant2 } from "@/constants/motion";

const TitleText = ({title,textStyles}) => {
  return <motion.h2 variants={textVariant2} initial="hidden" whileInView="show" className={`mt-2 text-cyan-400 font-bold md:text-[64px] text-[36px] text-center ${textStyles}`}>
    {title}
  </motion.h2>;
};


export default TitleText;
