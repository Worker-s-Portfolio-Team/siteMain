$(document).ready(function() {
    $.ajax({
        url: "/",
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // $("#request").html(JSON.stringify(data, null, 2));
            // let ip_address      =   data.headers["cf-connecting-ip"];
        }
    });
});
