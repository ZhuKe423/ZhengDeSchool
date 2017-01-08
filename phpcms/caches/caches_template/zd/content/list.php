<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header-list"); ?>
    <div id="main" class="site-main">
      <div class="page_content ">
        <main>
          <div class="grid_row_cont" id="jiaoshi">
            <div class='grid_row cws_content_top clearfix' style='padding-top: 120px;'>
              <div class='grid_col grid_col_12'>
                <div class="cols_wrapper">
                  <div class="widget_wrapper">
                    <div class='ce clearfix'>
                      <h3 class="ce_title und-title gray" style="font-size: 30px; text-align: center; margin-bottom: 20px;"><?php echo $CATEGORYS[$parentid]['catname'];?> <span style="color: #28a6ec;"><?php echo $CAT['catname'];?></span></h3>
                      <p style="text-align: center;"><?php echo $CAT['description'];?></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid_row_cont">
            <div class='grid_row clearfix' style='margin-bottom: 50px;'>
              <section class='cws_ourteam'>
                <div class='cws_wrapper'>
                  <div class='cws_ourteam_items grid grid-4 isotope'>
<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=2a20d93f7ea80eb935fc02057329306d&action=lists&catid=%24catid&num=32&moreinfo=1&order=updatetime+DESC&page=%24page\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">编辑</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'lists')) {$pagesize = 32;$page = intval($page) ? intval($page) : 1;if($page<=0){$page=1;}$offset = ($page - 1) * $pagesize;$content_total = $content_tag->count(array('catid'=>$catid,'moreinfo'=>'1','order'=>'updatetime DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));$pages = pages($content_total, $page, $pagesize, $urlrule);$data = $content_tag->lists(array('catid'=>$catid,'moreinfo'=>'1','order'=>'updatetime DESC','limit'=>$offset.",".$pagesize,'action'=>'lists',));}?>
<?php $n=1;if(is_array($data)) foreach($data AS $v) { ?>
                    <article class='item'>
                      <div class='ourteam_item_wrapper'>
                      <?php if($v[thumb]) { ?>
                        <div class='media_part'>
                          <div class='pic'>
                            <div class='img_cont'><img src="<?php if($v[thumb]) { ?><?php echo $v['thumb'];?><?php } else { ?>statics/images/nopic.gif<?php } ?>" width="248" height="248" data-at2x="<?php if($v[thumb]) { ?><?php echo $v['thumb'];?><?php } else { ?>statics/images/nopic.gif<?php } ?>" alt="" /></div>
                            <div class='hover-effect'></div>
                            <div class='links'><a target='_blank' href='<?php echo $v['url'];?>' class='cwsicon-links21'></a></div>
                          </div>
                        </div>
                        <?php } ?>
                        <div class='title_wrap ce_title'>
                          <h3 class='title'><a target='_blank' href='<?php echo $v['url'];?>'><?php echo $v['title'];?></a></h3>
                          <div class='positions'><?php echo $v['sub_title'];?></div>
                        </div>
                        <div class='desc'>
                          <p><?php echo str_cut($v[description], 100, '...');?></p>
                        </div>
                      </div>
                    </article>
<?php $n++;}unset($n); ?>
<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
                  </div>
                </div>
              <div class='pagination separated'>
                <div class='page_links'>
<?php echo $pages;?>
<!--
				<a class="a1">50条</a> <a href="list-17-0.html" class="a1">上一页</a> <span>1</span> <a href="list-17-2.html">2</a> <a href="list-17-2.html" class="a1">下一页</a>
-->
				</div>
              </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
    <!-- #main --> 
<?php include template("content","footer-list"); ?>
