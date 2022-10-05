import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { GenericButton } from "../../common";
import { ArrowButton } from "./components";

export const CarouselComponent = () => {
  const [itemsList, setItemsList] = useState([
    {
      name: "La Casa del Dragón",
      img: "https://art-gallery-latam.api.hbo.com/images/GYsYeoAxKH8LCwgEAAAOR/tile?v=6cb7b53225b2718ca7289d87fcc3979f&size=1160x2511&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:hbo&language=es-419",
      logoImg:
        "https://art-gallery-latam.api.hbo.com/images/GYsYeoAxKH8LCwgEAAAOR/logoburnedin?v=8837e8180ae796b6f2161f0aba6a7b6d&size=840x253&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&language=es-419",
    },
    {
      name: "Cuando un Ángel Se Enamora",
      img: "https://art-gallery-latam.api.hbo.com/images/GYshSAgEKdsLCwgEAAAU_/tile?v=27af7db52a6d53a42fbe43fb681cf992&size=1160x2511&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:not-in-a-hub&language=es-419",
      logoImg:
        "https://art-gallery-latam.api.hbo.com/images/GYshSAgEKdsLCwgEAAAU_/logoburnedin?v=b1b5e1db6c61db6c6effed6c06059cb9&size=840x253&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&language=es-419",
    },
    {
      name: "Rick and Morty",
      img: "https://art-gallery-latam.api.hbo.com/images/GXkRjxwjR68PDwwEAABKJ/tile?v=c48236782b240e86a14e81263a95c03a&size=1160x653&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&overlayImage=urn:warnermedia:brand:adult-swim&language=es-419",
      logoImg:
        "https://art-gallery-latam.api.hbo.com/images/GXkRjxwjR68PDwwEAABKJ/logoburnedinleft?v=9066a4b1774a14799596582121109312&size=360x108&compression=low&protection=false&scaleDownToFit=false&productCode=hboMax&language=es-419",
    },
  ]);
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="carousel-container d-flex flex-column">
      <Carousel
        selectedItem={selectedItem}
        onChange={(i) => setSelectedItem(i)}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        renderIndicator={(clickHandler, isSelected) => (
          <div
            className={`carousel-indicator ${isSelected ? "selected" : ""}`}
            onClick={clickHandler}
          />
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <ArrowButton
            clickHandler={clickHandler}
            hasNext={hasNext}
            direction="next"
          />
        )}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <ArrowButton
            clickHandler={clickHandler}
            hasNext={hasPrev}
            direction="prev"
          />
        )}
      >
        {itemsList.map((value, i) => {
          return (
            <img
              src={value.img}
              alt="Previous-vist"
              className="carousel-img"
              key={i}
            />
          );
        })}
      </Carousel>
      <div className="carousel-body d-flex flex-column align-center">
        <div className="logo">
          <img src={itemsList[selectedItem].logoImg} alt="Title" className="" />
        </div>
        <span className="inner-text fw-500">
          {itemsList[selectedItem].name}
        </span>
        <div className="d-inline-flex align-center" style={{ gap: 17 }}>
          <GenericButton preset="play_button" />
          <GenericButton preset="info_button" />
        </div>
      </div>
    </div>
  );
};
