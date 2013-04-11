$(function(){
    var h = $(window).height()-65;
    var w = $(window).width() > 1150 ? 1150 : $(window).width()-100;
    $('.InputfieldPageListSelectMultiple').on("click",".itemEdit",function(e){
        if($(this).attr('href'))var id = $(this).parent().find('.itemValue').text();
        $(this).attr("href",$(this).attr('href') + "&id=" +id);
        e.preventDefault();
        $(this).fancybox({
            hideOnContentClick: false,
            centerOnScroll: false,
            frameWidth: w,
            frameHeight: h
        }).trigger('click');
    });
});