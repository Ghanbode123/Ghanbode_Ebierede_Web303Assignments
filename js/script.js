document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const countrySelect = document.getElementById('country');
    const submitButton = document.getElementById('submitButton');
    const welcomeMessage = document.getElementById('welcomeMessage');

    
    usernameInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);
    termsCheckbox.addEventListener('change', validateForm);
    countrySelect.addEventListener('change', validateForm);

    
    fetch('sample_files/countries.json')
        .then(response => response.json())
        .then(countries => {
            countries.forEach(country => {
                const option = document.createElement('option');
                option.value = country.code;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        });

   
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
        welcomeMessage.innerHTML = `Welcome, ${usernameInput.value}! You selected ${selectedCountry} (${countrySelect.value}).`;
        welcomeMessage.style.display = 'block';
    });

    
    function validateForm() {
        const isUsernameValid = usernameInput.value.trim() !== '';
        const isPasswordValid = passwordInput.value.length >= 12;
        const isConfirmPasswordValid = confirmPasswordInput.value === passwordInput.value;
        const isTermsAccepted = termsCheckbox.checked;
        const isCountrySelected = countrySelect.value !== '';

        const isFormValid = isUsernameValid && isPasswordValid && isConfirmPasswordValid && isTermsAccepted && isCountrySelected;

        submitButton.disabled = !isFormValid;
    }
});