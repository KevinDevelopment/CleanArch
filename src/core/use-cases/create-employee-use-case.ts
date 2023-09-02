import { Employee } from "../domain/entities/employee";
import { ICreateUserInputDto } from "../dto/create-employee-dto";
import { ICreateUserOutputDto } from "../dto/create-employee-dto";
import { EmployeeGateway } from "../gateways/employee-gateway";

export class CreateUserUseCase {
    private employeeGateway: EmployeeGateway;

    constructor(employeeGateway: EmployeeGateway) {
        this.employeeGateway = employeeGateway;
    }

    async perform(input: ICreateUserInputDto): Promise<ICreateUserOutputDto> {
        const employee = new Employee(input.name, input.identificationNumber, input.jobRole);

        await this.employeeGateway.create(employee);

        return {
            name: employee.getName(),
            identificationNumber: employee.getIdentificationNumber(),
            jobRole: employee.getJobRole()
        }
    }
}
