const queryDAO = require('./patientDAO')

function getPatientList(){
    return queryDAO.retrievePatientList()
}

function getPatient(id){
    return queryDAO.retrievePatient(id);
}


module.exports = {getPatientList,getPatient};