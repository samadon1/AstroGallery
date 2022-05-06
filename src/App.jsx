import React, { useState, useEffect } from "react";
import ImageCard from "./components/imageCard";
import ImageSearch from "./components/imageSearch";
import { motion } from "framer-motion";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("galaxy");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <motion.div
      initial={{ y: 520 }}
      animate={{ y: 0, marginTop: 120 }}
      transition={{ type: "spring", stiffness: 40 }}
      className=" container mx-auto"
    >
      <div className="flex justify-center text-5xl font-bold ">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ scale: 2, marginBottom: 80, marginTop: 120, opacity: 0.8 }}
          transition={{ delay: 1.2 }}
        >
          AstroGallery
        </motion.h1>
      </div>

      <ImageSearch searchText={(text) => setTerm(text)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-6xl text-center mx-auto mt-32">No Images Found</h1>
      )}
      {isLoading ? (
        <h1 className="text-3xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <ImageCard key={image.id} image={image} />
          ))}
        </div>
      )}
    </motion.div>
  );
}
