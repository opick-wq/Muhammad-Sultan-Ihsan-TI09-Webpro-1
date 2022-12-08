let buttonLogin = document.getElementById("Login");

        buttonLogin.onclick = function(){
            let inputNama = document.getElementById('username').value;
            let inputPassword = document.getElementById('password').value;
            let form = document.getElementById('form');

            if(inputNama =="admin" && inputPassword=="123"){
                alert('Login sukses');
                form.setAttribute('action', 'dashboard.html');
            }else{
                alert('Login gagal');
            }
        }