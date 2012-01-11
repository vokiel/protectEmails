/* 
 * jQuery protectEmails plugin
 * @requires jQuery v1.7 or later
 * Version: 1.0
 * Date: 2012 January
 *  
 * Author Robert Mikołajuk
 * Copyright (c) 2012, Robert Mikołajuk
 * The MIT License
 * Description and Demo: http://blog.vokiel.com/jquery-protectEmails-plugin
 *
 * HTML: <span data-user="admin" data-domain="example.com" class="protect-emails" />
 * CSS: .email-protect:after { content: attr(data-user) '@' attr(data-domain); }
 * JavaScript: $('span').filter('.protect-emails').protectEmails();
 *
 */
;(function($){
	/**
	 * Main function
	 */
	$.fn.protectEmails = function( customOptions ) {
		
		var options = $.extend({}, $.fn.protectEmails.defaultOptions, customOptions);
		
		if ( options.appendCss ){
			$('head').append("<style type=\"text/css\">" + options.selector.split(",").join(':after,') + ":after { content: attr(data-user) '@' attr(data-domain); }</style>");
		}
		
		return this.on(options.action,function(){
			var $this = $(this);
			var data = $this.data();
			if ( data && data.user && data.domain){
				var email = data.user + '@' + data.domain;
				var aclass = (data.aclass)? ' class="'+data.aclass+'"' : '';
				var link = '<a href="mailto:' + email +'" title="' + email + '"'+ aclass +'>' + email + '</a>';
				$this.replaceWith(link);
			}
		});
	};
	
	/**
	 * Default options
	 */
	$.fn.protectEmails.defaultOptions = {
		appendCss : true,
		selector: '.email-protect',
		action : 'hover'
	};
	
})(jQuery);