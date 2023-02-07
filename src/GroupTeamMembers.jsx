//import { Collapse } from "bootstrap";
import { useState } from "react";
//import Employees from "./Employees";

const GroupedTeamMembers = ({ employees, selectedTeam, setTeam }) => {
  const [groupedEmployees, setGroupedData] = useState(groupTeamMembers());

  function groupTeamMembers() {
    console.log("inside the groupTeamMembers function");
    var teams = [];
    for (var i = 0; i < 4; i++) {
      var TeamNumber = String.fromCharCode(65 + i);
      var TeamName = `Team${TeamNumber}`;
      var team = {
        team: TeamName,
        members: employees.filter((person) => {
          //console.log("insdie creation of grouped member object")
          // console.log(person.teamName)
          // console.log
          return person.teamName === TeamName;
        }),

        collapsed: selectedTeam === TeamName ? true : false,
      };
      teams.push(team);
    }
   // console.log(teams);
    return teams;
  }

  function handleTeamClick(event) {
    console.log(event.target.id);
    var transformedNewGroupTeam = groupedEmployees.map((groupData) => {
      return groupData.team === event.target.id
        ? { ...groupData, collapsed: !groupData.collapsed }
        : groupData;
    });
    setGroupedData(transformedNewGroupTeam);
    setTeam(event.target.id);
  }

  return (
    <main className="container">
      {groupedEmployees.map((item) => {
        return (
          <div
            key={item.team}
            className="card mt-2"
            style={{ cursor: "pointer" }}
          >
            <h4
              id={item.team}
              className="card-header text-secondary bg-white"
              onClick={handleTeamClick}
            >
              Team Name: {item.team}
            </h4>
            <div
              id={"_collapse_" + item.team}
              className={item.collapsed === true ? "" : "collapse"}
            >
              <hr />
              {item.members.map((member) => {
                return (
                  <div className="mt-2">
                    <h5 className="card-title mt-2">
                      <span className="text-dark">
                        Full name: {member.fullName}
                      </span>
                    </h5>
                    <p>Desigination: {member.designation}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default GroupedTeamMembers;
