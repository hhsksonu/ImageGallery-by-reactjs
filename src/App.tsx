import React from "react";
import ImageGallery from "./components/ImageGallery";

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Image Gallery</h1>
      <ImageGallery />
    </div>
  );
};

export default App;
