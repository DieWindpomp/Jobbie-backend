class JobList {
    constructor(id, Description, CompanyName, Urgency, Address,ClientDetails) {
        this.id = id;
        this.Description = Description;
        this.CompanyName =  CompanyName;
        this.Urgency = Urgency
        this.Address = Address;
        this.ClientDetails = ClientDetails;
    }
}
module.exports = JobList;