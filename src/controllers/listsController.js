const controller = {}

controller.list = (req, res) => {
    req.getConnection ((err, conn) => {
        conn.query('SELECT * FROM test', (err, test) => {
            if (err){
                res.json(err);
            }
            //console.log(test)
            res.render('lists', {
                data: test
            });
        });
    });
  };

module.exports = controller