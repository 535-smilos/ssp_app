import express from "express";
import cors from "cors";
import mssql from "mssql";

const app=express();


let db;
try {
    db = await mssql.connect({
        user: 'sa',
        password: '1234',
        server: 'DESKTOP-TOG38PK',
        database: 'PB_Test',
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