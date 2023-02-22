import "./App.css";
import React, { useEffect } from "react";
import Header from "./Header";
//import Content from './Content';
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from "./Employees";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { computeHeadingLevel } from '@testing-library/react';
import GroupedTeamMembers from "./GroupTeamMembers";
import Nav from "./Nav";
import NotFound from "./NotFound";
function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam") || "TeamA")
  );

  const [employees, setEmployees] = useState(
    JSON.parse(
      localStorage.getItem("employees") || [
        {
          id: 1,
          fullName: "Bob Jones",
          designation: "JavaScript Developer",
          gender: "male",
          teamName: "TeamA",
        },
        {
          id: 2,
          fullName: "Jill Bailey",
          designation: "Node Developer",
          gender: "female",
          teamName: "TeamA",
        },
        {
          id: 3,
          fullName: "Gail Shepherd",
          designation: "Java Developer",
          gender: "female",
          teamName: "TeamA",
        },
        {
          id: 4,
          fullName: "Sam Reynolds",
          designation: "React Developer",
          gender: "male",
          teamName: "TeamB",
        },
        {
          id: 5,
          fullName: "David Henry",
          designation: "DotNet Developer",
          gender: "male",
          teamName: "TeamB",
        },
        {
          id: 6,
          fullName: "Sarah Blake",
          designation: "SQL Server DBA",
          gender: "female",
          teamName: "TeamB",
        },
        {
          id: 7,
          fullName: "James Bennet",
          designation: "Angular Developer",
          gender: "male",
          teamName: "TeamC",
        },
        {
          id: 8,
          fullName: "Jessica Faye",
          designation: "API Developer",
          gender: "female",
          teamName: "TeamC",
        },
        {
          id: 9,
          fullName: "Lita Stone",
          designation: "C++ Developer",
          gender: "female",
          teamName: "TeamC",
        },
        {
          id: 10,
          fullName: "Daniel Young",
          designation: "Python Developer",
          gender: "male",
          teamName: "TeamD",
        },
        {
          id: 11,
          fullName: "Adrian Jacobs",
          designation: "Vue Developer",
          gender: "male",
          teamName: "TeamD",
        },
        {
          id: 12,
          fullName: "Devin Monroe",
          designation: "Graphic Designer",
          gender: "male",
          teamName: "TeamD",
        },
      ]
    )
  );

  useEffect(() => {
    //S console.log("useEffect");
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  useEffect(() => {
    // console.log("useEffect-2");
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
    //console.log(JSON.parse(localStorage.getItem(selectedTeam)));
  }, [selectedTeam]);

  function handleSelectChange(e) {
    //console.log(e.target.value);
    setTeam(e.target.value);
  }

  function handleEmployeeCardClick(e) {
    console.log(e.currentTarget.id);
    const trasformedEmployees = employees.map((person) => {
      return person.id === parseInt(e.currentTarget.id)
        ? person.teamName === selectedTeam
          ? { ...person, teamName: "" }
          : { ...person, teamName: selectedTeam }
        : person;
    });
    // console.log(trasformedEmployees);
    setEmployees(trasformedEmployees);
  }

  return (
    <Router>
      <Nav />
      <Header
        selectedTeam={selectedTeam}
        selectedTeamCount={
          employees.filter((person) => person.teamName === selectedTeam).length
        }
      />
      <Routes>
        <Route
          path="/TeamAllocationProject"
          element={
            <Employees
              handleEmployeeCardClick={handleEmployeeCardClick}
              employees={employees}
              selectedTeam={selectedTeam}
              handleSelectChange={handleSelectChange}
            />
          }
        />
        <Route 
        path="/TeamAllocationProject/GroupTeamMembers" element={<GroupedTeamMembers 
          employees={employees}
          selectedTeam={selectedTeam}
          setTeam={setTeam}
        />} />
        <Route 
        path="*" 
        element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
