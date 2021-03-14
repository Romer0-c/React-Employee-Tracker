import React from 'react';
import "./style.css";


const EmployeeSearch = ({searchWord, handleChange}) => {
    return (
        <div>
            {/* <p className="title">Search Through Employee List</p> */}
            <input className="searchtitle" type="text" value={searchWord} onChange={handleChange} placeholder="Search Through Employee List"/>
        </div>
    )
}

export default EmployeeSearch

