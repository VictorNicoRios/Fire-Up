const controller = {};

/** --Envía al navegador el formulario de registro--*/
  controller.register = function(req, res){
      res.render('user_register');

  };


/** --Registra un nuevo usuario en la BD--*/
controller.save = function(req, res){
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
                
            })
        }

        
    })


};

/** --Lista todos los usuarios registrados-- */
controller.list = function(req, res) {
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





controller.a = function(req, res){
    var data = req.body;
    req.getConnection(function(err, conn){
            myquery="/home/nico/Desktop/API/database/db.sql";
            conn.query(myquery, function(err, result){
            console.log(result[1]);
            console.log(result[0].rutine_name);

            })

    }
    )


};

module.exports = controller;