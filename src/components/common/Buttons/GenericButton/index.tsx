import React from "react";
import { IoInformation, IoPlay, IoAddCircle } from "react-icons/io5";
import { GenericButtonProps } from "../../../../shared/types";

export const GenericButton = (props: GenericButtonProps) => {
  const { preset, children, ...params } = props;

  switch (preset) {
    case "play_button":
      return (
        <button {...params} className="preset-button play">
          <IoPlay color="#1C1C1C" />
        </button>
      );
    case "info_button":
      return (
        <button {...params} className="preset-button info">
          <IoInformation color="white" />
        </button>
      );
    case "add_button":
      return (
        <button {...params} className="preset-button add">
          <IoAddCircle  />
        </button>
      );
    default:
      return <button {...params}>{children}</button>;
  }
};
