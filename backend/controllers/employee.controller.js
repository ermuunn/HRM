import { Employee } from "../models/employee.model.js";

export const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, registerID, jobTitleName, phoneNumber, employeeCode } = req.body;
    const employee = new Employee({ firstName, lastName, registerID, jobTitleName, phoneNumber, employeeCode });
    const data = await employee.save();
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const listEmployee = async (req, res) => {
  try {
    const data = await Employee.find({});
    res.json(data);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteEmployee = async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    if (!employeeId) {
      return res.status(400).json({ error: "Invalid employee ID" });
    }
    const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
    if (!deletedEmployee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully", deletedEmployee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
