<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header"); ?>
<div class="tp-banner-container">
  <div class="tp-banner-slider">
    <ul>
      <li data-masterspeed="700" data-slotamount="7" data-transition="fade"><img
                    src="./zd/images/slider/loader.gif" data-bgfit="cover" data-bgposition="center 70%"
                    data-lazyload="./zd/images/slider/slide-1.jpg" alt="�ɶ�����ʵ��ѧУ" data-bgparallax="10">
        <div data-x="['left','center','center','center']" data-hoffset="0" data-y="center" data-voffset="-70%"
                     data-width="['1170px','700px','500px','300px']"
                     data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start="400" class="tp-caption sl-content text-center"><img
                        src="./zd/img/logo-sticky@2x.png" data-at2x="./zd/img/logo-sticky@2x.png"
                        alt="logo">
          <div class="sl-title text-white">�ɶ�����ʵ��ѧУ</div>
          <p class="text-white">�������� ѧΪ����</p>
          <a href="javascript:;" class="cws-button white">��ϸ����</a></div>
      </li>
      <li data-masterspeed="700" data-transition="fade"><img src="./zd/images/slider/loader.gif"
                                                                   data-lazyload="./zd/images/slider/slide-2.jpg"
                                                                   data-bgposition="center 45%" alt="�ɶ�����ʵ��ѧУ"
                                                                   data-bgparallax="10">
        <div data-x="['right','center','center','center']" data-hoffset="0" data-y="center" data-voffset="-70%"
                     data-width="['1170px','700px','500px','300px']"
                     data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start="400" class="tp-caption sl-content text-center"><img
                        src="./zd/img/logo-sticky@2x.png" data-at2x="./zd/img/logo-sticky@2x.png"
                        alt="logo">
          <div class="sl-title text-white">����ʵ��ѧУ ��������̫��</div>
          <p class="text-white">�����������̫�����������𣬴��������ﲥ��</p>
          <a href="javascript:;" class="cws-button white">��ɫ����</a></div>
      </li>
      <li data-masterspeed="700" data-transition="fade"><img src="./zd/images/slider/loader.gif"
                                                                   data-lazyload="./zd/images/slider/slide-3.jpg"
                                                                   data-bgposition="center 67%" alt="�ɶ�����ʵ��ѧУ"
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
          <div class="sl-title text-white">����� �߱�׼ �淶��</div>
          <p class="text-white">���غ��ӡ��������ӡ��ɾͺ��ӵİ�԰��ּ�������������Ʒ��ѧУ</p>
          <a href="javascript:;" class="cws-button white">���ڱ���</a></div>
      </li>
      <li data-masterspeed="700" data-transition="fade"><img src="./zd/images/slider/loader.gif"
                                                                   data-lazyload="./zd/images/slider/slide-4.jpg"
                                                                   data-bgposition="center 45%" alt="�ɶ�����ʵ��ѧУ"
                                                                   data-bgparallax="10">
        <div data-x="['right','center','center','center']" data-hoffset="0" data-y="center" data-voffset="-70%"
                     data-width="['1170px','700px','500px','300px']"
                     data-transform_in="y:-50px;opacity:0;s:1500;e:Power3.easeInOut;"
                     data-transform_out="y:50px;opacity:0;s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                     data-start="400" class="tp-caption sl-content text-center"><img
                        src="./zd/img/logo-sticky@2x.png" data-at2x="./zd/img/logo-sticky@2x.png"
                        alt="logo">
          <div class="sl-title text-white">����ʵ��ѧУ ��������̫��</div>
          <p class="text-white">�����������̫�����������𣬴��������ﲥ��</p>
          <a href="javascript:;" class="cws-button white">��ɫ����</a></div>
      </li>
    </ul>
  </div>
</div>

