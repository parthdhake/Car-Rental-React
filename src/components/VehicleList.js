import React, { useEffect, useRef } from "react";
import CarCards from "./CarCards";
import { gsap } from "gsap";
import "./main.css";

export default function VehicleList(props) {
  let cardsContainer = useRef();

  useEffect(() => {
    gsap.to(cardsContainer.current, {
      opacity: 1,
      delay: 0.3,
    });
  }, [cardsContainer]);

  return (
    <div
      className="CarCards"
      style={{
        ...props.style,
        opacity: 0,
      }}
      ref={cardsContainer}
    >
      {props.cars.map((car, index) => {
        return (
          <CarCards
            key={car.id}
            carId={car.id}
            name={car.name}
            image={car.images}
            seats={car.seats}
            mpg={car.mpg}
            price={car.price}
          />
        );
      })}
    </div>
  );
}
