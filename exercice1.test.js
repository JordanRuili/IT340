const validerMotDePasse = require('./exercice1');

test('Mot de passe valide avec chiffre, lettre, et caractère spécial', () => {
  expect(validerMotDePasse('motdepasse123!')).toBe(true);
});

test('Mot de passe invalide - pas de chiffre', () => {
  expect(validerMotDePasse('motdepasse')).toBe(false);
});

test('Mot de passe invalide - pas de lettre', () => {
  expect(validerMotDePasse('12345678!')).toBe(false);
});

test('Mot de passe invalide - pas de caractère spécial', () => {
  expect(validerMotDePasse('motdepasse123')).toBe(false);
});

test('Mot de passe invalide - longueur inférieure à 8 caractères', () => {
  expect(validerMotDePasse('mdp123!')).toBe(false);
});

// test('Mot de passe valide avec des caractères spéciaux inhabituels', () => {
//   expect(validerMotDePasse('!@#MyP4ssw0rd')).toBe(true);
// });