<!-- section news-->
<section class="page-section pb-70 bg-2 bb-gray">
  <div class="container">
    <h2 class="title-section mb-0 mt-0 text-center">У԰����</h2>
    <div class="divider mb-20 mt-25"></div>
    <div class="carousel-container hover-item">
      <div class="row">
        <div class="owl-three-pag pagiation-carousel main-color">
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=99429b49b8609e35b6c10639f030a38b&action=lists&catid=%24broadcast_catid&num=18&order=id+DESC&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">�޸�</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$broadcast_catid,'order'=>'id DESC','limit'=>'18',));}?>
          <?php $n=1;if(is_array($info)) foreach($info AS $v) { ?>
          <div class="blog-item blog-box small">
            <div class="blog-content">
              <div class="blog-item-data clearfix">
                <div class="blog-date">
                  <div class="date">
                    <div class="date-cont"> <span class="day"><?php echo date('d',$v[inputtime]);?></span><span title="Dec"
                                                                                                    class="month"><span><?php echo date('m',$v[inputtime]);?>��</span></span><span
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
    <h2 class="title-section mb-0 mt-0 text-center">У԰����</h2>
    <div class="divider mb-20 mt-25"></div>
    <div class="carousel-container hover-item">
      <div class="row">
        <div class="owl-three-pag pagiation-carousel main-color">
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=7f99cc579a62b866ce5b7ca95bc96bbd&action=lists&catid=%24news_catid&num=18&order=id+DESC&thumb=1&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">�޸�</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$news_catid,'order'=>'id DESC','thumb'=>'1','limit'=>'18',));}?>
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
                                                                                                    class="month"><span><?php echo date('m',$v[inputtime]);?>��</span></span><span
                                                class="year"><?php echo date('Y',$v[inputtime]);?></span> <i class="springs"></i></div>
                  </div>
                </div>
                <h3 class="blog-title" title="<?php echo $v['title'];?>"><?php echo str_cut($v['title'], 33, '...');?></h3>
                <div class="divider gray"></div>
                <p class="post-info_cc"><span><a href="<?php echo $CATEGORYS[$news_catid]['url'];?>">У԰����</a></span> </p>
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
<section class="page-section cws_prlx_section pt-180 pb-180"><img src="./zd/images/1920x1080-img-1.jpg" alt="��У����"
                                                                  class="cws_prlx_layer">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <h2 class="title-section mb0 mt-0 text-center text-white">���㱾У����ɫ <span>�����ν���ǿ��</span></h2>
        <div class="divider mb-20 mt-25 white"></div>
        <p class="text-center text-white mb-30"> �ɶ�����ʵ��ѧУ������2002�꣬ѧУռ��20Ķ��У�Ὠ�����Ϊ14800m2������ѧ��¥��ѧ����Ԣ����ʦ��Ԣ���������������̻�ռ��2000m2����2500m2�Ĺ㳡һ������200�׻����ܽ��˶�����</p>
        <div class="text-center"><a href="javascript:;" class="cws-button white">��У���</a></div>
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
        <h2 class="title-section text-center mt-0 mb-0">ѧ�����</h2>
        <!-- ! title section-->
        <div class="divider gray mt-20 mb-25"></div>
        <p class="text-center mb-30"><?php if($CATEGORYS[$sxtd_catid][description]) { ?><?php echo $CATEGORYS[$sxtd_catid]['description'];?><?php } else { ?>��У�������ݰ���ѧ���ķ�����Ի���Ϊ��������ᡢ��ѧ�����ԡ�������������棬���������ݶ�Ϊ��չѧ����֪ʶ�����ܡ���������е�...<?php } ?></p>
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
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=ee99120846213abe11330571f24f74f2&action=lists&catid=%24bjfm_catid&num=12&order=updatetime+DESC&thumb=1&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">�޸�</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$bjfm_catid,'order'=>'updatetime DESC','thumb'=>'1','limit'=>'12',));}?>
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
		<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=9be2ab249ec3095c47a3e797a10e4c4d&action=lists&catid=%24sthd_catid&num=12&order=updatetime+DESC&thumb=1&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">�޸�</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$sthd_catid,'order'=>'updatetime DESC','thumb'=>'1','limit'=>'12',));}?>
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
        <h2 class="banner-title mt-0 mb-0">���˽���ྫ��������</h2>
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
    <h2 class="title-section mb-0 mt-0 text-center">ѧ�����</h2>
    <div class="divider mb-20 mt-25"></div>
    <p class="text-center mb-50">��ѧʮ������������Сѧ�߳���һ��������ѧ���������ں���ѧҵ��ȡ���˻Ի͵ĳɼ���</p>
    <div class="carousel-container hover-item">
      <div class="row">
        <div class="owl-four-pag pagiation-carousel main-color"> <?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=558f799dd87ce4aa5f31747d3d72749a&action=lists&catid=%24xysx_catid&num=18&order=id+DESC&return=info\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">�޸�</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$info = $content_tag->lists(array('catid'=>$xysx_catid,'order'=>'id DESC','limit'=>'18',));}?>
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
                                                                                                    class="month"><span><?php echo date('m',$v[inputtime]);?>��</span></span><span
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