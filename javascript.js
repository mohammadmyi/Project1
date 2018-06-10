$.noConflict(); 
jQuery(document).ready(function($){
    $('#slide1').prepend("<i class='fa fa-angle-double-down' style='font-size:26px'></i>");
    $('#slide1').append("<i class='fa fa-angle-double-down' style='font-size:26px'></i>");
    $('#slide2').prepend("<i class='fa fa-angle-double-down' style='font-size:26px'></i>");
    $('#slide2').append("<i class='fa fa-angle-double-down' style='font-size:26px'></i>");
    
    var d=$('.fa-angle-double-down');
    d.addClass("iconanimate");
   
    
    
    $('#slide1').click(function(){
        $('.rowslide1').slideToggle(2000);     
    });
    $('#slide2').click(function(){
        $('.rowslide1').slideToggle(2000) ;       
        $('.rowslide2').slideToggle(2500);     
    });
    $('.rowslide1 img').css('opacity','.4');
    $('.rowslide2 img').css('opacity','.4');
    
    
    $('.rowslide1 img').mouseover(function(){
        $('.rowslide1 img').fadeTo(1500,1) ;       
        $('.rowslide2 img').fadeTo(1500,1);     
    });
    $('.rowslide2 img').mouseover(function(){
        $('.rowslide1 img').fadeTo(1500,1) ;       
        $('.rowslide2 img').fadeTo(1500,1);     
    });
    $('.rowslide1 img').mouseleave(function(){
        $('.rowslide1 img').fadeTo(1500,.55) ;       
        $('.rowslide2 img').fadeTo(1500,.55);     
    });
    $('.rowslide2 img').mouseleave(function(){
        $('.rowslide1 img').fadeTo(1500,.55) ;       
        $('.rowslide2 img').fadeTo(1500,.55);     
    });

     
    $('#user11').blur(function(){
     var pp1=$("#user11").val();
     if (pp1=="") {
        $("#server1").html("please enter your name").css("color","red");
     } else {
        $("#server1").html("thank you").css("color","white");            
     }
    });


    $('#user12').blur(function(){
        var pp2=$("#user12").val();
        var pp3=pp2.search("@");
        if (pp2=="") {
         $("#server2").html("Please Enter Email").css("color","red");
        } else {
        $("#server2").html("thank you").css("color","white");                      
        }
       });

       $('.btn-f').click(function(){
        var pp1=$("#user11").val();           
        if ( pp1=="") {
           $("#server1").html("please enter your name").css("color","red");            
        } else {
           $("#server1").html("thank you").css("color","white");            
                      
        }
       });



       $('.btn-f').click(function(){
        var pp1=$("#user11").val();           
        if ( pp1=="") {
           $("#server1").html("please enter your name").css("color","red");            
        } else {
           $("#server1").html("thank you").css("color","white");            
                      
        }
       });

    /*  Jquery Ajax
        
       $("#btn-f").click(function(){
        var pp1=$("#user11").val();
        var pp2=$("#user12").val();       
        $.post("index.php",{ps1=pp1},function(Data){
        $("#server1").html(Data);})
        $.post("index.php",{ps2=pp2},function(Data){
            $("#server2").html(Data);});
   });*/

   
  $(window).scroll(function() {
    if ($(document).scrollTop()>70) {
      $(".navbar").addClass("paien");
      $(".navbar div").css("background-color","#35050dea");      
      $(".dropdown-menu ").addClass("paien1");
      $(".dropdown-menu a").addClass("paien1");
    } else {
      $(".navbar").removeClass("paien");
      $(".navbar div").css("background-color","#ffffff");            
      $(".dropdown-menu ").removeClass("paien1");
      $(".dropdown-menu a").removeClass("paien1");
    }
  });

});  // end of main container of jquery codes

