function insertPatient(patient){
    database.patients.push(patient)
    console.log(database.patients)
}

function updatePatient(patient){
    let index = database.patients.findIndex((p) => p.id == patient.id);
    database.patients[index] = patient;
}

module.exports = {insertPatient,updatePatient};