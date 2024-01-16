const DAO = require('./bankDAO');
const transfer = require('./bankTransfer');

function getBalance(){
   DAO.retrieveBalance();
}

async function transferMoney(accountId, amount){
   // transfer.transfert(accountId,amount);
   // DAO.debitAccount(accountId,amount);
   try {
      await transfer.transfert(accountId,amount);
      DAO.debitAccount(accountId,amount);
   }
   catch(error) {
      console.error("Transfer failed");
   }
}

module.exports = {getBalance,transferMoney};
