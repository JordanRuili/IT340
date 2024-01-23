class Event {
    constructor(name, patientId, payload) {
      this.name = name;
      this.patientId = patientId;
      this.payload = payload;
      this.creationDate = new Date;
    }
  }
  
  module.exports = Event;
  