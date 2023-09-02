import { Employee } from "../../core/domain/entities/employee";
import { EmployeeGateway } from "../../core/gateways/employee-gateway";
import { EmployeeModel } from "../database/product.model";

export class EmployeeRepository implements EmployeeGateway {
    async create(employee: Employee): Promise<void> {
        await EmployeeModel.create({
            name: employee.getName(),
            identificationNumber: employee.getIdentificationNumber(),
            jobRole: employee.getJobRole()
        })
    }
}