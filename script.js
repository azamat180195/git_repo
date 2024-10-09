function generatePassword() {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersChars = "0123456789";
    const symbolsChars = "!@#$%^&*()_+";

    let charset = "";
    
    if (document.getElementById("lowercaseCheckbox").checked) {
        charset += lowercaseChars;
    }
    if (document.getElementById("uppercaseCheckbox").checked) {
        charset += uppercaseChars;
    }
    if (document.getElementById("numbersCheckbox").checked) {
        charset += numbersChars;
    }
    if (document.getElementById("symbolsCheckbox").checked) {
        charset += symbolsChars;
    }

    if (charset === "") {
        // If no checkbox is selected, default to numbers
        charset = numbersChars;
    }

    const length = parseInt(document.getElementById("passwordLength").value);
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

function updatePasswordLength() {
    const lengthValue = document.getElementById("passwordLength").value;
    document.getElementById("passwordLengthValue").textContent = lengthValue;
}

function copyToClipboard() {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
}