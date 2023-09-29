// WEB303 Assignment 2
$(document).ready(function(){
    var $content =('#content');

    function loadContent(file){
    $.ajax({
        url: file,
        datatype: 'html',
        type:'GET',
        success: function(data){
            $content.hide().html(data).fadeIn('slow');
        },
        error: function(){
            alert('Error loading content.');
        }
    });
}
$('#prospect'). click(function(e) {
    e.preventDefault();
    loadContent('prospect.html');
});
$('#convert'). click(function(e){
    e.preventDefault();
    loadContent('convert.html');
});
$('#retain').click(function(e){
    e.preventDefault();
    loadContent('retain.html');
});

});


