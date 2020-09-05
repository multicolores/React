import React from "react";
import { Link } from "react-router-dom";
import image from "./image.webp";
import { motion } from "framer-motion";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

function Home2({ imageDetails }) {
  return (
    <>
      <motion.h1 exit={{ opacity: 0 }} transition={transition} className="h1">
        Home
      </motion.h1>
      <div className="container_image_pagetransi segondepage">
        <div
          className="frame"
          style={{
            width: imageDetails.width,
            height: imageDetails.height,
          }}
        >
          <Link to={`/page`}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={transition}
              style={{
                width: "100%",
              }}
              src={image}
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home2;
