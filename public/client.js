//step 1 define functions, objects and variables
let activeUserEmail = "";
let activeUserId = "";
//step 2 use functions, objects and variables(triggers)

$(document).ready(function () {
    $(".home-page").show();
    $(".signup-page").show();
    $(".account-dashboard-page").hide();
    $(".account-page").hide();
    $(".create-form").hide();
    $(".delete-a-link-page").hide();
    $(".logout-page").hide();
    $(".password-page").hide();
    $(".view-link-page").hide();
    $(".create-a-link-page").hide();

})

$("#signup-form").submit(function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    let signupName = $(".signup-name").val();
    let signupEmail = $(".signup-email").val();
    let signupPhone = $(".signup-phone").val();
    let signupPassword = $(".signup-password").val();
    let signupConfirm = $(".signup-confirm").val();
    console.log(signupName, signupEmail, signupPhone, signupPassword, signupConfirm);
    if ((!signupName) || (signupName.length < 1)) {
        alert('Invalid Name');
    } else if ((!signupEmail) || (signupEmail.length < 1) || (signupEmail.indexOf(' ') > 0)) {
        alert('Invalid Email');
    } else if ((!signupPhone) || (signupPhone.length < 1) || (signupPhone.indexOf(' ') > 0)) {
        alert('Invalid Phone Number');
    } else if ((!signupPassword) || (signupPassword.length < 1) || (signupPassword.indexOf(' ') > 0)) {
        alert('Invalid Password');
    } else if ((!signupConfirm) || (signupConfirm.length < 1) || (signupConfirm.indexOf(' ') > 0)) {
        alert('Invalid Password');
    } else if (signupConfirm != signupPassword) {
        alert('Passwords do not match');
    } else {
        const newUserObject = {
            name: signupName,
            email: signupEmail,
            phone: signupPhone,
            password: signupPassword
        };
        $.ajax({
                type: "POST",
                url: "/users/create",
                dataType: 'json',
                data: JSON.stringify(newUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                console.log(result);
                $(".home-page").hide();
                $(".signup-page").hide();
                $(".account-dashboard-page").hide();
                $(".account-page").hide();
                $(".create-form").hide();
                $(".delete-a-link-page").hide();
                $(".logout-page").hide();
                $(".password-page").hide();
                $(".view-link-page").hide();
                $(".create-a-link-page").show();
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Invalid username and password combination. Pleae check your username and password and try again.');
            });
    };
});


$("#signin-form").submit(function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    //    var userInput = $("#query").val();
    let signinEmail = $(".signin-email").val();
    let signinPassword = $(".signin-password").val();
    console.log(signinEmail, signinPassword);
    if ((!signinEmail) || (signinEmail.length < 1) || (signinEmail.indexOf(' ') > 0)) {
        alert('Invalid Email');
    } else if ((!signinPassword) || (signinPassword.length < 1) || (signinPassword.indexOf(' ') > 0)) {
        alert('Invalid Password');
    } else {
        const signinUserObject = {
            email: signinEmail,
            password: signinPassword
        };
        $.ajax({
                type: "POST",
                url: "/users/signin",
                dataType: 'json',
                data: JSON.stringify(signinUserObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                console.log(result);
                activeUserEmail = result.email;
                activeUserId = result._id;
                $(".home-page").hide();
                $(".signup-page").hide();
                $(".account-dashboard-page").show();
                $(".account-page").hide();
                $(".create-form").hide();
                $(".delete-a-link-page").hide();
                $(".logout-page").hide();
                $(".password-page").hide();
                $(".view-link-page").hide();
                $(".create-a-link-page").hide();
            })
            .fail(function (jqXHR, error, errorThrown) {
                console.log(jqXHR);
                console.log(error);
                console.log(errorThrown);
                alert('Invalid username and password combination. Pleae check your username and password and try again.');
            });
    };

});

$("#create-form").submit(function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    //    var userInput = $("#query").val();
    $(".home-page").hide();
    $(".signup-page").hide();
    $(".account-dashboard-page").show();
    $(".account-page").hide();
    $(".create-form").hide();
    $(".delete-a-link-page").hide();
    $(".logout-page").hide();
    $(".password-page").hide();
    $(".view-link-page").hide();
    $(".create-a-link-page").hide();
});

$(".create-button").on("click", function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    //    var userInput = $("#query").val();
    $(".home-page").hide();
    $(".signup-page").hide();
    $(".account-dashboard-page").hide();
    $(".account-page").hide();
    $(".create-form").hide();
    $(".delete-a-link-page").hide();
    $(".logout-page").hide();
    $(".password-page").hide();
    $(".view-link-page").hide();
    $(".create-a-link-page").show();
});

$(".footer-saved-links").on("click", function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    //    var userInput = $("#query").val();
    $(".home-page").hide();
    $(".signup-page").hide();
    $(".account-dashboard-page").show();
    $(".account-page").hide();
    $(".create-form").hide();
    $(".delete-a-link-page").hide();
    $(".logout-page").hide();
    $(".password-page").hide();
    $(".view-link-page").hide();
    $(".create-a-link-page").hide();
});

$(".footer-create").on("click", function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //get the value from the input box
    //    var userInput = $("#query").val();
    $(".home-page").hide();
    $(".signup-page").hide();
    $(".account-dashboard-page").hide();
    $(".account-page").hide();
    $(".create-form").hide();
    $(".delete-a-link-page").hide();
    $(".logout-page").hide();
    $(".password-page").hide();
    $(".view-link-page").hide();
    $(".create-a-link-page").show();
});

$(".footer-logout").on("click", function (event) {
    //if the page refreshes when you submit the form use "preventDefault()" to force JavaScript to handle the form submission
    event.preventDefault();
    //refresh page
    location.reload();
});
