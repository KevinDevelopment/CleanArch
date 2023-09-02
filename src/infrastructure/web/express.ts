import express from "express";
import { employeeConnection } from "../connection/connection";
import { router } from "../routes/routes";

const app = express();

app.use(express.json());
employeeConnection();
app.use(express.urlencoded({ extended: true }));
app.use(router);
// app.use(employeeConnection());

const PORT = 8080;      

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});