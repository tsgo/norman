$(function() {

  $(function() {
   $('#about').click(function() {
     $('html,body').animate({scrollTop:$('#n_about').offset().top}, "show");
         return false;
     });
  });

  $(function() {
   $('#f_about').click(function() {
     $('html,body').animate({scrollTop:$('#n_about2').offset().top}, "show");
         return false;
     });
  });

  // top btn
  /* 按下top btn按鈕時的事件 */
  $('#to_top').click(function(){
    $('html,body').animate({scrollTop:0}, 900);
  });

  /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
  $(window).scroll(function() {
    if ( $(this).scrollTop() > 300 ){
      $('#to_top').fadeIn(222);
    } else {
      $('#to_top').stop().fadeOut(222);
    }
  }).scroll();
  // top btn


  // 產品點選切換tab
  $('.ba').click(function() {
    $('.ba').removeClass ('h');
    $(this).addClass ('h');

    $('.p_boxs').removeClass('p_boxs_show');
    $('.p_boxs').eq($(this).index()).addClass('p_boxs_show');
   });

  $('.ba').eq (0).click();

});
