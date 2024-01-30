import React from 'react';

const EmployeeModal = ({ newEmployee, handleInputChange, handleAddEmployee, closeModal }) => {
  const defaultNewEmployee = {
    firstName: '',
    lastName: '',
    registerID: '',
    jobTitleName: '',
    phoneNumber: '',
    employeeCode: ''
  };

  newEmployee = newEmployee || defaultNewEmployee;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Ажилтан нэмэх</h2>
        <form>
          <label>
            Нэр:
            <input type="text" name="firstName" value={newEmployee.firstName} onChange={handleInputChange} />
          </label>
          <label>
            Овог:
            <input type="text" name="lastName" value={newEmployee.lastName} onChange={handleInputChange} />
          </label>
          <label>
            Регистрийн дугаар:
            <input type="text" name="registerID" value={newEmployee.registerID} onChange={handleInputChange} />
          </label>
          <label>
            Ажлын байр:
            <input type="text" name="jobTitleName" value={newEmployee.jobTitleName} onChange={handleInputChange} />
          </label>
          <label>
            Утасны дугаар:
            <input type="text" name="phoneNumber" value={newEmployee.phoneNumber} onChange={handleInputChange} />
          </label>
          <label>
            Тушаалын дугаар:
            <input type="text" name="employeeCode" value={newEmployee.employeeCode} onChange={handleInputChange} />
          </label>
          <div className="modal-buttons">
            <button type="button" className="add" onClick={handleAddEmployee}>
              Нэмэх
            </button>
            <button type="button" className="cancel" onClick={closeModal}>
              Цуцлах
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmployeeModal;