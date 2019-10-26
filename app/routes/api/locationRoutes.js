/* Load Modules */
const express = require('express');
const router = express.Router();

/* Load controller */
const LocationController = require('../../controller/LocationController');
const locationcontroller = new LocationController();

/**
 * Car Entity routes
 */

router.get('/getclientlocations/:id', function (req, res) {
    console.log('ROUTER');
    locationcontroller.getclientlocations(req,res);
});

router.post('/addLocation/',function (req,res){
    console.log('Router');
    locationcontroller.addlocation(req,res);
});
router.post('/UpdateLocation/',function (req,res){
    console.log('Router');
    locationcontroller.Updatelocation(req,res);
});
router.post('/DeleteLocation/:id', function(req,res){
console.log("Router");
locationcontroller.DeleteLocation(req,res);
});




module.exports = router;