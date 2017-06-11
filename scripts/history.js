$(document).ready(function() {

    $.ajax({
        url: '/api/oozie/templte',
        type: "GET",
        success: function(data) {
            var item;
            $.each(data, function(i, result) {
                item = "<tr><td>" + result['jobName'] + "</td><td>" + result['jobId'] + "</td><td>" + result['result'] + "</td><td>" +
                    "<a onclick=info('" + result['jovId'] + "')>查看详情</a>" + "</td></tr>";
                $('#taskTable').append(item);
            });
        },
    });

});