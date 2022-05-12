$("h1").css("color", "red");
$(document).ready(function(){
    $("button").click(function(){
        $("h1").hide();
    });

    $("p").css("fontSize","2rem");
    $("#p1").hover(function () {
        $(this).html('welcome');
    }, 
    function () {
        $(this).html('bye bye');
    });
    $("button").click(function () {
        $("#p1").css("color", "blue").slideToggle();
    });


    $("#ff").on({
        mouseenter: function(){
        $("#p4").html("WELCOME TO THEOSCO CONSTRUCTION LIMITED (TCC)");
    },
    mouseleave: function () {
        $("#p4").html("CONTACT US TODAY FOR YOUR CONSTRUCTION WORK");
    }

    });

    $("")
        /*$("#p4").slideUp().slideDown();*/
    
});

