$(document).ready(function() {
    $.ajax({
        url: '/api/query/hive/table/infos',
        type: "GET",
        success: function(data) {
            var item;
            $.each(data, function(i, result) {
                item = "<tbody><tr><td>" + result['databaseBelongs'] + "." + result['name'] + "</td></tr></tbody>";
                $('#tableInfos').append(item);
            });
            ReWritable();
        },
    });
});

function ReWritable() {
    var tableInfos = document.getElementById("tableInfos");
    GetColumnInfos(tableInfos.rows[1].cells[0].innerText);
    GetTableInfo(tableInfos.rows[1].cells[0].innerText);
    for (var i = 1; i < tableInfos.rows.length; i++) {
        for (var j = 0; j < tableInfos.rows[i].cells.length; j++) {　　
            /* 
            添加单击事件属性。此处不可使用setAttribute方法。 
            */
            // var temp = tableInfos.rows[i].cells[j].innerText;
            tableInfos.rows[i].cells[j].onclick = function() {
                GetTableInfo(this.innerText);
            };
        }
    }
}

function GetColumnInfos(tableInfo) {


    var table = tableInfo.split(".");

    databaseBelongs = table[0];
    tableName = table[1];


    $.ajax({
        url: '/api/query/column/infos',
        data: { databaseBelongs: databaseBelongs, tableName: tableName },
        type: "GET",
        success: function(data) {
            // var aa = document.getElementById('aa'),tbody = aa.tBodies[0],temp = document.createElement('div')
            // temp.innerHTML  = "<table><tbody><tr><td>单元格三</td><td>单元格四</td></tr></tbody></table>";
            // aa.replaceChild(temp.firstChild.tbodies[0], tbody);
            document.getElementById('columnInfos').innerHTML = "<thead><tr><th>字段名称</th><th>字段类型</th> <th>字段注释</th> </tr></thead>";
            var item;
            $.each(data, function(i, result) {
                item = "<tbody><tr><td>" + result['name'] + "</td><td>" + result['type'] + "</td><td>" + result['desc'] + "</td><td>" + "</td></tr></tbody>";
                $('#columnInfos').append(item);
            });
        },
    });
}

function GetTableInfo(tableInfo) {


    var table = tableInfo.split(".");

    databaseBelongs = table[0];
    tableName = table[1];


    $.ajax({
        url: '/api/query/table/info',
        data: { databaseBelongs: databaseBelongs, tableName: tableName },
        type: "GET",
        success: function(data) {
            // var aa = document.getElementById('aa'),tbody = aa.tBodies[0],temp = document.createElement('div')
            // temp.innerHTML  = "<table><tbody><tr><td>单元格三</td><td>单元格四</td></tr></tbody></table>";
            // aa.replaceChild(temp.firstChild.tbodies[0], tbody);
            document.getElementById('tableInfo').innerHTML = " <thead><tr><th>表名</th><th>所属数据库</th><th>存储空间</th><th>是否分区表</th><th>是否扩展表</th></tr></thead>";
            var item = "<tbody><tr><td>" + data['name'] + "</td><td>" + data['databaseBelongs'] + "</td><td>" + data['storageSpace'] + "</td><td>" +
                data['partition'] + "</td><td>" + data['external'] + "</td></tr></tbody>";
            $('#tableInfo').append(item);
            GetColumnInfos(tableInfo);

        },
    });
}