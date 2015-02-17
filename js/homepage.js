$(document).ready(function(){
	$('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        slide: 'div',
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
});
    /*Star event image hover*/
    var mql = window.matchMedia("screen and (max-width: 800px)")
    if (mql.matches){ // if media query matches
     $('.starevent').contenthover({
    overlay_width:240,
    overlay_height:180,
    effect:'slide',
    slide_direction:'left',
    overlay_x_position:'left',
    overlay_y_position:'center',
    overlay_background:'#000',
    overlay_opacity:0.8
});
    }
    else{
    $('.starevent').contenthover({
    overlay_width:400,
    overlay_height:180,
    effect:'slide',
    slide_direction:'left',
    overlay_x_position:'left',
    overlay_y_position:'center',
    overlay_background:'#000',
    overlay_opacity:0.8
});
    }
});
