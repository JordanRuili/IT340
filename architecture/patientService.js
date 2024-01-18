const DAO = require('./patientDAO');
const Patient = require('./patient');

function addPatient(lastName, firstName){
    const patient = new Patient(lastName, firstName)
    DAO.insertPatient(patient)
}

module.exports = {addPatient};