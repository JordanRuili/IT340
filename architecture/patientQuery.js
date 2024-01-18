function getPatientList(){
    return DAO.retrievePatientList()
}

function getPatient(id){
    return DAO.retrievePatient(id);
}


module.exports = {getPatientList,getPatient};