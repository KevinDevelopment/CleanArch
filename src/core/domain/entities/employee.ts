

export class Employee {
    private readonly _name: string;
    private readonly _identificationNumber: string;
    private _jobRole: string;

    constructor(_name: string, _identificatioNumber: string, _jobRole: string) {
        this._name = _name;
        this._identificationNumber = _identificatioNumber;
        this._jobRole = _jobRole;
    }

    private get name(): string {
        return this._name;
    }

    private get identificationNumber(): string {
        return this._identificationNumber;
    }

    private get jobRole(): string {
        return this._jobRole;
    }

    public getName() {
        return this.name;
    }

    public getIdentificationNumber() {
        return this.identificationNumber;
    }

    public getJobRole() {
        return this.jobRole;
    }

    public changeJob(_jobRole: string) {
        return this._jobRole = _jobRole;
    }

}