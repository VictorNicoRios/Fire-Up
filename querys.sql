/*		--- INSERTAR NUEVOS REGISTROS EN TABLAS ---		*/


/*INSERTAR NUEVO USUARIO EN LA TABLA USUARIOS
INSERT INTO users(name, password) VALUES ('','');


/*INSERTAR NUEVA RUTINA EN LA TABLA RUTINA Y EL ID DEL USUARIO CREADOR
INSERT INTO rutines(name, rutine_creator) VALUES ('', '' );

/*INSERTAR NUEVO REGISTRO DE LA RUTINA GUARDADA Y EL USUARIO A LA QUE PERTENECE EN LA TABLA USERS_RUTINES
INSERT INTO users_rutines(rutine_id, user_id) VALUES ('','');


/*INSERTAR NUEVO EJERCICIO EN LA TABLA EXERCICIOS Y EL ID DEL USUARIO CREADOR
INSERT INTO exercises(name, creator_id) VALUES ('', '' );

/*INSERTAR NUEVO REGISTRO DEL EJERCICIO GUARDADO Y LA RUTINA AL QUE PERTENECE EN LA TABLA EXERCISES_RUTINES
INSERT INTO exercises_rutines(exercise_id, rutine_id) VALUES ('','');



/*	--- CONSULTAS SIMPLES ---	


SELECT * FROM users;

SELECT * FROM rutines;

SELECT * FROM users_rutines;

SELECT * FROM exercises;

SELECT * FROM exercises_rutines;


/*		--- CONSULTAS COMPLEJAS ---		*/
/*SELECCIONA LAS RUTINAS GUARDADAS POR UN USUARIO
SELECT rutines.name FROM rutines INNER JOIN users_rutines ON rutines.id = users_rutines.rutine_id WHERE users_rutines.user_id =1 ;

/*SELECCIONA LOS EJERCICIOS DE UNA RUTINA
SELECT exercises.name FROM exercises INNER JOIN exercises_rutines on exercises.id = exercises_rutines.id WHERE exercises_rutines.rutine_id = 1;



/*SELECCIONA LOS NOMBRES DE LAS RUTINAS CREADAS POR UN USUARIO
SELECT rutines.name FROM rutines INNER JOIN users_rutines ON rutines.id = users_rutines.rutine_id WHERE users_rutines.user_id=1;

/*SELECCIONA LOS NOMBRES DE LOS EJERCICIOS INCLUIDOS EN UNA RUTINA
SELECT exercises.name FROM exercises INNER JOIN exercises_rutines ON exercises.id = exercises_rutines.exercise_id WHERE exercises_rutines.rutine_id=1;



/*SELECCIONA LOS NOMBRES DE LAS RUTINAS GUARDADAS POR TODOS LOS USUARIOS JUNTO AL NOMBRE DEL USUARIO CREADOR
SELECT rutines.name, users.name FROM rutines INNER JOIN users_rutines ON rutines.id = users_rutines.rutine_id INNER JOIN users ON users_rutines.user_id = users.id;

/*SELECCIONA LOS NOMBRES DE LAS RUTINAS GUARDADAS POR UN ÚNICO USUARIO JUNTO EL NOMBRE DEL USUARIO
SELECT rutines.name, user.name FROM rutines INNER JOIN users_rutines ON rutines.id = users_rutines.rutine_id WHERE users_rutines.user_id=1 INNER JOIN users on users_rutines.user_id = users.id;



/*SELECCIONA LOS NOMBRES DE LOS EJERCICIOS CREADOS POR TODOS LOS USUARIOS JUNTO AL NOMBRE DEL USUARIO CREADOR
SELECT exercises.name, users.name FROM exercises INNER JOIN users_exercises ON exercises.id = users_exercises.exercise_id INNER JOIN users on users_exercises.user_id = users.id;

/*SELECCIONA LOS NOMBRES DE LOS EJERCICIOS CREADOS POR UN ÚNICO USUARIO JUNTO EL NOMBRE DEL USUARIO
SELECT exercises.name, user.name FROM exercises INNER JOIN users_exercises ON exercises.id = users_exercises.exercise_id WHERE users_exercises.user_id=1 INNER JOIN users on users_exercises.user_id = users.id;