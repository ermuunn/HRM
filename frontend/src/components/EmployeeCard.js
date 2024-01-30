import React from "react";

function EmployeeCard({ employee, handleDeleteEmployee }) {
  const { _id, firstName, lastName, registerID, jobTitleName, phoneNumber, employeeCode } = employee;

  const handleDelete = () => {
    if (window.confirm(`${lastName} овогтой ${firstName} ажилтанг устгахдаа та итгэлтэй байна уу?`)) {
      handleDeleteEmployee(_id);
    }
  };

  return (
    <div className="employee-card">
      <p className="firstName">{firstName}</p>
      <p className="lastName">{lastName}</p>
      <p className="register">{registerID}</p>
      <p className="jobTitle">{jobTitleName}</p>
      <p className="phone">{phoneNumber}</p>
      <p className="empCode">{employeeCode}</p>
      <button onClick={handleDelete} className="btn-delete">Устгах</button>
    </div>
  );
}

export default EmployeeCard;