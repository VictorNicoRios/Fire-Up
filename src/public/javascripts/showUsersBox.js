$(document).ready(()=>{
    $.get("http://localhost:3000/api/users",function(data){
        data.forEach(users => {
            $('#contenido').append('<div class="card"><img src="'+users.profilePicture+'" alt="Content"><div class="card-footer"><h4><b>'+users.name+'</b></h4><p>password: '+users.password+'</p></div></div>')                    
        });
    })});