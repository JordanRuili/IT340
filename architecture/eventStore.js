const Event = require('./event');

const eventList = [];

function addEvent(name, patientId, payload,creationDate) {
  const event = new Event(name, patientId, payload,creationDate);
  eventList.push(event);
  console.log('eventlist',eventList);
}

function restorePatient(id) {
    const patientEvents = eventList.filter((event) => event.patientId === id);
    console.log (patientEvents)


    patientEvents.forEach(event => {
      if (event.name === 'patientAdded') {
        const patient = event.payload;
        console.log(patient)
        return patient;
      }
    });

}
  


module.exports = {eventList,addEvent, restorePatient};
