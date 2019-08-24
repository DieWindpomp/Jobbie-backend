const daoCommon = require('./commons/daoCommon');

const Location = require('../model/Location');
class LocationDAO{
    constructor(){
        this.common = new daoCommon();
    }

addLocation(addlocation){

    console.log("DAO");
    let sqlRequest = `INSERT into Location (Address,Coordinates,ClientID,Exist)
    VALUES($address,$coordinates,$clientid,1)`;
    let sqlParams = {
        $id : addlocation.id,
        $address : addlocation.Address,
        $coordinates : addlocation.Coordinates,
        $clientid : addlocation.ClientID
    };
    return this.common.run(sqlRequest,sqlParams);
}

deleteLocation(locationid)
{
    console.log("DAO");
    let sqlRequest = `UPDATE Location 
    SET Exist = 0
    WHERE id =`+locationid;
    return this.common.run(sqlRequest,sqlParams);
}

getclientlocations(clientid)
{
    console.log("DAO " + clientid);
    let sqlRequest = `SELECT Location.id,Coordinates,Address 
    FROM Location WHERE ClientID = `+clientid+`
    AND Location.Exist = 1`;
    
    return this.common.findAll(sqlRequest).then(rows =>
        {
            let locations = [];
            for (const row of rows)
            {
                locations.push(new Location(row.id,row.Coordinates,row.Address));
            }          
            return locations;
        });
};






}
module.exports = LocationDAO;