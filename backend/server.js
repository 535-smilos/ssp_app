import express from "express";
import cors from "cors";
import mssql from "mssql";
import dotenv from "dotenv";
import bodyParser from "body-parser";

const app=express();
dotenv.config({
    quiet:true
});

let db;
try {
    db = await mssql.connect({
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        server: process.env.DB_SERVER,
        database: process.env.DB_NAME,
        options: {
            trustServerCertificate: true
        }
    });
    console.log('Connected to SQL Server');
} catch (err) {
    console.error('DB connection error:', err.message || err);
    // don't throw raw credentials or stack to console in production
    process.exit(1);
}

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{
    res.json("Hi!");
})

app.listen(8800, ()=>{
    console.log("Povezan na backend!");
})