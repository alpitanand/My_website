 
 $("#whoami").click(function() {
    $('html, body').animate({
        scrollTop: $("#prof-id").offset().top -70
    }, 1500);
});

$("#home").click(function() {
    $('html, body').animate({
        scrollTop:0
    }, 1500);
});

$("#work").click(function() {
    $('html, body').animate({
        scrollTop: $("#myworksid").offset().top -30
    }, 1500);
});

  

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }        
    });
  });
$(function(){
  $("#submit-button").submit(function(e){
    e.preventDefault();
    var formData = new FormData($(this)); 
    $.ajax({
        url: '/formfill',
        type: 'POST',
        data: formData,
        async: true,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            console.log(response);
        }
     });
  })  
});
