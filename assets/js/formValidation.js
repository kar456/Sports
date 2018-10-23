// JavaScript source code

function formValidation() {

    var fName = document.forms["RegForm"]["firstName"];
    var lname = document.forms["RegForm"]["lastName"];
    var pwd = document.forms["RegForm"]["password"];
    var cpwd = document.forms["RegForm"]["confirmpwd"];
    var email = document.forms["RegForm"]["email"];
    var add = document.forms["RegForm"]["address"];
    var ctry = document.forms["RegForm"]["country"];
    var st = document.forms["RegForm"]["state"];
    var zip = document.forms["RegForm"]["zip"];

    if (fName.value == "") {

        window.alert("please enter your First Name.");
        fname.focus();
        return false;

    }

    if (lname.value == "") {

        window.alert("please enter your last name.");
        lname.focus();
        return false;

    }

    if (pwd == cpwd) {

        return true;

    }
    else {

        alert("password must be same");
        return false;
    }

}
