const { query } = require("express");
const { router } = require("../../app");
const controller = {};
var rid = 79;


/**         ---Control de rutinas---            */

/** --Registra una nueva rutina en la BD--*/
controller.add_rutine = function(req, res){
    var data = req.body;
    
    if(data.template == ''){
        data.template = "https://media-exp1.licdn.com/dms/image/C560BAQEFsdzq5-oHeQ/company-logo_200_200/0/1559760197164?e=2159024400&v=beta&t=Joejkcr7SF9Co4mLu_xqWilu5u6mAZFH93Op1pRxeN4"
    }
    if(data.name == ''){
        data.name = 'Rutina nro '+rid
        rid +=1;
    }
    req.getConnection(function(err, conn){
        conn.query('INSERT INTO rutines SET ?;', [data], function(err, rows){
            res.redirect("/fire-up/dashboard/rutines")
        });

    });
};

/** --Devuelve todas las rutinas registradas-- */
controller.list_rutines = function(req, res) {
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

/** --Devuelve una rutina solicitada-- */ 
controller.get_rutine = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM rutines WHERE rutines.id = ?', [req.params.rutineid], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
  };

/** --Devuelve todas las rutinas no guardadas por el usuario-- */ 
controller.unsaved_rutines = function(req, res) {
    var userid = req.params.userid
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT rutines.* FROM rutines LEFT JOIN users_rutines ON rutines.id = users_rutines.rutine_id WHERE users_rutines.rutine_id IS NULL;', [userid], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
  };

/** --Registra una nueva rutina en el usuario--*/
controller.save_rutine = function(req, res){
    req.getConnection(function(err, conn){
        if (err){
            res.send(console.log('Error al conectar con la BD. ERROR: '+err));
        }
        else{
            conn.query('INSERT INTO users_rutines(rutine_id, user_id) VALUES (?, ?);', [req.params.rutineid, req.params.userid], function(err, rows){
                if(err){
                    console.log("Error al ejecutar la orden Query"+err);
                }
                res.sendStatus(200);
            });
        } 
    });
};

/** --Devuelve las rutinas guardadas por un usuario--  */
controller.saved_rutines = function (req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT rutines.id, rutines.name, rutines.template FROM rutines INNER JOIN users_rutines ON rutines.id = users_rutines.rutine_id WHERE users_rutines.user_id = ?;', [req.params.userid], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });    
}

/** --Remueve de las rutinas guardadas por usuario--*/
controller.remove_rutine = function(req, res){
    req.getConnection(function(err, conn){
        if (err){
            res.send(console.log('Error al conectar con la BD. ERROR: '+err));
        }
        else{
            conn.query('DELETE FROM users_rutines WHERE rutine_id = AND user_id = ;', [req.params.rutineid, req.params.userid], function(err, rows){
                if(err){
                    console.log("Error al ejecutar la orden Query"+err);
                }
                res.sendStatus(200);
            });
        } 
    });
};

/** --Modifica una rutina-- */
controller.update_rutine = function(req, res){
    var rid = req.params.rutineid
    var rdata = req.body
    if (rdata.name == ''){
        rdata.name = 'Rutina nro '+ rid
    }
    if (rdata.template == ''){
        rdata.template = 'https://media-exp1.licdn.com/dms/image/C560BAQEFsdzq5-oHeQ/company-logo_200_200/0/1559760197164?e=2159024400&v=beta&t=Joejkcr7SF9Co4mLu_xqWilu5u6mAZFH93Op1pRxeN4'
    }
    console.log("---Modificando la rutine con id: "+rid+" y nombre: "+rdata.name);
    req.getConnection(function(err, conn){
        if (err){
            res.send(console.log('Error al conectar con la BD. ERROR: '+err));
        }
        else{
            conn.query('UPDATE rutines SET ? WHERE id = ? ;', [rdata, rid],function(err, rows){
                if(err){
                    console.log("--Error al ejecutar la orden Query.-- "+err)
                    res.sendStatus(500)
                }else{
                    res.redirect("/fire-up/dashboard/rutines");
                }
                
            });
        } 
    });
};

/** --Elimina una rutina en la BD-- */
controller.delete_rutine = function(req, res){
    req.getConnection(function(err, conn){
        if (err){
            res.send(console.log('Error al conectar con la BD. ERROR: '+err));
        }
        else{
            conn.query('DELETE FROM rutines WHERE id = ? ;', [req.params.rutineid], function(err, rows){
                if(err){
                    console.log(err)
                }
            }),
            conn.query('DELETE FROM users_rutines WHERE rutine_id = ? ;', [req.params.rutineid], function(err, rows){
                if(err){
                    console.log(err)
                }
            }),
            res.sendStatus(200);
        };
    }); 
}



















/**         ---Control de ejercicios---            */

/** --Devuelve todos los ejercicios registrados-- */
controller.list_exercises = function(req, res) {
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
controller.get_exercise = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM exercises WHERE exercises.id = ?', [req.params.exerciseid], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
  };

/** --Devuelve los ejercicios de una rutina-- */ 
controller.exercises_on_Rutine = function(req, res) {
    req.getConnection (function(err, conn){
        if(err){
            res.send(console.log("Error al Conectar con la DB"+err));
        }
        else{
            conn.query('SELECT * FROM exercises INNER JOIN exercises_rutines on exercises.id = exercises_rutines.id WHERE exercises_rutines.rutine_id = ?', [req.params.rutineid], function(err, rows){
                if (err){
                    res.json("Error al ejecutar la orden Query"+err);
                }
                res.send(rows);
            });
        }
    });
  };













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


module.exports = controller;