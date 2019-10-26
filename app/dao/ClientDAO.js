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
            return clients;
        });
    };

    AddClient(client) 
    {
        console.log('DAO');

        let sqlRequest = `INSERT into Client (CName,CSurname,CContact,Company,Exist)
        VALUES($CName,$CSurname,$CContact,$Company,$Exist)`;      
        let sqlParams = {
            $CName : client.CName,
            $CSurname : client.CSurname,
            $CContact : client.CContact,
            $Company : client.Company,        
            $Exist : 1          
        };

        return this.common.run(sqlRequest,sqlParams); 
    }

    UpdateClient(client) 
    {
        console.log('DAO');

        let sqlRequest = `UPDATE Client 
                            SET CName = $CName,CSurname = $CSurname,CContact = $CContact,Company = $Company
                            WHERE id = $id`;      
        let sqlParams = {
            $CName : client.CName,
            $CSurname : client.CSurname,
            $CContact : client.CContact,
            $Company : client.Company,        
            $id : client.id          
        };

        return this.common.run(sqlRequest,sqlParams); 
    }
    DeleteClient(id)
    {
        console.log('DAO delete client '+id );

        let sqlRequest = `UPDATE Client SET Exist = 0 WHERE id = $id`;      
        let sqlParams = {$id : id};

        return this.common.run(sqlRequest,sqlParams); 
    };

    
}

module.exports = ClientDAO;