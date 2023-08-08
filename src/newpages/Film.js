import React from "react";

export default function Film() {
  const catalogFilms = [
    "Sudzume",
    "Your Name",
    "Howel Caslte",
    "Tororo",
    "Magic Fight 0",
  ];
  // const westernFilms = [
  //   "Barbie",
  //   "Oppengamer",
  //   "Begin",
  //   "Blade Runner",
  //   "Interstaller",
  // ];
  const westernFilms = [
    {
      name: "barbie",
      author: "someone",
      realise: "2023",
    },
    {
      name: "oppengamen",
      author: "Nolan",
      realise: "2023",
    },
    {
      name: "begin",
      author: "Nolan",
      realise: "2010",
    },
    {
      name: "Blade runner",
      author: "Cubrick",
      realise: "1982",
    },
    {
      name: "Interstaller",
      author: "Nolan",
      realise: "2014",
    },
  ];
  const fruits = ["apple", "banana", "orange", "kiwi", "mango"];
  return (
    <div>
      Animation Film:
      {catalogFilms.map((film) => {
        return <h3>{film}</h3>;
      })}
      Western Film:
      {/* {westernFilms.map((film) => {
        return <h3>{film}</h3>;
      })} */}
      {westernFilms.map((film) => {
        return (
          <h3>
            Название фильма:{film.name}, автором являестя: {film.author}, год
            выхода: {film.realise}
          </h3>
        );
      })}
      Так же у нас есть фрукты:
      {fruits.map((fruit) => {
        return <h3>{fruit}</h3>;
      })}
    </div>
  );
}
