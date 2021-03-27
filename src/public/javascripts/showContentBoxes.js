$(document).ready(()=>{
    document.getElementById("Master-rutines-button").addEventListener("click", ShowRutinesBoxes);
    function ShowRutinesList() {
        $.get("http://localhost:3000/api/rutines",function(data){
            data.forEach(rutines => {
                $('#table').append('<tr><td id="rutine-list-item" onclick="ShowExercisesBoxes()">'+rutines.name+'</td></tr>');                    
            });
        });
    }
    ShowRutinesList();
})

function ShowRutinesBoxes() {
    document.getElementById('contenido').innerHTML = '';
    $.get("http://localhost:3000/api/rutines",function(data){
        data.forEach(rutines => {
            $('#contenido').append('<div class="card" id="rutine-box" onclick="ShowExercisesBoxes()"><img src="'+rutines.template+'" alt="Content"><div class="card-footer"><h4><b>'+rutines.name+'</b></h4><p>'+rutines.description+'</p></div></div>');                    
        });
    });
}


function ShowExercisesBoxes() {
    document.getElementById('contenido').innerHTML = '';
    $.get("http://localhost:3000/api/exercises",function(data){
        data.forEach(exercises => {
            $('#contenido').append('<div class="card" id="exercise-button"><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h4><b>'+exercises.name+'</b></h4><p>'+exercises.description+'</p></div></div>');                    
            
        });
    });
}

function ShowUsersBoxes() {
    var sc
    document.getElementById('contenido').innerHTML = '';
    $.get("http://localhost:3000/api/users",function(data){
        data.forEach(users => {
            sc = users
            $('#contenido').append('<div class="card" id="user-card"><img src="'+users.profilePicture+'" alt="Content"><div class="card-footer"><h4><b>'+users.name+'</b></h4><p>'+users.password+'</p></div></div>');                    
        });
    });
}

