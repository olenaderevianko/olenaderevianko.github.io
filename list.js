$(document).ready(function(){
    $(".sub-menu").hide();
    $(".sublist").click(function(){
        $(this).parent().next().slideToggle();
    });
});