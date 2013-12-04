$.fn.fader = function(o)
{
    o = $.extend({width:'100%',height:'250px',update:true,speed:10000,animSpeed:1000},o||{});
	this.each(function()
	{
        var wrapper = $(this).width(o.width).height(o.height);
        var slides=wrapper.children();
        var state={currentPos:-1,total:slides.length,active:null}
		var run = function()
		{
			if(state.total>1 || active==null)
			{
				setNext();
				if(state.active!=null)state.active.fadeOut(o.animSpeed);
				setActiveSlide();
				state.active.fadeIn(o.animSpeed);
			}
            if(o.update)
			    updateSlides();
		};
		var setNext = function()
		{
            state.currentPos = (state.currentPos+1>=state.total?0:state.currentPos+1);
		};
		var setActiveSlide = function()
		{
			state.active=slides.eq(state.currentPos);
		};
		var updateSlides = function()
		{
			slides = wrapper.children();
			state.total = slides.length;
		};
		run();
        state.interval = setInterval(function(){run();},o.speed);
	});
};