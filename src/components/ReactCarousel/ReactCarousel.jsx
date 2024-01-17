import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import img9 from "/img9.png";
import img10 from "/img10.png";
import img11 from "/img11.png";
import img12 from "/img12.png";
import { motion, AnimatePresence } from "framer-motion";
const ReactCarousel = () => {
  const imgg = [img9, img10, img11, img12];
  const [currentImage, setCurrentImage] = useState(img9);

  useEffect(() => {
    const settingIndex = setInterval(() => {
      const currentIndex = imgg.indexOf(currentImage);
      const nextIndex = (currentIndex + 1) % imgg.length;
      setCurrentImage(imgg[nextIndex]);
    }, 3000);
    return () => clearInterval(settingIndex);
  }, [currentImage]);
  return (
    <Box position={"absolute"} top={6} left={"145px"} >
      <AnimatePresence mode='wait'>
        <motion.img
          key={currentImage}
          src={currentImage}
          alt="carousel-image"
          height={'560px'}
          width={'254px'}
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.9 }}
        />
      </AnimatePresence>
    </Box>
  );
};

export default ReactCarousel;
