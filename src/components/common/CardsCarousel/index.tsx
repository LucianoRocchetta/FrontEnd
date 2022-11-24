import React, { useEffect, useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { scrollCarouselOverflowHandler } from "../../../shared/helpers";
import { CardCarouselProps } from "../../../shared/types";
import { Card } from "../Card";

export const CardsCarousel = (props: CardCarouselProps) => {
  const { cards, id } = props;
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {
    applyRubberBandEffect: true,
  });

  useEffect(() => {
    const scrollCarousel = document.querySelector(`#${id}`);
    if (!scrollCarousel) return () => {};
    if (scrollCarousel)
      scrollCarouselOverflowHandler({
        currentTarget: scrollCarousel,
      } as React.UIEvent<HTMLElement>);

    scrollCarousel.addEventListener("scroll", (e: any) =>
      scrollCarouselOverflowHandler(e)
    );

    return () => {
      scrollCarousel.removeEventListener("scroll", (e: any) =>
        scrollCarouselOverflowHandler(e)
      );
    };
  }, []);

  return (
    <div className="grid-container" {...events} ref={ref} id={id}>
      {cards.map((value, i) => (
        <Card {...value} key={i} />
      ))}
    </div>
  );
};
