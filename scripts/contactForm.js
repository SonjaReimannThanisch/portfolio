/**
 * Initializes the contact form validation and submission handling.
 */
function initContactForm() {
    let form = document.querySelector(".contact-form");
    let submitButton = form?.querySelector('button[type="submit"]');
    if (!form || !submitButton) return;
    addContactFieldValidation(form);
    updateContactSubmitButton(form, submitButton);
    form.addEventListener("input", () => {
        updateContactSubmitButton(form, submitButton);
        updatePrivacyValidationState(form);
    });
    form.addEventListener("submit", submitContactForm);
}

/**
 * Adds blur validation to all contact form fields.
 * @param {HTMLFormElement} form - The contact form.
 */
function addContactFieldValidation(form) {
    let fields = getContactFields(form);
    fields.forEach((field) => {
        field.addEventListener("blur", () => {
            updateFieldValidationState(field);
        });
    });
}

/**
 * Validates all fields of the contact form.
 * @param {HTMLFormElement} form - The contact form.
 * @returns {boolean} True if the form is valid.
 */
function validateContactForm(form) {
    let fields = getContactFields(form);
    fields.forEach(updateFieldValidationState);
    updatePrivacyValidationState(form);
    return form.checkValidity();
}

/**
 * Updates the privacy checkbox validation state.
 * @param {HTMLFormElement} form - The contact form.
 */
function updatePrivacyValidationState(form) {
    let checkbox = form.querySelector('input[name="privacy"]');
    let errorElement = form.querySelector(".privacy-error");
    updatePrivacyErrorText(checkbox, errorElement);
    updatePrivacyErrorClass(checkbox);
}

/**
 * Updates the privacy validation error message.
 * @param {HTMLInputElement} checkbox - The privacy checkbox.
 * @param {HTMLElement} errorElement - The validation message element.
 */
function updatePrivacyErrorText(checkbox, errorElement) {
    let validationText = translations[currentLanguage].validation;
    errorElement.textContent = checkbox.checked
        ? ""
        : validationText.privacyRequired;
}

/**
 * Updates the error class of the privacy checkbox.
 * @param {HTMLInputElement} checkbox - The privacy checkbox.
 */
function updatePrivacyErrorClass(checkbox) {
    checkbox.classList.toggle("error", !checkbox.checked);
}

/**
 * Returns all contact fields except the privacy checkbox.
 * @param {HTMLFormElement} form - The contact form.
 * @returns {NodeList} The contact form fields.
 */
function getContactFields(form) {
    return form.querySelectorAll(
        'input:not([type="checkbox"]), textarea'
    );
}

/**
 * Updates the validation state of a contact form field.
 * @param {HTMLElement} field - The form field to validate.
 */
function updateFieldValidationState(field) {
    let isValid = field.checkValidity();

    updateFieldValidationClasses(field, isValid);
    updateFieldPlaceholder(field, isValid);
}

/**
 * Updates the validation classes of a form field.
 * @param {HTMLElement} field - The form field.
 * @param {boolean} isValid - Whether the field is valid.
 */
function updateFieldValidationClasses(field, isValid) {
    field.classList.toggle("valid", isValid);
    field.classList.toggle("error", !isValid);
}

/**
 * Updates the placeholder depending on the field validation state.
 * @param {HTMLElement} field - The form field.
 * @param {boolean} isValid - Whether the field is valid.
 */
function updateFieldPlaceholder(field, isValid) {
    field.placeholder = isValid
        ? field.dataset.defaultPlaceholder
        : field.dataset.errorMessage;
}

/**
 * Handles the contact form submission.
 * @param {SubmitEvent} event - The submit event.
 */
async function submitContactForm(event) {
    event.preventDefault();
    let form = event.target;
    if (!validateContactForm(form)) {
        return;
    }
    let submitButton = form.querySelector('button[type="submit"]');
    setSubmitButtonLoading(submitButton);
    let success = await sendContactForm(form);
    handleContactFormResponse(success, form, submitButton);
}

/**
 * Sends the contact form data to the configured endpoint.
 * @param {HTMLFormElement} form - The contact form.
 * @returns {Promise<boolean>} True if the request was successful.
 */
async function sendContactForm(form) {
    let response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
            Accept: "application/json",
        },
    });
    return response.ok;
}

/**
 * Handles the response of the contact form request.
 * @param {boolean} success - Whether the request was successful.
 * @param {HTMLFormElement} form - The contact form.
 * @param {HTMLButtonElement} submitButton - The submit button.
 */
function handleContactFormResponse(success, form, submitButton) {
    if (success) {
        showContactSuccess(form, submitButton);
        return;
    }
    showContactError(submitButton);
}

/**
 * Sets the submit button to its loading state.
 * @param {HTMLButtonElement} button - The submit button.
 */
function setSubmitButtonLoading(button) {
    let text = translations[currentLanguage].contact.form;
    button.disabled = true;
    button.textContent = text.sending;
}

/**
 * Restores the submit button after a failed request.
 * @param {HTMLButtonElement} button - The submit button.
 */
function showContactError(button) {
    let text = translations[currentLanguage].contact.form;
    button.disabled = false;
    button.textContent = text.send;
}

/**
 * Resets the form and shows the success state.
 * @param {HTMLFormElement} form - The contact form.
 * @param {HTMLButtonElement} button - The submit button.
 */
function showContactSuccess(form, button) {
    let text = translations[currentLanguage].contact.form;
    form.reset();
    button.textContent = text.success;
    button.disabled = true;
}

/**
 * Updates the visual state of the contact form submit button.
 * @param {HTMLFormElement} form - The contact form.
 * @param {HTMLButtonElement} submitButton - The submit button.
 */
function updateContactSubmitButton(form, submitButton) {
    let text = translations[currentLanguage].contact.form;
    let isValid = form.checkValidity();
    submitButton.textContent = text.send;
    submitButton.disabled = !isValid;
    submitButton.classList.toggle("active", isValid);
}

initContactForm();
