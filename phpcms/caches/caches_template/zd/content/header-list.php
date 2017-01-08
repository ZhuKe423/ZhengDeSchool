<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php

$broadcast_catid=10; //校园公告
$news_catid=21; //校园新闻
$xysx_catid=25; //优秀学生

?>
<!DOCTYPE html>
<html lang="zh-CN" >
<head>
<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
<meta name="description" content="<?php echo $SEO['description'];?>">
<meta charset="<?php echo CHARSET;?>">
<link rel="icon" href="favicon.png" sizes="124x169" />
<link rel="apple-touch-icon-precomposed" href="favicon.png" />
<meta name="msapplication-TileImage" content="favicon.png" />
	
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
<style type="text/css" id="cws-custom-fonts-css">
.main-nav-container .menu-item a, .main-nav-container .menu-item .button_open, .mobile_menu_header {
	font-family: 'Helvetica Neue', 'Open Sans', 'Microsoft YaHei', '微软雅黑', 'Hiragino Sans GB', 'STHeiti', 'WenQuanYi Micro Hei', 'SimSun', 'sans-serif';
	font-weight: 400;
	font-size: 16px;
	line-height: 34px;
	color: #595959;
}
.main-menu .search_menu {
	font-size : 16px;
}
.ce_title, .comments-area .comment-reply-title, .the8-new-layout .cws-widget .widget-title, .woocommerce div[class^="post-"] h1.product_title.entry-title {
	font-family: 'Helvetica Neue', 'Open Sans', 'Microsoft YaHei', '微软雅黑', 'Hiragino Sans GB', 'STHeiti', 'WenQuanYi Micro Hei', 'SimSun', 'sans-serif';
	font-weight: 300;
	font-size: 40px;
	line-height: 40px;
	color: #595959;
}
.testimonial .author figcaption, .testimonial .quote .quote_link:hover, .news .post_tags>*, .news .post_categories>*, .pagination a, .widget-title, a:hover, .ce_toggle.alt .accordion_title:hover, .cws_portfolio_items .item .title_part, .pricing_table_column .price_section, .cws_callout .callout_title, .comments-area .comments_title, .comments-area .comment-meta, .comments-area .comment-reply-title, .comments-area .comment-respond .comment-form input:not([type='submit']), .comments-area .comment-respond .comment-form textarea, .page_title .bread-crumbs, .benefits_container .cws_textwidget_content .link a:hover, .cws_portfolio_fw .title, .cws_portfolio_fw .cats a:hover, .ourteam_item_wrapper .title, .ourteam_item_wrapper .title a, .msg_404, .the8-new-layout .news .item .post_info {
	color: #595959;
}
div.woocommerce form p.form-row label:not(.checkbox), .woocommerce-tabs form p label, .woocommerce-tabs .tabs li a, #comments .comment_container, .woocommerce .order .order-total, #searchform label.screen-reader-text, .widget_shopping_cart_content p, .woocommerce .woocommerce-tabs .shop_attributes th {
	color: #595959
}
body {
	font-family: 'Helvetica Neue', 'Open Sans', 'Microsoft YaHei', '微软雅黑', 'Hiragino Sans GB', 'STHeiti', 'WenQuanYi Micro Hei', 'SimSun', 'sans-serif';
	font-weight: 300;
	font-size: 16px;
	line-height: 28px;
	color: #535353;
}
.cws-widget ul li>a, .comments-area .comments_nav.carousel_nav_panel a, .cws_img_navigation.carousel_nav_panel a, .cws_portfolio_fw .cats a, .row_bg .ce_accordion.alt .accordion_title, .row_bg .ce_toggle .accordion_title, .mini-cart .woo_mini_cart {
	color: #535353;
}
.mini-cart .woo_mini_cart, body input, body textarea {
	font-size: 16px;
}
body input, body textarea {
	line-height: 28px;
}
abbr {
	border-bottom-color: #535353;
}
.dropcap {
	font-size: 32px;
	line-height: 56px;
	width: 56px;
.woocommerce .toggle_sidebar .switcher {
line-height:28px
}
</style>
<style type="text/css" id="cws-custom-colors-css">
		.main-nav-container .menu-item:hover, .main-nav-container .menu-item.current-menu-item, .main-nav-container .menu-item.current-menu-ancestor, .news .more-link, .pagination .page_links .page-numbers.current, .pagination .page_links > span:not([class]), .cws_button, input[type='submit'], .cws_button.alt, input[type='submit'].alt, .cws-widget .tagcloud a, .ce_toggle.alt .accordion_title, .pricing_table_column .cols_wrapper .widget_wrapper, .cws_milestone, .cws_fa, .cws_fa.alt:hover, a.icon_link:hover .cws_fa.alt, .page_title .title:before, .cws_ourteam.single .social_links, .cws_ourteam.single .social_links a:not(:first-child), .cws_tweet, .ce_tabs .tab.active, .ce_accordion.third_style .accordion_section.active .accordion_title, .ce_toggle.third_style .accordion_section.active .accordion_title, .the8-new-layout .cws_portfolio_fw .links a:hover, .the8-new-layout .pic .links > *:hover, .the8-new-layout .carousel_nav_panel .prev, .the8-new-layout .carousel_nav_panel .next, .the8-new-layout .comments-area .comment_list .avatar, .cws_fa_wrapper:hover .cws_fa.alt, .cws_fa.simple_icon.alt, a.icon_link:hover .cws_fa_wrapper .cws_fa.alt, .ce_title.und-title.themecolor .title-separators span, aside .testimonial .author img, .page_footer .testimonial .author img, .woocommerce .button, .cws-widget .button, .woocommerce .added_to_cart, .woocommerce-page .button, .woocommerce-page .added_to_cart, .woocommerce .woocommerce-tabs .tabs li.active, .woocommerce-tabs .comment_container img, .woo_mini_cart .button, .price_slider .ui-slider-handle{ border-color: #2eb851; } .main-nav-container .menu-item:hover, .main-nav-container .menu-item.current-menu-ancestor, .main-nav-container .menu-item.current-menu-item, .main-nav-container .sub-menu .menu-item:hover, .main-nav-container .sub-menu .menu-item.current-menu-ancestor, .main-nav-container .sub-menu .menu-item.current-menu-item, .site_header.with_background .main-nav-container .menu-item:hover, .site_header.with_background .main-nav-container .menu-item.current-menu-ancestor, .site_header.with_background .main-nav-container .menu-item.current-menu-item, .site_header.with_background .main-nav-container .sub-menu .menu-item:hover, .site_header.with_background .main-nav-container .sub-menu .menu-item.current-menu-ancestor, .site_header.with_background .main-nav-container .sub-menu .menu-item.current-menu-item, .mobile_nav .main-nav-container > .main-menu > .menu-item:hover, .mobile_nav .main-nav-container > .main-menu > .menu-item.current-menu-ancestor, .mobile_nav .main-nav-container > .main-menu > .menu-item.current-menu-item, .mobile_nav .sub-menu .menu-item:hover, .mobile_nav .sub-menu .menu-item.current-menu-ancestor, .mobile_nav .sub-menu .menu-item.current-menu-item, .header_nav_part.mobile_nav .main-nav-container .sub-menu .menu-item.back, .news .post_info_box .date, .pic .hover-effect, .news .more-link:hover, .pagination .page_links .page-numbers.current, .pagination .page_links > span:not([class]), .cws_button, input[type='submit'], .cws_button.alt:hover, input[type='submit'].alt:hover, .cws-widget #wp-calendar tbody td#today:before, .cws-widget .tagcloud a:hover, .ce_accordion .accordion_title .accordion_icon:not(.custom):before, .ce_accordion .accordion_title .accordion_icon:not(.custom):after, .ce_accordion.third_style .accordion_title .accordion_icon:not(.custom):before, .ce_accordion.third_style .accordion_title .accordion_icon:not(.custom):after, .ce_toggle.third_style .accordion_title .accordion_icon:not(.custom):before, .ce_toggle.third_style .accordion_title .accordion_icon:not(.custom):after, .ce_accordion.second_style .accordion_title .accordion_icon:not(.custom):before, .ce_accordion.second_style .accordion_title .accordion_icon:not(.custom):after, .ce_toggle.second_style .accordion_title .accordion_icon:not(.custom):before, .ce_toggle.second_style .accordion_title .accordion_icon:not(.custom):after, .ce_accordion:not(.third_style) .accordion_content, .ce_toggle:not(.third_style) .accordion_content, .ce_accordion.second_style .accordion_section.active, .ce_toggle.second_style .accordion_section.active, .ce_accordion .accordion_section.active .accordion_title .accordion_icon:not(.custom):before, .ce_accordion .accordion_section.active .accordion_title .accordion_icon:not(.custom):after, .ce_toggle .accordion_section.active .accordion_title .accordion_icon:not(.custom):before, .ce_toggle .accordion_section.active .accordion_title .accordion_icon:not(.custom):after, .pricing_table_column .title_section, .comments-area .comment_list .comment-reply-link, .cws_milestone.alt, .cws_progress_bar .progress, .cws_fa, .cws_fa.alt:hover, a.icon_link:hover .cws_fa.alt, .dropcap, .tp-caption.the8-main-slider-layer a:before, #site_top_panel .cws_social_links .cws_social_link:hover, #site_top_panel #top_social_links_wrapper .cws_social_links.expanded .cws_social_link:hover, .copyrights_area .cws_social_links .cws_social_link:hover, .ourteam_item_wrapper .social_links a:hover, .cws_ourteam.single .social_links a:hover, .banner_404:before, .cws_img_frame:before, .gallery-icon a:before, .cws_tweet:before, .tweets_carousel_header .follow_us, .ce_tabs .tab.active, .item .date.new_style:before, .the8-new-layout .footer_container .cws-widget .widget-title:after, .cws_callout.alt-style .styling-border, .cws_callout .icon_section .cws_fa:not(.alt):hover, .the8-new-layout .cws_portfolio_fw .links a:hover, .the8-new-layout .pic .links > *:hover, .the8-new-layout .carousel_nav_panel .prev:hover, .the8-new-layout .carousel_nav_panel .next:hover, .the8-new-layout .ourteam_item_wrapper .title_wrap + .desc:before, .the8-new-layout .title_wrap + .post_content:before, .the8-new-layout .comments-area .comment-respond .comment-form .submit:hover, .the8-new-layout .cws-widget .search-form label:before, .the8-new-layout .cws-widget #wp-calendar caption, .cws_fa.simple_icon:hover, .cws_fa_wrapper:hover .cws_fa.alt, .cws_fa.simple_icon.alt, a.icon_link:hover .cws_fa.simple_icon, a.icon_link:hover .cws_fa_wrapper .cws_fa.alt, .pricing_table_column:hover .btn_section .cws_button.alt, .pricing_table_column.active_table_column .btn_section .cws_button.alt, .the8-new-layout .owl-pagination .owl-page.active, .cws_msg_box, div.wpcf7-response-output, .mobile_menu_header .mobile_menu_switcher, .woocommerce-pagination ul.page-numbers li span.current:before, .woocommerce .button:hover, .cws-widget .button:hover, .woocommerce .added_to_cart:hover, .woocommerce-page .button:hover, .woocommerce-page .added_to_cart:hover, .woocommerce .woocommerce-tabs .tabs li.active, .woo_mini_cart .button:hover, .woocommerce-product-search:before, .price_slider .ui-slider-range{ background-color: #2eb851; } input:focus{ border-color: #2eb851; } a, ul li:before, .mobile_nav .main-nav-container .menu-item:hover>a, .mobile_nav .main-nav-container .menu-item.current-menu-ancestor>a, .mobile_nav .main-nav-container .menu-item.current-menu-item>a, .menu .menu-item:hover>a, .menu .menu-item.current-menu-ancestor>a, .menu .menu-item.current-menu-item>a, .cws-widget .menu .menu-item:hover>.opener, .cws-widget .menu .menu-item.current-menu-ancestor>.opener, .cws-widget .menu .menu-item.current-menu-item>.opener, .news .post_info_part .post_info .comments_link a:hover, .news .more-link, .news .post_tags>a:hover, .news .post_categories>a:hover, .news .media_part > .link span:hover, .testimonial .quote .quote_link, .pagination a:hover, .cws_button:hover, input[type='submit']:hover, .cws_button.alt, input[type='submit'].alt .cws-widget ul li>a:hover, .parent_archive .widget_archive_opener:hover, .cws-widget #wp-calendar caption, .select2-drop .select2-results .select2-highlighted, .ce_toggle .accordion_title:hover, .ce_toggle.alt .accordion_title, .pricing_table_column.active_table_column .price_section, .pricing_table_column:hover .price_section, .cws_milestone, .cws_fa:hover, .cws_fa.alt, a.icon_link:hover .cws_fa, .page_title .bread-crumbs .current, .benefits_container .cws_textwidget_content .link a, .ourteam_item_wrapper .title a:hover, .ce_title a:hover, .ce_accordion .accordion_title .accordion_icon.custom, .ce_toggle .accordion_title .accordion_icon.custom, .ce_accordion .accordion_section.active .accordion_title > span, .ce_accordion .accordion_title:hover > span, .cws-widget .cws_tweet .tweet_content:before, .cws-widget .recentcomments:before, .item .date.new_style .month, .page_footer a, .cws_callout .icon_section .cws_fa.alt:hover, .the8-new-layout .cws_portfolio_fw .links a, .the8-new-layout .cws_portfolio_fw .title, .the8-new-layout .pic .links > *, .the8-new-layout .carousel_nav_panel .prev, .the8-new-layout .carousel_nav_panel .next, .the8-new-layout .comments-area .comment_list .comment-reply-link, .the8-new-layout .comments-area .comment-respond .comment-form .submit, .widget-title.widget-title-icon:before, .the8-new-layout .cws-widget #wp-calendar thead, .the8-new-layout .cws-widget ul li>a:hover, .the8-new-layout .cws_img_frame:hover:after, .the8-new-layout .gallery-icon:hover a:after, .cws_fa.simple_icon, .cws_fa.simple_icon.alt:hover, a.icon_link:hover .cws_fa.simple_icon.alt, .the8-new-layout .main-nav-container > .main-menu > .menu-item:hover > a, .the8-new-layout .main-nav-container .menu-item.current-menu-item>a, .the8-new-layout .main-nav-container .menu-item.current-menu-ancestor>a, .pricing_table_column:hover .btn_section .cws_button.alt:hover, .pricing_table_column.active_table_column .btn_section .cws_button.alt:hover, .custom_icon_style li>i.list_list, .news .media_part .pic.link_post .link span:before, .news .media_part > .testimonial .quote + .author, .cws-widget .portfolio_item_thumb .pic .links > *, .comments-area .required, aside .cws-widget .cws_tweet:before, .woocommerce .button, .cws-widget .button, .woocommerce .added_to_cart, .woocommerce-page .button, .woocommerce-page .added_to_cart, .woo_mini_cart .button, input[type=checkbox]:checked:before{ color: #2eb851; } .the8-new-layout #site_top_panel .cws_social_links .cws_social_link:hover, .the8-new-layout #site_top_panel #top_social_links_wrapper .cws_social_links.expanded .cws_social_link:hover, .the8-new-layout .copyrights_area .cws_social_links .cws_social_link:hover{ color: #2eb851 !important; } .ce_accordion .accordion_content:before, .ce_toggle .accordion_content:before{ border-bottom-color: #2eb851; } .ce_toggle.alt .accordion_title{ box-shadow: inset 0 0 0 1px #2eb851; } ul li:before, .owl-pagination .owl-page.active, .carousel_nav_panel .prev, .carousel_nav_panel .next, .pic .links > *, .copyrights_area .cws_social_links .cws_social_link:hover, .the8-new-layout #site_top_panel .cws_social_links .cws_social_link:hover, .the8-new-layout #site_top_panel #top_social_links_wrapper .cws_social_links.expanded .cws_social_link:hover, .the8-new-layout .copyrights_area .cws_social_links .cws_social_link:hover, .the8-new-layout .ourteam_item_wrapper .social_links a:hover, .the8-new-layout .cws_ourteam.single .social_links a:hover, .cws_fa_wrapper .ring, .cws_fa.bordered_icon.simple_icon, .cws_fa_wrapper:hover .cws_fa.alt + .ring, a.icon_link:hover .cws_fa_wrapper .cws_fa.alt + .ring, .ce_accordion.second_style .accordion_title .accordion_icon:not(img), .ce_accordion.second_style .accordion_title .accordion_icon:not(img), .ce_toggle.second_style .accordion_title .accordion_icon:not(img), .ce_toggle.second_style .accordion_title .accordion_icon:not(img), .ce_accordion .accordion_section.active .accordion_title .accordion_icon:not(img), .ce_toggle .accordion_section.active .accordion_title .accordion_icon:not(img), .news .media_part .pic.link_post .link span:before{ -webkit-box-shadow: 0px 0px 0px 1px #2eb851; -moz-box-shadow: 0px 0px 0px 1px #2eb851; box-shadow: 0px 0px 0px 1px #2eb851; }
	</style>
<style id='cws-cp-1'>
</style>
<div id='cws-theme-color-data' cws-theme-color-data='2eb851'></div>
<link rel='stylesheet' id='contact-form-7-css' href='./zd/css/styles.css' type='text/css' media='all' />
<link rel='stylesheet' id='cwsfi-css-css' href='./zd/css/flaticon.css' type='text/css' media='all' />
<link rel='stylesheet' id='rs-plugin-settings-css' href='./zd/css/settings.css' type='text/css' media='all' />
<link rel='stylesheet' id='cws_loader-css' href='./zd/css/cws_loader.css' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-css' href='./zd/css/font-awesome.css' type='text/css' media='all' />
<link rel='stylesheet' id='fancybox-css' href='./zd/css/jquery.fancybox.css' type='text/css' media='all' />
<link rel='stylesheet' id='odometer-css' href='./zd/css/odometer-theme-default.css' type='text/css' media='all' />
<link rel='stylesheet' id='select2-css' href='./zd/css/select2.css' type='text/css' media='all' />
<link rel='stylesheet' id='animate-css' href='./zd/css/animate.css' type='text/css' media='all' />
<link rel='stylesheet' id='cws-iconpack-css' href='./zd/fonts/fi/flaticon.css' type='text/css' media='all' />
<link rel='stylesheet' id='main-css'  href='./zd/css/main.css' type='text/css' media='all' />
<link rel='stylesheet' id='woocommerce-css'  href='./zd/css/woocommerce.css' type='text/css' media='all' />
<link rel='stylesheet' id='style-css'  href='./zd/css/style.css' type='text/css' media='all' />
<link rel="stylesheet" href="./zd/css/chocolate.css"/>
<script type='text/javascript' src='./zd/js/jquery/jquery.js?ver=1.12.4'></script>
<script type='text/javascript' src='./zd/js/jquery/jquery-migrate.min.js?ver=1.4.1'></script>
<script type='text/javascript' src='./zd/js/jquery.themepunch.tools.min.js?ver=5.2.4.1'></script>
<script type='text/javascript' src='./zd/js/jquery.themepunch.revolution.min.js?ver=5.2.4.1'></script>
<script type='text/javascript' src='./zd/js/cws_loader.js?ver=1.0'></script>
<script src="./zd/js/chocolate.js"></script>
    <style  type="text/css">
        .main-nav-container .menu-item a{
        color: white;
        }
        /*.main-nav-container .menu-item a:hover{*/
        /*color: #00fc40;*/
        /*}*/
        .sub-menu .menu-item a{
            background-color: #7f7f83;
            color: white;
        }
        .sub-menu .menu-item a:hover{
            background-color: white;
            color: #00fc40;
        }
        .the8-new-layout .main-nav-container .menu-item.current-menu-ancestor>a{
            color:/*#2eb851*/ #00fc40;
        }
        .main-nav-container .sub-menu .menu-item.current-menu-ancestor>a{
            color: white;
        }
        .main-nav-container .sub-menu .menu-item.current-menu-ancestor>a:hover{
            color: #00fc40;
        }
        .the8-new-layout .main-nav-container > .main-menu > .menu-item:hover > a{
            color: #00fc40;
        }



    </style>
</head><body class="page page-template-default wide the8-new-layout">
<script>
	(function(){
		var bp = document.createElement('script');
		var curProtocol = window.location.protocol.split(':')[0];
		if (curProtocol === 'https'){
			bp.src = "https://zz.bdstatic.com/linksubmit/push.js';
		}
		else{
			bp.src = 'http://push.zhanzhang.baidu.com/push.js';
		}
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(bp, s);
	})();
</script>
<div style='margin:0 auto;width:0px;height:0px;overflow:hidden;'> <img src='./zd/img/logo.png'> </div>
<!-- body cont --> 
<!-- header -->
<div class='body-cont'>
  <div class="page_boxed_div">
    <div class='sticky_header'>
      <div class='header_cont'>
        <header class='site_header sticky_enable logo-left'>
          <div class="header_box" >
            <div class="container">
              <div class="header_logo_part" role="banner"> <a style='margin-top:18px;margin-bottom:18px;' class="logo" href="<?php echo siteurl($siteid);?>"><img src='./zd/img/logo.png' data-at2x='./zd/img/logo.png' alt='成都新都谕亭小学正德实验学校' /></a> </div>
              <div class="header_nav_part">
                <nav class="main-nav-container a-right">
                  <div class="mobile_menu_header">
				  <!--
                    <div class='mini-cart'> <a class="woo_icon" href="index.php?m=member&c=index&a=login" title="会员登录" ><i class='woo_mini-count cwsicon-user-avatar8'></i></a> </div>
					-->
                    <div class='search_menu'></div>
                    <i class="mobile_menu_switcher"></i>
                  </div>
                  <ul id="menu-main-menu-1" class="main-menu">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page"><a href="<?php echo siteurl($siteid);?>" <?php if(!$catid) { ?>class="active"<?php } ?>>首页</a></li>
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=b43f1459ac702900c8d44c91a5e796dd&action=category&catid=0&num=25&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'0','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'25',));}?>
			<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
                    <li class="<?php if($r[child]) { ?>menu-item-has-children<?php } ?> menu-item menu-item-type-post_type menu-item-object-page <?php if($catid==$r[catid] || $top_parentid==$r[catid]) { ?>current-menu-ancestor<?php } ?> menu-item-8">
					<a href="<?php if($r[child]) { ?>javascript:;<?php } else { ?><?php echo $r['url'];?><?php } ?>"><?php echo $r['catname'];?></a> <span class='button_open'></span>
				<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=502cea5b674647987de4b8b331363f83&action=category&catid=%24r%5Bcatid%5D&num=25&siteid=%3C%3Fphp+echo+%24siteid%3B%3F%3E&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>$r[catid],'siteid'=>'<?php echo $siteid;?>','order'=>'listorder ASC','limit'=>'25',));}?>
				<?php if($data) { ?>
                      <ul class="sub-menu">
						<?php $n=1;if(is_array($data)) foreach($data AS $v) { ?>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page <?php if($catid==$v[catid] || $top_parentid==$v[catid]) { ?>current-menu-ancestor<?php } ?> menu-item-13"><a href="<?php echo $v['url'];?>"><?php echo $v['catname'];?></a></li>
						<?php $n++;}unset($n); ?>
                      </ul>
				<?php } ?>
				<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
                    </li>
			<?php $n++;}unset($n); ?>
		<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
		<?php echo runhook('glogal_menu')?>
                    <div class='search_menu'></div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class='search_menu_cont'>
            <div class='container'>
              <form role="search" method="get" class="search-form" action="<?php echo APP_PATH;?>index.php" target="_blank">
                <input name="m" value="search" type="hidden">
                <input name="c" value="index" type="hidden">
                <input name="a" value="init" type="hidden">
				<input type="hidden" name="typeid" value="0" id="typeid"/>
				<input type="hidden" name="siteid" value="<?php echo $siteid;?>" id="siteid"/>
                <label> <span class="screen-reader-text">请输入关键字</span>
				  <input type="text" name="q" id="q" value="" placeholder="请输入关键字" class="form-control search-field">
                </label>
                <input type="submit" class="search-submit" value="Search" />
              </form>
              <div class='search_back_button'></div>
            </div>
          </div>
        </header>
        <!-- #masthead --> 
      </div>
    </div>
    <script type='text/javascript'>window.header_after_slider=false;</script>
    <div class="header_wrapper_container">
      <div class='header_cont'>
        <header class='site_header sticky_enable logo-left'>
          <div class="header_box" >
            <div class="container">
              <div class="header_logo_part" role="banner"><a style='margin-top:18px;margin-bottom:18px;' class="logo" href="<?php echo siteurl($siteid);?>"><img src='./zd/img/logo.png' data-at2x='./zd/img/logo.png' alt="成都新都谕亭小学正德实验学校" /></a>
			  </div>
              <div class="header_nav_part">
                <nav class="main-nav-container a-right">
                <div class="mobile_menu_header">
				<!--
                    <div class='mini-cart'> <a class="woo_icon" href="<?php echo siteurl($siteid);?>/index.php?m=member&c=index&a=login" title="会员登录" ><i class='woo_mini-count cwsicon-user-avatar8'></i></a> </div>
					-->
                    <div class='search_menu'></div>
                    <i class="mobile_menu_switcher"></i>
				</div>
                  <ul id="menu-main-menu-1" class="main-menu">
                    <li class="menu-item menu-item-type-post_type menu-item-object-page"><a  href="<?php echo siteurl($siteid);?>" <?php if(!$catid) { ?>class="active"<?php } ?>>首页</a></li>
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=b43f1459ac702900c8d44c91a5e796dd&action=category&catid=0&num=25&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'0','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'25',));}?>
			<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
                    <li class=" <?php if($r[child]) { ?>menu-item-has-children<?php } ?> menu-item menu-item-type-post_type menu-item-object-page <?php if($catid==$r[catid] || $top_parentid==$r[catid]) { ?>current-menu-ancestor<?php } ?> menu-item-8">
					<a href="<?php if($r[child]) { ?>javascript:;<?php } else { ?><?php echo $r['url'];?><?php } ?>"><?php echo $r['catname'];?></a> <span class='button_open'></span>
				<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=502cea5b674647987de4b8b331363f83&action=category&catid=%24r%5Bcatid%5D&num=25&siteid=%3C%3Fphp+echo+%24siteid%3B%3F%3E&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>$r[catid],'siteid'=>'<?php echo $siteid;?>','order'=>'listorder ASC','limit'=>'25',));}?>
				<?php if($data) { ?>
                      <ul class="sub-menu">
						<?php $n=1;if(is_array($data)) foreach($data AS $v) { ?>
                        <li class="menu-item menu-item-type-post_type menu-item-object-page <?php if($catid==$v[catid] || $top_parentid==$v[catid]) { ?>current-menu-ancestor<?php } ?> menu-item-13"><a href="<?php echo $v['url'];?>"><?php echo $v['catname'];?></a></li>
						<?php $n++;}unset($n); ?>
                      </ul>
				<?php } ?>
				<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
                    </li>
			<?php $n++;}unset($n); ?>
		<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
		<?php echo runhook('glogal_menu')?>
                    <div class='search_menu'></div>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class='search_menu_cont'>
            <div class='container'>
              <form role="search" method="get" class="search-form" action="<?php echo APP_PATH;?>index.php" target="_blank">
                <input name="m" value="search" type="hidden">
                <input name="c" value="index" type="hidden">
                <input name="a" value="init" type="hidden">
				<input type="hidden" name="typeid" value="0" id="typeid"/>
				<input type="hidden" name="siteid" value="<?php echo $siteid;?>" id="siteid"/>
                <label> <span class="screen-reader-text">请输入关键字</span>
                  <input type="text" name="q" class="search-field" placeholder="请输入关键字 &hellip;" value="" />
                </label>
                <input type="submit" class="search-submit" value="Search" />
              </form>
              <div class='search_back_button'></div>
            </div>
          </div>
        </header>
        <!-- #masthead --> 
      </div>
    </div>
    <div class="min-layout">
      <div class="inner">
        <div class="min-login"></div>
        <a href="<?php echo siteurl($siteid);?>"><img class="logo-layout" src="./zd/img/logo.png" alt="logo" /></a> <span class="min-close"><i class="icon-close"></i></span>
        <ul class="min-search">
          <form class="search-global" action="<?php echo APP_PATH;?>index.php" method="get" target="_blank">
            <input name="m" value="search" type="hidden">
            <input name="c" value="index" type="hidden">
            <input name="a" value="init" type="hidden">
			<input type="hidden" name="typeid" value="0" id="typeid"/>
			<input type="hidden" name="siteid" value="<?php echo $siteid;?>" id="siteid"/>
            <input name="q" class="search-input" type="text" placeholder="输入搜索关键词">
            <button class="btn-search"><i class="icon-search"></i></button>
          </form>
        </ul>
        <ul class="min-category">
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=b8c2d8bf129f1b53dfaec87725bdb5a3&action=category&catid=0&num=0&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'0','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'20',));}?>
			<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
          <li class="c-figure"><a href="<?php echo $r['url'];?>"><?php echo $r['catname'];?></a></li>
