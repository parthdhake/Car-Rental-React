import React, { useRef, useEffect } from "react";
import user from "../assets/icons/user-silhouette.png";
import dashboard from "../assets/icons/dashboard.png";
import rupeeSign from "../assets/icons/rupee.svg";
import { Link } from "react-router-dom";
import { TweenLite } from "gsap";
import "./main.css";

export default function CarCards(props) {
  const CarCards = useRef();

  useEffect(() => {
    TweenLite.fromTo(
      CarCards.current,
      {
        opacity: 0,
        y: 50,
        x: 50,
      },
      {
        y: 0,
        x: 0,
        opacity: 1,
        duration: 0.1,
        delay: 0.3,
        ease: "power3",
      }
    );
  }, [CarCards]);

  const handleMouseEnter = () => {
    TweenLite.to(CarCards.current, {
      x: -2,
      y: -4,
      delay: 0.1,
      duration: 0.3,
      ease: "power3",
    });
  };

  const handleMouseLeave = () => {
    TweenLite.to(CarCards.current, {
      x: 2,
      y: 4,
      delay: 0.1,
      duration: 0.3,
      ease: "power3",
    });
  };

  return (
    <Link
      to={`cars/${props.carId}`}
      className="RouterLink"
      ref={CarCards}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="VehicleCard" ref={CarCards}>
        <div>
          <h3 className="VehicleName">{props.name}</h3>
        </div>
        <div>
          <img src={props.image} alt={props.name} style={{ width: "300px" }} />
        </div>
        <div className="VehicleSpecs">
          <div className="VehicleSpecs-spec">
            <img src={user} alt="user" style={{ width: "20px" }} />
            <p className="VehicleSpecs-p">{props.seats}</p>
          </div>
          <div className="VehicleSpecs-spec">
            <img src={dashboard} alt="dashboard" style={{ width: "20px" }} />
            <p className="VehicleSpecs-p">{props.mpg} mpg</p>
          </div>
          <div className="VehicleSpecs-spec">
            <img src={rupeeSign} alt="dollar sign" style={{ width: "13px" }} />
            <p className="VehicleSpecs-p">{props.price} Per Day</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
