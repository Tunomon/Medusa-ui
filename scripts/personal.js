$(document).ready(function() {

    $.ajax({
        url: '/api/user',
        type: "GET",
        success: function(data) {
            var item = "<p> 用户名 : " + data['name'] + "</p><p> 用户昵称 : " + data['nickName'] + "</p><p> 用户邮箱 : " + data['email'] + "</p><p>" +
                "用户电话 : " + data['phone'] + "</p>";
            $('#userInfo').append(item);
        },
        error: function() {
            alert("您尚未登录！")
            window.location.href = "../views/signin.html"
        }
    });


});