
let mysql = require('../common/mysql-model');

let seniors = mysql('seniors',{
    "ID": "int",
    "DomainID": "int",
    "DomainName": "varchar",
    "IDCard": "varchar",
    "iType": "int",
    "Name": "varchar",
    "Birthday": "date",
    "Address": "varchar",
    "StateID": "int",
    "CityID": "int",
    "DistrictID": "int",
    "Phone": "varchar",
    "ContactPerson": "text",
    "Nation": "varchar",
    "Religion": "varchar",
    "Culture": "varchar",
    "Marriage": "varchar",
    "Experience": "text",
    "Financial": "varchar",
    "MyNeed": "text",
    "FamilyNeed": "text",
    "FamilyStructure": "text",
    "NursingAbility": "text",
    "CanPay": "varchar",
    "Schedule": "text",
    "ScheduleMemo": "text",
    "OutTimes": "varchar",
    "MedicalHistory": "text",
    "Medicine": "text"
});

module.exports=seniors;

