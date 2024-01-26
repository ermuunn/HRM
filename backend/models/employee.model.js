import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    registerID: {
      type: String,
      required: true
    },
    jobTitleName: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: Number,
      required: true
    },
    employeeCode: {
      type: String,
      required: true
    },
  },
  { timestamp: true }
);

export const Employee = mongoose.model("Employee", EmployeeSchema);