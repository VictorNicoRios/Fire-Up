var user_id = 1;

$(document).ready(()=>{
    document.getElementById("Rutines-Global").addEventListener("click", ShowRutines);
    document.getElementById("User-Saved-Rutines").addEventListener("click", ShowRutinesSaved);

    function ShowSavedRutinesList() {
        $.get('http://localhost:3000/api/rutines/saved/'+user_id+'',function(data){
            data.forEach(rutines => {
                $('#table').append("<tr><td id='User-Saved-Rutines' onclick='ShowExercisesInRutine("+rutines.id+")'>"+rutines.name+"</td></tr>");              
            });
        });
    }
    ShowSavedRutinesList();
    if(document.URL=='http://localhost:3000/fire-up/dashboard/rutines'){
        ShowRutines()
    }
    if(document.URL=='http://localhost:3000/fire-up/dashboard/'){
        document.getElementById("contenido").innerHTML = ""
    }
})

function ShowRutines() {
    
    /** --Muestra El título del contenido junto con el botón para agregar una nueva a la bd-- */
    document.getElementById('contenido').innerHTML = '<h2>Todas las Rutinas</h2><br><div id="add-rutine-global" class="card"><img onclick="RegisterRutine()" id="add-item-image" src="/images/plus-circle-solid.svg" alt="images"><div><h3><b>Agregar nueva rutina a la BD</b></h3></div></div>';
    
    /** --Muestra las rutinas ya guardadas-- */
    $('#contenido').append("<div><h3>hola</h3></div>")
    $.get('http://localhost:3000/api/rutines/saved/'+user_id, function(data){
        data.forEach(element => {
            $('#contenido').append('<div class="card"><div id="'+element.id+'" class="card-show" onClick="ShowExercisesInRutine('+element.id+')" ><img src="'+element.template+'" alt="Content"><div class="card-footer"><h3><b>'+element.name+'</b></h3></div></div><div class="manage-element-container"><div id = "RemoveBookmark" class="manage-element"><img onclick="RemoveRutine('+element.id+')" src="/images/bookmark-solid.svg" alt=""></div><div id = "InfoElement" class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div><div id = "UpdateElement" class="manage-element"><img onclick="UpdateRutine('+element.id+')" src="/images/pen-solid.svg" alt=""></div><div id = "DeleteElement" class="manage-element"><img onclick="DeleteRutine('+element.id+')" src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
        });
    });
    
    /** --Muestralas rutinas no guardadas-- */
    $.get('http://localhost:3000/api/rutines/unsaved/'+user_id, function(data){
        data.forEach(element => {
            $('#contenido').append('<div class="card"><div id="'+element.id+'" class="card-show" onClick="ShowExercisesInRutine('+element.id+')" ><img src="'+element.template+'" alt="Content"><div class="card-footer"><h3><b>'+element.name+'</b></h3></div></div><div class="manage-element-container"><div id = "AddBookmark" class="manage-element"><img onclick="SaveRutine('+element.id+')" src="/images/bookmark-regular.svg" alt=""></div><div id = "InfoElement" class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div><div id = "UpdateElement"  class="manage-element"><img onclick="UpdateRutine('+element.id+')" src="/images/pen-solid.svg" alt=""></div><div id = "DeleteElement" class="manage-element"><img onclick="DeleteRutine('+element.id+')" src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
        })
    });
}

function ShowRutinesSaved() {
    document.getElementById('contenido').innerHTML = "";
    $.get('http://localhost:3000/api/rutines/saved/'+user_id, function(data){
        data.forEach(element => {
            $('#contenido').append('<div class="card"><div id="'+element.id+'" class="card-show" onClick="ShowExercisesInRutine('+element.id+')" ><img src="'+element.template+'" alt="Content"><div class="card-footer"><h3><b>'+element.name+'</b></h3></div></div><div class="manage-element-container"><div id = "RemoveBookmark" class="manage-element"><img onclick="RemoveRutine('+element.id+')" src="/images/bookmark-solid.svg" alt=""></div><div id = "InfoElement" class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div><div id = "UpdateElement" class="manage-element"><img onclick="UpdateRutine('+element.id+')" src="/images/pen-solid.svg" alt=""></div><div id = "DeleteElement" class="manage-element"><img onclick="DeleteRutine('+element.id+')" src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
        });
    });
}

function ShowRutinesUnsaved() {
    $.get('http://localhost:3000/api/rutines/unsaved/'+user_id, function(data){
        if (Object.keys(data).length == 0){
            document.getElementById('contenido').innerHTML = "No quedan rutinas sin guardar"
        }
        else{
            data.forEach(element => {
                $('#contenido').append('<div class="card"><div id="'+element.id+'" class="card-show" onClick="ShowExercisesInRutine('+element.id+')" ><img src="'+element.template+'" alt="Content"><div class="card-footer"><h3><b>'+element.name+'</b></h3></div></div><div class="manage-element-container"><div id = "AddBookmark" class="manage-element"><img onclick="SaveRutine('+element.id+')" src="/images/bookmark-regular.svg" alt=""></div><div id = "InfoElement" class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div><div id = "UpdateElement"  class="manage-element"><img onclick="UpdateRutine('+element.id+')" src="/images/pen-solid.svg" alt=""></div><div id = "DeleteElement" class="manage-element"><img onclick="DeleteRutine('+element.id+')" src="/images/trash-alt-solid.svg" alt=""></div></div></div>');
            })
        }
        
    });
}

function ShowExercisesInRutine(rutineid) {
    $.get("http://localhost:3000/api/exercises/r/"+rutineid+"",function(data){
        document.getElementById('contenido').innerHTML = '<h2>Ejercicios de la rutina </h2>';
        data.forEach(exercises => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+exercises.id+'"><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h3><b>'+exercises.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img src="/images/plus-circle-solid.svg" alt=""></div><div class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div></div></div>');
        });
    });
} 

function RegisterRutine() {
    /**Formulario de registro de la rutina */
    document.getElementById('contenido').innerHTML = '<div><h2>Agregar Nueva Rutina a la BD</h2></div><div><button onclick="ShowRutinesGlobal()"><-- Atrás</button></div><div class="container"><div class="row mt-5"><div class="col-md-7"></div><div class="col-md-5"><div class="card"><div class="card-body"><form action="/api/rutines/add" method="POST"><div class="form-group"><input type="text" name="name" placeholder="Nombre" class="form-control"></div><div class="form-group"><input type="text" name="description" placeholder="Descripción (Opcional)" class="form-control"></div><div class="form-group"><input type="text" name="template" placeholder="link de miniatura (Opcional)" class="form-control"></div><input type="hidden" name="rutine_creator" value='+user_id+'><button type="submit" class="btn btn primary">Guardar</button></form></div></div></div></div></div>';
}

function SaveRutineProcess(callback) {
    document.getElementById('contenido').innerHTML = '<h2>Guardar nueva rutina</h2>'
}

function SaveRutine(rutineid) {
    $.ajax({
        url: "http://localhost:3000/api/rutines/save/"+rutineid + "/" + user_id,
        type: 'post',
        error: err => {
            alert("No se pudo agregar la rutina. ERROR: " + err.status)
            console.log(err);
        },
        success: resultado => {
            $(document).ajaxStop(function(){
                window.location.reload();
            });
        }
    });
}

function RemoveRutine(rutineid) {
    $.ajax({
        url: "http://localhost:3000/api/rutines/remove/"+rutineid + "/" + user_id,
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

function UpdateRutine(rutineid) {
    $('#contenido').innerHTML = ""
    document.getElementById('contenido').innerHTML = '<div class="container"><div class="row mt-5"><div class="col-md-7"></div><div class="col-md-5"><div class="card"><div class="card-body"><form action="/api/rutines/update/'+rutineid+'" method="post"><div class="form-group"><input type="text" name="name" placeholder="Nombre" class="form-control"></div><div class="form-group"><input type="text" name="description" placeholder="Descripción (Opcional)" class="form-control"></div><div class="form-group"><input type="text" name="template" placeholder="link de miniatura (Opcional)" class="form-control"></div><input type="hidden" name="rutine_creator" value='+user_id+'><button type="submit">Guardar</button></form></div></div></div></div></div>';
}

function DeleteRutine(rutineid) {
    var confirm = window.confirm('Seguro que queres eliminar?')
    if (confirm==true){
        $.ajax({
            url: 'http://localhost:3000/api/rutines/delete/' + rutineid,
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