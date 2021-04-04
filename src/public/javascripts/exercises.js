var user_id = 1;

$(document).ready(()=>{
    document.getElementById("Exercises-Global").addEventListener("click", ShowExercisesGlobal);
    if(document.URL=='http://localhost:3000/fire-up/dashboard/exercises'){
        ShowExercisesGlobal()
    }
})

function ShowExercisesGlobal() {
    document.getElementById('contenido').innerHTML = '<h2>Todos los Ejercicios</h2>';
    $.get("http://localhost:3000/api/exercises",function(data){
        data.forEach(exercises => {
            $('#contenido').append('<div class="card"><div class="card-show" id="'+exercises.id+'" onClick=""><img src="'+exercises.template+'" alt="Content"><div class="card-footer"><h3><b>'+exercises.name+'</b></h3></div></div><div class="manage-element-container"><div class="manage-element"><img src="/images/plus-circle-solid.svg" alt=""></div><div class="manage-element"><img src="/images/info-circle-solid.svg" alt=""></div></div></div>');
        });
    });
}
