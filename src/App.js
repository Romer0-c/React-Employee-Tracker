import React, { useState, useEffect } from "react";
//import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
//import data from "./employees.json"
import axios from "axios";
import EmployeeSearch from "./components/EmployeeSearch/EmployeeSearch";




function App() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterEmployees, setFilterEmployees] = useState([]);

  // const [state, setState] = useState({
  //   employees: [],
  //   searchTerm: ""
  // }) 


  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=20&nat=US")
      .then((res) => {
        console.log(res.data);
        setEmployees(res.data.results)
        setFilterEmployees(res.data.results)
      })

  }, []);

  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    let results = employees.filter((employee) => {
      return employee.name.first.includes(event.target.value) || employee.name.last.includes(event.target.value) || employee.gender === (event.target.value)
    });
    setFilterEmployees(results);
  }

  return (
    <div>

      <h1 className="title">React-Employee-Tracker</h1>
      <EmployeeSearch searchWord={searchTerm} handleChange={handleChange} />
      <div className="employeeList">
        {filterEmployees.map((employee) => (
          <EmployeeCard
            employee={employee}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
