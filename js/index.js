$(document).ready(function(){
    /*$("button").click(function(){
        $("h1").hide();
    });

    $("button").click(function () {
        $("#p1").css("color", "blue").slideToggle();
    });
    $("#p1").hover(function () {
        $(this).html('welcome');
    }, 
    function () {
        $(this).html('bye bye');
    });

    $("p").css("fontSize","2rem");
    
    */

    

    $("#fixed_carousel").on({
        mouseenter: function(){
        $("#fixed_carousel_p").html("WELCOME TO THEOSCO CONSTRUCTION LIMITED (TCC)").css("fontSize","3.5rem")   ;
    },
    mouseleave: function () {
        $("#fixed_carousel_p").html("CONTACT US TODAY FOR YOUR CONSTRUCTION WORK").css("fontSize","3.5rem");
    }

    });

    $("").css("fontSize", "px");
        /*$("#p4").slideUp().slideDown();*/
    
});

