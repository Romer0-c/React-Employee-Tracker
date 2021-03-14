import React from "react";
import "./style.css";

function EmployeeCard({employee}) {
  return (
    <div className="card">
      <div className="img-container rounded">
        <img
          alt="Employee"
          src={employee.picture.large} 
        />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {employee.name.first} {employee.name.last}
          </li>
          <li>
            <strong>Gender:</strong> {employee.gender}
          </li>
          <li>
            <strong>Email:</strong> {employee.email}
          </li>
          <li>
            <strong>Location:</strong> {employee.location.city}, {employee.location.state}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
