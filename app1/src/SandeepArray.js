import React from "react";
import Table from "./Table";

export default function SandeepArray() {
  let users = [
    {
      fname: "Shannon",
      lname: "Sidaway",
      tel: "(378)032-8852",
      address: "268 Adipiscing Ct",
      city: "Hartford",
      state: "MD",
      zip: 50899
    },
    {
      fname: "Leslie",
      lname: "Nacita",
      tel: "(751)547-6361",
      address: "3570 Lacus Ln",
      city: "Brookville",
      state: "TN",
      zip: 90097
    },
    {
      fname: "Regine",
      lname: "Skublics",
      tel: "(663)716-2412",
      address: "3065 Pulvinar Ave",
      city: "Ashburn",
      state: "DC",
      zip: 12576
    }
  ];

  return <Table data={users} />;
}
