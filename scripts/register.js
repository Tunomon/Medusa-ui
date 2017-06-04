$(document).ready(function() {
    //     $(document).on('submit', '#register', (event) => {
    //         let data = $(event.currentTarget).serializeObject();
    //         console.log('data========', data);
    //     })
    // })
    $('#register').click(function() {
        // let data = $(event.currentTarget).serializeObject();
        // console.log('data========', data);
        var name = $('#inputUsername').val();
        var password = $('#inputPassword').val();
        var email = $('#inputEmail').val();
        var phone = $('#inputPhone').val();
        var nickName = $('#inputNickName').val();
        console.log(name, password, email)
        $.ajax({
            url: '/api/user/register',
            data: { name: name, password: password, email: email, phone: phone, nickName: nickName },
            type: "POST",
            success: function(data) {
                alert("成功")
                afterRegister();
            },
            error: function(data) {
                alert("登录失败");
            }
        });
    });

});


function afterRegister() {
    window.location.href = '../views/signin.html'
}