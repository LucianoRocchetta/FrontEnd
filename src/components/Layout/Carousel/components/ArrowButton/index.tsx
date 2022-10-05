import React from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { ArrowButtonProps } from "../../../../../shared/types";
import { GenericButton } from "../../../../common";

export const ArrowButton = (props: ArrowButtonProps) => {
  const { hasNext, clickHandler, direction } = props;
  return (
    <GenericButton
      className={`carousel-button carousel carousel-slider control-arrow ${
        direction === "prev" ? "left" : "right"
      }`}
      disabled={!hasNext}
      onClick={clickHandler}
    >
      <div className="d-flex">
        {direction === "prev" ? (
          <IoChevronBack color="white" />
        ) : (
          <IoChevronForward color="white" />
        )}
      </div>
    </GenericButton>
  );
};
