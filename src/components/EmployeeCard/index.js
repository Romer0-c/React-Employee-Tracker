import React from "react";
import "./style.css";

function EmployeeCard({employee}) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="SpongeBob"
          src={employee.image} 
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {employee.name}
          </li>
          <li>
            <strong>Occupation:</strong> {employee.occupation}
          </li>
          <li>
            <strong>Department:</strong> {employee.department}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
