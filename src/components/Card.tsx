import React from "react";
import profilepic from "../assets/dan.jpg"; // Import the image directly into the Card component

// const Card: React.FC = () => {
  // Define the content inside the component
  // const title = "Sample Card";
  // const description = "This is a card with an image.";

  interface Props {
    title: string;
    description: string;
  }
  const imageUrl = profilepic; // Reference the imported image
  function Card({ title, description }: Props) {
    return (
      <div className="card">
        <img className="card-image" src={imageUrl} alt={title} />
        <h2 className="card-title">{title}</h2>
        <p className="card-text">{description}</p>
      </div>
    );
  }
// };

export default Card;
