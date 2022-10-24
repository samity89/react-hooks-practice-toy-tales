import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])
  // const [likes, setLikes] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3001/toys")
    .then((response) => response.json())
    .then((toys) => setToys(toys));
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(toy) {
    setToys([...toys, toy]);
  }

  function handleRemoveToy(id) {
    const updatedToys = toys.filter(toy => toy.id !== id)
    setToys(updatedToys)
  }

  function handleDeleteToy(id) {
    fetch("http://localhost:3001/toys/" + id, {
      method: "DELETE",
  }) 
      .then(() => handleRemoveToy(id))
  }

  function handleIncreaseLikes(updatedToy) {
    const updatedToys = toys.map((toy => {
      if (toy.id === updatedToy.id) {
        return updatedToy;
        }
        else {
        return toy
        }
    }))
    setToys(updatedToys)
  }

  function handleUpdateLikes (toy) {
      console.log(toy)
    fetch("http://localhost:3001/toys/" + toy.id , {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        likes: toy.likes+1
      })
      }) 
      .then((response) => response.json())
      .then((updatedToy) => (handleIncreaseLikes(updatedToy)))
  }
  

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
      handleDeleteToy={handleDeleteToy}
      handleUpdateLikes={handleUpdateLikes}
      toys={toys} />
    </>
  );
}

export default App;
