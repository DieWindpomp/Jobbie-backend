const LocationDAO = require('../dao/LocationDAO');

/* Load Controller Common function */
const ControllerCommon = require('./common/controllerCommon');

/* Load Car entity */
const LocationM = require('../model/Location');

/**
 * Car Controller
 */
class LocationController {

    constructor() {
        this.locationDAO = new LocationDAO();
        this.common = new ControllerCommon();
    }

    addlocation(req,res){
        console.log('CON');
        let Location = new LocationM();
        Location.Coordinates = req.body.Coordinates;
        Location.Address = req.body.Address;
        Location.ClientID = req.body.ClientID;
        return this.locationDAO.addLocation(Location)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    }

    getclientlocations(req, res) {
        console.log('CON');
        let id = req.params.id;

        this.locationDAO.getclientlocations(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

    Updatelocation(req,res){
        console.log('CON');
        let Location = new LocationM();
        Location.Coordinates = req.body.Coordinates;
        Location.Address = req.body.Address;
        Location.ClientID = req.body.ClientID;
        Location.id = req.body.id;
        return this.locationDAO.UpdateLocation(Location)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    };
    DeleteLocation(req,res)
    {
        console.log("CON");
        let id = req.params.id;
        return this.locationDAO.DeleteLocation(id)
        .then(this.common.editSuccess(res))
        .catch(this.common.serverError(res));
    };


}

module.exports = LocationController;