import React from "react";

export const scrollCarouselOverflowHandler = (
  element: React.UIEvent<HTMLElement>
) => {
  const el = element.currentTarget;
  const isLeft = el.scrollWidth > el.clientWidth;

  if (!isLeft) {
    el.classList.remove("is-left-overflowing", "is-right-overflowing");
    return;
  }
  const fullScrollRight = el.scrollWidth - el.clientWidth + el.scrollLeft;
  const isScrolledToRight = checkToleranceNumbers(
    [el.scrollLeft * 2, fullScrollRight],
    2
  );
  const isScrolledToLeft = el.scrollLeft === 0;

  el.classList.toggle("is-left-overflowing", !isScrolledToRight);
  el.classList.toggle("is-right-overflowing", !isScrolledToLeft);
};

export const checkToleranceNumbers = (
  numsArray: number[],
  toleranceNumber: number
) => {
  let min = Math.min(...numsArray);
  return numsArray.every((x) => Math.abs(min - x) <= toleranceNumber);
};
