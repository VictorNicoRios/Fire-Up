const { Router } = require('express');
const express = require('express');
const router = express.Router();
const dbControllers = require('../controllers/dbControllers');


    /* --CONTROL DE RUTINAS-- */


/* INSERTA RUTINA EN LA BD */
router.post('/rutines/add', dbControllers.add_rutine);

/**LISTA GLOBAL DE RUTINAS*/
router.get('/rutines', dbControllers.list_rutines);

/**RUTINA SOLICITADA */
router.get('/rutines/:rutineid', dbControllers.get_rutine);

/**TODAS LAS RUTINAS NO GUARDADAS POR EL USUARIO */
router.get('/rutines/unsaved/:userid', dbControllers.unsaved_rutines);

/**GUARDA RUTINAS*/
router.post('/rutines/save/:rutineid/:userid', dbControllers.save_rutine);

/**RUTINAS GUARDADAS POR UN USUARIO */
router.get('/rutines/saved/:userid', dbControllers.saved_rutines);

/**REMUEVE DE LAS RUTINAS GUARDADAS POR EL USUARIO */
router.delete('/rutines/remove/:rutineid/:userid', dbControllers.remove_rutine);

/**MODIFICA LA RUTINA*/
router.post('/rutines/update/:rutineid', dbControllers.update_rutine)

/**BORRA POR COMPLETO LA RUTINA */
router.delete('/rutines/delete/:rutineid', dbControllers.delete_rutine);





    /* --CONTROL DE EJERCICIOS-- */


/**LISTA GLOBAL DE EJERCICIOS */
//router.get('/exercises', dbControllers.list_exercises);

/**EJERCICIO SOLICITADO */
//router.get('/exercise/:exerciseid', dbControllers.get_exercises);

/**EJERCICIOS EN RUTINA SOLICITADA */
//router.get('/exercises/r/:rutineid', dbControllers.exercises_on_Rutine);

/**EJERCICIOS CREADOS POR UN USUARIO */
//router.get('/users/exercises/created', dbControllers.users_exercisies_created);







//router.post('/exercises/:data', dbControllers.exercises_save);

/**GUARDA EJERCICIO EN UNA RUTINA */
//router.post('/exercises/:rutine/:id', dbControllers.exercises_save_rutine);



//router.post('delete/exercises/:id', dbControllers.exercises_delete);




/**LISTA GLOBAL DE USUARIOS */
router.get('/users', dbControllers.users_list);

/**USUARIO SOLICITADO */
router.get('/user/:id', dbControllers.users_list_id);

/**RUTINAS CREADAS POR UN USUARIO */
//router.get('/user/:id/rutines/created', dbControllers.users_rutines_created);

module.exports = router;