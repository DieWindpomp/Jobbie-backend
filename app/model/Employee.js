class Employee {
    constructor(id, EmpName, EmpSurname, EmpContact,Admin,Exist) {
        this.id = id;
        this.EmpName = EmpName;
        this.EmpSurname = EmpSurname;
        this.EmpContact = EmpContact;
        this.Admin = Admin;
        this.Exist = Exist;
    }
}
module.exports = Employee;

