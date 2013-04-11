$(function(){
    var h = $(window).height()-65;
    var w = $(window).width() > 1150 ? 1150 : $(window).width()-100;
    $('.InputfieldPageListSelectMultiple').on("click",".itemEdit",function(e){
        e.preventDefault();
        $(this).fancybox({
            hideOnContentClick: false,
            centerOnScroll: false,
            frameWidth: w,
            frameHeight: h
        }).trigger('click');
    });
});