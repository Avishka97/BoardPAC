var constraints = {
    OldPassword: {
        presence: {
            message: "^Enter the current password"
        }
    },
    NewPassword: {
        presence: {
            message: "^Enter a new password"
        }
    },
    ConfirmNewPassword: {
        presence: {
            message: "^Enter the confirm password"
        },
        equality: {
            attribute: "NewPassword",
            message: "^New password and confirm password do not match"
        }
    }
};

var form = document.querySelector("#change-password-form");
form.addEventListener("submit", function (ev) {
    if (validateForm() || ev.submitter.value == 'cancel')
        form.submit();
    else
        ev.preventDefault();
});

function validateForm() {
    var errors = validate(form, constraints);
    if (errors == undefined) return true;

    if (errors["OldPassword"] == undefined)
        document.querySelector("div[error-for='OldPassword']").innerHTML = "";
    else
        document.querySelector("div[error-for='OldPassword']").innerHTML = errors["OldPassword"];

    if (errors["NewPassword"] == undefined)
        document.querySelector("div[error-for='NewPassword']").innerHTML = "";
    else
        document.querySelector("div[error-for='NewPassword']").innerHTML = errors["NewPassword"];

    if (errors["ConfirmNewPassword"] == undefined)
        document.querySelector("div[error-for='ConfirmNewPassword']").innerHTML = "";
    else
        document.querySelector("div[error-for='ConfirmNewPassword']").innerHTML = errors["ConfirmNewPassword"];

    return false;
}