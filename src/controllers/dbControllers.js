const controller = {};

/** --Envía al navegador el formulario de registro--*/
controller.users_register = function(req, res){
      res.render('user_register');

  };

/** --Registra un nuevo usuario en la BD--*/
controller.users_save = function(req, res){
    var data = req.body;
    req.getConnection(function(err, conn){
        if (err){
            res.send(console.log('Error al conectar con la BD. ERROR: '+err));
        }
        else{
            conn.query('INSERT INTO users SET ?', [data], function(err, users){
                if(err){
                    res.send(console.log("Error al ejecutar la orden Query"+err));
                }
                else{
                    console.log(req.body);
                    console.log('user registered!');
                }
                
            });
        }

        
    });


};

/** --Lista todos los usuarios registrados-- */
controller.users_list = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al ejecutar la orden Query"+err));
        }
        else{
            conn.query('SELECT * FROM users', function(err, users){
                if (err){
                    res.json(err);
                }
                res.send(users);
            });
        }
    });
  };

/** --Lista todos los ejercicios registrados-- */
controller.exercises_list = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al ejecutar la orden Query"+err));
        }
        else{
            conn.query('SELECT * FROM exercises', function(err, exercises){
                if (err){
                    res.json(err);
                }
                res.send(exercises);
            });
        }
    });
  };

/** --Lista todas las rutinas registradas-- */
controller.rutines_list = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al ejecutar la orden Query"+err));
        }
        else{
            conn.query('SELECT * FROM rutines', function(err, rutines){
                if (err){
                    res.json(err);
                }
                res.send(rutines);
            });
        }
    });
  };

module.exports = controller;