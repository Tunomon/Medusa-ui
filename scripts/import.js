$(document).ready(function() {
    $('#submitJob').click(function() {
        // var form = new FormData();
        // form.append("jobName", $('#jobName').val());
        // form.append("importDatabase", $('#importDatabase').val());
        // form.append("importDatabase", $('#importDatabase').val());
        // form.append("importDatabase", $('#importDatabase').val());
        // form.append("importDatabase", $('#importDatabase').val());
        // form.append("importDatabase", $('#importDatabase').val());
        // form.append("importDatabase", $('#importDatabase').val());
        var jobName = $('#jobName').val();
        var importDatabase = $('#importDatabase').val();
        var importTable = $('#importTable').val();
        var hiveDatabase = $('#hiveDatabase').val();
        var hiveTable = $('#hiveTable').val();
        var partitionKey = $('#partitionKey').val();
        var partitionValue = $('#partitionValue').val();
        var overwrite = $('#overwrite').val();
        $.ajax({
            url: '/api/oozie/import/submit',
            data: { jobName: jobName, importDatabase: importDatabase, importTable: importTable, hiveDatabase: hiveDatabase, hiveTable: hiveTable, partitionKey: partitionKey, partitionValue: partitionValue, overwrite: overwrite },
            type: "POST",
            success: function() {
                submit();
            },
        });
    });

});

function submit() {
    alert("任务提交成功！")
    window.location.href = '../views/import.html'
}