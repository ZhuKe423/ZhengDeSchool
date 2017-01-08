"use strict";
cws_modules_state_init ();
is_visible_init ();
cws_milestone_init ();
cws_progress_bar_init ();
var directRTL;
if (jQuery("html").attr('dir') == 'rtl') {
	directRTL =  'rtl'
}else{
	directRTL =  ''
};
window.addEventListener( "load", function (){
	window.cws_modules_state.sync = true;
	cws_revslider_pause_init ();
	cws_header_bg_init ();
	cws_header_imgs_cover_init ();
	cws_header_parallax_init ();
	mobile_menu_controller_init();
	jQuery( ".portfolio_carousel" ).cws_flex_carousel( ".cws_portfolio", ".cws_portfolio_header" );
	jQuery( ".portfolio_fw_carousel" ).cws_flex_carousel( ".cws_portfolio_fw", ".cws_portfolio_header" );
	jQuery( ".ourteam_carousel" ).cws_flex_carousel( ".cws_ourteam", ".cws_ourteam_header" );
	jQuery( ".news_carousel" ).cws_flex_carousel( ".news", ".cws_blog_header" );
	gallery_post_carousel_init();
	widget_carousel_init();
	cws_sc_carousel_init();
	twitter_carousel_init();
	isotope_init();
	cws_portfolio_pagination_init ();
	cws_portfolio_filter_init ();
	cws_portfolio_single_carousel_init ();
	cws_portfolio_fw_filter_init ();
	cws_ourteam_pagination_init ();
	cws_ourteam_filter_init ();
	cws_parallax_init();

	cws_prlx_init_waiter ();

}, false );
jQuery(document).ready(function (){
	cws_sticky_light ();
	cws_responsive_custom_header_paddings_init ();
	cws_top_panel_mobile_init ();	/* async */
	cws_touch_events_fix ();
	cws_page_focus();
	cws_top_panel_search ();
	boxed_var_init ();
	cws_fs_video_bg_init ();
	wp_standard_processing ();
	cws_page_header_video_init ();
	cws_top_social_init ();
	custom_colors_init();
	cws_tabs_init ();
	cws_accordion_init ();
	cws_toggle_init ();
	select2_init();
	widget_archives_hierarchy_init();
	fancybox_init();
	wow_init();
	load_more_init();
	cws_revslider_class_add();
	cws_widget_icon_class ();
	cws_fullwidth_background_row ();
	cws_add_title_sep ();
	jQuery( ".cws_milestone" ).cws_milestone();
	jQuery( ".cws_progress_bar" ).cws_progress_bar();
	jQuery( ".cws_ce_content.ce_tabs" ).cws_tabs ();
	jQuery( ".cws_ce_content.ce_accordion" ).cws_accordion ();
	jQuery( ".cws_ce_content.ce_toggle" ).cws_toggle ( "accordion_section", "accordion_title", "accordion_content" );
	cws_message_box_init ();
	scroll_down_init ();
	scroll_top_init ();

	jQuery(window).resize( function (){
		cws_fullwidth_background_row ();
		cws_slider_video_height (jQuery( ".fs_video_slider" ));
		cws_slider_video_height (jQuery( ".fs_img_header" ));
	} );
});

function cws_fullwidth_background_row (){
	var main_width = jQuery('main').width();
	var row_bg_ofs, column_first_ofs, column_last_ofs;
	jQuery('.row_bg.fullwidth_background_bg').each(function(){

		row_bg_ofs = jQuery(this).offset();

		column_first_ofs = jQuery(this).find('.grid_col:first-child .cols_wrapper').offset();
		column_last_ofs = jQuery(this).find('.grid_col:last-child .cols_wrapper').offset();

		jQuery(this).find('.grid_col:first-child > .cols_wrapper > .row_bg_layer').css({'left':''+( row_bg_ofs.left - column_first_ofs.left )+'px','width':'auto','right':'0'});
		jQuery(this).find('.grid_col:first-child > .cols_wrapper > .row_bg_img_wrapper').css({'left':''+( row_bg_ofs.left - column_first_ofs.left )+'px','width':'auto','right':'0'});

		jQuery(this).find('.grid_col:last-child > .cols_wrapper > .row_bg_layer').css({'left':'0px','width':'auto','right':'-'+(jQuery(this).outerWidth() + row_bg_ofs.left - column_last_ofs.left - jQuery(this).find('.grid_col:last-child .cols_wrapper').outerWidth())+'px'});
		jQuery(this).find('.grid_col:last-child > .cols_wrapper > .row_bg_img_wrapper').css({'left':'0px','width':'auto','right':'-'+(jQuery(this).outerWidth() + row_bg_ofs.left - column_last_ofs.left - jQuery(this).find('.grid_col:last-child .cols_wrapper').outerWidth())+'px'});

	})
}

function cws_add_title_sep (){
	jQuery('.ce_title.und-title').each(function(){
		jQuery(this).append('<span class="title-separators"><span></span></span>');
	})
}

function cws_widget_icon_class (){
	jQuery('aside .cws-widget .widget-title + *').each(function(){
		var classes = jQuery(this).attr('class');
	if (!jQuery(this).hasClass('cws_textwidget_content') && !jQuery(this).hasClass('post_item') && !jQuery(this).hasClass('widget_carousel') && !jQuery(this).hasClass('portfolio_item_thumbs') && !jQuery(this).hasClass('cws_tweets')) {
		if (typeof classes != 'undefined') {
			var arr   = classes.split(" ")
		    var first = arr.shift()
		    if (first.indexOf('menu') > -1) {
		    	jQuery(this).prev('.widget-title').addClass('menu_title widget-title-icon');
		    }else{
		    	jQuery(this).prev('.widget-title').addClass(first+'_title widget-title-icon');
		    }
		}else if(jQuery(this).parent().find('.rev_slider_wrapper').length){
			jQuery(this).prev('.widget-title').addClass('slider_icon_title widget-title-icon');
		}else if(jQuery(this).children().hasClass('price_slider_wrapper')){
			jQuery(this).prev('.widget-title').addClass('price_slider_wrapper_icon_title widget-title-icon');
		}else{
			jQuery(this).prev('.widget-title').addClass('list_icon_title widget-title-icon');
		}

	};

	})
}

function cws_modules_state_init (){
	window.cws_modules_state = {
		"sync" : false,
	}
}

function cws_revslider_class_add (){
	if (jQuery('.rev_slider_wrapper.fullwidthbanner-container').length) {
		jQuery('.rev_slider_wrapper.fullwidthbanner-container').next().addClass('benefits_after_slider');
		if (jQuery('.rev_slider_wrapper.fullwidthbanner-container').length && jQuery('.site-main main .benefits_cont:first-child').length) {
			if (jQuery('.site-main main .benefits_cont:first-child').css("margin-top").replace("px", "") < -90) {
				jQuery('.site-main main .benefits_cont:first-child').addClass('responsive-minus-margin');
			}
		}
	};
}

function cws_prlx_init_waiter (){
	var interval, layers, layer_ids, i, layer_id, layer_obj, layer_loaded;
	if ( window.cws_prlx == undefined ){
		return;
	}
	layers = cws_clone_obj( window.cws_prlx.layers );
	interval = setInterval( function (){
		layer_ids = Object.keys( layers );
		for ( i = 0; i < layer_ids.length; i++ ){
			layer_id = layer_ids[i];
			layer_obj = window.cws_prlx.layers[layer_id];
			layer_loaded = layer_obj.loaded;
			if ( layer_loaded ){
				delete layers[layer_id];
			}
		}
		if ( !Object.keys( layers ).length ){
			clearInterval ( interval );
		}
	}, 100);
}

function cws_touch_events_fix (){
	if ( is_mobile_device() ){
		jQuery( ".page_content" ).on( "hover", ".hover-effect, .pic .links", function (){
		});
		jQuery( ".site_header" ).on( "hover", ".mobile_nav .button_open, .mobile_nav .menu-item > a", function ( e ){
			e.preventDefault();
			jQuery( this ).trigger( "click" );
		});
	}
}

function cws_is_rtl(){
	return jQuery("body").hasClass("rtl");
}

function cws_page_focus(){
	document.getElementsByTagName('html')[0].setAttribute('data-focus-chek', 'focused');
		window.addEventListener('focus', function() {
		document.getElementsByTagName('html')[0].setAttribute('data-focus-chek', 'focused');
	});
}

function boxed_var_init (){
	var body_el = document.body;
	var children = body_el.childNodes;
	var child_class = "";
	var match;
	window.boxed_layout = false;
	for ( var i=0; i<children.length; i++ ){
		child_class = children[i].className;
		if ( child_class != undefined ){
			match = /page_boxed/.test( child_class );
			if ( match ){
				window.boxed_layout = true;
				break;
			}
		}
	}
}

function reload_scripts(){
	gallery_post_carousel_init();
	wp_standard_processing();
	fancybox_init();
}

function is_visible_init (){
	jQuery.fn.is_visible = function (){
		return ( jQuery(this).offset().top >= jQuery(window).scrollTop() ) && ( jQuery(this).offset().top <= jQuery(window).scrollTop() + jQuery(window).height() );
	}
}

/* sticky */


function cws_sticky_light (){

	if (jQuery('.sticky_header').length && !is_mobile() && !is_mobile_device ()) {
		jQuery('.sticky_header').removeClass('sticky_mobile_off');
		var lastScrollTop = 0;
		jQuery(window).scroll(function(event){
		   var st = jQuery(this).scrollTop();
		   if (st > lastScrollTop || st <= 100){
		       jQuery('.sticky_header:not(.sticky_mobile_off)').removeClass('sticky_active');
		   } else {
		      jQuery('.sticky_header:not(.sticky_mobile_off)').addClass('sticky_active');
		   }
		   lastScrollTop = st;
		});

	}else{
		jQuery('.sticky_header').addClass('sticky_mobile_off');
	}

}

jQuery(window).resize( function (){
	cws_sticky_light ();
});


function get_logo_position(){
	if (jQuery(".site_header").length) {
		return /logo-\w+/.exec(jQuery(".site_header").attr("class"))[0];
	};
}


function is_mobile (){
	return window.innerWidth < 768;
}

function is_mobile_device (){
	return jQuery("html").hasClass("touch");
}

/* sticky */

