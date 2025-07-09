"use client";

import { Hammer, Heart, Gem, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function Assurance() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-[#e0b287]  py-24 px-6 md:px-20 border-2 border-gray-200"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Part */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-5xl md:text-7xl font-light text-gray-800">
            We <span className="text-blue-700 font-semibold">Assure</span>
          </h2>
          <p className="text-gray-500 mt-2 text-lg md:text-xl">
            Crafted by experts, cherished by you
          </p>
        </motion.div>

        {/* Right: Features */}
        <div className="flex flex-wrap justify-center md:justify-start gap-14 md:gap-24 text-2xl md:text-3xl text-gray-800">
          <AnimatedFeature icon={Hammer} title="Quality" subtitle="Craftsmanship" />
          <AnimatedFeature icon={Heart} title="Ethically" subtitle="Sourced" />
          <AnimatedFeature icon={Gem} title="100%" subtitle="Transparency" />
        </div>
      </div>
    </motion.section>
  );
}


function AnimatedFeature({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center group transition-all duration-300"
    >
      <Icon
        size={36}
        className="text-blue-600 mb-2 group-hover:scale-110 group-hover:text-yellow-700 transition"
      />
      <p className="text-sm text-gray-800 font-medium leading-tight">
        {title}
        <br />
        {subtitle}
      </p>
    </motion.div>
  );
}
