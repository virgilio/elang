jQuery(function(){
    
    jQuery("#menu a").click(function(e){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(this.hash).offset().top - 62 }, 300);
    });
});