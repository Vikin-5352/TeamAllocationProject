const Header = ({ selectedTeam, selectedTeamCount }) => {
  return (
    <header className="container">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
        <h1>The Team Allocation </h1>
        <h3>
          {selectedTeam} has count of {selectedTeamCount}
        </h3>
        </div>
      </div>
    </header>
  );
};

export default Header;
