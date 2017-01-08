<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<div class="tp-banner-container">
  <div class="tp-banner-slider">
    <ul>
      <li data-masterspeed="700" data-slotamount="7" data-transition="fade"><img
                    src="./zd/images/slider/loader.gif" data-bgfit="cover" data-bgposition="center 70%"
                    data-lazyload="./zd/images/slider/slide-1.jpg" alt="成都正德实验学校" data-bgparallax="10">
        <div data-x="['left','center','center','center']" data-hoffset="0" data-y="center" data-voffset="-70%"
                     data-width="['1170px','700px','500px','300px']"
                     data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start="400" class="tp-caption sl-content text-center"><img
                        src="./zd/img/logo-sticky@2x.png" data-at2x="./zd/img/logo-sticky@2x.png"
                        alt="logo">
          <div class="sl-title text-white">成都正德实验学校</div>
          <p class="text-white">育以正德 学为创新</p>
          <a href="javascript:;" class="cws-button white">详细介绍</a></div>
      </li>
      <li data-masterspeed="700" data-transition="fade"><img src="./zd/images/slider/loader.gif"
                                                                   data-lazyload="./zd/images/slider/slide-2.jpg"
                                                                   data-bgposition="center 45%" alt="成都正德实验学校"
                                                                   data-bgparallax="10">
        <div data-x="['right','center','center','center']" data-hoffset="0" data-y="center" data-voffset="-70%"
                     data-width="['1170px','700px','500px','300px']"
                     data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start="400" class="tp-caption sl-content text-center"><img
                        src="./zd/img/logo-sticky@2x.png" data-at2x="./zd/img/logo-sticky@2x.png"
                        alt="logo">
          <div class="sl-title text-white">正德实验学校 托起明天太阳</div>
          <p class="text-white">神奇的乐土，太阳从这里升起，春天在这里播种</p>
          <a href="javascript:;" class="cws-button white">特色教育</a></div>
      </li>
      <li data-masterspeed="700" data-transition="fade"><img src="./zd/images/slider/loader.gif"
                                                                   data-lazyload="./zd/images/slider/slide-3.jpg"
                                                                   data-bgposition="center 67%" alt="成都正德实验学校"
                                                                   data-kenburns="on" data-duration="30000"
                                                                   data-ease="Linear.easeNone" data-scalestart="100"
                                                                   data-scaleend="120" data-rotatestart="0"
                                                                   data-rotateend="0" data-offsetstart="0 0"
                                                                   data-offsetend="0 0" data-bgparallax="10">
        <div data-x="['left','center','center','center']" data-hoffset="0" data-y="center" data-voffset="-70%"
                     data-width="['1170px','700px','500px','300px']"
                     data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start="400" class="tp-caption sl-content text-center"><img
                        src="./zd/img/logo-sticky@2x.png" data-at2x="./zd/img/logo-sticky@2x.png"
                        alt="logo">
          <div class="sl-title text-white">高起点 高标准 规范化</div>
          <p class="text-white">尊重孩子、爱护孩子、成就孩子的办园宗旨，打造高质量的品牌学校</p>
          <a href="javascript:;" class="cws-button white">后勤保障</a></div>
      </li>
      <li data-masterspeed="700" data-transition="fade"><img src="./zd/images/slider/loader.gif"
                                                                   data-lazyload="./zd/images/slider/slide-4.jpg"
                                                                   data-bgposition="center 45%" alt="成都正德实验学校"
                                                                   data-bgparallax="10">
        <div data-x="['right','center','center','center']" data-hoffset="0" data-y="center" data-voffset="-70%"
                     data-width="['1170px','700px','500px','300px']"
                     data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start="400" class="tp-caption sl-content text-center"><img
                        src="./zd/img/logo-sticky@2x.png" data-at2x="./zd/img/logo-sticky@2x.png"
                        alt="logo">
          <div class="sl-title text-white">正德实验学校 托起明天太阳</div>
          <p class="text-white">神奇的乐土，太阳从这里升起，春天在这里播种</p>
          <a href="javascript:;" class="cws-button white">特色教育</a></div>
      </li>
    </ul>
  </div>
</div>

<!-- section news-->
<section class="page-section pb-70 bg-2 bb-gray">
  <div class="container">
    <h2 class="title-section mb-0 mt-0 text-center">校园公告</h2>
    <div class="divider mb-20 mt-25"></div>
    <div class="carousel-container hover-item">
      <div class="row">
        <div class="owl-three-pag pagiation-carousel main-color">
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=99429b49b8609e35b6c10639f030a38b&action=lists&catid=%24broadcast_catid&num=18&order=id+DESC&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$broadcast_catid,'order'=>'id DESC','limit'=>'18',));}?>
          <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
          <div class="blog-item blog-box small">
            <div class="blog-content">
              <div class="blog-item-data clearfix">
                <div class="blog-date">
                  <div class="date">
                    <div class="date-cont"> <span class="day"><?php echo date('d',$v[inputtime]);?></span><span title="Dec"
                                                                                                    class="month"><span><?php echo date('m',$v[inputtime]);?>月</span></span><span
                                                class="year"><?php echo date('Y',$v[inputtime]);?></span> <i class="springs"></i></div>
                  </div>
                </div>
                <a href="<?php echo $v['url'];?>" target="_blank">
                <h3 class="blog-title" title="<?php echo $v['title'];?>"><?php echo str_cut($v['title'], 36, '...');?></h3>
                </a>
                <div class="divider gray"></div>
              </div>
              <div class="blog-item-body">
                <p><?php echo str_cut($v['description'],40);?></p>
              </div>
            </div>
          </div>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
		  </div>
      </div>
    </div>
  </div>
