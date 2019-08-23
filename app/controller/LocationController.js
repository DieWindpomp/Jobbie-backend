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

    getclientlocations(req, res) {
        console.log('CON');
        let id = req.params.id;

        this.locationDAO.getclientlocations(id)
            .then(this.common.findSuccess(res))
            .catch(this.common.findError(res));
    };

}

module.exports = LocationController;