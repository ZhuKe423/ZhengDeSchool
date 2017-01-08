function setCookie(c_name,value,expiredays)
{
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
  ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
    { 
    c_start=c_start + c_name.length+1 
    c_end=document.cookie.indexOf(";",c_start)
    if (c_end==-1) c_end=document.cookie.length
    return unescape(document.cookie.substring(c_start,c_end))
    } 
  }
return ""
}
function checkVote(cmid)
{
  comIds=getCookie('comIds')
  if (comIds!=null && comIds!="")
  {
    comArr = comIds.split(",");
    for (i=0;i<comArr.length ;i++ ) 
    { 
      if (comArr[i] == cmid) {
        return true;
      }
    } 
  }
  return false;
}
function addVote(cmid)
{
  comIds=getCookie('comIds')
  if (comIds!=null && comIds!="")
  {
    comIds = comIds+','+cmid;
    setCookie('comIds', comIds, 1);
  }
  else 
  {
    setCookie('comIds', cmid, 1);
  }
}
  
function Rvideo(){
    $("iframe, embed, object").each(function(){
      var oWidth = $(this).attr("width");
      var oHeight = $(this).attr("height");
      var winWidth = document.body.clientWidth;
      if(oHeight > 100){
      if(winWidth > 480){
        $(this).parent().css('height', '498px');
      }else {
        $(this).parent().css('height', '300px');
        }
      }
      else {
        $(this).parent().css('width', oWidth);
        $(this).parent().css('height', oHeight);
      }
  });
}
$(function(){
Rvideo();
$(window).resize(function (){
  Rvideo()
});

  $('.btn-scroll').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-50
        }, 1000);
        return false;
      }
    }
  });


  // 遍历图片设置宽度
  $(".post-con img").each(function(){
      var oWidth = $(this).attr("width");
      if(oWidth > 200){
        if(oWidth > 500){
          $(this).css('width','100%');
        }else {
          $(this).css('width','50% !important');
        }
      }
  });


  // 微信分享
  $('.btn-weixin').click(function(){
  
    $('.dia-weixin').addClass('open');
    $('body').addClass('u-overflow-hidden');
    
  });
  
  
  
  //如果需要点击 overlay 关闭弹窗的话，注意阻止事件冒泡
  $('.dia-weixin .weixin-con').on('click',function(e){
      e.stopPropagation();
  });
  $('.dia-weixin').on('click',function(){
      $('.dia-weixin').removeClass('open');
      $('body').removeClass('u-overflow-hidden');
  });

//默认评论 
function get_init_comments(pid, pobj){
  
  $.ajax({
       url: ajaxurl,
       type: 'POST',
       dataType: 'html',
  
       data: {
         action:'my_ajax_recommand',
         postid:pid,
         p_num:1,            
       },
      success: function(data) {       
         pobj.html(data);
      }
 });

}
  
  
//更多评论
var isloading = 0;
function get_more_comments(pid, pobj, notids){
  $.ajax({
        url: ajaxurl,
        type: 'POST',
        dataType: 'html',
        beforeSend: function() {
          isloading = 1;
          pobj.find('.comments-more').append('<div class="loading"><div class="spinner center"><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div><div class="spinner-blade"></div></div></div>').children('.btn-comment').hide();

        },
        data: {
          action:'my_ajax_more_comment',
          postid:pid,
          notids:notids            
        },
        success: function(data) {
          $('.comm-active').removeClass('comm-active');
          var olddata = pobj.find('.comment-list').html();
          pobj.find(".post-comments-wrap").html(data).children('.comment-list').addClass('comm-active').prepend(olddata);
          isloading = 0;
        }
  });

}

// 更多评论
$("body").on("click",".btn-comment",function(){
  var pobj = $(this).closest("article.post-article");
  var pid = pobj.attr("postid");
  var notids = $(this).attr('notids');
  get_more_comments(pid,pobj,notids);
 
});

