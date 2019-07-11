/* Load Car entity */
const Job = require('../model/Job');
const JobL = require('../model/JobList');
const AddJob = require('../model/AddJob');

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
        FROM Job, JobEmployee, Employee, Location, ClientLocation, Client  
        WHERE empID = `+id+` AND 
		empID=Employee.id AND
		jobID=Job.id AND
		Job.LocationID = Location.id AND
		Location.id = ClientLocation.LocationID AND
		ClientLocation.ClientID = Client.id`;
        
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
        let sqlRequest = `INSERT INTO Job
        (Description, LocationID, Urgency,Active,Date, Complete, Comment, Exist)
        VALUES ($Description,$LocationID,$Urgency,$Active,$Date, $Complete, $Comment, $Exist);
        
        INSERT INTO JobEmployee
        (empID,jobID,Exist)
        VALUES ($EmpID,(SELECT last_insert_rowid() FROM Job),1)`;        

        let sqlParams = {
            $Description: AddJob.Description,
            $LocationID : AddJob.LocationID,
            $Urgency : AddJob.Urgency,
            $Active : 0,
            $Date : AddJob.Date,
            $Complete : 0,
            $Comment : AddJob.Comment,
            $EmpID : AddJob.empID,
            $Exist : 1
        };
        return this.common.run(sqlRequest,sqlParams);
    };

    
}

module.exports = JobDAO;