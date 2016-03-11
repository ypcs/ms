"use strict";

var cdn_base = "https://cdn.ypcs.fi/pub/2016/03/";
var status = 3;

function pollJSON() {
    var json = "content.json";
    var timestamp = new Date().getTime();

    $.getJSON(json, function(data) {
        status = data.status;
        var image = cdn_base + "ms-" + status + ".jpg";

        $("body").css("background-image", "url(" + image + ")");
        console.log(timestamp + " status: " + status);
    });

    setTimeout(pollJSON, 60000);
}

$(document).ready(function() {
    pollJSON();
});
