import React, { useState } from "react";
import { Box, Image, Button, HStack } from "@chakra-ui/react";

const images = [
  "https://plus.unsplash.com/premium_photo-1680740103993-21639956f3f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FtcGxlfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const TopCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <Box maxW="400px" mx="auto" my={4} overflow="hidden">
      <Image
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
      />

      <HStack justify="center" mt={4}>
        <Button onClick={prevImage} variant="outline">
          Previous
        </Button>
        <Button onClick={nextImage} variant="outline">
          Next
        </Button>
      </HStack>
    </Box>
  );
};

export default TopCarousel;
