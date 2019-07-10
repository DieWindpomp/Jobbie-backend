class Client {
    constructor(id, CName, CSurname, CContact, Company, Exist) {
        this.id = id;
        this.CName = CName;
        this.CSurname = CSurname;
        this.CContact = CContact;
        this.Company = Company;
        this.Exist = Exist;
    }
}
module.exports = Client;