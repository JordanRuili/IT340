const database = require('./database')

function insertPatient(patient){
    database.patients.push(patient)
    console.log(database.patients)
}

function retrievePatientList(){
    return database.patients.map(({creationDate, ...patient}) => ({patient}));
}

function getPatient(id){
    return database.patients.find((patient) => patient.id === id);
}

function updatePatient(patient){
    let index = database.patients.findIndex((p) => p.id == patient.id);
    database.patients[index] = patient;
}

module.exports = {insertPatient,retrievePatientList,getPatient,updatePatient};