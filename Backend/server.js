
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


//Connect to MongoDB

mongoose.connect(process.env.MONGO_URI);

//verify if the connection is successful
const connection = mongoose.connection;
connection.once("open", () => {console.log("MongoDB database connection established successfully")});
connection.on("error", (error) =>{ console.log("MongoDB connection error:", error)});

const app = express();

//imported routes---------------------------------
import projectRoutes from "../Backend/routes/project.js";
import contactsRoutes from "../Backend/routes/contact.js";
import educationRoutes from "../Backend/routes/education.js";
import usersRoutes from "../Backend/routes/users.js";

//----------------------------------------------------

//after importing, use-----------
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/contacts', contactsRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/users', usersRoutes);

//Week 8 frontend and backend communicating with each other
app.use('/api/data', (req,res) => {
    res.json({message: 'Hello from the API! Again!'})
})

//-------------------------------
app.listen(3000);

//if this server is running
console.log("Server is running on port 3000");