/* mobile menu */
var mobile_menu_controller_init_once = false;
function mobile_menu_controller_init (){
	if (mobile_menu_controller_init_once == false) {
		window.mobile_nav = {
			"is_mobile_menu" : false,
			"nav_obj" : jQuery(".header_wrapper_container .main-menu").clone(),
			"level" : 1,
			"current_id" : false,
			"next_id" : false,
			"prev_id" : "",
			"animation_params" : {
				"vertical_start" : 50,
				"vertical_end" : 10,
				"horizontal_start" : 0,
				"horizontal_end" : 70,
				"speed" : 200
			}
		}
		if ( is_mobile_device() ){
			set_mobile_menu();
		}
		else{
			mobile_menu_controller();
			jQuery(window).resize( function (){
				mobile_menu_controller();
			});
		}
		mobile_nav_switcher_init ();
	};
	mobile_menu_controller_init_once = true;
}

function mobile_nav_switcher_init (){
	var nav_container = jQuery(".header_wrapper_container .site_header .header_nav_part");
	jQuery(document).on("click", ".header_wrapper_container .header_nav_part.mobile_nav .mobile_menu_header .mobile_menu_switcher", function (){
		/*var nav = get_current_nav_level();
		var cls = "opened";
		if ( nav_container.hasClass(cls) ){
			nav.stop().animate( {"margin-top": window.mobile_nav.animation_params.vertical_start + "px","opacity":0}, window.mobile_nav.animation_params.speed, function (){
				nav_container.removeClass(cls);
			})
		}
		else{
			nav_container.addClass(cls);
			nav.stop().animate( {"margin-top": window.mobile_nav.animation_params.vertical_end + "px","opacity":1}, window.mobile_nav.animation_params.speed );
		}*/
		jQuery('.min-layout').addClass('min-show');
		jQuery('body').addClass('noscroll');
	});

	jQuery('.min-close').on('click',function(){
		jQuery('.min-layout').removeClass('min-show');
		jQuery('body').removeClass('noscroll');
	});
}

 /*$('.min-btn-menu').on('click',function(){
    $('.min-layout').addClass('min-show');
    $('body').addClass('noscroll');
  });
 */
/* Need to be modified! */
//导航菜单 滚动显示/隐藏效果
/*
var disScroll;
var lastScrollTopPin = 0;
var delat = 5;


$(window).scroll(function(event) {
    disScroll = true;

    // 滚动隐藏dropdown
    $('.dropdown').removeClass('open');
    $('.min-nav').removeClass('min-show');
});
setInterval(function() {
    if (disScroll) {
        hasScrolled();
        disScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    // var logoHeight = $('.head-logo').outerHeight();
    var navHight = $('.header-top').outerHeight();
    var clientHeight = document.documentElement.clientHeight;
    var clientWidth = document.documentElement.clientWidth;
    // if(st > logoHeight){
    //   $('.index .nav-bar').addClass('nav-toggle');
    // }
    // else {
    //   $('.index .nav-bar').removeClass('nav-toggle');
    // }

    //确保滚动距离大于5px;
    if (Math.abs(st - lastScrollTopPin) <= delat) {
        return;
    };

    // st滚动距离大于导航高度并且大于上次高度
    // if(clientWidth < 560){
    //   $('.nav-bar').removeClass('nav-toggle');
    //   if(st > navHight+120 && st > lastScrollTopPin){
    //     $('.nav-bar').removeClass('header-show').addClass('header-hide');
    //   }else{
    //   if(st + $(window).height() < $(document).height()){
    //       $('.nav-bar').removeClass('header-hide').addClass('header-show');
    //     }
    //   }
    // }else {
    if (st > navHight) {
        $('.min-header .min-logo').hide();
    } else {
        $('.min-header .min-logo').show();
    }
    if (st > navHight && st > lastScrollTopPin) {
        $('.header-top').removeClass('header-show').addClass('header-hide');
    } else {
        if (st + $(window).height() < $(document).height()) {
            $('.header-top').removeClass('header-hide').addClass('header-show');
        }
    }


    lastScrollTopPin = st;

} */
/* Need to be modified! */


function mobile_nav_handlers_init (){
	jQuery(".header_wrapper_container .header_nav_part.mobile_nav .button_open").on( "click", function (e){
		var el = jQuery(this);
		var next_id = el.closest(".menu-item").attr("id");
		var current_nav_level = get_current_nav_level();
		var next_nav_level = get_next_nav_level( next_id );
		current_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0 }, window.mobile_nav.animation_params.speed, function (){
			current_nav_level.remove();
			jQuery(".header_wrapper_container .main-nav-container").append(next_nav_level);
			next_nav_level.css( {"display": "block", "margin-top": window.mobile_nav.animation_params.vertical_end + "px", "right": "-" + window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0} );
			next_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_start + "px", "opacity" : 1 }, window.mobile_nav.animation_params.speed );
			window.mobile_nav.current_id = next_id;
			window.mobile_nav.level ++;
			mobile_nav_handlers_init ();
		});
	});
	jQuery(".header_wrapper_container .header_nav_part.mobile_nav .back>a").on("click", function (){
		var current_nav_level = get_current_nav_level();
		var next_nav_level = get_prev_nav_level();
		current_nav_level.animate( { "right": "-" + window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0 }, window.mobile_nav.animation_params.speed, function (){
			current_nav_level.remove();
			jQuery(".header_wrapper_container .main-nav-container").append(next_nav_level);
			next_nav_level.css( {"display": "block", "margin-top": window.mobile_nav.animation_params.vertical_end + "px", "right": window.mobile_nav.animation_params.horizontal_end + "px", "opacity" : 0} );
			next_nav_level.animate( { "right": window.mobile_nav.animation_params.horizontal_start + "px", "opacity" : 1 }, window.mobile_nav.animation_params.speed );
			window.mobile_nav.level --;
			mobile_nav_handlers_init ();
		});
	});
}

function get_current_nav_level (){
	var r = window.mobile_nav.level < 2 ? jQuery( ".header_wrapper_container .header_nav_part .main-menu" ) : jQuery( ".header_wrapper_container .main-nav-container .sub-menu" );
	r.find(".sub-menu").remove();
	return r;
}

function get_next_nav_level ( next_id ){
	var r = window.mobile_nav.nav_obj.find( "#" + next_id ).children(".sub-menu").first().clone();
	r.find(".sub-menu").remove();
	return r;
}

function get_prev_nav_level (){
	var r = {};
	if ( window.mobile_nav.level > 2 ){
		r = window.mobile_nav.nav_obj.find( "#" + window.mobile_nav.current_id ).parent(".sub-menu").parent(".menu-item");
		window.mobile_nav.current_id = r.attr("id");
		r = r.children(".sub-menu").first();
	}
	else{
		r = window.mobile_nav.nav_obj;
		window.mobile_nav.current_id = false;
	}
	r = r.clone();
	r.find(".sub-menu").remove();
	return r;
}

function mobile_menu_controller (){
	window.mobile_menu = {'site_header':jQuery(".header_wrapper_container .site_header"),
							'subst_header_height': 0,
							'logo_position':get_logo_position(),
							'menu_container':jQuery('.header_wrapper_container .site_header .header_nav_part'),
							'header_bg': jQuery('.header_bg_img, .cws_parallax_scene_container').eq(0),
							'is_set':false,
							'logo_init_height':jQuery(".header_wrapper_container .site_header .logo>img").height(),
							'menu_item_height': jQuery('.header_wrapper_container .site_header .header_nav_part').find(".main-menu>.menu-item").eq(0).outerHeight(),
							'logo_indent':12,
							'header_content_part_width':parseInt(jQuery(".header_wrapper_container .site_header .container").eq(0).width()),
							'animation_speed':300};
	if ( (is_mobile() && !window.mobile_nav.is_mobile_menu) ){
		set_mobile_menu ();
	}
	else if ( !is_mobile() && window.mobile_nav.is_mobile_menu ){
		reset_mobile_menu ();
	}else{
		window.mobile_menu.site_header.addClass('loaded')
	}
}

function set_mobile_menu (){
	var nav = get_current_nav_level();
	jQuery(".header_wrapper_container .site_header").addClass("mobile_nav");
	jQuery('.header_wrapper_container .site_header .header_nav_part').addClass("mobile_nav");
	nav.css( { "margin-top":window.mobile_nav.animation_params.vertical_start+"px" } );
	window.mobile_nav.is_mobile_menu = true;
	mobile_nav_handlers_init ();
	jQuery(".header_wrapper_container .site_header").addClass('loaded');
}

function reset_mobile_menu (){
	var nav = get_current_nav_level();
	jQuery(".header_wrapper_container .site_header").removeClass("mobile_nav opened");
	jQuery('.header_wrapper_container .site_header .header_nav_part').removeClass("mobile_nav opened");
	nav.removeAttr("style");
	window.mobile_nav.is_mobile_menu = false;
	nav.remove();
	reset_mobile_nav_params ();
}

function reset_mobile_nav_params (){
	jQuery(".header_wrapper_container .main-nav-container").append(window.mobile_nav.nav_obj.clone());
	window.mobile_nav.level = 1;
	window.mobile_nav.current_id = false;
	window.mobile_nav.next_id = false;
}

/* \mobile menu */

function cws_top_panel_search (){
		jQuery("#site_top_panel .search_icon").click(function(){
			var el = jQuery(this);
			el.parents('#site_top_panel').find('.row_text_search .search-field').focus();
			el.parents('#site_top_panel').toggleClass( "show-search" );
		})
		jQuery(".site_header .search_menu").click(function(){
			jQuery(this).parents('.site_header').find('.search_menu_cont').fadeToggle(200);
			jQuery(this).parents('.site_header').addClass('search-on');
			jQuery(this).parents('.site_header').find('.search_menu_cont .search-field').focus();
		})
		jQuery('.site_header .search_menu_cont .search_back_button').click(function(){
			jQuery(this).parents('.site_header').find('.search_menu_cont').fadeToggle(200);
			jQuery(this).parents('.site_header').removeClass('search-on');
		})
}

/* carousel */

function count_carousel_items ( cont, layout_class_prefix, item_class, margin ){
	var re, matches, cols, cont_width, items, item_width, margins_count, cont_without_margins, items_count;
	if ( !cont ) return 1;
	layout_class_prefix = layout_class_prefix ? layout_class_prefix : 'grid-';
	item_class = item_class ? item_class : 'item';
	margin = margin ? margin : 30;
	re = new RegExp( layout_class_prefix + "(\d+)" );
	matches = re.exec( cont.attr( "class" ) );
	cols = matches == null ? 1 : parseInt( matches[1] );
	cont_width = cont.outerWidth();
	items = cont.children( "." + item_class );
	item_width = items.eq(0).outerWidth();
	margins_count = cols - 1;
	cont_without_margins = cont_width - ( margins_count * margin ); /* margins = 30px */
	items_count = Math.floor( cont_without_margins / ( item_width -5 ) );
	return items_count;
}

