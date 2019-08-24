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




module.exports = router;