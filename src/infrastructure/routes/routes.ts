import express from "express";
const router = express.Router();
import { CreateEmployeeController } from "../controllers/create-user-employee";

const employeeController = new CreateEmployeeController;

router.post("/employee", employeeController.execute);

export {
    router
}
