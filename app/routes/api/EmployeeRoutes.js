/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const EmployeeController = require('../../controller/EmployeeController');
const employeeController = new EmployeeController();

/**
 * Car Entity routes
 */

router.get('GetEmp/:id', function (req, res) {
    console.log('ROUTER');
    employeeController.findById(req, res);
});
router.get('/Login/:username/:password', function (req,res){
    console.log('ROUTER');
    employeeController.Login(req,res);
})
router.get('/AllEmployees/:id', function (req,res)
{
    console.log("Router");
    employeeController.findAllEmployees(req,res);
});
router.get('/GetLocation/:id',function (req,res)
{
    console.log('router');
    employeeController.GetEmployeeLocations(req,res);
});
router.post('/AddEmployee',function(req,res)
{
console.log('Router');
employeeController.AddEmployee(req,res);
});





module.exports = router;