<!--
          <li class="c-figure"><a href="list-8-1.html">园所</a></li>
          <li class="c-attitude"><a href="list-15-1.html">新闻</a></li>
          <li class="c-news"><a href="">荣誉</a></li>
          <li class="c-duanzi"><a href="list-23-1.html">教育</a></li>
          <li class="c-knowledge"><a href="list-31-1.html">后勤</a></li>
          <li class="c-product"><a href="list-36-1.html">专栏</a></li>
          <li class="c-company"><a href="list-41-1.html">班级</a></li>
          <li class="c-news"><a href="list-59-1.html">家长</a></li>
          <li class="c-figure"><a href="">育儿</a></li>
-->
			<?php $n++;}unset($n); ?>
		<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
		<?php echo runhook('glogal_menu')?>
        </ul>
<!--
        <ul class="min-site">
          <li><a target="_blank" href="list-9-1.html"><img src="statics/images/web/skin/show/sub-logo1.png">
            <div class="site-title"><b>兴幼</b></div>
            </a></li>
          <li><a target="_blank" href="list-41-1.html"><img src="statics/images/web/skin/show/sub-logo2.png">
            <div class="site-title"><b>班级</b></div>
            </a></li>
          <li><a target="_blank" href="list-51-1.html"><img src="statics/images/web/skin/show/sub-logo3.png">
            <div class="site-title"><b>管理</b></div>
            </a></li>
        </ul>
-->
      </div>
    </div>
    <section class='page_title'>
      <div class='container'>
        <div class='title'>
          <h1><?php echo $CAT['catname'];?></h1>
        </div>
        <nav class="bread-crumbs">
		<a href="<?php echo siteurl($siteid);?>" rel="v:url" property="v:title">首页</a> <i class="delimiter fa fa-angle-right"></i>
    <span typeof="v:Breadcrumb">
    <?php if($CATEGORYS[$parentid][catname]) { ?>
		<a rel="v:url" property="v:title" href="javascript:;"><?php echo $CATEGORYS[$parentid]['catname'];?>
    <?php } else { ?>
      <a rel="v:url" property="v:title" href="javascript:;"><?php echo $CATEGORYS[$CATEGORYS[$catid]['parentid']]['catname'];?>
    <?php } ?>
    <?php if($CATEGORYS[$catid][parentid]) { ?><i class="delimiter fa fa-angle-right"></i><?php } ?> </a></span>
		<a rel="v:url" property="v:title" href="<?php echo $CAT['url'];?>"><span class="current"><?php echo $CAT['catname'];?></span></a></nav>
        <!-- .breadcrumbs --> 
      </div>
    </section>
      </div>
    </div>






