class Employee {
    constructor(id, EmpName, EmpSurname, EmpContact,EmpPw,Admin,Exist) {
        this.id = id;
        this.EmpName = EmpName;
        this.EmpSurname = EmpSurname;
        this.EmpContact = EmpContact;
        this.EmpPw = EmpPw;
        this.Admin = Admin;
        this.Exist = Exist;
    }
}
module.exports = Employee;

