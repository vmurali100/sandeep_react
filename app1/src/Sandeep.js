import React from "react";

export function Sandeep() {
  //   const message = "Hello Sandeep How Are you";
  let person = {
    fname: "Shannon",
    lname: "Sidaway",
    tel: "(378)032-8852",
    address: "268 Adipiscing Ct",
    city: "Hartford",
    state: "MD",
    zip: 50899
  };
  var keys = Object.keys(person);

  return (
    // <ul>
    //   {keys.map(key => {
    //     return <li>{person[key]}</li>;
    //   })}
    // </ul>
    <div>
      {keys.map(key => {
        return <p>{person[key]}</p>;
      })}
    </div>
  );
}

export function Sandeep2() {
  return <h1>I am From Sandeep2</h1>;
}
