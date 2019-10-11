/* Load Car Data Access Object */
const JobDAO = require('../dao/JobDAO');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const JobM = require('../model/Job');
const AddJobModel = require('../model/AddJob');

const JobL = require('../model/JobList');

/**
 * Car Controller
 */
class JobController {

    constructor() {
        this.jobDAO = new JobDAO();
        this.common = new ControllerCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params req, res
     * @return entity
     */
    findByEmpId(req, res) {
        console.log('CON');
        let id = req.params.id;

        this.jobDAO.findByEmpId(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    findActiveByEmpId(req, res) {
        console.log('CON');
        let id = req.params.id;

        this.jobDAO.findActiveByEmpId(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    addJob(req,res)
    {
        console.log("CON")
        let job = new AddJobModel();
        job.Description = req.body.JobDescription;
        job.LocationID = req.body.LocationID;
        job.Urgency = req.body.Urgency;
        job.JobDate = req.body.Date;
        job.Comment = req.body.Comment;
        job.empID = req.body.EmpID;
        return this.jobDAO.addJob(job)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    };
    setActive(req,res)
    {
        console.log("CON")
        let jobid = req.body.id;
        let empid =req.body.EmpID;
        return this.jobDAO.setActive(jobid,empid)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    };
    completeJob(req,res)
    {
        console.log("CON");
        let jobid = req.params.id;
        return this.jobDAO.completeJob(jobid)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res))
    }
    AddComment(req,res)
    {        
        console.log("CON");
        let jobid = req.params.id;
        let Comment = req.params.comment;
        return this.jobDAO.AddComment(jobid,Comment)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res))
    };
    setUnactive(req,res)
    {
        console.log("CON");
        let jobid = req.params.id;
        return this.jobDAO.setUnactive(jobid)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res))
    }
    RemoveJob(req,res)
    {
        console.log("CON");
        let jobid = req.params.id;
        return this.jobDAO.RemoveJob(jobid)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res))
    }



    


}

module.exports = JobController;