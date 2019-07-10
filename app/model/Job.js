class Job {
    constructor(id, Description, LocationID,Urgency,Active, Date, Complete, Comment, Exist) {
        this.id = id;
        this.Description = Description;
        this.LocationID = LocationID;
        this.Urgency = Urgency;
        this.Active = Active;
        this.Date = Date;
        this.Complete = Complete;
        this.Comment = Comment;
        this.Exist = Exist;
    }
}
module.exports = Job;