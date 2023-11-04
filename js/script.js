$(document).ready(function(){
    $('.accordion-label').click(function(){
        $(this).next('.accordion-panel').slideToggle();
        $('.accordion-panel').not($(this).next('.accordion-panel')).slideUp();
    });

    $('.tab').click(function(){
        const index = $(this).index();
        $('.tab-panel').eq(index).sho().sibLings('.tab-panel').hide();
    });
});