//回复评论
$('body').on('click', '.article-comment-reply', function(event) {
  event.preventDefault();
  var reobj = $(this);
  var cid = reobj.attr('cid');
  var is_on = reobj.attr('is-on');
  var pcwarp = reobj.parents('.post-comments-wrap');
  if (is_on == 0){
    var cli = reobj.parents('#comment-'+cid);
    var respond = pcwarp.find('#respond');
    respond.find('#comment_parent').val(cid);
    respond.insertAfter(cli);
    pcwarp.find(".article-comment-reply[is-on='1']").html('<i class="icon-reply"></i> 回复').attr('is-on', 0);
    reobj.html('<i class="icon-reply"></i> 取消回复');
    reobj.attr('is-on', 1);
  } else if(is_on == 1) {
    var respond = reobj.parents('#comment-'+cid).next('#respond');
    var acp = pcwarp.children('.article-comment-post');
    respond.find('#comment_parent').val(0);
    respond.appendTo(acp);
    reobj.html('<i class="icon-reply"></i> 回复').attr('is-on', 0);
  }

});

//收起评论
$('body').on('click', '.comm-up', function() {
  var up = $(this);
  get_init_comments_data(up.parents('.post-article').attr('postid'), up.parent().parent());
});

//评论点赞
$('body').on('click', '.article-comment-vote', function() {
  var vote_btn = $(this);
  if (vote_btn.hasClass('active')) {
    return false;
  }
  var li_id = vote_btn.parent().parent().attr('id');
  var cid = li_id.substr(8);
  if (checkVote(cid)) {
    return false;
  }
  $.ajax({
       url: ajaxurl,
       type: 'POST',
       dataType: 'json', 
       data: {
         action:'my_ajax_comment_vote',
         cid:cid
       },
      success: function(data) {
        if (data > 0) {
          vote_btn.addClass('active').html('<i class="icon-thumbs-o-up"></i>'+data);
          addVote(cid);
        } else if (data == -1) {
          //alert('你已赞过');
        }    
      }
 });
});  
//评论推荐到首页
$('body').on('click', '.article-comment-showindex', function() {
  var showindex_btn = $(this);
  // if (showindex_btn.hasClass('active')) {
  //   return false;
  // }
  var li_id = showindex_btn.parent().parent().parent().attr('id');
  var cid = li_id.substr(8);
  $.ajax({
       url: ajaxurl,
       type: 'POST',
       dataType: 'json', 
       data: {
         action:'my_ajax_comment_showindex',
         cid:cid
       },
      success: function(data) {
        if (data > 0) {
          if(data == 1) {
            showindex_btn.addClass('active').text('已推荐');
          } else if(data == 2) {
            showindex_btn.removeClass('active').text('推荐到首页');
          }
        }   
      }
 });
});

//登录注册
$("#wp-login").click(function () {
    $.post(
        jsobj.ajaxurl,
        {
            log: $("#user_login").val(),
            pwd: $("#user_pass").val(),
            action: "pw_login",
            redirect_to: $("#redirect_to").val(),
            security: jsobj.ajax_check,
            rememberme: $('#rememberme').val()
        },
        function (data) {
            if (data != "1") {
                $("#info_login").removeClass().addClass("alert alert-error");
                $("#info_login").slideDown();
                $("#info_login").text("用户名或密码错误,请重试!");
                //alert("用户名或密码错误,请重试!");
            }
            else {
                $("#info_login").slideDown();
                $("#info_login").text("登陆成功，请刷新页面！");
                // alert("登陆成功，请刷新页面！");
                location.reload();                     
            }
        }
      );
});

$("#wp-register").click(function () {
  
    $.post(
        jsobj.ajaxurl,
        {
            user_register: $("#user_register").val(),
            user_email: $("#user_email").val(),
            password: $("#password").val(),
            repeat_password: $("#repeat_password").val(),
            redirect_to: $("#redirect_to").val(),
            action: "pw_register",
            security: jsobj.ajax_check
        },
        function (data) {
            if (data == "1") {
                $("#info_register").removeClass().addClass("alert alert-success");
                $("#info_register").slideDown();
                $("#info_register").text("注册成功！");
    location.reload(); 
    
               // alert("注册成功！");
    window.location.reload();
            }
            else {
                $("#info_register").removeClass().addClass("alert alert-error");
                $("#info_register").slideDown();
                $("#info_register").text(data);
                //alert("失败");
            }
        }
      );
});
  
/* Toggle menú de móviles  */
$('.btn-menu').on('click', function (e) {
    e.preventDefault();
    $('.nav-sub-menu').slideToggle(200);
}); // fin click

/* Hacer visible el menú al agrandar */
var inWidth = window.innerWidth;
$(window).resize(function () {
    if (inWidth >= 767) {
        if ($('.nav-sub-menu').css('display') == 'block') {
            $('.nav-sub-menu').removeAttr('style');
        }
    }
}); 

