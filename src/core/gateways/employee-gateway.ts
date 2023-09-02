import { Employee } from "../domain/entities/employee"

export interface EmployeeGateway {
    create(employee: Employee): Promise<void>;
}