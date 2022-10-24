import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeleteToy, handleUpdateLikes }) {
  const toysToRender = toys.map((toy) => (
      <ToyCard 
        toy={toy} 
        key={toy.id} 
        handleDeleteToy={handleDeleteToy}
        handleUpdateLikes={handleUpdateLikes}
        />
      ))
  return (
    <div id="toy-collection">{toysToRender}</div>
  );
}

export default ToyContainer;
