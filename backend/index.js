import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { createEmployee, listEmployee, deleteEmployee } from "./controllers/employee.controller.js";
import { connectToDatabase } from "./mongodb.js";

dotenv.config();

const app = express();
const port = 8000;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); 

//Employees
app.post("/api/employees", createEmployee);
app.get("/api/employees", listEmployee);
app.delete('/api/employees/:employeeId', deleteEmployee);

const server = async () => {
  try {
    await connectToDatabase();
    console.log("Connected to the database");

    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

server();