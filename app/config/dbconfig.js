/* Load modules */
let sqlite3 = require('sqlite3').verbose();

/*
 * Database configuration
 */

/* Load database file (Creates file if not exists) */
let db = new sqlite3.Database('./jobbieDB.db');

/* Init car and driver tables if they don't exist */
let init = function () {
    // db.run("CREATE TABLE if not exists car (" +
    //     "id INTEGER PRIMARY KEY AUTOINCREMENT," +
    //     " maker TEXT," +
    //     " model TEXT," +
    //     " year INT," +
    //     " driver INT" +
    //     ")");
// Template
    db.run(`CREATE TABLE if not exists Employee(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        EmpName TEXT,
        EmpSurname TEXT,
        EmpPw TEXT,
        EmpContact TEXT,
        Admin BOOL,
        Exist BOOL
    )`);

    db.run(`CREATE TABLE if not exists Client(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        CName TEXT,
        CSurname TEXT,
        CContact TEXT,
        Company TEXT,
        Exist BOOL        
    )`);

    db.run(`CREATE TABLE if not exists Location(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Coordinates TEXT,
        Address TEXT,
        ClientID INTEGER,
        Exist BOOL,
        FOREIGN KEY(ClientID) REFERENCES Client(id)
    )`);


    db.run(`CREATE TABLE if not exists Job(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        Description TEXT,
        LocationID INTEGER,
        EmpID INTEGER,
        Urgency TEXT,
        Active BOOL,
        Date DATE,
        Complete BOOL,
        Comment TEXT,
        Exist BOOL,
        FOREIGN KEY(LocationID) REFERENCES Location(id),
        FOREIGN KEY(EmpID) REFERENCES Employee(id)
    )`);



};

module.exports = {
    init: init,
    db: db
};

