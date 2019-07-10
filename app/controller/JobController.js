/* Load Car Data Access Object */
const JobDAO = require('../dao/JobDAO');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const JobM = require('../model/Job');

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
        let job = new job();

        Job.Description = req.body.description;
        Job.LocationID = req.body.locationID;
        Job.Urgency = req.body.urgency;
        Job.Active  = req.body.active;
        Job.Date = req.body.date;
        Job.Complete = req.body.complete;
        Job.Comment = req.body.comment;
        Job.Exist = req.body.exist;
        empID = req.body.empid;
        return this.JobDAO.addJob(job,empID)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    }
    


}

module.exports = JobController;