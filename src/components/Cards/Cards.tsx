import * as React from "react";
import Typography from "../Typography";
import Card, { CardProps } from "../Card/Card";

export interface CardsProps {
  title: string;
  desc: string;
  imgPath: string;
  price: string | number;
  cards?: CardProps[];
}

const Cards: React.FC<CardsProps> = ({ title, cards }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Typography as="h3" variant="h3" className="mb-14">
        {title}
      </Typography>
      <div className="grid grid-cols-3 grid-rows-2 gap-10 ">
        {cards?.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
