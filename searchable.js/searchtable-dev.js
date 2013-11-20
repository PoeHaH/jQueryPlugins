(function($)
{
	//make new jQuery selector :containsCI, which is a case insensitive :contains
	$.extend($.expr[":"],{"containsCI": function(elem, i, match, array)
	{
		return(elem.textContent||elem.innerText||"").toLowerCase().indexOf((match[3]||"").toLowerCase())>=0;
	}});
    
	//searchtable plugin.
	//Parameter o: options object.
    //          o.class: style class for input field. Not required.
    //          o.text: text appearing as hint in text box. Only supported by modern browsers. Not required
	$.fn.searchtable = function(o)
	{
		o=$.merge({},o);
		this.each(function()
		{
			var table = $(this);
			var allRows = table.find('tr');
			var txt = $('<input type="text">');
			if(typeof o.class === 'string')
				txt.addClass(o.class);
			if(typeof o.text === 'string')
				txt.attr('placeholder',o.text);
			txt.keyup(function()
			{
				var d = txt.val();
				if(d === '')
					allRows.show();
				else
				{
					allRows.hide();
					allRows.filter(function()
					{
						var r = $(this);
						if (r.is(":containsCI('"+d+"')"))
							return true;
						return false;
					}).show();
				}
			});
			table.wrap('<div>');
			txt.insertBefore(table);
		});
	};
})(jQuery);
