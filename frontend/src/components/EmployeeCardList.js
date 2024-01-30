import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeeCardList({ data, handleDeleteEmployee }) {
  // Өгөгдөл байхгүй бол NULL буцаана
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="employee-card-list">
      {/* Толгой хэсгийн мөр */}
      <div className="employee-card header">
        <p className="firstName">Нэр</p>
        <p className="lastName">Овог</p>
        <p className="register">Регистрийн дугаар</p>
        <p className="jobTitle">Ажлын байр</p>
        <p className="phone">Утасны дугаар</p>
        <p className="empCode">Тушаалын дугаар</p>
        <p className="actions">Үйлдэл</p>
      </div>

      {/* Ажилчдын мэдээллийн карт */}
      {data.map((employee) => (
        <EmployeeCard
          key={employee._id}
          employee={employee}
          handleDeleteEmployee={handleDeleteEmployee}
        />
      ))}
    </div>
  );
}

export default EmployeeCardList;