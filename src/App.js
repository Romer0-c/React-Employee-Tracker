import React from "react";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import EmployeeCard from "./components/EmployeeCard";
// import SquidwardCard from "./components/SquidwardCard";
// import MrKrabsCard from "./components/MrKrabsCard";
import data from "./employees.json"

function App() {
  return (
   <Wrapper>
       <h1>React-Employee-Tracker</h1>
    {data.map((object) => (
       <EmployeeCard
        employee={object}
       />
    ))}   
   
    </Wrapper>
  );
}

export default App;
