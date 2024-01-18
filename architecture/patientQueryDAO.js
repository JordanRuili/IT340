function retrievePatientList(){
    return database.patients.map(({creationDate, ...patient}) => ({patient}));
}

function retrievePatient(id){
    const {lastName,firstName,...patient} = findPatient(id);
    patient.name = lastName + ' ' + firstName;
    return patient;
}

module.exports = {retrievePatientList,retrievePatient};