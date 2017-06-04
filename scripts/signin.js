$(document).ready(function() {
    $('#signin-btn').click(function() {
        var name = $('#inputUsername').val();
        var password = $('#inputPassword').val();
        $.ajax({
            url: '/api/user/login',
            data: { name: name, password: password },
            type: "POST",
            success: function() {
                login();
            },
        });
    });

});

function login() {
    window.location.href = '../views/dashboard.html'
}