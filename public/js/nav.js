var $oNavigation=$('#navigation');
var $aNavLi = $oNavigation.find('li');

$aNavLi.hover(function(){
	switch($(this).index()){
		case 0: $(this).find('span').eq(0).addClass('d2')
		break;
		case 1: $(this).find('span').eq(0).addClass('o2')
		break;
		case 2: $(this).find('span').eq(0).addClass('a2')
		break;
		case 3: $(this).find('span').eq(0).addClass('i2')
		break;
		case 4: $(this).find('span').eq(0).addClass('s2')
		break;
		case 5: $(this).find('span').eq(0).addClass('f2')
		break;
	}
	$(this).css({
		'backgroundColor':'rgb(218,226,231)',
		'color':'rgb(87,127,181)'
	});
},function(){
	switch($(this).index()){
		case 0: $(this).find('span').eq(0).removeClass('d2')
		break;
		case 1: $(this).find('span').eq(0).removeClass('o2')
		break;
		case 2: $(this).find('span').eq(0).removeClass('a2')
		break;
		case 3: $(this).find('span').eq(0).removeClass('i2')
		break;
		case 4: $(this).find('span').eq(0).removeClass('s2')
		break;
		case 5: $(this).find('span').eq(0).removeClass('f2')
		break;
	}
	$(this).css({
		'backgroundColor':'#fff',
		'color':'rgb(193,193,193)'
	});
})
