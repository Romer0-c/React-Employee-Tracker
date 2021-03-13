import React from 'react'

const EmployeeSearch = ({searchWord, handleChange}) => {
    return (
        <div>
            <input type="text" value={searchWord} onChange={handleChange}/>
        </div>
    )
}

export default EmployeeSearch

