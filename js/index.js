

$(function(){
	$('header li').each(function(){
		$(this).hover(function(){
			$(this).css('background','blue')
		},function(){
			$(this).css('background','#496AB1')
		})
	})
	
	$('img').each(function(){
		$(this).hover(function(){
			$(this).css('box-shadow','0 0 3px 2px red')
		},function(){
			$(this).css('box-shadow','none')
		})
		
	})
})
