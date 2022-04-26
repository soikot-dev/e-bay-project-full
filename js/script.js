$(function(){
     // banner part
     $('.ban-slider-wrapper').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        pauseOnHover:false,
        prevArrow:".left-arw",
        nextArrow:".right-arw",
      });
     // leatest product slider
     $('.l-pro-slider-wrapper').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        pauseOnHover:false,
        prevArrow:".lpro-left",
        nextArrow:".lpro-right",

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          
        ]
      });
      //test-slider
      $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows:true,
        pauseOnHover:false,
        prevArrow:".test-button1",
        nextArrow:".test-button2",

        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          
        ]
      });
      //mixitup
      var containerEl = document.querySelector('.feature-items');

            var mixer = mixitup(containerEl);
            //countdown
            (function () {
              const second = 1000,
                    minute = second * 60,
                    hour = minute * 60,
                    day = hour * 24;
            
              //I'm adding this section so I don't have to keep updating this pen every year :-)
              //remove this if you don't need it
              let today = new Date(),
                  dd = String(today.getDate()).padStart(2, "0"),
                  mm = String(today.getMonth() + 1).padStart(2, "0"),
                  yyyy = today.getFullYear(),
                  nextYear = yyyy + 1,
                  dayMonth = "12/30/",
                  birthday = dayMonth + yyyy;
              
              today = mm + "/" + dd + "/" + yyyy;
              if (today > birthday) {
                birthday = dayMonth + nextYear;
              }
              //end
              
              const countDown = new Date(birthday).getTime(),
                  x = setInterval(function() {    
            
                    const now = new Date().getTime(),
                          distance = countDown - now;
            
                    document.getElementById("days").innerText = Math.floor(distance / (day)),
                      document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                      document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                      document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
            
                    //do something later when date is reached
                    if (distance < 0) {
                      document.getElementById("headline").innerText = "It's my birthday!";
                      document.getElementById("countdown").style.display = "none";
                      document.getElementById("content").style.display = "block";
                      clearInterval(x);
                    }
                    //seconds
                  }, 0)
              }());
  //sticky menu
  $(window).scroll(function(){
    var top = $(this).scrollTop()
  
    if(top > 50){
          $(".navbar").addClass("sticky-menu")
    }
    else{
      $(".navbar").removeClass("sticky-menu")
    }
    if(top > 150){
      $(".back-to-top").fadeIn(300)
    }
    else{
      $(".back-to-top").fadeOut(300)
    }
  })
  $(".back-to-top").click(function(){
    $("html,body").animate({scrollTop: 0},1000)
  });
  //hamburger menu
  $(".navbar-toggler").click(function(event) {
    event.stopPropagation();
    $("#hamburger-menu").toggleClass("open");
    $("#menu-container .menu-list").toggleClass("active");
    slideMenu();
  });

  
/*
===============================================================================================
                                    Home Page 2 menu part 
===============================================================================================
 */

 // img-slide 
 $('.img-slide-wrapper').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  // centerMode: true,
  // centerPadding: '10px',
  autoplay: false,
  autoplaySpeed: 3000,
  arrows:true,
  pauseOnHover:false,
  autoplay:true,
  prevArrow:".npro-left",
  nextArrow:".npro-right",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    
  ]
});
// Counter
$('.counter').counterUp();
    
})