/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const ClientController = require('../../controller/ClientController');
const clientController = new ClientController();

/**
 * Car Entity routes
 */

router.get('/getall', function (req, res) {
    console.log('ROUTER');
    clientController.findAll(res);
});
router.post('/addClient',function(req,res)
{
    console.log("ROUTER");
    clientController.AddClient(req,res);
});
router.post('/UpdateClient',function(req,res)
{
    console.log("ROUTER");
    clientController.UpdateClient(req,res);
});
router.post('/DeleteClient/:id',function(req,res)
{
    console.log("ROUTER delete client");
    clientController.DeleteClient(req,res);
});





module.exports = router;