const { patientList } = require('./database')
const Patient = require('./patient')
const commandDAO = require('./patientCommandDAO')
const eventStore = require('./eventStore')
const Event = require('./event')

function addPatient(lastName, firstName){
    const patient = new Patient(lastName, firstName)
    // commandDAO.insertPatient(patient)
    // commandDAO.insertPatientList(patient)

    eventStore.addEvent('patientAdded', patient.id, patient, new Date);
}

function savePatient(id,lastName,firstName){

    // let patient = commandDAO.findPatient(id);
    // patient.lastName = lastName;
    // patient.firstName = firstName;
    // commandDAO.updatePatient(pa=tient);
    // console.log("patientttttttt", patient);

    // const {creationDate, ... patientList} = patient
    // commandDAO.updatePatient(patientList);
    // console.log("patientttttttt", patientList);

    const patient = eventStore.restorePatient(id);
    console.log("patient", patient)
    const event = new Event('patientSaved', id, patient)
    


}


module.exports = {addPatient,savePatient};