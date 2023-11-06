var constraints = {
    Password: {
        presence: {
            message: "^Enter a new password"
        }
    },
    ConfirmPassword: {
        presence: {
            message: "^Enter the confirm password"
        },
        equality: {
            attribute: "Password",
            message: "^New password and confirm password do not match"
        }
    }
};

var form = document.querySelector("#reset-password-form");
form.addEventListener("submit", function (ev) {
    if (validateForm() || ev.submitter.value == 'cancel')
        form.submit();
    else
        ev.preventDefault();
});

function validateForm() {
    var errors = validate(form, constraints);
    if (errors == undefined) return true;

    if (errors["Password"] == undefined)
        document.querySelector("div[error-for='Password']").innerHTML = "";
    else
        document.querySelector("div[error-for='Password']").innerHTML = errors["Password"];

    if (errors["ConfirmPassword"] == undefined)
        document.querySelector("div[error-for='ConfirmPassword']").innerHTML = "";
    else
        document.querySelector("div[error-for='ConfirmPassword']").innerHTML = errors["ConfirmPassword"];

    return false;
}