</section>
<!-- ! section news--> 
<!-- section news-->
<section class="page-section pb-70 bg-2 bb-gray">
  <div class="container">
    <h2 class="title-section mb-0 mt-0 text-center">校园新闻</h2>
    <div class="divider mb-20 mt-25"></div>
    <div class="carousel-container hover-item">
      <div class="row">
        <div class="owl-three-pag pagiation-carousel main-color">
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=7f99cc579a62b866ce5b7ca95bc96bbd&action=lists&catid=%24news_catid&num=18&order=id+DESC&thumb=1&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$news_catid,'order'=>'id DESC','thumb'=>'1','limit'=>'18',));}?>
          <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
          <div class="blog-item blog-box small"> 
            <!-- Blog Image-->
            <div class="blog-media">
              <div class="pic"><img
                                    src="<?php echo thumb($v['thumb'], 530, 398, 0);?>"
                                    data-at2x="<?php echo thumb($v['thumb'], 530, 398, 0);?>"
                                    alt="">
                <div class="hover-effect"></div>
                <div class="links"><a href="<?php echo $v['url'];?>" target="_blank"
                                                      class="link-icon flaticon-return13"></a></div>
              </div>
            </div>
            <div class="blog-content"> 
              <!-- title, author...-->
              <div class="blog-item-data clearfix">
                <div class="blog-date">
                  <div class="date">
                    <div class="date-cont"> <span class="day"><?php echo date('d',$v[inputtime]);?></span><span title="Dec"
                                                                                                    class="month"><span><?php echo date('m',$v[inputtime]);?>月</span></span><span
                                                class="year"><?php echo date('Y',$v[inputtime]);?></span> <i class="springs"></i></div>
                  </div>
                </div>
                <h3 class="blog-title" title="<?php echo $v['title'];?>"><?php echo str_cut($v['title'], 33, '...');?></h3>
                <div class="divider gray"></div>
                <p class="post-info_cc"><span><a href="<?php echo $CATEGORYS[$news_catid]['url'];?>">校园新闻</a></span> </p>
              </div>
            </div>
          </div>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
		  </div>
      </div>
    </div>
  </div>
</section>
<!-- ! section news--> 

<!-- section parallax-->
<section class="page-section cws_prlx_section pt-180 pb-180"><img src="./zd/images/1920x1080-img-1.jpg" alt="本校介绍"
                                                                  class="cws_prlx_layer">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <h2 class="title-section mb0 mt-0 text-center text-white">立足本校创特色 <span>生命拔节奏强音</span></h2>
        <div class="divider mb-20 mt-25 white"></div>
        <p class="text-center text-white mb-30"> 成都正德实验学校创建于2002年，学校占地20亩，校舍建筑面积为14800m2。（教学大楼、学生公寓、教师公寓、厨房餐厅）；绿化占地2000m2，有2500m2的广场一个，有200米环形塑胶运动场。</p>
        <div class="text-center"><a href="javascript:;" class="cws-button white">本校风采</a></div>
      </div>
    </div>
  </div>
</section>
<!-- ! section parallax--> 

