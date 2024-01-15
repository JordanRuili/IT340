const DAO = require('./bankDAO');

function getBalance(){
   DAO.retrieveBalance();
}

module.exports = {getBalance};