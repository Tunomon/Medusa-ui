$(document).ready(function() {
    $('#logout').click(function() {
        $.ajax({
            url: '/api/user/logout',
            type: "POST"
        });
        showConfirm();
    });

});

function showConfirm() {
    var r = confirm("您确定要注销吗？")
    if (r == true) {
        alert("注销成功！");
        window.location.href = "../views/index.html";
    }
}