import React from "react";

export default function Table(props) {
  console.log(props.data);
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {Object.keys(props.data[0]).map(propperty => {
              return <th key={propperty}>{propperty}</th>;
            })}
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((obj, i) => {
            console.log(i);
            return (
              <tr key={i}>
                {Object.keys(obj).map(key => {
                  return <td key={key}>{obj[key]}</td>;
                })}
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
