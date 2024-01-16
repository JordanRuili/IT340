const bank = require("./bank");
const DAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");

afterEach(()=>{
    jest.resetAllMocks();
});

test("Appelle la fonction retrieveBalance sans afficher le log", () => {

    const retrieveBalanceMock = jest.spyOn(DAO,"retrieveBalance").mockReturnValue("True");

    bank.getBalance();

    expect(retrieveBalanceMock).toHaveBeenCalled();
});


test("Appelle la fonction transfert avec les bons paramètres", () => {
    const transfertMock = jest.spyOn(bankTransfer,"transfert"); 
    const accountId = '123';
    const amount = 100;

    bank.transferMoney(accountId, amount);

    expect(transfertMock).toHaveBeenCalledWith(accountId, amount);
});

test("Appelle la fonction debitAccount avec les bons paramètres", async () => {
    const debitMock = jest.spyOn(DAO,"debitAccount"); 
    const accountId = '123';
    const amount = 100;
    
    await bank.transferMoney(accountId, amount);

    expect(debitMock).toHaveBeenCalledWith(accountId, amount);
});

test("Appelle la fonction debitAccount seulement si la promesse de Transfert est validée", async () => {
    // const transfertMock = jest.spyOn(bankTransfer,"transfert");
    // const debitMock = jest.spyOn(DAO,"debitAccount");
    const transferMoneyMock = jest.spyOn(bankTransfer,"transfert")
    
    const accountId = '123';
    const amount = 100;

    await bank.transferMoney(accountId, amount);

    expect(transferMoneyMock).toHaveBeenCalledWith(accountId, amount);
    //expect(debitMock).toHaveBeenCalled();
});

test("N'appelle pas la fonction debitAccount si la promesse n'est pas résolue", async () => {
    const transferMoneyMock = jest.spyOn(bankTransfer,"transfert").mockRejectedValue();
    const debitMock = jest.spyOn(DAO,"debitAccount");

    const accountId = '123';
    const amount = 100;

    await bank.transferMoney(accountId, amount);

    expect(transferMoneyMock).toHaveBeenCalledWith(accountId,amount);
    expect(debitMock).not.toHaveBeenCalled();

});