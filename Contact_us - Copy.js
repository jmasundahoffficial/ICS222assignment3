function formValidation() {

    var uname = document.getElementById('name');
    var unumber =  document.getElementById('number');
    var uemail =  document.getElementById('email');
    var uenquiry =  document.getElementById('enquiry');
    
    if (allLetter(uname)) {
        if (allnumeric(unumber)) {
            if (ValidateEmail(uemail)) {

                alert("Enquiry successful")

            }
        }


    }
    return false;

}

function allLetter(uname) {
    var letters = /^[A-Za-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}


function allnumeric(unumber) {
    var numbers = /^[0-9]+$/;
    if (unumber.value.match(numbers)) {
        return true;
    }
    else {
        alert('Number must have numeric characters only');
        unumber.focus();
        return false;
    }
}
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

