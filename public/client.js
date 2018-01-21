//$('main').not('.home-page, .signup-page').toggle();
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


$("#signin-form").submit(function (event) {
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
