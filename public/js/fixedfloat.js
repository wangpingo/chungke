$(function(){
	var $oNavigation=$('#idx-content-right');
    var top = $(window).scrollTop();
    var left = $(window).scrollLeft();
    $(window).each(function(){$(this).data('slt',{sl:this.scrollLeft,st:this.scrollTop});}).scroll(function(){
        var sl=$(this).scrollLeft(),st=$(this).scrollTop(),d=$(this).data('slt');
        if(sl!=d.sl){
            $oNavigation.removeClass('f-fixed').addClass('f-float');
        }
        else{
        	$oNavigation.removeClass('f-float').addClass('f-fixed');
        }
        $(this).data('slt',{sl:sl,st:st});
    })
})


// $(window).each(function(){$(this).data('slt',{sl:this.scrollLeft,st:this.scrollTop});}).scroll(function(){
//     var sl=$(this).scrollLeft(),st=$(this).scrollTop(),d=$(this).data('slt');
//     if(sl!=d.sl)alert('横向滚动');
//     if(st!=d.st)alert('纵向滚动');
//     $(this).data('slt',{sl:sl,st:st});///
// })