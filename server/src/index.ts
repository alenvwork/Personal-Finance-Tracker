//iT2nHaqy2nnti5sj
import express, { Express } from "express";
import mongoose from 'mongoose';
import financialRecordRouter from "./routes/financial-records";
import cors from "cors"; 

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoURI: string = 
    "mongodb+srv://2004alensvarghese:iT2nHaqy2nnti5sj@personalfinancetracker.ywx03am.mongodb.net/";

mongoose
    .connect(mongoURI)
    .then(() => console.log("CONNECTED TO MONGODB!"))
    .catch((err) => console.error("Failed to Connect to MongoDB:", err))

app.use("/financial-records", financialRecordRouter);

app.listen(port, () => {
        console.log(`Server Running on Port ${port}`);
      });