import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image from "./image.webp";
import { motion, useTransform, useViewportScroll } from "framer-motion";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

/* marche po ( effet lettre apparet une par une ) */
const firstword = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const secondword = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};
const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};
function Page2({ imageDetails }) {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.25]); // [ du haut de la page (0), jusque en bas (1)], [scale passe de 1 ( en haut ), a 1.25 ( en bas )]

  const [canScroll, setCanScroll] = useState(false);

  useEffect(() => {
    if (canScroll === false) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [canScroll]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.7, ...transition } }}
      >
        <motion.span variants={firstword} className="span_1">
          <motion.span variants={letter}>2</motion.span>
          <motion.span variants={letter}>è</motion.span>
          <motion.span variants={letter}>m</motion.span>
          <motion.span variants={letter}>e</motion.span>
        </motion.span>
        <motion.span variants={secondword} className="span_2">
          <motion.span variants={letter}>p</motion.span>
          <motion.span variants={letter}>a</motion.span>
          <motion.span variants={letter}>g</motion.span>
          <motion.span variants={letter}>e</motion.span>
        </motion.span>
      </motion.div>

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        className="container_image_pagetransi segondepage"
        id="top"
      >
        <motion.div
          onAnimationComplete={() => setCanScroll(true)}
          initial={{
            y: "-50%",
            width: imageDetails.width,
            height: imageDetails.height,
          }}
          animate={{
            y: 0,
            width: "100%",
            transition: { delay: 0.2, ...transition },
          }}
          className="frame"
          style={{
            width: "100%",
            height: "400px",
          }}
        >
          <Link to={`/page`}>
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{
                transition: { delay: 0.2, ...transition },
                y: -1000,
                scale: 1,
              }}
              transition={transition}
              style={{
                width: "100%",
                scale: scale,
              }}
              src={image}
              alt=""
            />
          </Link>
        </motion.div>
      </motion.div>
      <div className="pourscroll">
        <p>juste pour pouvoir scroll</p>
      </div>
    </>
  );
}

export default Page2;
