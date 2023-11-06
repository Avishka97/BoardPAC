var constraints = {
    Username: {
        presence: {
            message: "^Username is required"
        }
    },
    Email: {
        presence: {
            message: "^Email is required"
        },
        email: {
            message: "^Invalid email address"
        }
    }
};

var form = document.querySelector("#forgot-password-form");
form.addEventListener("submit", function (ev) {
    if (validateForm() || ev.submitter.value == 'cancel')
        form.submit();
    else
        ev.preventDefault();
});

function validateForm() {
    var errors = validate(form, constraints);
    if (errors == undefined) return true;

    if (errors["Username"] == undefined)
        document.querySelector("div[error-for='Username']").innerHTML = "";
    else
        document.querySelector("div[error-for='Username']").innerHTML = errors["Username"];

    if (errors["Email"] == undefined)
        document.querySelector("div[error-for='Email']").innerHTML = "";
    else
        document.querySelector("div[error-for='Email']").innerHTML = errors["Email"];

    return false;
}