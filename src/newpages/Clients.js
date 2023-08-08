import React from "react";

export default function Clients() {
  const dataOfClients = [
    { name: "Nailya", age: 13, email: "nm@com" },
    { name: "Alexey", age: 26, email: "az@com" },
    { name: "Saltanat", age: 23, email: "st@com" },
    { name: "Yaroslav", age: 17, email: "ya@com" },
  ];
  const orangeStyle = { color: "orange" };
  const greenStyle = { color: "green" };
  return (
    <div>
      Clients our clients :{" "}
      {dataOfClients.map((client) => {
        if (client.age > 18) {
          return (
            <h2 className="orange">
              Имя:{client.name}, Возраст: {client.age}, e-mail: {client.email}
            </h2>
          );
        } else {
          return (
            <h2 className="green"> Имя:{client.name}, Возраст: UNDER 18 </h2>
          );
        }
      })}
    </div>
  );
}
