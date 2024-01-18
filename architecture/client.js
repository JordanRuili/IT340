const { updatePatient } = require('./patientDAO');
const patientService = require('./patientService');

patientService.addPatient('toto', 'titi');
console.log(patientService.getPatientList());
patientService.savePatient(1,'toto','tata');;
console.log(patientService.getPatientList());

patientService.getPatient(1);
console.log(patientService.getPatient(1))