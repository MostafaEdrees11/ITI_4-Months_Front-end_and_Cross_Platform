$(document).ready(function() {

    $("#cat-img").draggable({
        revert: "invalid" 
    });

    $("#div-container").droppable({
        drop: function(event, ui) {
            $("#div-container").css("background-color", "#aaffaa"); // Change to light green
        }
    });
});