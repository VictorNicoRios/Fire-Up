const { Router } = require('express');
const express = require('express');
const router = express.Router();
const dbControllers = require('../controllers/dbControllers');

/* DEVUELVE UN RAW JSON DE LA BD */

/**LISTA GLOBAL DE USUARIOS */
router.get('/users', dbControllers.users_list);

/**USUARIO SOLICITADO */
router.get('/user/:id', dbControllers.users_list_id);

/**RUTINAS CREADAS POR UN USUARIO */
//router.get('/user/:id/rutines/created', dbControllers.users_rutines_created);

/**RUTINAS GUARDADAS POR UN USUARIO */
router.get('/user/:id/rutines/saved', dbControllers.users_rutines_saved);

/**EJERCICIOS CREADOS POR UN USUARIO */
//router.get('/users/exercises/created', dbControllers.users_exercisies_created);

/**LISTA GLOBAL DE EJERCICIOS */
router.get('/exercises', dbControllers.exercises_list);

/**EJERCICIO SOLICITADO */
router.get('/exercises/:id', dbControllers.exercises_list_id);

/**EJERCICIOS EN RUTINA SOLICITADA */
router.get('/exercises/r/:id', dbControllers.exercises_on_Rutine_id);

/**LISTA GLOBAL DE EJERCICIOS */
router.get('/rutines', dbControllers.rutines_list);

/**RUTINA SOLICITADA */
router.get('/rutines/:id', dbControllers.rutines_list_id);





/* INSERTA EN LA BD */
router.post('/rutines/add', dbControllers.rutines_save);

/**GUARDA EN LAS RUTINAS DEL USUARIO */
//router.post('/rutines/:user/:id', dbControllers.rutines_save_user);

//router.post('/exercises/:data', dbControllers.exercises_save);

/**GUARDA EJERCICIO EN UNA RUTINA */
//router.post('/exercises/:rutine/:id', dbControllers.exercises_save_rutine);



/**BORRA DE LA BD */
//router.post('delete/rutines/:id', dbControllers.rutines_delete);

//router.post('delete/exercises/:id', dbControllers.exercises_delete);

module.exports = router;