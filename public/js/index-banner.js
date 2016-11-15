var $oBanner = $('#idx-banner');
var $oBannerBtn = $('#banner-btn');
var $aImgs = $('#idx-banner img');
var $aLi=$('#idx-banner').find('li');
var $aPicTitle=$('.bannertitle');
var index=0;
var iZindex=2;
var timer;

$oBannerBtn.hover(function(){
	$(this).css({
		'backgroundColor':'#fff',
		'color':'rgb(51,165,222)'
	});
},function(){
	$(this).css({
		'backgroundColor':'transparent',
		'color':'#fff'
	});
});
function changeImg(idx){
	$($aImgs[idx]).stop().css('z-index',iZindex++).css('display','none').fadeIn();
	for(var i=0;i<$aLi.length;i++)
		{
			$($aLi[i]).css('opacity','0.3');
			$($aPicTitle[i]).css('display','none');
		}
		$($aLi[idx]).stop().css('opacity','0.9');
		$($aPicTitle[idx]).css('display','block');
}
function play(){
	timer=setInterval(function(){
		index++;
		if(index==$aImgs.length){
			index=0;
		}
			changeImg(index);
		
	},2000);
	for(var i=0; i<$aLi.length; i++){
			$aLi[i].index = i;
			$($aLi[i]).hover(function(){
				index = this.index;
				changeImg(index);
			});
	}
	
}
$oBanner.hover(function(){
	clearInterval(timer);
},function(){
	play();
});
play();

