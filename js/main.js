jQuery(function(){
    var hash = window.location.hash;
    jQuery('html, body').animate({ scrollTop: $(hash).offset().top - 62 }, 300);

    jQuery("#menu a").click(function(e){
        //e.preventDefault();
        jQuery('html, body').animate({ scrollTop: $(this.hash).offset().top - 62 }, 300);
    });
});