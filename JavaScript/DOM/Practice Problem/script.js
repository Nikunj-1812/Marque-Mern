const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const country = document.getElementById("country");
const terms = document.getElementById("terms");
const submitBtn = document.getElementById("submitBtn");
const successMessage = document.getElementById("successMessage");

function setError(id, message){

    document.getElementById(id).innerText = message;

}

function clearErrors(){

    document.querySelectorAll(".error").forEach(error=>{

        error.innerText="";

    });

}

function removeValidation(){

    document.querySelectorAll("input,select").forEach(element=>{

        element.classList.remove("invalid");
        element.classList.remove("valid");

    });

}

function validate(){

    clearErrors();

    removeValidation();

    let valid=true;

    // Name

    if(nameInput.value.trim()===""){

        setError("nameError","Name is required");

        nameInput.classList.add("invalid");

        valid=false;

    }

    else{

        nameInput.classList.add("valid");

    }

    // Email

    let emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(emailInput.value)){

        setError("emailError","Invalid Email");

        emailInput.classList.add("invalid");

        valid=false;

    }

    else{

        emailInput.classList.add("valid");

    }

    // Phone

    let phoneRegex=/^\d{10}$/;

    if(!phoneRegex.test(phoneInput.value)){

        setError("phoneError","Phone must contain 10 digits");

        phoneInput.classList.add("invalid");

        valid=false;

    }

    else{

        phoneInput.classList.add("valid");

    }

    // Password

    let passwordRegex=/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    if(!passwordRegex.test(passwordInput.value)){

        setError(
            "passwordError",
            "Min 8 chars, 1 uppercase, 1 lowercase, 1 number"
        );

        passwordInput.classList.add("invalid");

        valid=false;

    }

    else{

        passwordInput.classList.add("valid");

    }

    // Confirm Password

    if(passwordInput.value!==confirmPasswordInput.value){

        setError(
            "confirmPasswordError",
            "Passwords do not match"
        );

        confirmPasswordInput.classList.add("invalid");

        valid=false;

    }

    else{

        confirmPasswordInput.classList.add("valid");

    }

    // Gender

    const gender=document.querySelector(
        'input[name="gender"]:checked'
    );

    if(!gender){

        setError("genderError","Select Gender");

        valid=false;

    }

    // Country

    if(country.value===""){

        setError("countryError","Select Country");

        country.classList.add("invalid");

        valid=false;

    }

    else{

        country.classList.add("valid");

    }

    // Terms

    if(!terms.checked){

        setError(
            "termsError",
            "Accept Terms & Conditions"
        );

        valid=false;

    }

    return valid;

}

form.addEventListener("submit",function(event){

    event.preventDefault();

    successMessage.innerText="";

    if(validate()){

        submitBtn.disabled=true;

        submitBtn.innerText="Registering...";

        setTimeout(function(){

            successMessage.innerText="Registration Successful 🎉";

            successMessage.classList.add("success");

            submitBtn.disabled=false;

            submitBtn.innerText="Register";

            form.reset();

            removeValidation();

        },2000);

    }

});