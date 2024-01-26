import cors from "cors";
import express from "express";
import { createEmployee, listEmployee } from "./controllers/employee.controller.js";
import { connectToDatabase } from "./mongodb.js";

const app = express();
const port = 8000;

app.use(express.json()); // Middleware to parse JSON requests
app.use(cors()); 

//Employees
app.post("/api/employees", createEmployee);
app.get("/api/employees", listEmployee);

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