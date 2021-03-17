const controller = {}

controller.list = (req, res) => {
    req.getConnection ((err, conn) => {
        conn.query('SELECT * FROM customers', (err, customers) => {
            if (err){
                res.json(err);
            }
            res.render('lists', {
                data: customers
            });
        });
    });
  };

controller.save = (req, res) => {
    res.send('works2');
    /*
    var data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO test SET ?', [data], (err, rows) => {
            console.log(customer);
            res.send('works');
        })
    })*/
}

module.exports = controller
