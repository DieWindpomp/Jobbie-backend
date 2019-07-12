class AddJob {
    constructor(Description, LocationID,Urgency, JobDate,  Comment, empID) {
        this.Description = Description;
        this.LocationID = LocationID;
        this.Urgency = Urgency;
        this.JobDate = JobDate;              
        this.Comment = Comment;
        this.empID = empID;
    }
}
module.exports = AddJob;