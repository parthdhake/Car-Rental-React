import axios from "axios";
import "./css/cars.css";
import React, { useEffect } from "react";
import Header from "../components/Header";
import VehicleList from "../components/VehicleList";
import Select from "react-select";
import { Button } from "@mui/material";

const typeOptions = [
  { value: "coupe", label: "Coupe" },
  { value: "sedan", label: "Sedan" },
  { value: "truck", label: "Truck" },
  { value: "suv", label: "SUV" },
  { value: "mini van", label: "Mini-Van" },
  { value: "convertable", label: "Convertable" },
];

const seatsOptions = [
  { value: 2, label: "2 Seats" },
  { value: 4, label: "4 Seats" },
  { value: 5, label: "5 Seats" },
  { value: 7, label: "7 Seats" },
  { value: 8, label: "8 Seats" },
];

const priceOptions = [
  { value: "40-60", label: "40$ - 60$" },
  { value: "61-80", label: "61$ - 80$" },
  { value: "81-100", label: "81$ - 100$" },
];

export default function Cars() {
  const [cars, setCars] = React.useState([]);

  const [params, setParams] = React.useState({});

  useEffect(() => {
    axios.get("http://localhost:5000/cars").then((res) => {
      setCars(res.data);
      console.log(res.data);
    });
  }, []);

  const filterCars = () => {
    console.log(params);
    axios
      .get("http://localhost:5000/cars", {
        params: params,
      })
      .then((res) => {
        setCars(res.data);
        console.log(res.data);
      });
  };

  const handleTypeChange = (data) => {
    if (data == null) {
      setParams({ ...params, type: null });
      return;
    }
    setParams({
      ...params,
      type: data.value,
    });
  };

  const handleSeatChange = (data) => {
    if (data == null) {
      setParams({ ...params, seats: null });
      return;
    }
    setParams({
      ...params,
      seats: data.value,
    });
  };

  const handlePriceChange = (data) => {
    if (data == null) {
      setParams({ ...params, price: null });
      return;
    }
    setParams({
      ...params,
      price: data.value,
    });
  };

  return (
    <div>
      <Header pageName="Cars" />
      <div className="container" style={{ zIndex: 2, marginTop: "40px" }}>
        <div className="filter">
          <Select
            name="type"
            onChange={handleTypeChange.bind(this)}
            isClearable={true}
            options={typeOptions}
          />
          <Select
            name="seat"
            onChange={handleSeatChange.bind(this)}
            isClearable={true}
            options={seatsOptions}
          />
          <Select
            name="price"
            onChange={handlePriceChange.bind(this)}
            isClearable={true}
            options={priceOptions}
          />
        </div>
        <div className="filter">
          <Button
            variant="contained"
            onClick={() => filterCars()}
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
