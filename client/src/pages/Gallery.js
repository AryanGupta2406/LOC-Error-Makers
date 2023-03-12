import { createContext, useState } from "react";
import Images from "../components/Images";
import Jumbutron from "../components/Jumbutron";
import SearchField from "../components/SearchField";
import useAxios from "../hook/useAxio";

// Create Context
export const ImageContext = createContext();

function Gallery() {
    console.log("process.env.REACT_APP_ACCESS_KEY ",process.env.REACT_APP_ACCESS_KEY);
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=all&client_id=${process.env.REACT_APP_ACCESS_KEY}`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbutron>
        <SearchField />
      </Jumbutron>
      <Images />
    </ImageContext.Provider>
  );
}

export default Gallery;
