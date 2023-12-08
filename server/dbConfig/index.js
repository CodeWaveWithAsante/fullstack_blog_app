import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);

    console.log("DB Connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
