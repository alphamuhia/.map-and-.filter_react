import "./App.css";
import React from "react";
import Students from "./components/Students";

function App() {
  // let fruits_list = ["mangoes", "bananas", "oranges", "berries", "peach"];
  // let name_list = [
  //   {
  //     id: 1,
  //     student_name: "eva",
  //     student: true,
  //   },
  //   {
  //     id: 1,
  //     student_name: "dan",
  //     student: true,
  //   },
  //   {
  //     id: 1,
  //     student_name: "cain",
  //     student: true,
  //   },
  //   {
  //     id: 1,
  //     student_name: "alpha",
  //     student: false,
  //   },
  // ];
  return (
    <div>
      <Students />
      {/* <h1 className="text-4xl">list</h1>
      <ul>
        {fruits_list.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h1 className="text-4xl">Names</h1>
      <ul>
        {name_list.map((name) => (
          <li key={name.id}>
            {name.student_name} - {name.student ? "true" : "false"}
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default App;
