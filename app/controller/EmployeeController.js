/* Load Car Data Access Object */
const EmployeeDAO = require('../dao/EmployeeDAO');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const EmployeeM = require('../model/Employee');

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
    }

}

module.exports = EmployeeController;