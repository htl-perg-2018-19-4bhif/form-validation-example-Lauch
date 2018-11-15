window.onload = function () {

    let firstName: boolean = false;
    let lastName: boolean = false;
    let emailFalse: boolean = true;
    let emailRight: boolean = false;
    let newsletter: boolean = false;

    $("#emailMandatory").hide();
    $("#otherMediaChannel").hide();
    SubmitButton();

    $("#firstName").on("input", function () {
        if (!$("#firstName").val()) {
            $("#firstNameMandatory").show();
            firstName = false;
        } else {
            $("#firstNameMandatory").hide();
            firstName = true;
        }
        SubmitButton();
    });

    $("#lastName").on("input", function () {
        if (!$("#lastName").val()) {
            $("#lastNameMandatory").show();
            lastName = false;
        } else {
            $("#lastNameMandatory").hide();
            lastName = true;
        }
        SubmitButton();
    });

    $("#email").on("input", function () {
        if (!$("#email").val()) {
            emailRight = false;
        } else {
            emailRight = true;
        }
        setEmail();
    });

    $("#newsletter").on("input", function () {
        if (!$("#newsletter").is(":checked")) {
            newsletter = true;
        } else {
            newsletter = false;
        }
        setEmail();
    });

    function SubmitButton() {
        if (firstName && lastName && emailRight) {
            $(":submit").prop("disabled", false);
        } else {
            $(":submit").prop("disabled", true);
        }
    }

    function setEmail(){
        if(emailFalse && newsletter){
            emailRight = false;
            $('#emailMandatory').show();
        }else{
            emailRight = true;
            $('#emailMandatory').hide();
        }
        SubmitButton();
    }
}