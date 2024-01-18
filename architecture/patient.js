let compteurId = 0;
function generateId(){
    compteurId++
    return compteurId
}

class Patient{

    constructor(lastName,firstName){
        this.id = generateId()
        this.lastName = lastName
        this.firstName = firstName
        this.creationDate = new Date
    }
}
 
module.exports = Patient;