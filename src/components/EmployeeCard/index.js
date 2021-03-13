import React from "react";
import "./style.css";

function EmployeeCard({employee}) {
  return (
    <div className="card">
      <div className="img-container">
        <img
          alt="SpongeBob"
          src={employee.picture.medium} 
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
            <strong>Location:</strong> {employee.location.city}, {employee.location.state} {employee.location.country}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default EmployeeCard;
