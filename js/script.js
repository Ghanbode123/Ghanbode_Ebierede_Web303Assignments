function getTeamInfoFromJSON() {
    $.getJSON('team.json', function (data) {
        $.each(data, function (index, player) {
            var playerInfo = '<div>';
            playerInfo += '<h2>' + player.name + '</h2>';
            playerInfo += '<h5>' + player.position + '</h5>';
            playerInfo += '<p>' + player.bio + '</p>';
            playerInfo += '</div>';
            $('#team').append(playerInfo);
        });
    });
}


function getTeamInfoFromAjax() {
    
    $('#team').text('Loading...');

    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            
            setTimeout(function () {
                $('#team').empty(); 
                $.each(data, function (index, player) {
                    var playerInfo = '<div>';
                    playerInfo += '<h2>' + player.name + '</h2>';
                    playerInfo += '<h5>' + player.position + '</h5>';
                    playerInfo += '<p>' + player.bio + '</p>';
                    playerInfo += '</div>';
                    $('#team').append(playerInfo);
                });
            }, 3000);
        },
        error: function () {
            $('#team').text('Error: Content could not be retrieved.');
        }
    });
}


$(document).ready(function ()
 {
    getTeamInfoFromAjax(); 
});