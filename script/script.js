$(function(){
	$(".mainnav>ul>li").mouseover(function(){
		$(".subnav").stop().fadeIn();
	});
	$(".mainnav>ul>li").mouseout(function(){
		$(".subnav").stop().fadeOut();
	});
	
	var num=0;
	$(".slide li").first().fadeIn();
	setInterval(function(){
		$(".slide li").fadeOut();
		if(num<2){
			num++;
			$(".slide li").eq(num).fadeIn();
		}
		else{
			num=0;
			$(".slide li").first().fadeIn();
		}
	}, 3000);
    
        
    
    
});
    
