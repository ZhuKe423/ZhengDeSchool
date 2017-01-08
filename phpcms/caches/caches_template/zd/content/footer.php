<?php defined('IN_PHPCMS') or exit('No permission resources.'); ?>       <!-- Contact Us -->
        <section class="page-section pb-0">
            <div class="container">
                <!-- section title-->
                <h2 class="title-section mt-0 mb-0 text-center">联系我们</h2>
                <!-- ! section title-->
                <div class="divider mt-20 mb-25"></div>
                <p class="mb-50 text-center">成都正德实验学校进一步解放思想，与时俱进，求真务实，开拓创新，“走内涵发展之路，提升现代化水平”。</p>
                <div class="row">
                    <div class="col-md-6 mb-md-50">
                        <address class="contact-address">
                            <p><span>地址：</span> 四川省成都新都区东环路三巷26号 </p>
                            <p><span>电话：</span> <a href="tel:180012345678">（028）83013589</a></p>
							<p><span>网址：</span> <a href="<?php echo siteurl($siteid);?>">www.zd2002.com</a></p>
                            <p><span>E-mail：</span> <a href="mailto:admin@zd2002.com">admin@zd2002.com</a></p>
							<p><span>邮编：</span> 212215 </p>
                        </address>
                        <hr>
                    </div>
                    <div class="col-md-6">
                        <div class="widget-contact-form pb-0">
                            <!-- contact-form-->
                            <div id="feedback-form-errors" role="alert" class="alert alert-danger alt alert-dismissible fade in">
                                <button type="button" data-dismiss="alert" aria-label="Close" class="close"><span aria-hidden="true">×</span></button>
								<i class="alert-icon border flaticon-exclamation-mark1"></i>
								<strong>家长留言</strong><br>
                                <div class="message"></div>
                            </div>
                            <div class="email_server_responce"></div>
                            <form action="#" method="post" class="form contact-form alt clearfix">
                                <input type="text" name="name" value="" size="40" placeholder="家长姓名" aria-invalid="false" aria-required="true" class="form-row form-row-first">
                                <input type="text" name="email" value="" size="40" placeholder="家长电话" aria-required="true" class="form-row form-row-last">
                                <textarea name="message" cols="40" rows="4" placeholder="留言" aria-invalid="false" aria-required="true"></textarea>
                                <input type="submit" value="提交留言" class="cws-button border-radius pull-right">
                            </form>
							<br />
                            <!-- /contact-form-->
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- footer-->
        <footer class="footer">
            <div class="copyright">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <p>Copyrights &copy; <?php echo date('Y', SYS_TIME);?> <a href="<?php echo siteurl($siteid);?>" target="_blank"><?php echo $SEO['site_title'];?></a> 版权所有
							<!--<a href="#">jzk12工作室技术支持</a>-->
							</p>
                        </div>
                       <!-- <div class="col-sm-4 text-right">
							    <a href='#' class='cws-social cws_social_link fa fa-weixin' title='微信' target='_blank'></a>
							    <a href='#' class='cws-social cws_social_link fa fa-weibo' title='微博' target='_blank'></a>
							    <a href='#' class='cws-social cws_social_link fa fa-qq' title='qq' target='_blank'></a>
								&lt;!&ndash;
							    <a href='#http://xlyey.yzedu.net/index.php?m=content&c=rss&siteid=1' class='cws-social cws_social_link fa fa-rss' title='RSS订阅' target='_blank'></a>
								&ndash;&gt;
						</div>-->
                    </div>
                </div>
            </div>
        </footer>
        <div id="scroll-top"><i class="fa fa-angle-up"></i></div>
    <!-- ! footer-->
    <script type="text/javascript" src="./zd/js/jquery.min.js"></script>
    <script type="text/javascript" src="./zd/js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="./zd/js/bootstrap.js"></script>
    <script type="text/javascript" src="./zd/js/owl.carousel.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.sticky.js"></script>
    <script type="text/javascript" src="./zd/js/cws_parallax.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.fancybox.pack.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.fancybox-media.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.isotope.min.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.themepunch.tools.min.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.themepunch.revolution.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.video.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="./zd/js/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.validate.min.js"></script>
    <script type="text/javascript" src="./zd/js/jquery.form.min.js"></script>
    <script type="text/javascript" src="./zd/js/script.js?ver=1.03"></script>
    <script type="text/javascript" src="./zd/js/bg-video/cws_self_vimeo_bg.js"></script>
    <script type="text/javascript" src="./zd/js/bg-video/jquery.vimeo.api.min.js"></script>
    <script type="text/javascript" src="./zd/js/bg-video/cws_YT_bg.js"></script>
    <script type="text/javascript" src="./zd/js/retina.min.js"></script>
  </body>
</html>