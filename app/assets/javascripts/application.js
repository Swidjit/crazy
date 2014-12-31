// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.slimmenu.min
//= require jquery.fancybox
//= require helpers/jquery.fancybox-media
//= require jquery.youtubevideogallery

$(document).ready(function(){
	$('#navigation').slimmenu(
	{
	    resizeWidth: '479',
	    collapserTitle: 'CrazyDancingGuy',
	    animSpeed: 'medium',
	    easingEffect: null,
	    indentChildren: false,
	    childrenIndenter: '&nbsp;'
	});
	$(".fancybox").fancybox({
	});
	$('.fancybox-media').fancybox({
        openEffect: 'none',
        closeEffect: 'none',
        helpers: {
          media: {}
        }
    });

    $("ul.youtube-video-gallery").youtubeVideoGallery({
    	  plugin:'fancybox',
    	  assetFolder: '/assets',
	      apiFallbackUrl: 'https://www.youtube.com/results?search_query=dance+tango',
	      apiUrl: 'https://gdata.youtube.com/feeds/api/videos?author=UCPtJaV3Q9t8Asf1yDW4WxcQ&v=2&orderby=updated&alt=jsonc'
	  });
});
