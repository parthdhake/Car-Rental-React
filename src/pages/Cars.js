import axios from "axios";
import React, { useEffect } from "react";
import Header from "../components/Header";
import VehicleList from "../components/VehicleList";

export default function Cars() {
  const [cars, setCars] = React.useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/cars").then((res) => {
      setCars(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <Header pageName="Cars" />
      <div className="container" style={{ zIndex: 2 }}>
        <VehicleList cars={cars} />
      </div>
    </div>
  );
}
