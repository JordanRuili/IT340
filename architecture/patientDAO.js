const database = require('./database')

function insertPatient(patient){
    database.patients.push(patient)
    console.log(database.patients)
}

module.exports = {insertPatient};