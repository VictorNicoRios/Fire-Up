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

/**MODIFICA LA RUTINA*/
router.post('/rutines/update/:rutineid', dbControllers.update_rutine)

/**REMUEVE DE LAS RUTINAS GUARDADAS POR EL USUARIO */
router.delete('/rutines/remove/:rutineid/:userid', dbControllers.remove_rutine);

/**BORRA LA RUTINA DE LA BD*/
router.delete('/rutines/delete/:rutineid', dbControllers.delete_rutine);





    /* --CONTROL DE EJERCICIOS-- */

/**CREA EJERCICIO NUEVO EN LA BD */
router.post('/exercises/add', dbControllers.add_exercise);

/**LISTA GLOBAL DE EJERCICIOS */
router.get('/exercises', dbControllers.list_exercises);

/**EJERCICIOS EN RUTINA SOLICITADA */
router.get('/exercises/r/:rutineid', dbControllers.exercises_on_Rutine);

/**GUARDA EJERCICIO EN UNA RUTINA */
router.post('/exercises/save', dbControllers.add_exercise_to);

/**REMUEVE ELEMENTO DE UNA RUTINA*/
router.delete('/exercises/remove/:elementid/:rutineid', dbControllers.remove_exercise_from);

/**REMUEVE EJERCICIO DE LA BD*/
router.delete('/exercises/delete/:exerciseid', dbControllers.delete_exercise);

module.exports = router;