function gallery_post_carousel_init(){
	jQuery(".gallery_post_carousel").each(function (){
		var owl = jQuery(this);
		owl.owlCarousel({
			direction: directRTL,
			singleItem: true,
			slideSpeed: 300,
			navigation: false,
			pagination: false,
			afterUpdate : function() { setTimeout(function(){ jQuery('.isotope').length ? owl.closest('.isotope').isotope( 'layout' ) : '' }, 50) },
			afterInit : function() { setTimeout(function(){ jQuery('.isotope').length ? owl.closest('.isotope').isotope( 'layout' ) : '' }, 50) }
		});

		if (owl.attr('data-nav-init') == undefined) {
			owl.attr('data-nav-init',true);
		}else{
			owl.attr('data-nav-init',false);
		}

		if ( owl.attr('data-nav-init') == 'true' ){

			jQuery(this).parent().children(".carousel_nav.next").click(function (){
					owl.trigger('owl.next');
			});
			jQuery(this).parent().children(".carousel_nav.prev").click(function (){
					owl.trigger('owl.prev');
			});
		};
	});
}

function widget_carousel_init(){
	jQuery( ".widget_carousel" ).each( function (){
		var cont = jQuery(this);
		cont.owlCarousel( {
			direction: directRTL,
			singleItem: true,
			slideSpeed: 300,
			navigation: false,
			pagination: true
		});
	});
}

jQuery.fn.cws_flex_carousel = function ( parent_sel, header_sel ){
	parent_sel = parent_sel != undefined ? parent_sel : '';
	header_sel = header_sel != undefined ? header_sel : '';
	jQuery( this ).each( function (){
		var owl = jQuery( this );
		var nav = jQuery(this).parents(parent_sel).find( ".carousel_nav_panel_container" );
		parent_sel = jQuery(this).parents(parent_sel);
		owl.cws_flex_carousel_controller( parent_sel, header_sel );
		if ( nav.length ){
			jQuery( ".next", nav ).click( function (){
				owl.trigger( "owl.next" );
			});
			jQuery( ".prev", nav ).click( function (){
				owl.trigger( "owl.prev" );
			});
		}
		jQuery( window ).resize( function (){
			owl.cws_flex_carousel_controller( parent_sel, header_sel );
		});
	});
}

jQuery.fn.cws_flex_carousel_controller = function ( parent_sel, header_sel ){
	var owl = jQuery(this);
	var nav = jQuery( ".carousel_nav_panel_container", parent_sel );
	var show_hide_el = nav.siblings().length ? nav : nav.closest( header_sel );
	var show_pagination = false;
	if (show_hide_el.length) {
		var show_hide_el_display_prop = window.getComputedStyle( show_hide_el[0] ).display;
		show_pagination = false;
	}else{
		show_pagination = true;
	}

	var is_init = owl.hasClass( 'owl-carousel' );
	if ( is_init ){
		owl.data('owlCarousel').destroy();
		show_hide_el.css( 'display', 'none' );
	}
	var items_count = owl.children().length;
	var visible_items_count = count_carousel_items( owl );
	var args = {
		direction: directRTL,
		items: visible_items_count,
		slideSpeed: 300,
		navigation: false,
		pagination: show_pagination,
		responsive: false
	}
	if ( items_count > visible_items_count ){
		owl.owlCarousel( args );
		if (show_hide_el.length) {
			show_hide_el.css( 'display', show_hide_el_display_prop );
		}

	}
}

function cws_sc_carousel_init (){
	jQuery( ".cws_sc_carousel" ).each( cws_sc_carousel_controller );
	window.addEventListener( 'resize', function (){
		jQuery( ".cws_sc_carousel" ).each( cws_sc_carousel_controller );
	}, false);
}
function cws_sc_carousel_controller (){
	var el = jQuery( this );
	var bullets_nav = el.hasClass( "bullets_nav" );
	var content_wrapper = jQuery( ".cws_wrapper", el );
	var owl = content_wrapper;
	var content_top_level = content_wrapper.children();
	var nav = jQuery( ".carousel_nav_panel", el );
	var cols = el.data( "columns" );
	var items_count, grid_class, col_class, items, is_init, matches, args, page_content_section, sb_count;
	page_content_section = jQuery( ".page_content" );
	if ( page_content_section.hasClass( "double_sidebar" ) ){
		sb_count = 2;
	}
	else if ( page_content_section.hasClass( "single_sidebar" ) ){
		sb_count = 1;
	}
	else{
		sb_count = 0;
	}
	if ( content_top_level.is( ".gallery[class*='galleryid-']" ) ){
		owl = content_top_level.filter( ".gallery[class*='galleryid-']" );
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		owl.children( ":not(.gallery-item)" ).remove();
		items_count = count_carousel_items( owl, "gallery-columns-", "gallery-item" );
	}
	else if ( content_top_level.is( ".woocommerce" ) ){
		owl = content_top_level.children( ".products" );
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		owl.children( ":not(.product)" ).remove();
		matches = /columns-\d+/.exec( content_top_level.attr( "class" ) );
		grid_class = matches != null && matches[0] != undefined ? matches[0] : '';
		owl.addClass( grid_class );
		items_count = count_carousel_items( owl, "columns-", "product" );
		owl.removeClass( grid_class );
	}
	else if ( content_top_level.is( "ul" ) ){
		owl = content_top_level;
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		items = owl.children();
		grid_class = "crsl-grid-" + cols;
		col_class = "grid_col_" + Math.round( 12 / cols );
		owl.addClass( grid_class );
		if ( !items.hasClass( "item" ) ) items.addClass( "item" )
		items.addClass( col_class );
		items_count = count_carousel_items( owl, "crsl-grid-", "item" );
		owl.removeClass( grid_class );
		items.removeClass( col_class );
	}
	else {
		is_init = owl.hasClass( "owl-carousel" );
		if ( is_init ) owl.data( "owlCarousel" ).destroy();
		items = owl.children();
		grid_class = "crsl-grid-" + cols;
		col_class = "grid_col_" + Math.round( 12 / cols );
		owl.addClass( grid_class );
		if ( !items.hasClass( "item" ) ) items.addClass( "item" )
		items.addClass( col_class );
		items_count = count_carousel_items( owl, "crsl-grid-", "item" );
		owl.removeClass( grid_class );
		items.removeClass( col_class );
	}
	args = {
		direction: directRTL,
		slideSpeed: 300,
		navigation: false,
		pagination: bullets_nav
	}
	switch ( items_count ){
		case 4:
			if ( sb_count == 2 ){
				args.itemsCustom = [
					[0,1],
					[750,2],
					[980,2],
					[1170, 2]
				];
			}
			else if ( sb_count == 1 ){
				args.itemsCustom = [
					[0,1],
					[750,3],
					[980,3],
					[1170, 3]
				];
			}
			else{
				args.itemsCustom = [
					[0,1],
					[750,4],
					[980,4],
					[1170, 4]
				];
			}
			break;
		case 3:
			if ( sb_count == 2 ){
				args.itemsCustom = [
					[0,1],
					[750,2],
					[980,2],
					[1170, 2]
				];
			}
			else if ( sb_count == 1 ){
				args.itemsCustom = [
					[0,1],
					[750,3],
					[980,3],
					[1170, 3]
				];
			}
			else{
				args.itemsCustom = [
					[0,1],
					[750,3],
					[980,3]
				];
			}
			break;
		case 2:
			if ( sb_count == 2 ){
				args.itemsCustom = [
					[0,1],
					[750,2],
					[980,2],
					[1170, 2]
				];
			}
			else if ( sb_count == 1 ){
				args.itemsCustom = [
					[0,1],
					[750,2],
					[980,2],
					[1170, 2]
				];
			}
			else{
				args.itemsCustom = [
					[0,1],
					[750,2],
					[980,2],
					[1170, 2]
				];
			}
			break;
		default:
			args.singleItem = true;
	}
	owl.owlCarousel(args);
	if ( nav.length ){
		jQuery( ".next", nav ).click( function (){
			owl.trigger( "owl.next" );
		});
		jQuery( ".prev", nav ).click( function (){
			owl.trigger( "owl.prev" );
		});
	}
}

function twitter_carousel_init (){
	jQuery( ".tweets_carousel" ).each( function (){
		var el = jQuery( this );
		var owl = jQuery( ".cws_wrapper", el );
		owl.owlCarousel({
			direction: directRTL,
			singleItem: true,
			slideSpeed: 300,
			navigation: false,
			pagination: true
		});
	});
}

/* \carousel */

function wp_standard_processing (){
	var galls;
	jQuery( "img[class*='wp-image-']" ).each( function (){
		var canvas_id;
		var el = jQuery( this );
		var parent = el.parent( "a" );
		var align_class_matches = /align\w+/.exec( el.attr( "class" ) );
		var align_class = align_class_matches != null && align_class_matches[0] != undefined ? align_class_matches[0] : "";
		var added_class = "cws_img_frame";
		if ( align_class.length ){
			if ( parent.length ){
				el.removeClass( align_class );
			}
			added_class += " " + align_class;
		}
		if ( parent.length ){
			parent.addClass( added_class );
			parent.children().wrapAll( "<div class='cws_blur_wrapper' />" );
		}
	});
	galls = jQuery( ".gallery[class*='galleryid-']" );
	if ( galls.length ){
		galls.each( function (){
			var gall = jQuery( this );
			var gall_id = cws_unique_id ( "wp_gallery_" );
			jQuery( "a", gall ).attr( "data-fancybox-group", gall_id );
		});
	}
	jQuery( ".gallery-icon a[href*='.jpg'], .gallery-icon a[href*='.jpeg'], .gallery-icon a[href*='.png'], .gallery-icon a[href*='.gif'], .cws_img_frame[href*='.jpg'], .cws_img_frame[href*='.jpeg'], .cws_img_frame[href*='.png'], .cws_img_frame[href*='.gif']" ).fancybox();
}

function cws_unique_id ( prefix ){
	var prefix = prefix != undefined && typeof prefix == 'string' ? prefix : "";
	var d = new Date();
	var t = d.getTime();
	var unique = Math.random() * t;
	var unique_id = prefix + unique;
	return unique_id;
}

/* fancybox */

function fancybox_init (){
	jQuery(".fancy").fancybox();
}

/* \fancybox */

/* wow */

function wow_init (){
	if (jQuery('.wow').length) {
		new WOW().init();
	};
}

/* wow */

/* isotope */

function isotope_init (){
	if (jQuery(".isotope").length) {
		jQuery(".isotope").isotope({
			itemSelector: ".item"
		});
	};
}

/* \isotope */

