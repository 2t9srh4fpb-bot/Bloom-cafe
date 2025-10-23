$(function(){
    $('a[href^="#"]').click(function(){
        let headerHeight = $('#header').outerHeight();
        let href = $(this).attr("href");
        let target = $(href == "#" || href == "" ? 'html':href);
        let position = target.offset().top - headerHeight;
        $("html,body").animate({scrollTop:position}, 600, "swing");
        return false
    });

    $('.inview').on('inview',function(event,isInView){
        if(isInView){
            $(this).addClass('show');
        };
    })
});