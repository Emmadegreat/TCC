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
            $("#fixed_carousel_p").html("THEOSCO CONSTRUCTION LIMITED (TCC)").css("fontSize","2.5rem");
        },
        mouseleave: function () {
            $("#fixed_carousel_p").html("QUALITY SERVICE AND RELIABILITY").css("fontSize","2.5rem");
        }

    });

    $("h1").css("fontSize","1.5rem");
    
    $("#core_value_img_1").mouseleave(function () {
        $("#body_1").css("backgroundColor","#1d3044").html("Thank you for your patronage.").css("height","20vh").css("fontSize","1.5rem").css("color","#fff");
          
    });

    $("#core_value_img_2").mouseleave(function () {
        $("#body_2").css("backgroundColor","#1d3044").html("Competency and quality service delivery.").css("height","20vh").css("fontSize","1.5rem").css("color","#fff");
          
    });

    $("#core_value_img_3").mouseleave(function () {
        $("#body_3").css("backgroundColor","#1d3044").html("Your utmost satisfaction is our concern.").css("height","20vh").css("fontSize","1.5rem").css("color","#fff");
          
    });
  
  
  
    
    
});
/*-----------------jquery file---------------*/
