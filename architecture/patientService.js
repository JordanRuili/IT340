const DAO = require('./patientDAO');
const Patient = require('./patient');

function addPatient(lastName, firstName){
    const patient = new Patient(lastName, firstName)
    DAO.insertPatient(patient)
}

function getPatientList(){
    return DAO.retrievePatientList()
}

function savePatient(id,lastName,firstName){
    let patient = DAO.findPatient(id);
    patient.lastName = lastName;
    patient.firstName = firstName;
    console.log("patienttttt", patient);
    DAO.updatePatient(patient);
}

function getPatient(id){
    return DAO.retrievePatient(id);
}

module.exports = {addPatient, getPatientList,savePatient,getPatient};