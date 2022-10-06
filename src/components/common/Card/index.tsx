import React from "react";
import { CardProps } from "../../../shared/types";
import {IoCaretForwardCircleSharp} from "react-icons/io5";

export const Card = ({img}:CardProps) => {
  return <div className="card">
      <img src = {img}/>
      <IoCaretForwardCircleSharp/>
    </div>;
};