/* load more */

function load_more_init (){
	jQuery( document ).on( "click", ".cws_load_more", function (e){
		e.preventDefault();
		var el = jQuery(this);
		var url = el.attr( "href" );
		var paged = parseInt( el.data( "paged" ) );
		var max_paged = parseInt( el.data( "max-paged" ) );
		var template = el.data( "template" );
		var item_cont = el.siblings( ".grid" );
		var isotope = false;
		var args = { ajax : "true", paged : paged, template: template };
		if ( !item_cont.length ) return;
		jQuery.post( url, args, function ( data ){
			var new_items = jQuery(data).filter( '.item' );
			if ( !new_items.length ) return;
			new_items.css( 'display' , 'none' );
			jQuery(item_cont).append( new_items );
			var img_loader = imagesLoaded( jQuery(item_cont) );
			img_loader.on ('always', function (){
				reload_scripts();
				new_items.css( 'display', 'block' );
				if ( jQuery(item_cont).isotope ){
					jQuery(item_cont).isotope( 'appended', new_items);
					jQuery(item_cont).isotope( 'layout' );
				}
			    if (Retina.isRetina()) {
		        	jQuery(window.retina.root).trigger( "load" );
			    }
			    if ( paged == max_paged ){
			    	el.fadeOut( { duration : 300, complete : function (){
			    		el.remove();
			    	}})
			    }
			    else{
			    	el.data( "paged", String( paged + 1 ) );
			    }
			});
		});
	});
}

/* \load more */

/* widget archives hierarchy */

function widget_archives_hierarchy_init (){
	widget_archives_hierarchy_controller ( ".cws-widget>ul li", "ul.children", "parent_archive", "widget_archive_opener" );
	widget_archives_hierarchy_controller ( ".cws-widget .menu>li", "ul.sub-menu", "has_children", "opener" );
}

function widget_archives_hierarchy_controller ( list_item_selector, sublist_item_selector, parent_class, opener_class ){
	jQuery( list_item_selector ).has( sublist_item_selector ).each( function (){
		jQuery( this ).addClass( parent_class );
		var sublist = jQuery( this ).children( sublist_item_selector ).first();
		var level_height = jQuery( this ).outerHeight() - sublist.outerHeight();
		jQuery(this).append( "<span class='fa fa-angle-right " + opener_class + "' style='line-height:" + (level_height - 1) + "px;'></span>" );
	});
	jQuery( list_item_selector + ">" + sublist_item_selector ).css( "display", "none" );
	jQuery( document ).on( "click", "." + opener_class, function (){
		var el = jQuery(this);
		var sublist = el.siblings( sublist_item_selector );
		if ( !sublist.length ) return;
		sublist = sublist.first();
		el.toggleClass( "active" );
		sublist.slideToggle( 300 );
	});
}

/* \widget archives hierarchy */

/* select 2 */

function select2_init (){
	jQuery("select").select2();
}

/* \select 2 */

/* tabs */

function cws_tabs_init (){
	jQuery.fn.cws_tabs = function (){
		jQuery(this).each(function (){
			var parent, tabs, tab_items_container, current_class, active_class;
			parent = jQuery(this);
			tabs = parent.find("[role='tab']");
			tab_items_container = parent.find("[role='tabpanel']").parent();
			current_class = "current";
			active_class = "active";
			tabs.each(function(){
				jQuery(this).on("click", function (){
					var el, active_el, current_el, item, current_ind, current_item, active_el_id;
					el = jQuery(this);
					active_el = el.siblings( "." + active_class ).eq(0);
					current_el = jQuery(this);



					if ( !current_el.length ) return;
					active_el.removeClass( active_class );
					el.addClass( active_class );


					item = tab_items_container.find("[tabindex='"+this.tabIndex+"']");
					current_ind = current_el.attr("tabindex");
					active_el_id = active_el.attr("tabindex");
					current_item = item.siblings("[tabindex='"+active_el_id+"']").eq(0);
					current_el.removeClass( current_class );
					current_item.fadeOut("25",'swing',function(){
						item.fadeIn("25",'swing',function(){
							el.addClass( current_class );
						});
					});
				});
			});
		});
	}
}

function cws_accordion_init (){
	jQuery.fn.cws_accordion = function () {
		jQuery(this).each(function (){
			var sections = jQuery(this).find(".accordion_section");
			sections.each( function (index, value){
				var section_index = index;
				jQuery(this).find(".accordion_title").on("click", function (){
					jQuery(this).siblings(".accordion_content").slideDown("300");
					sections.eq(section_index).addClass("active");
					sections.eq(section_index).siblings().removeClass("active").find(".accordion_content").slideUp("300");
				});
			});
		});
	}
}

function cws_toggle_init (){
	jQuery.fn.cws_toggle = function ( item_class, opener_class, toggle_section_class ){
		var i=0;
		jQuery(this).each( function (){
			i++;
			var sections = jQuery(this).find("."+item_class);
			var j=0;
			sections.each( function (index, value){
				j++;
				var section_index = index;
				jQuery(this).find("."+opener_class).eq(0).on("click", function (){
					if (!sections.eq(section_index).hasClass("active")){
						sections.eq(section_index).addClass("active");
						sections.eq(section_index).find("."+toggle_section_class).eq(0).slideDown("300");
					}
					else{
						sections.eq(section_index).removeClass("active");
						sections.eq(section_index).find("."+toggle_section_class).eq(0).slideUp("300");
					}
				});
			});
		});
	}
}

/* \tabs */


/* message box */

function cws_message_box_init (){
	jQuery( document ).on( 'click', '.cws_msg_box.closable .cls_btn', function (){
		var cls_btn = jQuery(this);
		var el = cls_btn.closest( ".cws_msg_box" );
		el.fadeOut( function (){
			el.remove();
		});
	});
}

/* \message box */

/* portfolio ajax */

function cws_portfolio_pagination_init (){
	var els = jQuery( ".cws_portfolio .pagination" );
	els.each( function (){
		var pagination = jQuery( this );
		cws_portfolio_pagination ( pagination );
	});

	jQuery('.cws_portfolio_fw .pagination').each( function (){
		var pagination = jQuery( this );
		cws_portfolio_pagination ( pagination , true );
	});
}

function cws_portfolio_pagination ( pagination , is_fw ){
	if ( pagination == undefined ) return;
	if (is_fw != undefined){
		is_fw == is_fw ;
	}else{
		is_fw == false ;
	}
	var old_page_links = pagination.find( ".page_links" );
	var items = old_page_links.find( ".page-numbers" ).not( ".current" );
	if (is_fw) {
		var parent = pagination.closest( ".cws_portfolio_fw" );
	}else{
		var parent = pagination.closest( ".cws_portfolio" );
	}

	if (is_fw) {
		var grid = parent.find( ".grid_fw" );
	}else{
		var grid = parent.find( ".cws_portfolio_items" );
	}

	if (is_fw) {
		var ajax_data_input = parent.find( "input.cws_portfolio_fw_ajax_data" );
	}else{
		var ajax_data_input = parent.find( "input.cws_portfolio_ajax_data" );
	}

	items.each( function (){
		var item = jQuery( this );
		var url = item.attr( "href" );
		var ajax_data = JSON.parse( ajax_data_input.val() );
		var action_func;
		ajax_data['url'] = url;
		if (is_fw) {
			action_func = 'cws_portfolio_fw_pagination';
		}else{
			action_func = 'cws_portfolio_pagination';
		}
		item.click({
			action:action_func,
			ajax_data:ajax_data,
			parent: parent,
			grid: grid,
			pagination: pagination,
			is_fw: is_fw,
		}, cws_onPageNumItemClick);
	});
}

function cws_onPageNumItemClick( e ){
	e.preventDefault();
	var that = jQuery(this);
	that.off('click');

	jQuery.post( ajaxurl, {
		"action" : e.data.action,
		"data" : e.data.ajax_data,
		always: function() {
			that.click({
				action:e.data.action,
				ajax_data:e.data.ajax_data,
				parent:e.data.parent,
				grid:e.data.grid,
				pagination:e.data.pagination,
				is_fw:e.data.is_fw,
			}, cws_onPageNumItemClick);
		},
	}, function ( data, status ){
		var img_loader;
		var grid = e.data.grid;
		var pagination = e.data.pagination;
		var old_page_links = pagination.find( ".page_links" );
		var parent_offset = e.data.parent.offset().top;
		var old_items = jQuery( ".item", grid );
		var new_items = jQuery( ".item", jQuery( data ) );
		var new_page_links = jQuery( ".pagination .page_links", jQuery( data ) );
		var new_page_links_exists = Boolean( new_page_links.children().length );
		new_items.css( "display", "none" );
		grid.isotope( 'remove', old_items );
		if ( window.scrollY > parent_offset ){
			jQuery( 'html, body' ).stop().animate({
				scrollTop : parent_offset
			}, 300);
		}
		grid.append( new_items );
		img_loader = imagesLoaded( grid );
		img_loader.on( "always", function (){
			grid.isotope( 'appended', new_items );
			grid.isotope( 'layout' );
			old_page_links.fadeOut( function (){
				old_page_links.remove();
				if ( new_page_links_exists ){
					new_page_links.css( "display", "none" );
					pagination.append( new_page_links );
					new_page_links.fadeIn();
					if (e.data.is_fw){
						cws_portfolio_pagination ( pagination , true );
					}else{
						cws_portfolio_pagination ( pagination );
					}
				}
				else{
					pagination.remove();
				}
			    if (Retina.isRetina()) {
		        	jQuery(window.retina.root).trigger( "load" );
			    }
				fancybox_init ();
			});
		});
	});
}

