// tabs registration

$("#reg-tab").on("click", function(){
    $("#reg-tab").removeClass("active");
    $("#log-tab").addClass("active");
    $("#signup-form").css("display", "flex");
    $("#signin-form").hide();

})

$("#log-tab").on("click", function(){
    $("#log-tab").removeClass("active");
    $("#reg-tab").addClass("active");
    $("#signin-form").css("display", "flex");
    $("#signup-form").hide();
})



/// show about on click

$(".button-learn").click(function() {
    $(".signup-page").css("display", "flex");
    $("#tag-line").hide();
    $(".middle-home-page").hide();

});

$("#close").click(function() {
    $(".signup-page").css("display", "none");
    $("#tag-line").show();
});


$("#link-it-button").click(function() {
    $(".middle-home-page").show();
    $(".home-page").hide();
    $("nav").hide();
});
$("#link-it-button").click(function() {
    $('html,body').animate({
            scrollTop: $(".middle-home-page").offset().top
},'slow');
});

// set up text to print, each item in array is new line
var aText = new Array(
"Save your time. Link It"

);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }

    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";

    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
    if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
    }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}

typewriter();
