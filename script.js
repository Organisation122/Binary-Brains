function checkPassword() {
    var password = document.getElementById("password").value;
    var resultElement = document.getElementById("result");
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Check for digits
    if (/\d/.test(password)) {
        strength += 1;
    }

    // Display result
    if (strength === 4) {
        resultElement.innerHTML = "Very Strong";
        resultElement.style.color = "green";
    } else if (strength === 3) {
        resultElement.innerHTML = "Strong";
        resultElement.style.color = "blue";
    } else if (strength === 2) {
        resultElement.innerHTML = "Moderate";
        resultElement.style.color = "orange";
    } else if (strength === 1) {
        resultElement.innerHTML = "Weak";
        resultElement.style.color = "red";
    } else {
        resultElement.innerHTML = "Very Weak";
        resultElement.style.color = "red";
    }
}