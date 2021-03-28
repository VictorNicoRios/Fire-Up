var user_id = 1;

$(document).ready(()=>{
    document.getElementById("Rutines-Global").addEventListener("click", ShowRutinesGlobal);
    document.getElementById("Exercises-Global").addEventListener("click", ShowExercisesGlobal);
    document.getElementById("User-Saved-Rutines").addEventListener("click", ShowRutineSaved);
    document.getElementById("add-rutine-item").addEventListener("click", RegisterNewRutine);

    function ShowUserRutinesList() {
        $.get("http://localhost:3000/api/user/"+user_id+"/rutines/saved",function(data){
            data.forEach(rutines => {
                $('#table').append("<tr><td id='rutine-list-item' onclick='ShowExercisesInRutine("+rutines.id+")'>"+rutines.name+"</td></tr>");              
            });
        });
    }
    ShowUserRutinesList();
})

function ShowRutinesGlobal() {
    document.getElementById('contenido').innerHTML = '<h2>Todas las Rutinas</h2>';
    $.get("http://localhost:3000/api/rutines",function(data){
        data.forEach(rutines => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+rutines.id+'" onClick="ShowExercisesInRutine('+rutines.id+')" ><img src="'+rutines.template+'" alt="Content"><div class="card-footer"><h3><b>'+rutines.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img src="/images/bookmark-regular.svg" alt=""></div><div class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div><div class="manage-element"><img src="/images/pen-solid.svg" alt=""></div><div class="manage-element"><img src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
        });
    });
}

function ShowRutineSaved() {
    document.getElementById('contenido').innerHTML = '<h2>Mis Rutinas</h2>';
    $.get("http://localhost:3000/api/user/"+user_id+"/rutines/saved",function(data){
        data.forEach(rutines => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+rutines.id+'" onClick="ShowExercisesInRutine('+rutines.id+')" ><img src="'+rutines.template+'" alt="Content"><div class="card-footer"><h3><b>'+rutines.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img src="/images/bookmark-solid.svg" alt=""></div><div class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div><div class="manage-element"><img src="/images/pen-solid.svg" alt=""></div><div class="manage-element"><img src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
        });
    });
}

function ShowExercisesGlobal() {
    document.getElementById('contenido').innerHTML = '<h2>Todos los Ejercicios</h2>';
    $.get("http://localhost:3000/api/exercises",function(data){
        data.forEach(exercises => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+exercises.id+'" onClick=""><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h3><b>'+exercises.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img src="/images/plus-circle-solid.svg" alt=""></div><div class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div></div></div>');
        });
    });
}

function ShowExercisesInRutine(rutineid) {
    $.get("http://localhost:3000/api/exercises/r/"+rutineid+"",function(data){
        document.getElementById('contenido').innerHTML = '<h2>Ejercicios de la rutina </h2>';
        data.forEach(exercises => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+exercises.id+'" onClick=""><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h3><b>'+exercises.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img src="/images/plus-circle-solid.svg" alt=""></div><div class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div></div></div>');
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

function RegisterNewRutine() {
    document.getElementById('contenido').innerHTML = '<div class="container"><div class="row mt-5"><div class="col-md-7"></div><div class="col-md-5"><div class="card"><div class="card-body"><form action="/api/rutines/add" method="POST"><div class="form-group"><input type="text" name="name" placeholder="Nombre" class="form-control"></div><div class="form-group"><input type="text" name="description" placeholder="Descripción (Opcional)" class="form-control"></div><div class="form-group"><input type="text" name="template" placeholder="link de miniatura (Opcional)" class="form-control"></div><input type="hidden" name="rutine_creator" value='+user_id+'><button type="submit" class="btn btn primary">Guardar</button></form></div></div></div></div></div>';
}
