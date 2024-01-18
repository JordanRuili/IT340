const patient = require('./patient')

function addPatient(lastName, firstName){
    const patient = new Patient(lastName, firstName)
    DAO.insertPatient(patient)
}

function savePatient(id,lastName,firstName){
    let patient = DAO.findPatient(id);
    patient.lastName = lastName;
    patient.firstName = firstName;
    console.log("patienttttt", patient);
    DAO.updatePatient(patient);
}

module.exports = {addPatient,savePatient};