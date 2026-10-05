$(document).ready(function () {

    $("#studentForm").submit(function (event) {

        event.preventDefault();

        let fname = $("#fname").val();
        let email = $("#email").val();
        let phone = $("#phone").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();

        if (fname == "") {
            alert("Please enter your first name");
            return;
        }

        if (email == "") {
            alert("Please enter your email");
            return;
        }

        if (phone == "") {
            alert("Please enter your phone number");
            return;
        }

        if (password == "") {
            alert("Please enter a password");
            return;
        }

        if (password != confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (!$("#terms").is(":checked")) {
            alert("Please accept the terms and conditions");
            return;
        }

        $("#message")
            .text("✓ Registration Successful!")
            .css("color", "#b6ffb6")
            .hide()
            .fadeIn(800);

    });


    $("#reset").click(function () {

        $("#message").fadeOut(300);

    });

});