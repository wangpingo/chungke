/**
 * Created by lizixiang on 16/6/4.
 */
$(function(){
    var containerRight = ($(window).width() - $('.ck-container').width())/2;
    var $sidebar = $('.ck-sidebar');
    $(window).on('scroll', function(){
        var scrollTop = $(document.body).scrollTop();
        if(scrollTop >0){
            $sidebar.addClass('fixed');
            $sidebar.css({
                right: containerRight
            });
        }else{
            //$sidebar.removeClass('fixed');
        }
    });
    $(window).on('resize', function(){
        containerRight = ($(window).width() - $('.ck-container').width())/2;
        $sidebar.removeClass('fixed');
        $sidebar.addClass('fixed');
        $sidebar.css({
            right: containerRight
        });
    });
});