const bank = require("./bank");
const DAO = require("./bankDAO");

test("Appelle la fonction retrieveBalance sans afficher le log", () => {

    const retrieveBalanceMock = jest.spyOn(DAO,"retrieveBalance").mockReturnValue("True");

    bank.getBalance();

    expect(retrieveBalanceMock).toHaveBeenCalled();
});