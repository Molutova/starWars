import React from "react";

export default function Catalog() {
  const catalogSerials = [
    "Naruto",
    "Bleach",
    "One Peace",
    "Atack on Titan",
    "Demon Slayer",
    "Naruto",
    "Bleach",
    "One Peace",
    "Atack on Titan",
    "Demon Slayer",
    "Naruto",
    "Bleach",
    "One Peace",
    "Atack on Titan",
    "Demon Slayer",
    "Naruto",
    "Bleach",
    "One Peace",
    "Atack on Titan",
    "Demon Slayer",
  ];
  return (
    <div>
      Catalog
      {/* <h2>{catalogFilms[0]}</h2>
      <h2>{catalogFilms[1]}</h2>
      <h2>{catalogFilms[2]}</h2>
      <h2>{catalogFilms[3]}</h2> */}
      {catalogSerials.map((film) => {
        return <h2>{film}</h2>;
      })}
    </div>
  );
}
