/* Load Car Data Access Object */
const EmployeeDAO = require('../dao/EmployeeDAO');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const EmployeeM = require('../model/Employee');

const AddEmployeeM = require('../model/AddEmployeeM');

/**
 * Car Controller
 */
class EmployeeController {

    constructor() {
        this.employeeDAO = new EmployeeDAO();
        this.common = new ControllerCommon();
    }

    findById(req, res) {
        console.log('CON');
        let id = req.params.id;

        this.employeeDAO.findById(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    Login(req,res)
    {
        console.log('CON');
        let username = req.params.username;
        let password = req.params.password;
        this.employeeDAO.Login(username,password)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));                 
    };
    findAllEmployees(req,res)
    {
        console.log('CON');
        let id = req.params.id;
        this.employeeDAO.findAllEmployees(id)
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    };
    GetEmployeeLocations(req,res)
    {
        console.log('CON');
        let id = req.params.id;
        this.employeeDAO.GetEmployeeLocations(id)
        .then(this.common.findSuccess(res))
        .catch(this.common.findError(res));
    }
    AddEmployee(req,res)
    {

        console.log('CON');
        console.log(req.body)
        let employee = new AddEmployeeM();
        employee.EmpName = req.body.EmpName;
        employee.EmpSurname = req.body.EmpSurname;
        employee.EmpPw = req.body.EmpPw;
        employee.Admin = req.body.Admin;
        employee.EmpContact = req.body.EmpContact;
        return this.employeeDAO.AddEmployee(employee)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    }

}

module.exports = EmployeeController;