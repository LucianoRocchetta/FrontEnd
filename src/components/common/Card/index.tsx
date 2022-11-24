import React from "react";
import { CardProps } from "../../../shared/types";
import { GenericButton } from "../Buttons";
import { Link } from "react-router-dom";

export const Card = ({ backgroundImage, to }: CardProps) => {
  return to ? (
    <Link to={to} className="card">
      <img src={backgroundImage} alt="card-background" />
      <GenericButton preset="play_button" onClick={() => {}} />
    </Link>
  ) : (
    <div>
      <img src={backgroundImage} alt="card-background" />
      <GenericButton preset="play_button" onClick={() => {}} />
    </div>
  );
};
