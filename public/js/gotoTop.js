/**
 * Created by lizixiang on 16/5/24.
 */

$(document).ready(function(){
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200)
            $('div.go-top').show(500);
        else
            $('div.go-top').hide(500);
    });
    $('div.go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});