const { patientList } = require('./database')
const Patient = require('./patient')
const commandDAO = require('./patientCommandDAO')

function addPatient(lastName, firstName){
    const patient = new Patient(lastName, firstName)
    commandDAO.insertPatient(patient)
    commandDAO.insertPatientList(patient)
}

function savePatient(id,lastName,firstName){
    let patient = commandDAO.findPatient(id);
    patient.lastName = lastName;
    patient.firstName = firstName;
    commandDAO.updatePatient(patient);
    console.log("patientttttttt", patient);

    const {creationDate, ... patientList} = patient
    commandDAO.updatePatient(patientList);

    console.log("patientttttttt", patientList);

}

module.exports = {addPatient,savePatient};