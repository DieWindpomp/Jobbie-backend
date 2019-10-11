/* Load Car entity */
const Employee = require('../model/Employee');
const EmployeeLocations = require('../model/EmpLocation');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class EmployeeDAO {

    constructor() {
        this.common = new daoCommon();
    }

    /**
     * Tries to find an entity using its Id / Primary Key
     * @params id
     * @return entity
     */
    findById(id) 
    {
        console.log('DAO');
        let sqlRequest = "SELECT * FROM Employee WHERE id=$id AND Exist= 1";
        let sqlParams = {$id: id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Employee(row.id,row.EmpName,row.EmpSurname,row.EmpPw,row.EmpContact,row.Admin,row.Exist));
    };
    findAllEmployees(id) 
    {
        console.log('DAO');
        let sqlRequest = "SELECT * FROM Employee WHERE id != "+id+" AND Exist= 1";
        return this.common.findAll(sqlRequest).then(rows =>
            {
                let emps = [];
                for(const row of rows)
                {
                    emps.push(new Employee(row.id,row.EmpName,row.EmpSurname,row.EmpContact,row.Admin,row.Exist));
                }
                return emps;
            });
    };
    Login(username,password)
    {
        console.log('DAO');
        let sqlRequest = "SELECT id, Admin FROM Employee WHERE $username = (EmpName || EmpSurname) AND EmpPw = $password AND Exist = 1";
        let sqlParams = {$username: username , $password:password};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Employee(row.id,"","","",row.Admin,""));            
    }
    GetEmployeeLocations(id)
    {
        console.log('DAO');
        let sqlRequest = `SELECT
        (Job.Description|| ' for ' || Client.Company) as 'JobDesc',		
        Location.Coordinates AS 'Coordinates' 
        FROM Employee,Job,Location,Client 
        WHERE Employee.id = Job.EmpID AND
		Location.id = Job.LocationID AND Client.id = ClientID AND
        Employee.id = $id AND Job.Active = 1`;
        let sqlParams = {$id:id};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
                    new EmployeeLocations(row.JobDesc,row.Coordinates));
                    
                    
    }
    AddEmployee(addEmployee)
    {
        console.log('DAO');
        let sqlRequest = `INSERT INTO Employee(EmpName,EmpSurname,EmpPw,EmpContact,Admin,Exist)
        VALUES($EmpName,$EmpSurname,$EmpPw,$EmpContact,$Admin,$Exist)`;
        let sqlParams = {
            $EmpName : addEmployee.EmpName,
            $EmpSurname : addEmployee.EmpSurname,
            $EmpPw : addEmployee.EmpPw,
            $EmpContact : addEmployee.EmpContact,
            $Admin : addEmployee.Admin,
            $Exist : 1};
        return this.common.run(sqlRequest,sqlParams);
    }



    
}

module.exports = EmployeeDAO;