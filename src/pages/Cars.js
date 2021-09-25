import axios from "axios";
import "./css/cars.css";
import React, { useEffect } from "react";
import Header from "../components/Header";
import VehicleList from "../components/VehicleList";
import Select from "react-select";
import { Button } from "@mui/material";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

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
      <div className="container" style={{ zIndex: 2, marginTop: "40px" }}>
        <div className="filter">
          <Select options={options} />
          <Select options={options} />
          <Select options={options} />
        </div>
        <div className="filter">
          <Button
            variant="contained"
            color="success"
            style={{ marginTop: "20px" }}
          >
            Filter
          </Button>
        </div>

        <VehicleList cars={cars} />
      </div>
    </div>
  );
}
