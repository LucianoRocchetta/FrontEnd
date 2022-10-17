import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { CardCarouselProps } from "../../../shared/types";
import { Card } from "../Card";

export const CardsCarousel = (props: CardCarouselProps) => {
  const { cards } = props;
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  return (
    <div className="grid-container" {...events} ref={ref}>
      {cards.map((value, i) => (
        <Card {...value} key={i} />
      ))}
    </div>
  );
};
