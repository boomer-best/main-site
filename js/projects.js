$(document).ready(function () {
    $("#garbagetrees").hide();
    $("#rixee").hide();
    $("#nefr").click(function () { 
        $("#garbagetrees").slideToggle("fast");
        
    });
    $("#rixr").click(function () { 
        $("#rixee").slideToggle("fast");
        
    });
});