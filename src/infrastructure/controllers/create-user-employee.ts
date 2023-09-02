import { Request, Response } from "express";
import { CreateEmployeeService } from "../services/create-employee-service";

export class CreateEmployeeController {
    async execute(req: Request, res: Response) {
        const { name, identificationNumber, jobRole } = req.body;

        if (!name || !identificationNumber || !jobRole) {
            return res.status(400).json({
                error: 'Missing required fields'
            });
        }

        const instanciEmployeeService = new CreateEmployeeService();
        const createEmployeeController = await instanciEmployeeService.execute(name, identificationNumber, jobRole);

        return res.status(createEmployeeController.status).json(createEmployeeController.message);
    }
}