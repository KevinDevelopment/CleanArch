import { Column, Model, Table } from "sequelize-typescript";

@Table({ tableName: "employees", timestamps: false })
export class EmployeeModel extends Model {
    @Column
    name: string;

    @Column
    identificationNumber: string;

    @Column
    jobRole: string;
}