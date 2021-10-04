import React, { useRef, useEffect } from "react";
import "flickity-imagesloaded";
import Header from "../components/Header";
import CheckIcon from "@material-ui/icons/Check";
import "../components/main.css";
import axios from "axios";
import "flickity/dist/flickity.min.css";
import user_img from "../assets/icons/user-silhouette.png";
import dashboard from "../assets/icons/dashboard.png";
import shift from "../assets/icons/shift.png";
import carImg from "../assets/icons/car.png";
import rupeeSign from "../assets/icons/rupee.svg";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { URLSearchParams } from "url";
// const congratsMsg = "Congrats you booked a fake ";

// const rewardMsg = "\nCheck the console (F12)  for your reward";

export default function CarDetails() {
  let currentID;
  const [car, setCurrentCar] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true);
  const checkStyle = {
    height: "18px",
  };
  const user = useSelector((state) => state.user);

  useEffect(() => {
    currentID = window.location.href.split("/")[4];
    axios.get("http://localhost:5000/cars/" + currentID).then((res) => {
      setCurrentCar(res.data);
      setIsLoading(false);
      console.log(res.data);
    });
  }, []);

  const bookCar = (car_id) => {
    fetch(
      `http://localhost:5000/rentacar?customer=${user.userDetails._id}&car=${car_id}&days=1`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      }
    ).then((res) => {
      if (res.status === 200) {
        console.log("Booking successful");
        setCurrentCar({ ...car, availableCars: 0 });
        alert("Booking successful");
      } else {
        console.log("Booking failed");
      }
    });

    // axios
    //   .get(
    //     "http://localhost:5000/rentacar",
    //     {
    //       params: { car: car_id, customer: user.userDetails._id, days: 1 },
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${user.token}`,
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     alert(res.data);
    //   });
  };

  return (
    <div className="SingleCar">
      <Header pageName="CarDetails" />
      {!isLoading ? (
        <div className="SingleCarContainer">
          <div className="SingleCarImgs box-shadow">
            <img src={car.images} alt={car.name} className="SingleCarImg" />
          </div>
          <div className="SingleCarDescription box-shadow">
            <div className="SingleCarDescriptionH1">
              <h1>{car.name}</h1>
            </div>
            <div className="SingleCarSpecs">
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={user_img}
                  alt="seats"
                ></img>
                <p>{car.seats} Seats</p>
              </div>
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={shift}
                  alt="transmission"
                ></img>
                <p>Auto</p>
                <p></p>
              </div>
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={carImg}
                  alt="car doors"
                ></img>
                <p>{car.doors} Doors</p>
              </div>
              <div className="SingleCarSpec">
                <img
                  className="SingleCarSpecImg"
                  src={dashboard}
                  alt="mpg dashboard"
                ></img>
                <p>{car.mpg} mpg</p>
              </div>
            </div>
            <div className="SingleCarFeatures">
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Audio Input</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Bluetooth</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Heated Seats</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>All Wheel Drive</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>A/C & Heating</p>
              </div>
              <div className="SingleCarFeature">
                <CheckIcon style={checkStyle} />
                <p>Dual Airbags</p>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              {car.availableCars === 1 ? (
                <p style={{ color: "greenyellow" }}>Car Available</p>
              ) : (
                <p style={{ color: "red" }}>Car Not Available</p>
              )}
            </div>
            <div className="SingleCarPrice">
              <div className="SingleCarPriceH2">
                <img src={rupeeSign} alt="dollar sign"></img>
                <h2>
                  {car.price} <span>Per Day</span>
                </h2>
              </div>
              <Button
                variant="contained"
                color="success"
                disabled={car.availableCars === 0}
                style={{
                  width: "auto",
                  margin: "8px 0 40px 0",
                }}
                onClick={() => bookCar(car._id)}
              >
                Book Now
              </Button>
            </div>
          </div>
          <div className="SingleCarSimilarH3">
            <h3>Similar Vehicles</h3>
          </div>
          {/* <div className="SingleCarSimilar">
                <VehicleList
                  // cars={shortSimilarArray}
                  vehicleId={vehicleId}
                  minIndex={0}
                  maxIndex={2}
                  style={similarVehiclesStyle}
                />
              </div> */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
