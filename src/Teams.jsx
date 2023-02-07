const Teams=({selectedTeam,handleSelectChange})=>{
    return (
        <select className="form-select" value={selectedTeam} onChange={handleSelectChange}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
    );
}
export default Teams;