import React from "react";
import Cars from "../pages/Cars";
import Home from "../pages/Home";

export default function Layout(props) {
  return <div style={{ flexGrow: "2" }}>{props.children}</div>;
}
