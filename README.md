protectEmails jQuery plugin
===========================

This simple plugin protects emails on the page from being stollen by spam bots. 

Mostly every plugin uses `user [at] domain [dot] com` schema. 

This one is based on html5 data attribute with css content styling.

License: MIT

Usage
-----
Add css rule (or leave this for plugin to do so)
	
	<style type="text/css">
		.email-protect:after { 
			content: attr(data-user) '@' attr(data-domain);
		}
	</style>
	
Create html element ( `span`, `p`, `strong` etc ) with data attributes:

	<span data-user="admin" data-domain="example.com" class="protect-emails" />
	
Add jQuery if you haven't done this yet.

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>

Use plugin

	$(document).ready(function(){
		$('span').filter('.protect-emails').protectEmails();
	}); 
	
Options
-------

There are several options to configure. Defaults are:

	appendCss : true, // adds required css style
	action : 'hover' // action to unhide email
	

Usage with options

	$(document).ready(function(){
		$('span').filter('.protect-emails').protectEmails({
			action: 'click'
		});
	}); 