function cws_portfolio_filter_init (){
	var els = jQuery( ".cws_portfolio select.cws_portfolio_filter" );
	els.each( function (){
		var el = jQuery( this );
		var parent = el.closest( ".cws_portfolio" );
		var grid = parent.find( ".cws_portfolio_items" );
		var ajax_data_input = parent.find( "input.cws_portfolio_ajax_data" );
		el.on( "change", function (){
			var val = el.val();
			var ajax_data = JSON.parse( ajax_data_input.val() );
			ajax_data["filter"] = val;
			var old_pagination = parent.find( ".pagination" );
			var old_page_links = jQuery( ".page_links", old_pagination );
			jQuery.post( ajaxurl, {
				"action" : "cws_portfolio_filter",
				"data" : ajax_data
			}, function ( data, status ){
				var img_loader;
				var old_items = jQuery( ".item", grid );
				var new_items = jQuery( ".item", jQuery( data ) );
				var new_pagination = jQuery( ".pagination", jQuery( data ) );
				var new_page_links = jQuery( ".page_links", new_pagination );
				var new_page_links_exists = Boolean( new_page_links.children().length );
				new_items.css( "display", "none" );
				grid.isotope( 'remove', old_items );
				grid.append( new_items );
				img_loader = imagesLoaded( grid );
				img_loader.on( "always", function (){
					grid.isotope( 'appended', new_items );
					grid.isotope( 'layout' );
					ajax_data_input.attr( "value", JSON.stringify( ajax_data ) );
					if ( old_pagination.length ){
						if ( new_page_links_exists ){
							new_page_links.css( "display", "none" );
							old_page_links.fadeOut( function (){
								old_page_links.remove();
								old_pagination.append( new_page_links );
								new_page_links.fadeIn();
								cws_portfolio_pagination ( old_pagination );
							});
						}
						else{
							old_pagination.fadeOut( function (){
								old_pagination.remove();
							});
						}
					}
					else{
						if ( new_page_links_exists ){
							new_pagination.css( "display", "none" );
							parent.append( new_pagination );
							new_pagination.fadeIn();
							cws_portfolio_pagination ( new_pagination );
						}
					}
				    if (Retina.isRetina()) {
			        	jQuery(window.retina.root).trigger( "load" );
				    }
					fancybox_init ();
				});
			});
		});
	});
}

function cws_portfolio_single_carousel_init (){
	jQuery( ".cws_portfolio.single.related" ).each( function (){
		var parent = jQuery(this);
		var grid = jQuery( ".cws_portfolio_items", parent );
		var ajax_data_input = jQuery( "#cws_portfolio_single_ajax_data", parent );
		var carousel_nav = jQuery( ".carousel_nav_panel", parent );
		if ( !carousel_nav.length ) return;
		jQuery( ".prev,.next", carousel_nav ).on( "click", function (){
			var el = jQuery( this );
			var action = el.hasClass( "prev" ) ? "prev" : "next";
			var ajax_data = JSON.parse( ajax_data_input.val() );
			var current = ajax_data['current'];
			var all = ajax_data['related_ids'];
			var next_ind;
			var next;
			for ( var i=0; i<all.length; i++ ){
				if ( all[i] == current ){
					if ( action == "prev" ){
						if ( i <= 0 ){
							next_ind = all.length-1;
						}
						else{
							next_ind = i-1;
						}
					}
					else{
						if ( i >= all.length-1 ){
							next_ind = 0;
						}
						else{
							next_ind = i+1
						}
					}
					break;
				}
			}
			if ( typeof next_ind != "number" || typeof all[next_ind] == undefined ) return;
			next = all[next_ind];
			jQuery.post( ajaxurl, {
				'action' : 'cws_portfolio_single',
				'data' : {
					'initial_id' : ajax_data['initial'],
					'requested_id' : next
				}
			}, function ( data, status ){
				var animation_config, old_el, new_el, hiding_class, showing_class, delay, img_loader;
				ajax_data['current'] = next;
				ajax_data_input.attr( "value", JSON.stringify( ajax_data ) );
				animation_config = {
					'prev' : {
						'in' : 'fadeInLeft',
						'out' : 'fadeOutRight'
					},
					'next' : {
						'in' : 'fadeInRight',
						'out' : 'fadeOutLeft'
					},
					'delay' : 150
				};
				old_el = jQuery( ".cws_portfolio_items .item" , parent );
				new_el = jQuery( ".item", jQuery( data ) );
				hiding_class = "animated " + animation_config[action]['out'];
				showing_class = "animated " + animation_config[action]['in'];
				delay = animation_config['delay'];
				new_el.css( "display", "none" );
				grid.append( new_el );
				img_loader = imagesLoaded( grid );
				img_loader.on( 'always', function (){
					old_el.addClass( hiding_class );
					setTimeout( function (){
						old_el.remove();
						new_el.addClass( showing_class );
						new_el.css( "display", "block" );

					    if (Retina.isRetina()) {
				        	jQuery(window.retina.root).trigger( "load" );
					    }
					    fancybox_init();

					}, delay );
				});
			});
		});
	});
}

/* portfolio ajax */

/* full width portfolio ajax */

function cws_portfolio_fw_filter_init (){
var els = jQuery( ".cws_portfolio_fw select.cws_portfolio_filter" );
	els.each( function (){
		var el = jQuery( this );
		var parent = el.closest( ".cws_portfolio_fw" );
		var grid = parent.find( ".grid_fw" );
		var ajax_data_input = parent.find( "input.cws_portfolio_fw_ajax_data" );
		el.on( "change", function (){
			var val = el.val();
			var ajax_data = JSON.parse( ajax_data_input.val() );
			ajax_data["filter"] = val;
			var old_pagination = parent.find( ".pagination" );
			var old_page_links = jQuery( ".page_links", old_pagination );
			jQuery.post( ajaxurl, {
				"action" : "cws_portfolio_fw_filter",
				"data" : ajax_data
			}, function ( data, status ){
				var img_loader;
				var old_items = jQuery( ".item", grid );
				var new_items = jQuery( ".item", jQuery( data ) );
				var new_pagination = jQuery( ".pagination", jQuery( data ) );
				var new_page_links = jQuery( ".page_links", new_pagination );
				var new_page_links_exists = Boolean( new_page_links.children().length );
				new_items.css( "display", "none" );
				grid.isotope( 'remove', old_items );
				grid.append( new_items );
				img_loader = imagesLoaded( grid );
				img_loader.on( "always", function (){
					grid.isotope( 'appended', new_items );
					grid.isotope( 'layout' );
					ajax_data_input.attr( "value", JSON.stringify( ajax_data ) );
					if ( old_pagination.length ){
						if ( new_page_links_exists ){
							new_page_links.css( "display", "none" );
							old_page_links.fadeOut( function (){
								old_page_links.remove();
								old_pagination.append( new_page_links );
								new_page_links.fadeIn();
								cws_portfolio_pagination ( old_pagination , true );
							});
						}
						else{
							old_pagination.fadeOut( function (){
								old_pagination.remove();
							});
						}
					}
					else{
						if ( new_page_links_exists ){
							new_pagination.css( "display", "none" );
							parent.append( new_pagination );
							new_pagination.fadeIn();
							cws_portfolio_pagination ( new_pagination , true );
						}
					}
				    if (Retina.isRetina()) {
			        	jQuery(window.retina.root).trigger( "load" );
				    }
					fancybox_init ();
				});
			});
		});
	});
}

/* \full width portfolio ajax */

/* ourteam ajax */

function cws_ourteam_pagination_init (){
	var els = jQuery( ".cws_ourteam .pagination" );
	els.each( function (){
		var pagination = jQuery( this );
		cws_ourteam_pagination( pagination );
	});
}

function cws_ourteam_pagination ( pagination ){
	if ( pagination == undefined ) return;
	var old_page_links = pagination.find( ".page_links" );
	var items = old_page_links.find( ".page-numbers" ).not( ".current" );
	var parent = pagination.closest( ".cws_ourteam" );
	var grid = parent.find( ".cws_ourteam_items" );
	var ajax_data_input = parent.find( "input.cws_ourteam_ajax_data" );
	items.each( function (){
		var item = jQuery( this );
		var url = item.attr( "href" );
		var ajax_data = JSON.parse( ajax_data_input.val() );
		ajax_data['url'] = url;
		item.on( "click", function ( e ){
			e.preventDefault();
			jQuery.post( ajaxurl, {
				"action" : "cws_ourteam_pagination",
				"data" : ajax_data
			}, function ( data, status ){
				var img_loader;
				var parent_offset = parent.offset().top;
				var old_items = jQuery( ".item", grid );
				var new_items = jQuery( ".item", jQuery( data ) );
				var new_page_links = jQuery( ".pagination .page_links", jQuery( data ) );
				var new_page_links_exists = Boolean( new_page_links.children().length );
				new_items.css( "display", "none" );
				grid.isotope( 'remove', old_items );
				if ( window.scrollY > parent_offset ){
					jQuery( 'html, body' ).stop().animate({
						scrollTop : parent_offset
					}, 300);
				}
				grid.append( new_items );
				img_loader = imagesLoaded( grid );
				img_loader.on( "always", function (){
					grid.isotope( 'appended', new_items );
					grid.isotope( 'layout' );
					old_page_links.fadeOut( function (){
						old_page_links.remove();
						if ( new_page_links_exists ){
							new_page_links.css( "display", "none" );
							pagination.append( new_page_links );
							new_page_links.fadeIn();
							cws_ourteam_pagination ( pagination );
						}
						else{
							pagination.remove();
						}
					    if (Retina.isRetina()) {
				        	jQuery(window.retina.root).trigger( "load" );
					    }
						fancybox_init ();
					});
				});

			});
		});
	});
}

function cws_ourteam_filter_init (){
	var els = jQuery( ".cws_ourteam select.cws_ourteam_filter" );
	els.each( function (){
		var el = jQuery( this );
		var parent = el.closest( ".cws_ourteam" );
		var grid = parent.find( ".cws_ourteam_items" );
		var ajax_data_input = parent.find( "input.cws_ourteam_ajax_data" );
		el.on( "change", function (){
			var val = el.val();
			var ajax_data = JSON.parse( ajax_data_input.val() );
			ajax_data["filter"] = val;
			var old_pagination = parent.find( ".pagination" );
			var old_page_links = jQuery( ".page_links", old_pagination );
			jQuery.post( ajaxurl, {
				"action" : "cws_ourteam_filter",
				"data" : ajax_data
			}, function ( data, status ){
				var img_loader;
				var old_items = jQuery( ".item", grid );
				var new_items = jQuery( ".item", jQuery( data ) );
				var new_pagination = jQuery( ".pagination", jQuery( data ) );
				var new_page_links = jQuery( ".page_links", new_pagination );
				var new_page_links_exists = Boolean( new_page_links.children().length );
				new_items.css( "display", "none" );
				grid.isotope( 'remove', old_items );
				grid.append( new_items );
				img_loader = imagesLoaded( grid );
				img_loader.on( "always", function (){
					grid.isotope( 'appended', new_items );
					grid.isotope( 'layout' );
					ajax_data_input.attr( "value", JSON.stringify( ajax_data ) );
					if ( old_pagination.length ){
						if ( new_page_links_exists ){
							new_page_links.css( "display", "none" );
							old_page_links.fadeOut( function (){
								old_page_links.remove();
								old_pagination.append( new_page_links );
								new_page_links.fadeIn();
								cws_ourteam_pagination ( old_pagination );
							});
						}
						else{
							old_pagination.fadeOut( function (){
								old_pagination.remove();
							});
						}
					}
					else{
						if ( new_page_links_exists ){
							new_pagination.css( "display", "none" );
							parent.append( new_pagination );
							new_pagination.fadeIn();
							cws_ourteam_pagination ( new_pagination );
						}
					}
				    if (Retina.isRetina()) {
			        	jQuery(window.retina.root).trigger( "load" );
				    }
					fancybox_init ();
				});
			});
		});
	});
}

