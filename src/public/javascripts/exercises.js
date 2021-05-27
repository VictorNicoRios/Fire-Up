var user_id = 1; //root user

$(document).ready(()=>{
    document.getElementById("Exercises-Global").addEventListener("click", ShowExercisesGlobal);
    if(document.URL=='http://localhost:3000/fire-up/dashboard/exercises'){
        ShowExercisesGlobal()
    }
})

function AddExercise(rutineid){
    /**Formulario de registro del ejercicio */
    document.getElementById('contenido').innerHTML = '<div><h2>Agregar Nuevo Ejercicio a la BD</h2></div><div><button onclick="ShowExercisesGlobal('+rutineid+')"><-- Atrás</button></div><div class="container"><div class="row mt-5"><div class="col-md-7"></div><div class="col-md-5"><div class="card"><div class="card-body"><form action="/api/exercises/add" method="POST"><div class="form-group"><input type="text" name="name" placeholder="Nombre" class="form-control"></div><div class="form-group"><input type="text" name="description" placeholder="Descripción (Opcional)" class="form-control"></div><div class="form-group"><input type="text" name="template" placeholder="link de miniatura (Opcional)" class="form-control"></div><button type="submit" class="btn btn primary">Guardar</button></form></div></div></div></div></div>';
}

function ShowExercisesGlobal(rutineid) {
    document.getElementById('contenido').innerHTML = '<h2>Todos los Ejercicios</h2><div id="add-exercise-global" class="card"><img onclick="AddExercise('+rutineid+')" id="add-item-image" src="/images/plus-circle-solid.svg" alt="images"><div><h3><b>Agregar nuevo ejercicio a la BD</b></h3></div></div>';
    ShowExBoxelDefault()
}

function AddExerciseToRutine(rutineid, exerciseid){
    /**Formulario de registro del ejercicio en la rutina */
    document.getElementById('contenido').innerHTML = '<div><h2>Agregar Nuevo Ejercicio a la Rutina</h2></div><div><button onclick="ShowExercisesInRutine('+rutineid+')"><-- Atrás</button></div><div class="container"><div class="row mt-5"><div class="col-md-7"></div><div class="col-md-5"><div class="card"><div class="card-body"><form action="/api/exercises/save" method="POST"><div class="form-group"><input type="number" name="series" placeholder="N de series" class="form-control"></div><div class="form-group"><input type="number" name="reps" placeholder="N de repeticiones" class="form-control"></div><div class="form-group"><input type="number" name="time" placeholder="Tiempo de ejecución" class="form-control"></div><input type="hidden" name="exercise_id" value='+exerciseid+'><input type="hidden" name="rutine_id" value='+rutineid+'><button type="submit" class="btn btn primary">Guardar</button></form></div></div></div></div></div>';
}

function ShowExercisesInRutine(rutineid) {
    $.get("http://localhost:3000/api/exercises/r/"+rutineid+"",function(data){
        document.getElementById('contenido').innerHTML = '<h2>Ejercicios de la rutina</h2>';
        data.forEach(exercises => {
            if(exercises.time == 0 || exercises.time == 1){
                exercises.time=null
            }
            ShowExinRutine(exercises)    
        });
        /** Botón para escojer un ejercicio y agregar a la rutina */
        $('#contenido').append('<div id="add-rutine-global" class="card"><img onclick="ShowExBoxelPick('+rutineid+')" id="add-item-image" src="/images/plus-circle-solid.svg" alt="images"><div><h3><b>Agregar ejercicio a la rutina</b></h3></div></div>')
    });

} 

function RemoveExcerciseFromRutine(elementid, rutineid){
    $.ajax({
        url: "http://localhost:3000/api/exercises/remove/"+elementid+"/"+rutineid,
        type: 'DELETE',
        error: err => {
            alert("No se pudo remover la rutina. ERROR: " + err.status)
            console.log(err);
        },
        success: resultado => {
            $(document).ajaxStop(function(){
                window.location.reload();
            });
        }
    });
}

function DeleteExercise(exerciseid){
    var confirm = window.confirm('Seguro que queres eliminar completamente el ejercicio de la Base de Datos? Esta acción no se puede deshacer')
    if (confirm==true){
        $.ajax({
            url: 'http://localhost:3000/api/exercises/delete/' + exerciseid,
            type: 'DELETE',
            error: err => {
                alert("No se pudo eliminar la rutina. ERROR: " + err)
            },
            success: resultado => {
                $(document).ajaxStop(function(){
                    window.location.reload();
                });
            }
        });
    } 
}

function ShowExBoxelDefault(){
    $.get("http://localhost:3000/api/exercises",function(data){
        data.forEach(exercises => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+exercises.id+'"><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h3><b>'+exercises.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img title="Descripción: '+exercises.description+'" src="/images/info-circle-solid.svg" alt=""></div><div id = "DeleteElement" class="manage-element"><img title="Eliminar completamente el ejercicio" onclick="DeleteExercise('+exercises.id+')" src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
        });
    });
}

function ShowExBoxelPick(rutineid){
    document.getElementById('contenido').innerHTML = ''
    $.get("http://localhost:3000/api/exercises",function(data){
        data.forEach(exercises => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+exercises.id+'"><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h3><b>'+exercises.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img title="Agregar ejercicio a la rutina" onclick="AddExerciseToRutine('+rutineid+','+exercises.id+')" src="/images/plus-circle-solid.svg" alt=""></div><div class="manage-element"><img title="Descripción: '+exercises.description+'" src="/images/info-circle-solid.svg" alt=""></div><div id = "DeleteElement" class="manage-element"><img title="Eliminar completamente el ejercicio" onclick="DeleteExercise('+exercises.id+')" src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
        });
    });
}

function ShowExinRutine(exercises){
    $('#contenido').append('<div class="card"><div class="card-show" id="'+exercises.id+'"><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h3><b>'+exercises.name+'</b></h3><h4>Series: '+exercises.series+' Reps: '+exercises.reps+'<br>Tiempo (seg): '+exercises.time+'</h4></div></div><div class="manage-element-container"><div class="manage-element"><img title="Remover ejercicio de la rutina" onclick="RemoveExcerciseFromRutine('+exercises.id+', '+exercises.rutine_id+')" src="/images/minus-circle-solid.svg" alt=""></div><div class="manage-element"><img title="Id: '+exercises.exercise_id+' Description: '+exercises.description+'" src="/images/info-circle-solid.svg" alt=""></div></div></div>');
}