<!-- section filter-->
<section class="page-section pb-0">
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1"> 
        <!-- title section-->
        <h2 class="title-section text-center mt-0 mb-0">学生天地</h2>
        <!-- ! title section-->
        <div class="divider gray mt-20 mb-25"></div>
        <p class="text-center mb-30"><?php if($CATEGORYS[$sxtd_catid][description]) { ?><?php echo $CATEGORYS[$sxtd_catid]['description'];?><?php } else { ?>本校教育内容按照学生的范畴相对划分为健康、社会、科学、语言、艺术等五个方面，各方面内容都为发展学生的知识、技能、能力、情感等...<?php } ?></p>
      </div>
    </div>
  </div>
  <!-- filter-->
  <div class="isotop-container">
    <div class="container">
      <div class="filter-buttons mb-40"> 
        <!-- filter controls--> 
        <a href="#" data-filter=".video" class="filter-button active"><?php echo $CATEGORYS[$bjfm_catid]['catname'];?></a> <a href="#" data-filter=".photo" class="filter-button"><?php echo $CATEGORYS[$sthd_catid]['catname'];?></a> </div>
    </div>
    <div class="isotope-grid full-width-isotope"> 
      <!-- isotop item-->
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=ee99120846213abe11330571f24f74f2&action=lists&catid=%24bjfm_catid&num=12&order=updatetime+DESC&thumb=1&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$bjfm_catid,'order'=>'updatetime DESC','thumb'=>'1','limit'=>'12',));}?>
          <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
      <div class="pic isotope-item video"><img src="<?php echo thumb($v['thumb'], 320, 260, 0);?>"
                                                     data-at2x="<?php echo thumb($v['thumb'], 640, 520, 0);?>" alt="<?php echo $v['title'];?>">
        <div class="hover-effect alt"></div>
        <div class="links"><a href="javascript:;" class="link-icon alt flaticon-magnifying-glass84 fancy"
                                      data-fancybox-group='cws-portfolio-gallery-79'></a><a target="_blank"
                                                                                            href="javascript:;"
                                                                                            class="link-icon alt flaticon-return13"></a> </div>
      </div>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>

	  <!-- isotop item-->
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=9be2ab249ec3095c47a3e797a10e4c4d&action=lists&catid=%24sthd_catid&num=12&order=updatetime+DESC&thumb=1&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$sthd_catid,'order'=>'updatetime DESC','thumb'=>'1','limit'=>'12',));}?>
          <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
      <div class="pic isotope-item photo"><img src="<?php echo thumb($v['thumb'], 320, 260, 0);?>"
                                                     data-at2x="<?php echo thumb($v['thumb'], 640, 520, 0);?>"
                                                     alt="<?php echo $v['title'];?>">
        <div class="hover-effect alt"></div>
        <div class="links"><a href="javascript:;" class="link-icon alt flaticon-magnifying-glass84 fancy"
                                      data-fancybox-group='cws-portfolio-gallery-100'></a><a target="_blank"
                                                                                             href="javascript:;"
                                                                                             class="link-icon alt flaticon-return13"></a> </div>
      </div>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
    </div>
  </div>
  <!-- ! filter--> 
</section>
<!-- ! section banner-->

<section class="banner-section pt-30 pb-30">
  <div class="container">
    <div class="row">
      <div class="col-md-7">
        <h2 class="banner-title mt-0 mb-0">想了解更多精彩内容吗？</h2>
      </div>
      <div class="col-md-5 text-right"><a href="<?php echo $CATEGORYS[$bjfm_catid]['url'];?>" class="cws-button white color-4"><?php echo $CATEGORYS[$bjfm_catid]['catname'];?></a><a
                    href="<?php echo $CATEGORYS[$sthd_catid]['url'];?>" class="cws-button white color-4"><?php echo $CATEGORYS[$sthd_catid]['catname'];?></a></div>
    </div>
  </div>
</section>
<!-- section banner--> 

<!-- section news-->
<section class="page-section pb-70 bg-2 bb-gray">
  <div class="container">
    <h2 class="title-section mb-0 mt-0 text-center">学生风采</h2>
    <div class="divider mb-20 mt-25"></div>
    <p class="text-center mb-50">办学十多年来，正德小学走出了一大批优秀学生，他们在后续学业中取得了辉煌的成绩。</p>
    <div class="carousel-container hover-item">
      <div class="row">
        <div class="owl-four-pag pagiation-carousel main-color"> <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=558f799dd87ce4aa5f31747d3d72749a&action=lists&catid=%24xysx_catid&num=18&order=id+DESC&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">修改</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$xysx_catid,'order'=>'id DESC','limit'=>'18',));}?>
          <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
          <div class="blog-item blog-box small"> 
            <!-- Blog Image-->
            <div class="blog-media">
              <div class="pic"><img src="<?php echo thumb($v['thumb'], 300, 400, 0);?>"
                                                  data-at2x="<?php echo thumb($v['thumb'], 300, 400, 0);?>" alt="">
                <div class="hover-effect"></div>
                <div class="links"><a href="javascript:;" target="_blank"
                                                      class="link-icon flaticon-return13"></a></div>
              </div>
            </div>
            <div class="blog-content">
              <div class="blog-item-data clearfix">
                <div class="blog-date">
                  <div class="date">
                    <div class="date-cont"> <span class="day"><?php echo date('d',$v[inputtime]);?></span><span title="Dec"
                                                                                                    class="month"><span><?php echo date('m',$v[inputtime]);?>月</span></span><span
                                                class="year"><?php echo date('Y',$v[inputtime]);?></span> <i class="springs"></i></div>
                  </div>
                </div>
                <h3 class="blog-title"><?php echo $v['title'];?></h3>
                <div class="divider gray"></div>
                <p class="post-info_cc"><span><a href="<?php echo $CATEGORYS[$xysx_catid]['url'];?>"><?php echo $CATEGORYS[$xysx_catid]['catname'];?></a></span> </p>
              </div>
            </div>
          </div>
          <?php $n++;}unset($n); ?>
          <?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?> </div>
      </div>
    </div>
  </div>
</section>
<!-- ! section news--> 
<?php include template("content","footer"); ?>