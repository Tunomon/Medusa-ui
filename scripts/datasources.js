$(document).ready(function() {

    $.ajax({
        url: '/api/datasources',
        type: "GET",
        success: function(data) {
            var item;
            $.each(data, function(i, result) {
                item = "<tr><td>" + result['typeString'] + "</td><td>" + result['driver'] + "</td><td>" + result['url'] + "</td><td>" + result['dbUsername'] + "</td><td>" +
                    "<button onclick=update('" + result['id'] + "')>update</button>" + "<button onclick=deleteDatasource('" + result['id'] + "')>delete</button>" +
                    "</td></tr>";
                $('#datasourceTable').append(item);
            });
        },
    });


});

$('#save').click(function() {
    var datasourceName = $('#datasourceName').val();
    var datasourceHost = $('#datasourceName').val();
    var datasourcePort = $('#datasourcePort').val();
    var datasourceType = translate($('#datasourceType').val());
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url: '/api/datasources/save',
        data: { name: datasourceName, host: datasourceHost, port: datasourcePort, type: datasourceType, username: username, password: password },
        type: "POST",
        success: function(data) {
            alert(data);
            window.location.href = "../views/dashboard.html"
        },
    });
});




function deleteDatasource(id) {

    $.ajax({
        url: '/api/datasources/delete/' + id,
        type: "POST",
        success: function(data) {
            location.reload();
        },
    });
}

// function update(id) {

//     $.ajax({
//         url: '/api/datasources/update/' + id,
//         type: "GET",
//         success: function(data) {},
//     });
// }

function translate(datasource) {
    if (datasource == "Mysql") {
        return 1;
    } else if (datasource == "SQLServer") {
        return 2;
    } else if (datasource == "Hive") {
        return 3;
    } else if (datasource == "Oracle") {
        return 4;
    }
}