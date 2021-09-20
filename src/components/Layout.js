import React from "react";
import Cars from "../pages/Cars";
import Home from "../pages/Home";
import bgImage from "../assets/abstract-envelope.svg";

export default function Layout(props) {
  return (
    <div
      style={{
        flexGrow: "2",
        margin: "10px",
        // background: "red",
      }}
    >
      {props.children}
    </div>
  );
}
