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
    var data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO customers SET ?', [data], (err, customers) => {
            console.log(req.body);
            res.send('works ');
        })
    })
};

module.exports = controller
