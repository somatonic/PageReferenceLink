$(function(){

    $('.InputfieldPageListSelectMultiple').on("click",".itemEdit",function(e){
        var id = $(this).parent().find('.itemValue').text();
        $(this).attr("href",$(this).attr('href') + "&id=" +id);
        var h = $(window).height()-65;
        var w = $(window).width() > 1150 ? 1150 : $(window).width()-100;
        e.preventDefault();
        $(this).fancybox({
            hideOnContentClick: false,
            centerOnScroll: true,
            frameWidth: w,
            frameHeight: h
        }).trigger('click');
    });

    $('.asmList').on("click",".asmItemEditModal",function(e){
        var id = $(this).parent('li').attr('rel');
        var pid = $(this).closest('.asmContainer').find('.asmSelect').find('option[rel="' + id + '"]').val();
        $(this).attr("href", $(this).attr('href') + "&id=" + pid);
        var h = $(window).height()-65;
        var w = $(window).width() > 1150 ? 1150 : $(window).width()-100;
        e.preventDefault();
        $(this).fancybox({
            hideOnContentClick: false,
            centerOnScroll: true,
            frameWidth: w,
            frameHeight: h
        }).trigger('click');
    });

});