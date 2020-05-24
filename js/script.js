$(document).ready(function () {
    $("#Submit").click(function () {
        if ($("#data").val() != "") {
           $("#tasks").prepend("<p>" + $("#data").val() + "</div>");
        }
        else {
             alert("Nothing has been entered!");                    
        }
    });

});