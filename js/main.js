
var users = [
    {
        username:'bek',
        password:'1'
    },
    {
      username:'saloxiddin',
        password:'4'
    },
    {
      username: 'Ali',
      password: '2'
    },
    {
        username:'shoh',
        password:'3'
    }
];
function register() {
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var link=document.getElementById('cabinet-url');
        // for (i = 0; i < users.length; i++) {
        //     if (users[i].username === username && users[i].password === password) {
        //         // link.setAttribute('href', 'cabinet.html');
        //     }
        // }
    if (username !== '' && password !== '') {
        var isThere = false;
        for (i = 0; i < users.length; i++) {
            if (users[i].username === username && users[i].password === password) {
                isThere = true;
                window.location.href="cabinet.html";
                // link.setAttribute('href', 'cabinet.html');
            }
        }
        if (!isThere) {
            document.write('User mavjud emas!');
        }
    } else {
        alert('Formani to\'ldir')
    }

}