/* \ourteam ajax */

/* parallax */

function cws_parallax_init(){
	if (jQuery( ".cws_prlx_section" ).length) {
		jQuery( ".cws_prlx_section" ).cws_prlx();
	};
}

/* \parallax */

/* milestone */

function cws_milestone_init (){
	jQuery.fn.cws_milestone = function (){
		jQuery(this).each( function (){
			var el = jQuery(this);
			var number_container = el.find(".milestone_number");
			var done = false;
			if (number_container.length){
				if ( !done ) done = milestone_controller (el, number_container);
				jQuery(window).scroll(function (){
					if ( !done ) done = milestone_controller (el, number_container);
				});
			}
		});
	}
}

function milestone_controller (el, number_container){
	var od, args;
	var speed = number_container.data( 'speed' );
	var number = number_container.text();
	if (el.is_visible()){
		args= {
			el: number_container[0],
			format: 'd',
		};
		if ( speed ) args['duration'] = speed;
		od = new Odometer( args );
		od.update( number );
		return true;
	}
	return false;
}

function get_digit (number, digit){
	var exp = Math.pow(10, digit);
	return Math.round(number/exp%1*10);
}

/* \milestone */

/* progress bar */

function cws_progress_bar_init (){
	jQuery.fn.cws_progress_bar = function (){
		jQuery(this).each( function (){
			var el = jQuery(this);
			var done = false;
			if (!done) done = progress_bar_controller(el);
			jQuery(window).scroll(function (){
				if (!done) done = progress_bar_controller(el);
			});
		});
	}
}

function progress_bar_controller (el){
	if (el.is_visible()){
		var progress = el.find(".progress");
		var value = parseInt( progress.attr("data-value") );
		var width = parseInt(progress.css('width').replace(/%|(px)|(pt)/,""));
		var ind = el.find(".indicator");
		if ( width < value ){
			var progress_interval = setInterval( function(){
				width ++;
				progress.css("width", width+"%");
				ind.text(width+'%');
				if (width == value){
					clearInterval(progress_interval);
				}
			}, 5);
		}
		return true;
	}
	return false;
}

/* \progress bar */

function custom_colors_init (){

	jQuery('.cws_sc_carousel.custom-control-color').each(function(){
		var control_color = jQuery(this).attr("data-customcontrol");
		jQuery(this).find('.cws_sc_carousel_header .carousel_nav_panel .prev').css(
				   {"background-color":'transparent',
					"color":control_color,
					"-webkit-box-shadow":"0px 0px 0px 1px "+control_color,
					"-moz-box-shadow":"0px 0px 0px 1px "+control_color,
					"-ms-box-shadow":"0px 0px 0px 1px "+control_color,
					"box-shadow":"0px 0px 0px 1px "+control_color
				});

		jQuery(this).find('.cws_sc_carousel_header .carousel_nav_panel .next').css(
				   {"background-color":'transparent',
					"color":control_color,
					"-webkit-box-shadow":"0px 0px 0px 1px "+control_color,
					"-moz-box-shadow":"0px 0px 0px 1px "+control_color,
					"-ms-box-shadow":"0px 0px 0px 1px "+control_color,
					"box-shadow":"0px 0px 0px 1px "+control_color
				});

		jQuery(this).find('.cws_sc_carousel_header .carousel_nav_panel .prev').on("mouseenter", function (){
			jQuery(this).css({"background-color":'rgba('+cws_Hex2RGB(control_color)+',0.25)'});
		});
		jQuery(this).find('.cws_sc_carousel_header .carousel_nav_panel .prev').on("mouseleave", function (){
			jQuery(this).css({"background-color":'transparent'});
		});
		jQuery(this).find('.cws_sc_carousel_header .carousel_nav_panel .next').on("mouseenter", function (){
			jQuery(this).css({"background-color":'rgba('+cws_Hex2RGB(control_color)+',0.25)'});
		});
		jQuery(this).find('.cws_sc_carousel_header .carousel_nav_panel .next').on("mouseleave", function (){
			jQuery(this).css({"background-color":'transparent'});
		});


		})





	jQuery('.pricing_table_column:not(.active_table_column) .price_section').each(function(){
		if (jQuery(this).attr('data-bg-color') !== undefined) {
			var bg_color = jQuery(this).attr("data-bg-color");
			jQuery(this).parents('.pricing_table_column').on("mouseenter", function (){
				jQuery(this).find(".price_section").css({"color":bg_color});
			});
			jQuery(this).parents('.pricing_table_column').on("mouseleave", function (){
				jQuery(this).find(".price_section").removeAttr('style');
			});
		}
	})

	jQuery(".cws_button.custom_colors").each(function (){
		var bg_color = jQuery(this).attr("data-bg-color");
		var font_color = jQuery(this).attr("data-font-color");
		var alt = jQuery(this).hasClass("alt");
		if ( alt ){
			if (jQuery(this).parents('.pricing_table_column').length) {
				jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":font_color});

				jQuery(this).parents('.pricing_table_column').on("mouseenter", function (){
					jQuery(this).find(".cws_button.custom_colors").css({"background-color":font_color,"color":bg_color,"border-color":font_color});
				});
				jQuery(this).parents('.pricing_table_column').on("mouseleave", function (){
					jQuery(this).find(".cws_button.custom_colors").css({"background-color":bg_color,"color":font_color,"border-color":font_color});
				});

				jQuery(this).on("mouseenter", function (){
					jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":font_color});
				});

				jQuery(this).on("mouseleave", function (){
					jQuery(this).css({"background-color":font_color,"color":bg_color,"border-color":font_color});
				});
			}else{
				jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":font_color});

				jQuery(this).on("mouseover", function (){
					if (bg_color == 'transparent') {
						jQuery(this).css({"background-color":'rgba('+cws_Hex2RGB(font_color)+',0.25)',"color":font_color,"border-color":font_color});
					}else{
						jQuery(this).css({"background-color":font_color,"color":bg_color,"border-color":font_color});
					}
				});
				jQuery(this).on("mouseout", function (){
					jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":font_color});
				});
			}
		}
		else{
			jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":bg_color});
			jQuery(this).on("mouseover", function (){
				jQuery(this).css({"background-color":font_color,"color":bg_color,"border-color":bg_color});
			});
			jQuery(this).on("mouseout", function (){
				jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":bg_color});
			});
		}
	});
	jQuery(".cws_fa.custom_colors").each(function (){
		var bg_color = jQuery(this).attr("data-bg-color");
		var font_color = jQuery(this).attr("data-font-color");
		var alt = jQuery(this).hasClass("alt");
		if ( alt ){
			if (jQuery(this).is('.bordered_icon.simple_icon')) {
				jQuery(this).css({"background-color":bg_color,
					"color":font_color,
					"-webkit-box-shadow":"0px 0px 0px 1px "+bg_color,
					"-moz-box-shadow":"0px 0px 0px 1px "+bg_color,
					"-ms-box-shadow":"0px 0px 0px 1px "+bg_color,
					"box-shadow":"0px 0px 0px 1px "+bg_color});
			}else if(jQuery(this).is('.simple_icon')){
				jQuery(this).css({
					"background-color":bg_color,
					"color":font_color});
			}else{
				jQuery(this).css({"background-color":'transparent',"color":font_color,"border-color":'#f2f2f2'});
			}

			if (jQuery(this).parent('.cws_fa_wrapper').length) {
				jQuery(this).parent('.cws_fa_wrapper').on("mouseover", function (){
					jQuery(this).find('.cws_fa').css({"background-color":font_color,"color":bg_color, 'border-color':font_color});
					jQuery(this).find('.ring').css({
						"-webkit-box-shadow":"0px 0px 0px 1px "+font_color,
						"-moz-box-shadow":"0px 0px 0px 1px "+font_color,
						"-ms-box-shadow":"0px 0px 0px 1px "+font_color,
						"box-shadow":"0px 0px 0px 1px "+font_color
					});
				});
				jQuery(this).parent('.cws_fa_wrapper').on("mouseout", function (){
					jQuery(this).find('.cws_fa').css({"background-color":'transparent',"color":font_color,"border-color":'#f2f2f2'});
					jQuery(this).find('.ring').css({
						"-webkit-box-shadow":"0px 0px 0px 1px #fafafa",
						"-moz-box-shadow":"0px 0px 0px 1px #fafafa",
						"-ms-box-shadow":"0px 0px 0px 1px #fafafa",
						"box-shadow":"0px 0px 0px 1px #fafafa"
					});
				});
			}else{
				if (jQuery(this).is('.bordered_icon.simple_icon')) {
					jQuery(this).on("mouseover", function (){
						jQuery(this).css({"color":bg_color,'background-color':'transparent'});
					});
					jQuery(this).on("mouseout", function (){
						jQuery(this).css({"background-color":bg_color,
							"color":font_color,
							"-webkit-box-shadow":"0px 0px 0px 1px "+bg_color,
							"-moz-box-shadow":"0px 0px 0px 1px "+bg_color,
							"-ms-box-shadow":"0px 0px 0px 1px "+bg_color,
							"box-shadow":"0px 0px 0px 1px "+bg_color});
					});
				}else if(jQuery(this).is('.simple_icon')){
					jQuery(this).on("mouseover", function (){
						jQuery(this).css({"color":bg_color,"background-color":'transparent'});
					});
					jQuery(this).on("mouseout", function (){
						jQuery(this).css({'background-color':bg_color,"color":font_color});
					});
				}else{
					jQuery(this).on("mouseover", function (){
						jQuery(this).css({"background-color":font_color,"color":bg_color,"border-color":font_color});
					});
					jQuery(this).on("mouseout", function (){
						jQuery(this).css({"background-color":'transparent',"color":font_color,"border-color":'#f2f2f2'});
					});
				}

			}

		}
		else{
			if (jQuery(this).is('.bordered_icon.simple_icon')) {
				jQuery(this).css({"background-color":'transparent',
					"color":font_color,
					"-webkit-box-shadow":"0px 0px 0px 1px "+font_color,
					"-moz-box-shadow":"0px 0px 0px 1px "+font_color,
					"-ms-box-shadow":"0px 0px 0px 1px "+font_color,
					"box-shadow":"0px 0px 0px 1px "+font_color});
			}else if(jQuery(this).is('.simple_icon')){
				jQuery(this).css({"background-color":'transparent',
					"color":font_color});
			}else{
				jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":bg_color});
			}
			if (jQuery(this).parent('.cws_fa_wrapper').length) {
				jQuery(this).next('.ring').css({
					"-webkit-box-shadow":"0px 0px 0px 1px "+bg_color,
					"-moz-box-shadow":"0px 0px 0px 1px "+bg_color,
					"-ms-box-shadow":"0px 0px 0px 1px "+bg_color,
					"box-shadow":"0px 0px 0px 1px "+bg_color
				})
				jQuery(this).parent('.cws_fa_wrapper').on("mouseover", function (){
					jQuery(this).find('.cws_fa').css({"background-color":'transparent',"color":bg_color});
				});
				jQuery(this).parent('.cws_fa_wrapper').on("mouseout", function (){
					jQuery(this).find('.cws_fa').css({"background-color":bg_color,"color":font_color,"border-color":bg_color});
				});
			}else{
				if (jQuery(this).is('.bordered_icon.simple_icon')) {
					jQuery(this).on("mouseover", function (){
						jQuery(this).css({"color":bg_color,'background-color':font_color});
					});
					jQuery(this).on("mouseout", function (){
						jQuery(this).css({"background-color":'transparent',
							"color":font_color,
							"-webkit-box-shadow":"0px 0px 0px 1px "+font_color,
							"-moz-box-shadow":"0px 0px 0px 1px "+font_color,
							"-ms-box-shadow":"0px 0px 0px 1px "+font_color,
							"box-shadow":"0px 0px 0px 1px "+font_color});
					});
				}else if(jQuery(this).is('.simple_icon')){
					jQuery(this).on("mouseover", function (){
						jQuery(this).css({"color":bg_color,'background-color':font_color});
					});
					jQuery(this).on("mouseout", function (){
						jQuery(this).css({"background-color":'transparent',"color":font_color});
					});
				}else{
					jQuery(this).on("mouseover", function (){
						jQuery(this).css({"color":bg_color});
					});
					jQuery(this).on("mouseout", function (){
						jQuery(this).css({"background-color":bg_color,"color":font_color,"border-color":bg_color});
					});
				}

			}

		}
	});
}

