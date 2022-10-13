import React from "react";
import { CardProps } from "../../../shared/types";
import { GenericButton } from "../Buttons";
import { Link } from "react-router-dom";

export const Card = ({ img, to }: CardProps) => {
  return (
    <Link to={to} className="card">
      <img src={img} alt="card-background" />
      <GenericButton preset="play_button" onClick={() => {}} />
    </Link>
  );
};
