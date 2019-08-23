/* Load Car entity */
const Client = require('../model/Client');

/* Load DAO Common functions */
const daoCommon = require('./commons/daoCommon');

/**
 * Car Data Access Object
 */
class ClientDAO {

    constructor() {
        this.common = new daoCommon();
    }
    findAll() {
        console.log("DAO");
        let sqlRequest = "SELECT * FROM Client";
        return this.common.findAll(sqlRequest).then(rows => {
            let clients = [];
            for (const row of rows) {
                clients.push(new Client(row.id, row.CName, row.CSurname, row.CContact, row.Company, row.Exist));
            }
            console.log(clients);
            return clients;
        });
    };

    AddClient(client) 
    {
        console.log('DAO');
        console.log(client);
        let sqlRequest = `INSERT into Client (CName,CSurname,CContact,Company,Exist)
        VALUES($CName,$CSurname,$CContact,$Company,$Exist)`;      
        let sqlParams = {
            $CName : client.CName,
            $CSurname : client.CSurname,
            $CContact : client.CContact,
            $Company : client.Company,        
            $Exist : 1          
        };
        console.log(sqlParams);
        return this.common.run(sqlRequest,sqlParams); 
    }

    
}

module.exports = ClientDAO;