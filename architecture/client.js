const patientService = require('./patientService');
const patientCommand = require('./patientCommand');
const patientQuery = require('./patientQuery');

// CRUD
// patientService.addPatient('toto', 'titi');
// console.log(patientService.getPatientList());

// patientService.savePatient(1,'toto','tata');;
// console.log(patientService.getPatientList());

// console.log(patientService.getPatient(1));

//CQRS
patientCommand.addPatient('moi','moi');

// patientQuery.getPatientList();

// patientQuery.getPatient(1);

patientCommand.savePatient(1,'toi','toi');
