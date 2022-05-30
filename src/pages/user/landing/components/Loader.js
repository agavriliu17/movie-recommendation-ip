import React from "react";
import { motion } from "framer-motion";

import Image from "./Image";

// Import images
import movie2 from "../images/movie1.webp";
import movie1 from "../images/movie2.jpg";
import movie3 from "../images/movie3.webp";
import movie4 from "../images/image4.jpg";
import big_movie from "../images/big_movie.webp";

const images = [movie1, movie2, movie3, movie4];

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <ImageBlock variants={item} id="image-1" index={0} />
        <motion.div variants={itemMain} className="transition-image">
          <motion.img layoutId="main-image-1" src={big_movie} />
        </motion.div>
        <ImageBlock variants={item} id="image-3" index={1} />
        <ImageBlock variants={item} id="image-4" index={2} />
        <ImageBlock variants={item} id="image-5" index={3} />
      </motion.div>
    </motion.div>
  );
};

export const ImageBlock = ({ posX, posY, variants, id, index }) => {
  return (
    <motion.div
      variants={variants}
      className={`image-block ${id}`}
      style={{
        top: `${posY}vh`,
        left: `${posX}vw `,
      }}
    >
      <Image
        src={images[index]}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
