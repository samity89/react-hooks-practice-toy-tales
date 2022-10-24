import React, {useState} from "react";

const initialState = {
  name: "",
  image: ""
}

function ToyForm({handleAddToy}) {
  const [formData, setFormData] = useState(initialState)
  const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]:event.target.value
      })
  }
  const handleSubmit = (event) => {
      
    const newToy = {
        ...formData,
        likes: 0
      }
      
      event.preventDefault();
      
      fetch("http://localhost:3001/toys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newToy)
      }) 
        .then((response) => response.json())
        .then((toy) => handleAddToy(toy));
      
      setFormData(initialState)
  }

  
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          onChange={handleChange}
          value={formData.name}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input
          onChange={handleChange}
          value={formData.image}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
