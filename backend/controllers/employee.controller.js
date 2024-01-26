import { Employee } from "../models/employee.model.js";

export const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName } = req.body
    const employee = new Category({ firstName, lastName, registerID, jobTitleName, phoneNumber, employeeCode });
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