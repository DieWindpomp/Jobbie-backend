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
router.get('/GetJobsByEmpCompleted/:id', function (req, res) {
    console.log('ROUTER');
    jobController.findByEmpIdCompleted(req, res);
});
router.get('/GetActiveJobByEmp/:id', function (req, res) {
    console.log('ROUTER');
    jobController.findActiveByEmpId(req, res);
});

router.post('/AddJob/', function(req,res){
    console.log('ROUTER');
    jobController.addJob(req,res);
});

router.post('/SetActive/', function(req,res){
    console.log('ROUTER');
    jobController.setActive(req,res);
});

router.post('/completeJob/:id',function(req,res){
    console.log('Router');
    jobController.completeJob(req,res);
});

router.post('/AddComment/:id/:comment',function(req,res){
    console.log('Router');
    jobController.AddComment(req,res);
});

router.post('/SetUnactive/:id',function(req,res){
    console.log('Router');
    jobController.setUnactive(req,res);
});

router.post('/RemoveJob/:id',function(req,res){
    console.log('Router');
    jobController.RemoveJob(req,res);
});



module.exports = router;