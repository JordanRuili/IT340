function retrieveBalance(){
    console.log("Retrieve balance");
}

function debitAccount(accountId,amount){
    console.log("accountId:", accountId);
    console.log("amount:", amount);
}

module.exports = {retrieveBalance,debitAccount};
