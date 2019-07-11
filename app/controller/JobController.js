/* Load Car Data Access Object */
const JobDAO = require('../dao/JobDAO');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const JobM = require('../model/Job');
const AddJobModel = require('../model/Job');

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
    addJob(req,res)
    {
        let job = new AddJobModel();
        console.log('CON');
        job.Description = req.body.JobDescription;
        job.LocationID = req.body.LocationID;
        job.Urgency = req.body.Urgency;
        job.Date = req.body.Date;
        job.Comment = req.body.Comment;
        job.empID = req.body.EmpID;
        return this.jobDAO.addJob(job)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    };
    


}

module.exports = JobController;