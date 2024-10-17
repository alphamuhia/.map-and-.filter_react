import React from "react";

function Students() {
  let students_list = [
    {
      id: 1,
      student_name: "Joan Lucy",
      course_name: "Software Development",
      email: "joan1@gmail.com",
      completed: "true",
    },
    {
      id: 2,
      student_name: "John Kent",
      course_name: "Web Development",
      email: "johnk.s@gmail.com",
      completed: "false",
    },
    {
      id: 3,
      student_name: "Joseph Klinton",
      course_name: "Data Analysis",
      email: "joseph.ton@gmail.com",
      completed: "true",
    },
    {
      id: 4,
      student_name: "Ian Desmond",
      course_name: "Data Science",
      email: "desmond.i@gmail.com",
      completed: "false",
    },
    {
      id: 5,
      student_name: "Alpha Peter",
      course_name: "Data Science",
      email: "alphapeter@gmail.com",
      completed: "true",
    },
  ];
  return (
    <div>
      <h1 className="text-3xl"> All Student and Courses enrolled</h1>
      <ul>
        {students_list.map((students) => (
          <li key={students.id}>
            {students.student_name} - {students.course_name}
          </li>
        ))}
      </ul>
      <h1 className="text-3xl">students who have completed the course</h1>
      <ul>
        {students_list
          .filter((students) => students.course_name)
          .map((students) => (
            <li key={students.id}>
              {students.student_name} - {students.course_name} -{"complition"} -
              {students.completed}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Students;
