import { FC } from "react";

type props = {
  image: string;
  title: string;
  description: string;
};

const Card: FC<props> = ({ image, title, description }) => {
  console.log("card is being rendered");
  return (
    <div>
      <img src={image} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Card;