function cws_Hex2RGB(hex) {
	var hex = hex.replace("#", "");
	var color = '';
	if (hex.length == 3) {
		color = hexdec(hex.substr(0,1))+',';
		color = color + hexdec(hex.substr(1,1))+',';
		color = color + hexdec(hex.substr(2,1));
	}else if(hex.length == 6){
		color = hexdec(hex.substr(0,2))+',';
		color = color + hexdec(hex.substr(2,2))+',';
		color = color + hexdec(hex.substr(4,2));
	}
	return color;
}
function hexdec(hex_string) {
	hex_string = (hex_string + '')
	.replace(/[^a-f0-9]/gi, '');
	return parseInt(hex_string, 16);
}

/* header parallax */


function cws_header_imgs_cover_init (){
	cws_header_imgs_cover_controller ();
	window.addEventListener( "resize", cws_header_imgs_cover_controller, false );
}

function cws_header_imgs_cover_controller (){
	var prlx_sections, prlx_section, section_imgs, section_img, i, j;
	var prlx_sections = jQuery( '.cws_parallax_scene_container > .cws_parallax_scene, .header_bg_img > .cws_parallax_section');
	for ( i = 0; i < prlx_sections.length; i++ ){
		prlx_section = prlx_sections[i];
		section_imgs = jQuery( "img", jQuery( prlx_section ) );
		for ( j = 0; j < section_imgs.length; j++ ){
			section_img = section_imgs[j];
			cws_cover_image( section_img, prlx_section );
		}
	}
}

function cws_cover_image ( img, section ){
	var section_w, section_h, img_nat_w, img_nat_h, img_ar, img_w, img_h, canvas;
	if ( img == undefined || section == undefined ) return;
	section_w = section.offsetWidth;
	section_h = section.offsetHeight;
	img_nat_w = img.naturalWidth;
	img_nat_h = img.naturalHeight;
	img_ar = img_nat_w / img_nat_h;
	if ( img_ar > 1 ){
		img_h = section_h;
		img_w = section_h * img_ar;
	}
	else{
		img_w = section_w;
		img_h = section_w / img_ar;
	}
	img.width = img_w;
	img.height = img_h;
}


function cws_header_bg_init(){
	var bg_sections = jQuery('.header_bg_img, .cws_parallax_scene_container');
	bg_sections.each( function (){
		var bg_section = jQuery( this );
		cws_header_bg_controller( bg_section );
	});
	window.addEventListener( 'resize', function (){
		var bg_sections = jQuery('.header_bg_img, .cws_parallax_scene_container');
		bg_sections.each( function (){
			var bg_section = jQuery( this );
			cws_header_bg_controller( bg_section );
		});
	}, false );
}

function cws_header_bg_controller ( bg_section ){
	var benefits_area = jQuery( ".benefits_area" ).eq( 0 );
	var page_content_section = jQuery( ".page_content" ).eq( 0 );
	var top_curtain_hidden_class = "hidden";
	var top_panel = jQuery( "#site_top_panel" );
	var top_curtain = jQuery( "#top_panel_curtain" );
	var consider_top_panel = top_panel.length && top_curtain.length && top_curtain.hasClass( top_curtain_hidden_class );
		if ( benefits_area.length ){
			if ( consider_top_panel ){
				bg_section.css( {
					'height' : bg_section.parent().outerHeight() + 200 + bg_section.parent().offset().top + top_panel.outerHeight() + "px",
					'margin-top' : "-" + ( bg_section.parent().offset().top + top_panel.outerHeight() ) + "px"
				});
			}
			else{
				bg_section.css( {
					'height' : bg_section.parent().outerHeight() + 200 + bg_section.parent().offset().top + "px",
					'margin-top' : "-" + bg_section.parent().offset().top + "px"
				});
			}
			bg_section.addClass( 'height_assigned' );
		}
		else if ( page_content_section.length ){
			if ( page_content_section.hasClass( "single_sidebar" ) || page_content_section.hasClass( "double_sidebar" ) ){
				if ( consider_top_panel ){
					bg_section.css({
						'height' : bg_section.parent().outerHeight() + bg_section.parent().offset().top + top_panel.outerHeight() + "px",
						'margin-top' : "-" + ( bg_section.parent().offset().top + top_panel.outerHeight() ) + "px"
					});
				}
				else{
					bg_section.css({
						'height' : bg_section.parent().outerHeight() + bg_section.parent().offset().top + "px",
						'margin-top' : "-" + bg_section.parent().offset().top + "px"
					});
				}
				bg_section.addClass( 'height_assigned' );
			}
			else{
				if ( consider_top_panel ){
					bg_section.css({
						'height' : bg_section.parent().outerHeight() + 200 + bg_section.parent().offset().top + top_panel.outerHeight() + "px",
						'margin-top' : "-" + ( bg_section.parent().offset().top + top_panel.outerHeight() ) + "px"
					});
				}
				else{
					bg_section.css({
						'height' : bg_section.parent().outerHeight() + 200 + bg_section.parent().offset().top + "px",
						'margin-top' : "-" + bg_section.parent().offset().top + "px"
					});
				}
				bg_section.addClass( 'height_assigned' );
			}
		}
}

function cws_header_parallax_init (){
	var scenes = jQuery( ".cws_parallax_section, .cws_parallax_scene" );
	scenes.each( function (){
		var scene = this;
		var prlx_scene = new Parallax ( scene );
	});
}

function cws_carousels_init_waiter ( els, callback ){
	for ( var i = 0; i < els.length; i++ ){
		if ( jQuery( els[i] ).hasClass( 'owl-carousel' ) ){
			els.splice( i, 1 );
		}
	}
	if ( els.length ){
		setTimeout( function (){
			cws_carousels_init_waiter ( els, callback );
		}, 10 );
	}
	else{
		callback ();
		return true;
	}
}

function cws_wait_for_header_bg_height_assigned ( callback ){
	var header_bg_sections = jQuery( '.header_bg_img, .cws_parallax_scene_container' );
	if ( callback == undefined || typeof callback != 'function' ) return;
	cws_header_bg_height_assigned_waiter ( header_bg_sections, callback );
}

function cws_header_bg_height_assigned_waiter ( els, callback ){
	var i;
	for ( i = 0; i < els.length; i++ ){
		if ( jQuery( els[i] ).hasClass( 'height_assigned' ) ){
			els.splice( i, 1 );
		}
	}
	if ( els.length ){
		setTimeout( function (){
			cws_header_bg_height_assigned_waiter ( els, callback );
		}, 10 );
	}
	else{
		callback ();
		return true;
	}
}

/* \header parallax */

/* full screen video */

function cws_page_header_video_init (){
	cws_set_header_video_wrapper_height();
	window.addEventListener( 'resize', cws_set_header_video_wrapper_height, false )
}

function cws_set_header_video_wrapper_height (){
	var containers = document.getElementsByClassName( 'page_header_video_wrapper' );
	for ( var i=0; i<containers.length; i++ ){
		cws_set_window_height( containers[i] );
	}
}

function scroll_down_init (){
	jQuery( ".fs_video_slider" ).on( "click", ".scroll_down", function ( e ){
		var anchor, matches, id, el, el_offset;
		e.preventDefault();
		anchor = jQuery( this ).attr( "href" );
		matches = /#(\w+)/.exec( anchor );
		if ( matches == null ) return;
		id = matches[1];
		el = document.getElementById( id );
		if ( el == null ) return;
		el_offset = jQuery( el ).offset().top;
		jQuery( "html, body" ).animate({
			scrollTop : el_offset
		}, 300);
	});
}

/* \full screen video */

/* BLUR */

function cws_wait_for_image ( img, callback ){
	var complete = false;
	if ( img == undefined || img.complete == undefined || callback == undefined || typeof callback != 'function' ) return;
	if ( !img.complete ){
		setTimeout( function (){
			cws_wait_for_image ( img, callback );
		}, 10 );
	}
	else{
		callback ();
		return true;
	}
}

function cws_wait_for_canvas ( canvas, callback ){
	var drawn = false;
	if ( canvas == undefined || typeof canvas != 'object' || callback == undefined || typeof callback != 'function' ) return;
	if ( !jQuery( canvas ).hasClass( 'drawn' ) ){
		setTimeout( function (){
			cws_wait_for_canvas ( canvas, callback );
		}, 10);
	}
	else{
		callback ();
		return true;
	}
}

/* \BLUR */

