$(document).ready(function()
{
    $(window).scroll(function()
    {
        if(this.scrollY > 100)
        {
            $('.menu-item').addClass('sticky');
           
        }
        else
        {
            $('.menu-item').removeClass('sticky');
        }
    });

    $('.fa-bars').click(function(){
        $('.nav').addClass("active-nav");
        
    });

    $('.fa-window-close').click(function(){
        $('.nav').removeClass("active-nav");
    })

    $('.nav-link').click(function(){
        $('.nav').removeClass("active-nav");

    })
})