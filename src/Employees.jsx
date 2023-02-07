import femaleProfile from "./Images/femaleProfile.jpg";
import maleProfile from "./Images/maleProfile.jpg";
import Teams from './Teams';




const Employees = ({handleEmployeeCardClick,employees,selectedTeam,handleSelectChange}) => {

  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Teams selectedTeam={selectedTeam} handleSelectChange={handleSelectChange} />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((person) => {
             // console.log(person);
              return (
                <div
                  key={person.id}
                  className={((selectedTeam===person.teamName)?"card m-2 standout":"card m-2")}
                  style={{ cursor: "pointer" }}
                  onClick={handleEmployeeCardClick}
                  id={person.id}
                >
                  {person.gender === "male" ? (
                    <img src={femaleProfile} alt="femaleProfile_template" />
                  ) : (
                    <img src={maleProfile} alt="maleProfile_template"/>
                  )}
                  <div className="card-body">
                    <h5 className="card-title">Full Name: {person.fullName}</h5>
                    <p className="card-text">
                      Desigination: {person.designation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Employees;
