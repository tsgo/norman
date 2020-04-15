
$(function() {

     // 產品點選切換tab
   $('.ba').click(function() {
    $('.ba').removeClass ('h');
    $(this).addClass ('h');

    $('.p_boxs').removeClass('p_boxs_show');
    $('.p_boxs').eq($(this).index()).addClass('p_boxs_show');
   });

   $('.ba').eq (0).click();


});
