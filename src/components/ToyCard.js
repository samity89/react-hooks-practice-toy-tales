import React from "react";

function ToyCard(props) {
  const {name, image, likes, id} = props.toy

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes} Likes </p>
      <button 
        className="like-btn"
        onClick={() => props.handleUpdateLikes(props.toy)}
      >Like {"<3"}</button>
      <button 
        className="del-btn" 
        onClick={() => props.handleDeleteToy(id)}
      >Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
