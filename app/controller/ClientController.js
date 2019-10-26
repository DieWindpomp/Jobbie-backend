/* Load Car Data Access Object */
const ClientDAO = require('../dao/ClientDAO');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const Client = require('../model/Client');

/**
 * Car Controller
 */
class ClientController {

    constructor() {
        this.ClientDAO = new ClientDAO();
        this.common = new ControllerCommon();
    }

    findAll(res) {
        console.log("CON");
        this.ClientDAO.findAll()
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };
    AddClient(req,res)
    {  
        console.log("CON");
        console.log(req.body);
        let client = new Client();
        client.CName = req.body.CName;
        client.CSurname = req.body.CSurname;
        client.CContact = req.body.CContact;
        client.Company = req.body.Company;
        return this.ClientDAO.AddClient(client)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    }
        DeleteClient(req,res)
    {
        console.log("CON delete client");
        let id = req.params.id;
        return this.ClientDAO.DeleteClient(id)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    };
    UpdateClient(req,res)
    {
        console.log("CON");
        console.log(req.body);
        let client = new Client();
        client.CName = req.body.CName;
        client.CSurname = req.body.CSurname;
        client.CContact = req.body.CContact;
        client.Company = req.body.Company;
        client.id = req.body.id;
        return this.ClientDAO.UpdateClient(client)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    };




}

module.exports = ClientController;