$(document).ready(function() {
	var banner_img=['banner1.png','banner2.png','banner3.png','banner4.png'];
	$(banner_img).each(function(i) {
		
        $(".swiper-wrapper").append("<li class='swiper-slide'><a href='#'><img src='img/"+$(banner_img)[i]+"' /></a></li>");

     });
    //swiper插件
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        paginationClickable: true,
        spaceBetween: 0,
        centeredSlides: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false,
        loop: true
    });
//  $(".btn button").click(function() {
//    	window.location.href="detail.html";
//  });
    $('.code').click(function() {

        $(".wrapper").css('display', 'block');
    });
    $(".wrapper").click(function() {
        $(".wrapper").css('display', 'none');
    });  
      
});
