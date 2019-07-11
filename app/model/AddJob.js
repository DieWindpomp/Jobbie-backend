class AddJob {
    constructor(Description, LocationID,Urgency, Date,  Comment, empID) {
        this.Description = Description;
        this.LocationID = LocationID;
        this.Urgency = Urgency;
        this.Date = Date;              
        this.Comment = Comment;
        this.empID = empID;
    }
}
module.exports = AddJob;