//alert(window.localStorage.getItem('pwd'));

var loginstatus = window.localStorage.getItem('login');

if(loginstatus == "yes"){
    
}

function checkstatus(){
    var loginstatus = window.localStorage.getItem('login');

    if(loginstatus == "yes"){
        var hometitle = document.getElementById("titlehome").value;
        localStorage.setItem('title', hometitle);
        var homemsg = document.getElementById("messagehome").value;
        localStorage.setItem('message', homemsg);
    }
    else{
        alert("You Must Login to Send a Message");
        localStorage.setItem('message', '');
        localStorage.setItem('title', '');
    }
}
