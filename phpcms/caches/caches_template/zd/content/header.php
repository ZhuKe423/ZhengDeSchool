<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php
$broadcast_catid=10; //校园公告
$news_catid=21; //校园新闻
$xysx_catid=25; //学生风采
$bjfm_catid=35; //班级风貌
$sthd_catid=36; //社团活动
$sxtd_catid=22; //学生天地
?>
<!DOCTYPE html>
<html>
  <head>
    <!--成都新都谕亭小学正德实验学校 -->
	<title><?php if(isset($SEO['title']) && !empty($SEO['title'])) { ?><?php echo $SEO['title'];?><?php } ?><?php echo $SEO['site_title'];?></title>
	<meta name="keywords" content="<?php echo $SEO['keyword'];?>">
	<meta name="description" content="<?php echo $SEO['description'];?>">
    <meta charset="<?php echo CHARSET;?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./zd/css/reset.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/font-awesome.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/owl.carousel.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/jquery.fancybox.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/maini.css?ver=1.0.3">
    <link rel="stylesheet" type="text/css" href="./zd/css/indent.css">
    <link rel="stylesheet" type="text/css" href="./zd/fonts/fi/flaticon.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/settings.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/layers.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/navigation.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/tuner/colorpicker.css">
    <link rel="stylesheet" type="text/css" href="./zd/css/tuner/styles.css">
    <link rel="stylesheet" href="./zd/css/chocolate1.css?ver=1.0.1"/>
	<link rel="canonical" href="<?php echo siteurl($siteid);?>" />
    <link rel="icon" href="favicon.png" sizes="124x169" />
    <link rel="apple-touch-icon-precomposed" href="favicon.png" />
    <meta name="msapplication-TileImage" content="favicon.png" />
      <style>
          .mn-sub {
             background-color: #7f7f83;
          }
      </style>
  </head>
<body>
    <!-- header page-->
    <header>
        <!-- site top panel-->
        <!-- ! site top panel-->
        <!-- Navigation panel-->
        <nav class="main-nav js-stick" style="background-image: url('./zd/img/header-bg.jpg');margin-top: 0px;margin-bottom: 0px;background-size: 100%;background-repeat: repeat">
            <div class="full-wrapper relative clearfix container">
                <!-- Logo ( * your text or image into link tag *)-->
                <div class="nav-logo-wrap local-scroll"><a href="<?php echo siteurl($siteid);?>" class="logo"><img src="./zd/img/logo.png" data-at2x="./zd/img/logo.png" alt="成都新都谕亭小学正德实验学校">
                    <img src="./zd/img/logo.png" data-at2x="./zd/img/logo.png" alt="成都新都谕亭小学正德实验学校" class="sticky-logo"></a></div>
                <!-- Main Menu-->
                <div class="inner-nav desktop-nav">
                    <ul class="clearlist">
                        <li><a href="<?php echo siteurl($siteid);?>" <?php if(!$catid) { ?>class="active"<?php } ?>>首页</a></li>
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=b43f1459ac702900c8d44c91a5e796dd&action=category&catid=0&num=25&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'0','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'25',));}?>
			<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
						<li><a href="<?php if($r[child]) { ?>javascript:;<?php } else { ?><?php echo $r['url'];?><?php } ?>" class="<?php if($catid==$r[catid] || $top_parentid==$r[catid]) { ?>active<?php } ?> mn-has-sub"><?php echo $r['catname'];?> <i class="fa <?php if($r[child]) { ?>fa-angle-down<?php } ?> button_open"></i></a>
				<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=502cea5b674647987de4b8b331363f83&action=category&catid=%24r%5Bcatid%5D&num=25&siteid=%3C%3Fphp+echo+%24siteid%3B%3F%3E&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>$r[catid],'siteid'=>'<?php echo $siteid;?>','order'=>'listorder ASC','limit'=>'25',));}?>
				<?php if($data) { ?>
					<ul class="mn-sub">
						<?php $n=1;if(is_array($data)) foreach($data AS $v) { ?>
						<li><a href="<?php echo $v['url'];?>" class="mn-has-sub"><?php echo $v['catname'];?></a></li>
						<?php $n++;}unset($n); ?>
					</ul>
				<?php } ?>
				<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
						</li>
			<?php $n++;}unset($n); ?>
		<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
		<?php echo runhook('glogal_menu')?>
						<!-- Search-->
                        <li class="search"><a href="#" class="mn-has-sub"><i class="flaticon-magnifying-glass34 search-icon"></i></a>
                            <ul class="search-sub">
                                <li>
                                    <div class="container">
                                        <div class="mn-wrap search">
										  <form class="form" action="<?php echo APP_PATH;?>index.php" method="get" target="_blank">
											<input type="hidden" name="m" value="search"/>
											<input type="hidden" name="c" value="index"/>
											<input type="hidden" name="a" value="init"/>
											<input type="hidden" name="typeid" value="0" id="typeid"/>
											<input type="hidden" name="siteid" value="<?php echo $siteid;?>" id="siteid"/>
											<input type="text" name="q" id="q" value="" placeholder="请输入关键字" class="form-control search-field">
										  </form>
                                        </div>
                                        <div class="close-button flaticon-cancel30"></div>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <!-- End Search-->
                    </ul>
                </div>
                <!-- End Main Menu-->
            </div>
        </nav>
        <div class="min-layout">
            <div class="inner">
                <div class="min-login"></div>
                <a href="http://xlyey.yzedu.net"><img class="logo-layout" src="./zd/img/logo.png" alt="logo" /></a>
                <span class="min-close"><i class="icon-close"></i></span>
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
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=b8c2d8bf129f1b53dfaec87725bdb5a3&action=category&catid=0&num=0&siteid=%24siteid&order=listorder+ASC\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'category')) {$data = $content_tag->category(array('catid'=>'0','siteid'=>$siteid,'order'=>'listorder ASC','limit'=>'20',));}?>
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
                    <li><a target="_blank" href="./list-9-1.html"><img src="./zd/img/sub-logo1.png"><div class="site-title"><b>荣誉</b></div></a></li>
                    <li><a target="_blank" href="./list-41-1.html"><img src="./zd/img/sub-logo2.png"><div class="site-title"><b>班级</b></div></a></li>
                    <li><a target="_blank" href="./list-51-1.html"><img src="./zd/img/sub-logo3.png"><div class="site-title"><b>管理</b></div></a></li>
                </ul>
-->
            </div>
        </div>
        <!-- End Navigation panel-->
    </header>
    <!-- ! header page-->
	