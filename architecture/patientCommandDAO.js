const database = require('./database')

function findPatient(id){
    return database.patients.find((patient) => patient.id === id);
}

function insertPatient(patient){
    database.patients.push(patient)
    console.log(database.patients)
}

function insertPatientList(patient){
    const {creationDate, ...patientList} = patient
    database.patientList.push(patient)
    console.log(database.patientList)
}

function updatePatient(patient){
    let index = database.patients.findIndex((p) => p.id == patient.id);
    database.patients[index] = patient;
}

module.exports = {findPatient,insertPatient,insertPatientList,updatePatient};