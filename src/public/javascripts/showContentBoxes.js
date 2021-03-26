window.onload = function() {
    document.getElementById("users-button").addEventListener("click", ShowUsers);
    document.getElementById("exercises-button").addEventListener("click", ShowExercises);
    document.getElementById("rutines-button").addEventListener("click", ShowRutines);
}

function ShowUsers() {
    var sc
    document.getElementById('contenido').innerHTML = '';
    $.get("http://localhost:3000/api/users",function(data){
        data.forEach(users => {
            sc = users
            $('#contenido').append('<div class="card"><img src="'+users.profilePicture+'" alt="Content"><div class="card-footer"><h4><b>'+users.name+'</b></h4><p>'+users.password+'</p></div></div>');                    
        });
    });
}

function ShowExercises() {
    document.getElementById('contenido').innerHTML = '';
    $.get("http://localhost:3000/api/exercises",function(data){
        data.forEach(exercises => {
            $('#contenido').append('<div class="card"><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h4><b>'+exercises.name+'</b></h4><p>'+exercises.description+'</p></div></div>');                    
            
        });
    });
}

function ShowRutines() {
    document.getElementById('contenido').innerHTML = '';
    $.get("http://localhost:3000/api/rutines",function(data){
        data.forEach(rutines => {
            $('#contenido').append('<div class="card"><img src="'+rutines.template+'" alt="Content"><div class="card-footer"><h4><b>'+rutines.name+'</b></h4><p>'+rutines.description+'</p></div></div>');                    
        });
    });
}
