<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?><?php include template("content","header-list"); ?>
	<!--	<div id="main" class="site-main">
		    <div class="page_content">
			    <main>
				    <div class='grid_row clearfix'>
				        <div class='grid_col grid_col_12'>
					        <div class="cols_wrapper">
						        <div class="widget_wrapper">
							        <div class='ce clearfix'>
								        <h3 class="ce_title und-title themecolor" style="font-size: 30px; line-height: 1.4em;"><?php echo $title;?></h3>
									    <p><?php echo $content;?></p>
								    </div>
							    </div>
						    </div>
					    </div>
				    </div>
				</main>
			</div>
		</div>--><!-- #main -->
<article class="post-article">
	<style>
		ul li:before{
			opacity: 0;
		}
		@media screen and (max-width: 768px) {
			.mid-p {
				margin-left: 15px;
				margin-right: 12px;
			}
		}

	</style>
	<div class="single-inner single-pin-wrap">
		<div class="single-left">
			<div class="single-box">
				<div class="box-con">
					<div id="sc-container" class="post-con sc-container">
						<h3 class="ce_title und-title themecolor" style="font-size: 30px; line-height: 1.4em;"><?php echo $title;?></h3>
						<p class="mid-p"><?php echo $content;?></p>
					</div>
					<div class="post-bottom">
						<div class="post-share" style="position: relative;">
							<!--<button class="button btn-weibo" title="������΢��">
								<a target="_blank" href="#"><i class="icon-weibo"></i> ������΢��</a>
							</button>
							<button class="button btn-weixin" title="����������Ȧ">
								<i class="icon-weixin"></i> ������΢��
							</button>
							<button class="button btn-linkedin hidden-xs" title="������LinkedIn">
								<a target="_blank" href='#'><i class="icon-linkedin-outline"></i> ������LinkedIn</a>
							</button>-->

							<!-- JiaThis Button BEGIN -->
							<!--<div class="jiathis_style_32x32">
								<a class="jiathis_button_tsina"></a>
								<a class="jiathis_button_tqq"></a>
								<a class="jiathis_button_renren"></a>
								<a class="jiathis_button_cqq"></a>
								<a class="jiathis_button_weixin"></a>
								&lt;!&ndash;<a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jtico jtico_jiathis" target="_blank"></a>
								<a class="jiathis_counter_style"></a>&ndash;&gt;
							</div>
							<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js" charset="utf-8"></script>-->
							<!-- JiaThis Button END -->
							<div>
								<div class="-mob-share-ui-button -mob-share-open">����</div>
								<div class="-mob-share-ui" style="display: none">
									<ul class="-mob-share-list">
										<li class="-mob-share-weibo"><p>����΢��</p></li>
										<li class="-mob-share-tencentweibo"><p>��Ѷ΢��</p></li>
										<li class="-mob-share-qzone"><p>QQ�ռ�</p></li>
										<li class="-mob-share-qq"><p>QQ����</p></li>
										<li class="-mob-share-weixin"><p>΢��</p></li>
										<li class="-mob-share-douban"><p>����</p></li>
										<li class="-mob-share-renren"><p>������</p></li>
										<li class="-mob-share-youdao"><p>�е��Ʊʼ�</p></li>
										<li class="-mob-share-pengyou"><p>������</p></li>
									</ul>
									<div class="-mob-share-close">ȡ��</div>
								</div>
								<div class="-mob-share-ui-bg"></div>
								<script id="-mob-share" src="http://f1.webshare.mob.com/code/mob-share.js?appkey=1a7479f113fb6"></script>
							</div>




						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- end -->
		<div class="single-right">
			<div class="single-side">
				<div class="side-news">
					<h2>�����Ķ�</h2>
					<ul class="side-list">
						<?php if(defined('IN_ADMIN')  && !defined('HTML')) {echo "<div class=\"admin_piao\" pc_action=\"content\" data=\"op=content&tag_md5=59d3146c936b0bbb61d83c4d89437c20&action=relation&relation=%24relation&id=%24id&catid=%24catid&num=5&keywords=%24rs%5Bkeywords%5D\"><a href=\"javascript:void(0)\" class=\"admin_piao_edit\">�༭</a>";}$content_tag = pc_base::load_app_class("content_tag", "content");if (method_exists($content_tag, 'relation')) {$data = $content_tag->relation(array('relation'=>$relation,'id'=>$id,'catid'=>$catid,'keywords'=>$rs[keywords],'limit'=>'5',));}?>
						<?php $n=1;if(is_array($data)) foreach($data AS $r) { ?>
						<li><a href="<?php echo $r['url'];?>" target="_blank"><?php echo $r['title'];?></a></li>
						<?php $n++;}unset($n); ?>
						<?php if(defined('IN_ADMIN') && !defined('HTML')) {echo '</div>';}?>
					</ul>
				</div>
			</div>
		</div>
	</div>
</article>
<script>
	jQuery(function () {
		var aaa=jQuery(window).width()-5;
		jQuery("html").width(aaa);
	})
</script>

<?php include template("content","footer-list"); ?>