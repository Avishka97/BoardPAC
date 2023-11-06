function beforeSubmitChangePassword() {
    var myForm = document.getElementById("submit-form");

    if (myForm && myForm.action != null) {
        myForm.action = myForm.action + "?tenant" + document.getElementById("tenant").value;
    }
    return true;
}