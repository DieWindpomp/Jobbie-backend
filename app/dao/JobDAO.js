/* Load Car entity */
const Job = require('../model/Job');
const JobL = require('../model/JobList');
const JobDetail = require('../model/JobDetail');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class JobDAO {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findByEmpId(id) {
        console.log('DAO');
        let sqlRequest = `SELECT Job.id,Job.Description,Company,Urgency,Address, (CName ||' '|| CSurname ||' '||CContact) AS 'ClientDetails' 
        FROM Job, Employee, Location, Client  
        WHERE EmpID = `+id+` AND 
        EmpID=Employee.id AND
        Client.id = Location.ClientID AND
        Job.LocationID = Location.id
        AND Job.Exist = 1
        AND Active = 0 AND
        Complete = 0`;
        
        return this.common.findAll(sqlRequest).then(rows =>
            {
                let jobs = [];
                for(const row of rows)
                {
                    jobs.push(new JobL(row.id,row.Description,row.Company,row.Urgency,row.Address,row.ClientDetails));
                }
                return jobs;
            });
    };
    findActiveByEmpId(id) {
        console.log('DAO');
        let sqlRequest = `SELECT Job.id, (CName ||' '|| CSurname ||' - '||CContact) AS 'ClientDetails',Job.Description,Comment,Job.LocationID,Coordinates,Address,Company 
        FROM Job, Employee, Location, Client  
        WHERE EmpID = `+id+` 
        AND 
        EmpID=Employee.id AND
        Client.id = Location.ClientID AND
        Job.LocationID = Location.id
        AND Job.Exist = 1 AND Job.Active = 1`;

        return this.common.findOne(sqlRequest).then(row =>
                new JobDetail(row.id,row.ClientDetails,row.Description,row.Comment,row.LocationID,row.Coordinates,row.Address,row.Company));
    };

    /**
     * Finds all entities.
     * @return all entities
     */
    findAll() {
        let sqlRequest = "SELECT * FROM Job";
        return this.common.findAll(sqlRequest).then(rows => {
            let cars = [];
            for (const row of rows) {
                cars.push(new Car(row.id, row.maker, row.model, row.year, row.driver));
            }
            return cars;
        });
    };
    addJob(AddJob) 
    {
        console.log('DAO');
        let sqlRequest = `INSERT INTO Job(Description,LocationID,EmpID,Urgency,Active,Date,Complete,Comment,Exist)
        VALUES($Description,$LocationID,$EmpID,$Urgency,$Active,$Date,$Complete,$Comment,$Exist)`;      
        let sqlParams = {
            $Description: AddJob.Description,
            $LocationID : AddJob.LocationID,
            $EmpID : AddJob.empID,
            $Urgency : AddJob.Urgency,
            $Active : 0,
            $Date : AddJob.JobDate,
            $Complete : 0,
            $Comment : AddJob.Comment,          
            $Exist : 1
            
        };
        return this.common.run(sqlRequest,sqlParams);
    };
    async setActive(JOBID,EMPID)
    {
        console.log('DAO1');
        let sqlRequest = `UPDATE Job
        SET Active = 0
        WHERE EmpID = $EmpID`;
        let sqlParams = {$EmpID : EMPID};
        return this.common.run(sqlRequest,sqlParams).thenReturn(this.setActive2(JOBID));
    };
    async setActive2(JOBID)
    {
        console.log('DAO2');
        let sqlRequest = `UPDATE Job
        SET Active = 1
        WHERE id = $JobID`;
        let sqlParams = {$JobID : JOBID};
        return this.common.run(sqlRequest,sqlParams);
    };
    completeJob(JobID)
    {
        console.log('DAO');
        let sqlRequest = `UPDATE Job 
        SET Complete = 1,
        Active = 0
        WHERE id =$JobID`;
        let sqlParams = {$JobID : JobID};
        return this.common.run(sqlRequest,sqlParams);
    };
    AddComment(JobID,Comment)
    {
        console.log('DAO');
        let sqlRequest = `UPDATE Job 
        SET Comment = $Comment
        WHERE 
        id = $JobID`;
        let sqlParams = {$Comment:Comment,$JobID : JobID};
        return this.common.run(sqlRequest,sqlParams);
    };
    setUnactive(JobID)
    {
        console.log('DAO');
        let sqlRequest = `UPDATE Job
        SET Active = 0
        WHERE id = $JobID`;
        let sqlParams = {$JobID : JobID};
        return this.common.run(sqlRequest,sqlParams);
    }
    RemoveJob(JOBID)
    {
        console.log('DAO');
        let sqlRequest = `UPDATE Job
        SET Exist = 0,
        Active = 0
        WHERE id = $JobID`;
        let sqlParams = {$JobID : JOBID};
        return this.common.run(sqlRequest,sqlParams);
    }



    
}

module.exports = JobDAO;