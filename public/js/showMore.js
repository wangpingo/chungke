/**
 * Created by lizixiang on 16/5/28.
 */
$(function(){
    var $more = $('.comment:gt(2)');
    console.log($more);
    $more.hide();
    var $toggleBtn = $('.showMore>a');
    $toggleBtn.click(function(){
        $more.toggle(1000);
    });
})