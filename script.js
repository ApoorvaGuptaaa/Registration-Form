$(document).ready(function() {
    const form = $('#registrationForm');
    const emailInput = $('#email');
    const phoneInput = $('#phoneNumber');
    const passwordInput = $('#password');
    const confirmPasswordInput = $('#confirmPassword');
    const successAlert = $('#registrationSuccessAlert');
    const errorAlert = $('#registrationErrorAlert');
    const emailHelp = $('#emailHelp');
    const phoneHelp = $('#phoneHelp');
    const passwordHelp = $('#passwordHelp');

    form.submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        let isValid = true;

        // Reset error messages
        $('.form-text.text-danger').addClass('d-none');
        $('input.form-control').removeClass('is-invalid');

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.val())) {
            emailHelp.removeClass('d-none');
            emailInput.addClass('is-invalid');
            isValid = false;
        }

        // Phone number validation (basic - adjust as needed)
        const phoneRegex = /^[0-9]{10}$/; // Example: 10 digits
        if (!phoneRegex.test(phoneInput.val())) {
            phoneHelp.removeClass('d-none');
            phoneInput.addClass('is-invalid');
            isValid = false;
        }

        // Password match validation
        if (passwordInput.val() !== confirmPasswordInput.val()) {
            passwordHelp.removeClass('d-none');
            confirmPasswordInput.addClass('is-invalid');
            isValid = false;
        }

        // Check for any empty required fields (Bootstrap should handle most)
        form.find('input[required]').each(function() {
            if (!$(this).val().trim()) {
                $(this).addClass('is-invalid');
                isValid = false;
            }
        });

        // Handle form submission based on validation
        if (isValid) {
            // Simulate successful registration
            successAlert.removeClass('d-none');
            errorAlert.addClass('d-none');
            form[0].reset(); // Clear the form
        } else {
            errorAlert.removeClass('d-none');
            successAlert.addClass('d-none');
        }
    });
});