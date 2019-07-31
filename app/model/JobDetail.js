class JobDetail {
    constructor(id, ClientDetails, Description, Comment,LocationID,Coordinates,Address,CompanyName) {
        this.id = id;
        this.ClientDetails = ClientDetails;
        this.CompanyName = CompanyName;
        this.Description = Description;
        this.LocationID = LocationID;
        this.Comment = Comment;
        this.LocationID = LocationID;
        this.Coordinates = Coordinates;
        this.Address = Address;
    }
}
module.exports = JobDetail;