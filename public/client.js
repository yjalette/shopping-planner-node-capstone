//step 1 define functions, objects and variables
let activeUserEmail = "";
let activeUserId = "";

function showLinks(activeUserEmail) {
    $.ajax({
            type: "GET",
            url: '/link/' + activeUserEmail,
            dataType: 'json',
        })
        .done(function (dataOutput) {
            //displays the external api json object in the console
            displayLinkResult(dataOutput.links, activeUserEmail);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}

function displayLinkResult(dataFromApi, activeUserEmail) {
    console.log(dataFromApi, activeUserEmail);
    var buildTheHtmlOutput = "";
    buildTheHtmlOutput += '<tr>';
    buildTheHtmlOutput += '<th>Category</th>';
    buildTheHtmlOutput += '<th>Name</th>';
    buildTheHtmlOutput += '<th>Link</th>';
    buildTheHtmlOutput += '<th>Actions</th>';
    buildTheHtmlOutput += '</tr>';
    $.each(dataFromApi, function (dataKey, dataValue) {
        buildTheHtmlOutput += '<tr>';
        buildTheHtmlOutput += '<td>' + dataValue.category + '</td>';
        buildTheHtmlOutput += '<td>' + dataValue.name + '</td>';
        buildTheHtmlOutput += '<td><a href="' + dataValue.url + '" target="_blank"><i class="fa fa-eye" aria-hidden="true"></i></a></td>';
        buildTheHtmlOutput += '<td><a onclick=deleteLink("' + dataValue._id + '")> <i class="fa fa-trash" aria-hidden="true"></i></a></td>';
        buildTheHtmlOutput += '</tr>';
    })
    $(".table-base").html(buildTheHtmlOutput);
};

function deleteLink(linkId) {
    console.log(linkId);
    $.ajax({
            method: 'DELETE',
            dataType: 'json',
            contentType: 'application/json',
            url: '/delete-link/' + linkId,
        })
        .done(function (result) {
            showLinks(activeUserEmail);
        })
        .fail(function (jqXHR, error, errorThrown) {
            console.log(jqXHR);
            console.log(error);
            console.log(errorThrown);
        });
}
//step 2 use functions, objects and variables(triggers)

$(document).ready(function () {
    $(".home-page").show();
    $(".middle-home-page").hide();
    $(".signup-page").hide();
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
                activeUserEmail = result.email;
                activeUserId = result._id;
                showLinks(activeUserEmail);
                $(".create-link-email").val(activeUserEmail);
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
                showLinks(activeUserEmail);
                $(".create-link-email").val(activeUserEmail);
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
    let linkCategory = $(".create-link-category").val();
    let linkName = $(".create-link-name").val();
    let linkUrl = $(".create-link-link").val();
    let linkEmail = $(".create-link-email").val();
    console.log(linkCategory, linkName, linkUrl, linkEmail);
    if ((!linkCategory) || (linkCategory.length < 1)) {
        alert('Invalid category');
    } else if ((!linkName) || (linkName.length < 1) || (linkName.indexOf(' ') > 0)) {
        alert('Invalid name');
    } else if ((!linkUrl) || (linkUrl.length < 1) || (linkUrl.indexOf(' ') > 0)) {
        alert('Invalid url');
    } else if ((!linkEmail) || (linkEmail.length < 1) || (linkEmail.indexOf(' ') > 0)) {
        alert('Invalid email');
    } else {
        const newLinkObject = {
            category: linkCategory,
            name: linkName,
            url: linkUrl,
            email: linkEmail
        };
        $.ajax({
                type: "POST",
                url: "/link/create",
                dataType: 'json',
                data: JSON.stringify(newLinkObject),
                contentType: 'application/json'
            })
            .done(function (result) {
                console.log(result);
                showLinks(activeUserEmail);
                $(".create-link-email").val(activeUserEmail);
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
                alert('Invalid link information');
            });
    };

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
