/* Load Car entity */
const Employee = require('../model/Employee');

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
            new Employee(row.id,row.EmpName,row.EmpSurname,row.EmpPw,row.EmpContact, row.Exist));
    };
    Login(username,password)
    {
        console.log('DAO');
        let sqlRequest = "SELECT id FROM Employee WHERE $username = (EmpName || EmpSurname) AND EmpPw = $password AND Exist = 1";
        let sqlParams = {$username: username , $password:password};
        return this.common.findOne(sqlRequest, sqlParams).then(row =>
            new Employee(row.id));
    }


    
}

module.exports = EmployeeDAO;