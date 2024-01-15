function validerMotDePasse(motDePasse) {
    const maxPasswordLength = 8;
    const hasRequiredLength = motDePasse.length >= maxPasswordLength;
    const hasDigit = /\d/.test(motDePasse);
    const hasLetter = /[a-zA-Z]/.test(motDePasse);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(motDePasse);

    return hasRequiredLength && hasDigit && hasLetter && hasSpecialChar;
}

module.exports = validerMotDePasse;
