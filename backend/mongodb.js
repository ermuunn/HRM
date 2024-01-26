import mongoose from "mongoose";

const uri = "mongodb+srv://ermuun:halbagaseree@hrm.a6nigmx.mongodb.net/";
const dbName = "hrm";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(uri + dbName, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};