$(document).ready(function() {

    $.ajax({
        url: '/api/user',
        type: "GET",
        success: function(data) {
            document.getElementById('userInfo').innerHTML = "";
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


$('#submitPersonal').click(function() {
    var nickName = $('#nickName').val();
    var email = $('#email').val();
    var phone = $('#phone').val();
    var oldpassword = $('#oldpassword').val();
    var newpassword = $('#newpassword').val();
    var surepassword = $('#surepassword').val();
    $.ajax({
        url: '/api/user/update',
        data: { nickName: nickName, email: email, phone: phone, oldpassword: oldpassword, newpassword: newpassword, surepassword: surepassword },
        type: "POST",
        success: function() {
            alert("修改成功");
            location.reload();
        },
        error: function() {
            alert("修改失败,请检查密码");
        }
    });
});