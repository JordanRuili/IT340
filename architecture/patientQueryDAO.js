const database = require('./database')


function findPatient(id){
    return database.patients.find((patient) => patient.id === id);
}

function retrievePatientList(){
    //return database.patients.map(({creationDate, ...patient}) => ({patient}));
    return database.patientList;
}

function retrievePatient(id){
    const {lastName,firstName,...patient} = findPatient(id);
    patient.name = lastName + ' ' + firstName;
    return patient;
}

module.exports = {retrievePatientList,retrievePatient};