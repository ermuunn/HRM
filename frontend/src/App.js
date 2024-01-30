import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import EmployeeCardList from "./components/EmployeeCardList";
import EmployeeModal from "./components/EmployeeModal";
import Footer from "./components/Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sorted, setSorted] = useState(false);
  const [data, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    registerID: "",
    jobTitleName: "",
    phoneNunber: "",
    employeeCode: ""
  });
  const [showModal, setShowModal] = useState(false); // Модал дэлгэцийг удирдах төлөв

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    fetch('http://localhost:8000/api/employees')
      .then(response => response.json())
      .then(data => setEmployees(data))
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortByName = () => {
    const sortedData = [...data].sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
    setEmployees(sortedData);
    setSorted(!sorted);
  };

  const handleSortByJobTitle = () => {
    const sortedData = [...data].sort((a, b) => (a.jobTitleName > b.jobTitleName) ? 1 : -1);
    setEmployees(sortedData);
    setSorted(!sorted);
  };

  const handleAddEmployee = () => {
    fetch('http://localhost:8000/api/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployee),
    })
      .then(response => response.json())
      .then(() => {
        fetchEmployees();
        // Маягтыг арилгахын тулд newEmployee төлвийг дахин тохируулна
        setNewEmployee({
          firstName: "",
          lastName: "",
          registerID: "",
          jobTitleName: "",
          phoneNunber: "",
          employeeCode: ""
        });
        // Модалыг хаах
        setShowModal(false);
      })
      .catch(error => console.error('Error adding employee:', error));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewEmployee(prevEmployee => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const filteredEmployees = data.filter(employee =>
    employee.firstName.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleDeleteEmployee = (employeeId) => {
    fetch(`http://localhost:8000/api/employees/${employeeId}`, {
      method: 'DELETE',
    })
      .then(() => {
        fetchEmployees();
      })
      .catch(error => console.error('Error deleting employee:', error));
  };

  return (
    <div>
      <Header />
      <Layout>
        <div className="description">
          <h1>Төрийн албан хаагчдын жагсаалт</h1>
          <p>Албан хаагчийн нэрээр хайлт хийх / ажлын байр болон нэрээр эрэмбэлэх</p>
        </div>
        <Navigation
          onSearch={handleSearchTerm}
          searchTerm={searchTerm}
          handleSortByName={handleSortByName}
          handleSortByJobTitle={handleSortByJobTitle}
        />
        {/* Модалыг нээх "Ажилтан нэмэх" товчлуур */}
        <div className="add-button">
          <button onClick={openModal}>+ Aжилтан нэмэх</button>
        </div>
        {/* EmployeeModal компонентийг нөхцөлт байдлаар харуулах */}
        {showModal && (
          <EmployeeModal
            newEmployee={newEmployee}
            handleInputChange={handleInputChange}
            handleAddEmployee={handleAddEmployee}
            closeModal={closeModal}
          />
        )}
        <EmployeeCardList data={filteredEmployees} handleDeleteEmployee={handleDeleteEmployee} />
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;