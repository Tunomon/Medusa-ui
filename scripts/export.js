$(document).ready(function() {
    $('#submitJob').click(function() {
        var jobName = $('#jobName').val();
        var exportHiveDatabase = $('#exportHiveDatabase').val();
        var exportHiveTable = $('#exportHiveTable').val();
        var exportDatabase = $('#exportDatabase').val();
        var exportTable = $('#exportTable').val();
        $.ajax({
            url: '/api/oozie/export/submit',
            data: { jobName: jobName, exportHiveDatabase: exportHiveDatabase, exportHiveTable: exportHiveTable, exportDatabase: exportDatabase, exportTable: exportTable },
            type: "POST",
            success: function() {

            },
        });
    });

});

function login() {
    alert("任务提交成功！")
    window.location.href = '../views/export.html'
}