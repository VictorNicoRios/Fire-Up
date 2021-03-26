$(document).ready(()=>{
    function mostrarUsers() {
        var users = document.getElementById("users")
        $.get("http://localhost:3000/api/users",function(data){
            userdata = JSON.stringify(data);
            users.append(userdata);
            console.log(data);
        });
    }
    mostrarUsers();
});

/*<script type="text/javascript" src="/javascripts/showUsers.js"></script>*/