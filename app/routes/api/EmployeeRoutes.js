/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const EmployeeController = require('../../controller/EmployeeController');
const employeeController = new EmployeeController();

/**
 * Car Entity routes
 */

router.get('/:id', function (req, res) {
    console.log('ROUTER');
    employeeController.findById(req, res);
});
router.get('/Login/:username/:password', function (req,res){
    console.log('ROUTER');
    employeeController.Login(req,res);  
})


module.exports = router;