/* SCROLL TO TOP */
function scroll_top_vars_init (){
	window.scroll_top = {
		el : jQuery( ".scroll_top" ),
		anim_in_class : "fadeIn",
		anim_out_class : "fadeOut"
	};
}
function scroll_top_init (){
	scroll_top_vars_init ();
	scroll_top_controller ();
	window.addEventListener( 'scroll', scroll_top_controller, false);
	window.scroll_top.el.on( 'click', function (){
		jQuery( "html, body" ).animate( {scrollTop : 0}, '300', function (){
			window.scroll_top.el.css({
				"pointer-events" : "none"
			});
			window.scroll_top.el.addClass( window.scroll_top.anim_out_class );
		});
	});
}
function scroll_top_controller (){
	var scroll_pos = window.pageYOffset;
	if ( window.scroll_top == undefined ) return;
	if ( scroll_pos < 1 && window.scroll_top.el.hasClass( window.scroll_top.anim_in_class ) ){
		window.scroll_top.el.css({
			"pointer-events" : "none"
		});
		window.scroll_top.el.removeClass( window.scroll_top.anim_in_class );
		window.scroll_top.el.addClass( window.scroll_top.anim_out_class );
	}
	else if( scroll_pos >= 1 && !window.scroll_top.el.hasClass( window.scroll_top.anim_in_class ) ){
		window.scroll_top.el.css({
			"pointer-events" : "auto"
		});
		window.scroll_top.el.removeClass( window.scroll_top.anim_out_class );
		window.scroll_top.el.addClass( window.scroll_top.anim_in_class );
	}
}
/* \SCROLL TO TOP */

function cws_set_window_width ( el ){
	var window_w;
	if ( el != undefined ){
		window_w = document.body.clientWidth;
		el.style.width = window_w + 'px';
	}
}
function cws_set_window_height ( el ){
	var window_h;
	if ( el != undefined ){
		window_h = window.innerHeight;
		el.style.height = window_h + 'px';
	}
}

function cws_top_social_init (){
	if (jQuery("#top_social_links_wrapper").hasClass('toggle-on')) {
		var el = jQuery( ".cws_social_links", "#top_social_links_wrapper" );
		var toggle_class = "expanded";
		var parent_toggle_class = "active_social";
		if ( !el.length ) return;
		el.on( 'click', function (){
			var el = jQuery( this );
			if ( el.hasClass( toggle_class ) ){
				el.removeClass( toggle_class );
				setTimeout( function (){
					el.closest( "#site_top_panel" ).removeClass( parent_toggle_class );
				}, 300);
			}
			else{
				el.addClass( toggle_class );
				el.closest( "#site_top_panel" ).addClass( parent_toggle_class );
			}
		});
	};
}

function cws_fs_video_bg_init (){
	var slider_wrappers, header_height_is_set;
	header_height_is_set = document.getElementsByClassName( 'header_video_fs_view' );


	if ( !header_height_is_set.length) return;
		cws_fs_video_slider_controller( header_height_is_set[0] );
	window.addEventListener( 'resize', function (){
		cws_fs_video_slider_controller( header_height_is_set[0] );
	});
}
function cws_fs_video_slider_controller ( el ){
	cws_set_window_width( el );
	cws_set_window_height( el );
}

function cws_slider_video_height (element){
	var height_coef = element.attr('data-wrapper-height')
	if (height_coef) {
		if (window.innerWidth<960) {
			element.height(window.innerWidth/height_coef)
		}else{
			element.height(960/height_coef)
		}
	}
}

/* SLIDER SCROLL CONTROLLER */

function cws_revslider_pause_init (){
	var slider_els, slider_el, slider_id, id_parts, revapi_ind, revapi_id, i;
	var slider_els = document.getElementsByClassName( "rev_slider" );
	window.cws_revsliders = {};
	if ( !slider_els.length ) return;
	for ( i = 0; i < slider_els.length; i++ ){
		slider_el = slider_els[i];
		slider_id = slider_el.id;
		id_parts = /rev_slider_(\d+)(_\d+)?/.exec( slider_id );
		if ( id_parts == null ) continue;
		if ( id_parts[1] == undefined ) continue;
		revapi_ind = id_parts[1];
		revapi_id = "revapi" + revapi_ind;
		window.cws_revsliders[slider_id] = {
			'el' : slider_el,
			'api_id' : revapi_id,
			'stopped' : false
		}
		window[revapi_id].bind( 'revolution.slide.onloaded', function (){
			cws_revslider_scroll_controller ( slider_id );
		});
		window.addEventListener( 'scroll', function (){
			cws_revslider_scroll_controller ( slider_id );
		});
	}
}
function cws_revslider_scroll_controller ( slider_id ){
	var slider_obj, is_visible;
	if ( slider_id == undefined ) return;
	slider_obj = window.cws_revsliders[slider_id];
	is_visible = jQuery( slider_obj.el ).is_visible();
	if ( is_visible && slider_obj.stopped ){
		window[slider_obj.api_id].revresume();
		slider_obj.stopped = false;
	}
	else if ( !is_visible && !slider_obj.stopped ){
		window[slider_obj.api_id].revpause();
		slider_obj.stopped = true;
	}
}

/* \SLIDER SCROLL CONTROLLER */

/* CUSTOM HEADER SPASINGS RESPONSIVE */

function cws_responsive_custom_header_paddings_init (){
	cws_responsive_custom_header_paddings ();
	window.addEventListener( "resize", cws_responsive_custom_header_paddings, false );
}

function cws_responsive_custom_header_paddings (){
	var sections, section, i, initial_viewport, current_viewport, viewport_coef;
	var sections = document.getElementsByClassName( "page_title customized" );
	if ( !sections.length ) return;
	initial_viewport = 1920;
	current_viewport = window.innerWidth;
	viewport_coef = current_viewport / initial_viewport;
	for ( i = 0; i < sections.length; i++  ){
		section = sections[i];
		cws_responsive_custom_header_paddings_controller ( section, viewport_coef );
	}
}

function cws_responsive_custom_header_paddings_controller ( section, coef ){
	var section_cont, section_atts, matches, attr, prop, init_val, proc_val, i;
	if ( section == undefined || coef == undefined ) return;
	section_cont = jQuery( ".container", section );
	if ( !section_cont.length ) return;
	if ( section == undefined || !section.hasAttributes() || section.attributes == undefined ) return;
	section_atts = section.attributes;
	for ( i = 0; i < section_atts.length; i++ ){
		attr = section_atts[i];
		matches = /^data-init-(padding-\w+)$/.exec( attr.name );
		if ( matches == null ) continue;
		prop = matches[1];
		init_val = attr.value;
		proc_val = Math.round( init_val * coef );
		section_cont.css( prop, proc_val + "px" );
	}
}

/* \CUSTOM HEADER SPASINGS RESPONSIVE */

/* TOP PANEL MOBILE */

function cws_top_panel_mobile_init (){
	top_panel_curtain_init ();
	cws_top_panel_mobile_controller ();
	window.addEventListener( "resize", cws_top_panel_mobile_controller, false );
}

function cws_top_panel_mobile_controller (){
	var top_panel, curtain, _is_mobile, mobile_init, is_curtain_hidden, hidden_class;
	hidden_class = "hidden";
	top_panel = jQuery( "#site_top_panel" );
	curtain = jQuery( "#top_panel_curtain" );
	if ( !top_panel.length || !curtain.length ) return;
	_is_mobile = is_mobile();
	mobile_init = top_panel.hasClass( "mobile" );
	if ( _is_mobile ){
		if ( mobile_init ){
			is_curtain_hidden = curtain.hasClass( hidden_class );
			if ( is_curtain_hidden ){
				top_panel.css({
					"margin-top" : "-" + top_panel.outerHeight() + "px"
				})
			}
		}
		else{
			top_panel.addClass( "mobile" );
			cws_wait_for_header_bg_height_assigned( function (){
				pick_up_curtain ();
			});
		}
	}
	else if ( !_is_mobile && mobile_init ){
		if ( mobile_init ){
			top_panel.removeClass( "mobile" );
			put_down_curtain ();
		}
	}
	else{
	}
}

function top_panel_curtain_init (){
	var curtain = document.getElementById( "top_panel_curtain" );
	if ( curtain != null ){
		curtain.addEventListener( "click", top_panel_curtain_click_controller, false );
	}
}
function top_panel_curtain_click_controller (){
	var curtain_obj, hidden_class;
	curtain_obj = jQuery( "#top_panel_curtain" );
	hidden_class = "hidden";
	if ( curtain_obj.hasClass( hidden_class ) ){
		put_down_curtain ( true );
	}
	else{
		pick_up_curtain ( true );
	}
}
function pick_up_curtain ( animated ){
	var curtain_obj, top_panel, top_panel_obj, top_panel_height, anim_speed, hidden_class;
	if ( animated == undefined ) animated = false;
	curtain_obj = jQuery( "#top_panel_curtain" );
	top_panel = document.getElementById( "site_top_panel" );
	top_panel_obj = jQuery( top_panel );
	top_panel_height = top_panel.offsetHeight;
	anim_speed = 300;
	hidden_class = "hidden";
	if ( animated ){
		top_panel_obj.stop().animate({
			"margin-top" : "-" + top_panel_height + "px"
		}, anim_speed, function (){
			curtain_obj.addClass( hidden_class );
		});
	}
	else{
		top_panel.style.marginTop = "-" + top_panel_height + "px";
		curtain_obj.addClass( hidden_class );
	}
}
function put_down_curtain ( animated ){
	var curtain_obj, top_panel, top_panel_obj, top_panel_height, anim_speed, hidden_class;
	if ( animated == undefined ) animated = false;
	curtain_obj = jQuery( "#top_panel_curtain" );
	top_panel = document.getElementById( "site_top_panel" );
	top_panel_obj = jQuery( top_panel );
	anim_speed = 300;
	hidden_class = "hidden";
	if ( animated ){
		top_panel_obj.stop().animate({
			"margin-top" : "0px"
		}, anim_speed, function (){
			curtain_obj.removeClass( hidden_class );
		});
	}
	else{
		top_panel.style.marginTop = "0px";
		curtain_obj.removeClass( hidden_class );
	}
}

/* \TOP PANEL MOBILE */

function cws_clone_obj ( src_obj ){
	var new_obj, keys, i, key, val;
	if ( src_obj == undefined || typeof src_obj != 'object' ) return false;
	new_obj = {};
	keys = Object.keys( src_obj );
	for ( i = 0; i < keys.length; i++ ){
		key = keys[i];
		val = src_obj[key];
		new_obj[key] = val;
	}
	return new_obj;
}
