/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const JobController = require('../../controller/JobController');
const jobController = new JobController();

/**
 * Car Entity routes
 */

router.get('/GetJobsByEmp/:id', function (req, res) {
    console.log('ROUTER');
    jobController.findByEmpId(req, res);
});

router.post('/AddJob/', function(req,res){
    console.log('ROUTER');
    jobController.addJob(req,res);
});



module.exports = router;