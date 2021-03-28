const { query } = require("express");
const controller = {};

/**         ---Control de usuarios---            */

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

/** --Devuelve todos los usuarios registrados-- */
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

/** --Devuelve un usuario solicitado-- */ 
controller.users_list_id = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM users WHERE users.id = ?', [req.params.id], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
}

/** --Devuelve las rutinas guardadas por un usuario--  */
controller.users_rutines_saved = function (req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM rutines INNER JOIN users_rutines ON rutines.id = users_rutines.rutine_id WHERE users_rutines.user_id = ?;', [req.params.id], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });    
}



/**         ---Control de ejercicios---            */

/** --Devuelve todos los ejercicios registrados-- */
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

/** --Devuelve un ejercicio solicitado-- */ 
controller.exercises_list_id = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM exercises WHERE exercises.id = ?', [req.params.id], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
  };

/** --Devuelve los ejercicios de una rutina-- */ 
controller.exercises_on_Rutine_id = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM exercises INNER JOIN exercises_rutines on exercises.id = exercises_rutines.id WHERE exercises_rutines.rutine_id = ?', [req.params.id], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
  };



/**         ---Control de rutinas---            */

/** --Devuelve todas las rutinas registradas-- */
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

/** --Devuelve una rutina solicitada- */ 
controller.rutines_list_id = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM rutines WHERE rutines.id = ?', [req.params.id], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
  };

/** --Registra una nueva rutina en la BD--*/
controller.rutines_save = function(req, res){
    var data = req.body;
    if(data.template == ''){
        data.template = "https://media-exp1.licdn.com/dms/image/C560BAQEFsdzq5-oHeQ/company-logo_200_200/0/1559760197164?e=2159024400&v=beta&t=Joejkcr7SF9Co4mLu_xqWilu5u6mAZFH93Op1pRxeN4"
    }
    req.getConnection(function(err, conn){
        if (err){
            res.send(console.log('Error al conectar con la BD. ERROR: '+err));
        }
        else{
            conn.query('INSERT INTO rutines SET ?', [data], function(err, rows){
                if(err){
                    res.send(console.log("Error al ejecutar la orden Query"+err));
                }
                else{
                    res.render("load_succesfull");
                }
                
            });
        }

        
    });


};
module.exports = controller;