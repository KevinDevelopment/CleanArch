import { CreateUserUseCase } from "../../core/use-cases/create-employee-use-case";
import { EmployeeRepository } from "../repository/employee.repository";

export class CreateEmployeeService {
    async execute(name: string, identificationNumber: string, jobRole: string) {
        const createUserUsecase = new CreateUserUseCase(new EmployeeRepository());
        try {
            const employeeDto = {
                name: name,
                identificationNumber: identificationNumber,
                jobRole: jobRole
            };
            const output = await createUserUsecase.perform(employeeDto);

            return {
                status: 200,
                message: "employee created succesfully"
            }

        } catch (error) {
            console.error(error);

            return {
                status: 500,
                message: "unable to complete this request"
            }

        }
    }
}