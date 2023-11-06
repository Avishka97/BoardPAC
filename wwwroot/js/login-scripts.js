var constraints = {
    Username: {
        presence: {
            message: "^Username Required"
        }
    },
    Password: {
        presence: {
            message: "^Password Required"
        }
    }
};

var form = document.querySelector("#local-login-form");
form.addEventListener("submit", function (ev) {
    if (validateForm())
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

    if (errors["Password"] == undefined)
        document.querySelector("div[error-for='Password']").innerHTML = "";
    else
        document.querySelector("div[error-for='Password']").innerHTML = errors["Password"];

    return false;
}

setTimeout(function () {
    document.querySelector('#success-message').classList.remove('show');
    document.querySelector('#error-message').classList.remove('show');
    document.querySelector('#info-message').classList.remove('show');
    document.querySelector('#warn-message').classList.remove('show');
}, 5000);

document.querySelector("div.support-wrapper").style.display = 'none';
var supportLabel = document.querySelector("#support-label");
supportLabel.addEventListener("mouseenter", function (ev) {
    document.querySelector("div.support-wrapper").style.display = 'block';
});
supportLabel.addEventListener("mouseleave", function (ev) {
    document.querySelector("div.support-wrapper").style.display = 'none';
});

document.querySelector("div.version-wrapper").style.display = 'none';
var versionLabel = document.querySelector("#version-label");
versionLabel.addEventListener("mouseenter", function (ev) {
    document.querySelector("div.version-wrapper").style.display = 'block';
});
versionLabel.addEventListener("mouseleave", function (ev) {
    document.querySelector("div.version-wrapper").style.display = 'none';
});