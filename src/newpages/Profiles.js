import React from "react";
import { useParams } from "react-router-dom";
export default function Products() {
  const parametr = useParams();
  console.log(useParams());
  return <div>{parametr.id}</div>;
}