// 搜索
$('.icon-search').click(function(){
  $('.nav-search-input').focus();
  if(inWidth <= 480){ 
    $('.form-search .nav-search-input').css("width",inWidth);
    $('.form-search').addClass('active2');
  }else{
    $('.form-search').addClass('active');
  }
});
$('.form-search .close').click(function (){
  $('.form-search .nav-search-input').css("width",'46px');
  $('.form-search').removeClass('active');
  $('.form-search').removeClass('active2');
});

function scrollHide(){
  // alert(inWidth);
  $('.nav-dropdown').children().removeClass('visible');
  if(inWidth <= 480){
    $('.nav-sub-menu').hide();
  }
}
// $(window).scroll(scrollHide);
$(window).scroll(function(){
  scrollHide();
  if ($(this).scrollTop() > 100) {
    $('.fix-layout').fadeIn();
  } else {
    $('.fix-layout').fadeOut();
  }
}); 
$('.return-top').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 600);
  return false;
});
})







// 2016 Date


$(document).ready(function(){
  $('.min-menu').on('click',function(){
    $(this).parent('.min-nav').toggleClass('min-show');
  });
  $('.header-top .header-search').on('click',function(){
    $('body').toggleClass('body-search');
    $('.search-global .search-input').focus();
  });
  $('.footer-bar .dropdown').on('click',function(){
    $(this).toggleClass('open');
  });

  $('.min-btn-menu').on('click',function(){
    $('.min-layout').addClass('min-show');
    $('body').addClass('noscroll');
  });
  $('.min-close').on('click',function(){
    $('.min-layout').removeClass('min-show');
    $('body').removeClass('noscroll');
  });
  // textarea评论高度自动伸缩
  // autosize(document.querySelectorAll('.autosize-textarea'));

  // textarea focus显示发布按钮
  $('body').on('focus',".comm-textarea",function(event) {
    $('.comm-footer').hide();
    $('.comm-textarea').css('height','34px');
    $('.item-comm-area').removeClass('active');
    $(this).css('height','50px');
    $(this).parent('.item-comm-area').addClass('active');
    $(this).parent().next('.comm-footer').show();
    
    autosize($(this));
  })
  // $('.comm-textarea').blur(function(){
  //   if($(this).val()==""){
  //     $(this).parent('.item-comm-area').removeClass('active');
  //     $(this).parent().next('.comm-footer').hide();
  //   }
  // });

  // 登录注册
  $('.btn-toggle').click(function(){
      if($(this).html() == "新用户注册"){
        $(this).html("返回登录");
        $('.btn-forget').hide();
        $('.tab-login').hide();
        $('.tab-reg').show();
        // $("#user_login").focus();
        
      }else{
        $(this).html("新用户注册");
        $('.btn-forget').show();
        $('.tab-login').show();
        $('.tab-reg').hide();
          // $("#user_register").focus();
      }
  })
});



//导航菜单 滚动显示/隐藏效果
var disScroll;
var lastScrollTopPin = 0;
var delat = 5;


$(window).scroll(function(event){
  disScroll = true;

  // 滚动隐藏dropdown
  $('.dropdown').removeClass('open');
  $('.min-nav').removeClass('min-show');
});
setInterval(function (){
  if(disScroll){
      hasScrolled();
      disScroll = false;
  }
},250);

function hasScrolled(){
  var st = $(this).scrollTop();
  // var logoHeight = $('.head-logo').outerHeight();
  var navHight = $('.header-top').outerHeight();
  var clientHeight =document.documentElement.clientHeight;
  var clientWidth =document.documentElement.clientWidth;
  // if(st > logoHeight){
  //   $('.index .nav-bar').addClass('nav-toggle');
  // }
  // else {
  //   $('.index .nav-bar').removeClass('nav-toggle');
  // }

  //确保滚动距离大于5px;
  if(Math.abs(st - lastScrollTopPin) <= delat){
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
    if(st > navHight){
      $('.min-header .min-logo').hide();
    }else {
      $('.min-header .min-logo').show();
    }
    if(st > navHight && st > lastScrollTopPin){
      $('.header-top').removeClass('header-show').addClass('header-hide');
    }else{
    if(st + $(window).height() < $(document).height()){
        $('.header-top').removeClass('header-hide').addClass('header-show');
      }
    }
  

  lastScrollTopPin = st;

}


