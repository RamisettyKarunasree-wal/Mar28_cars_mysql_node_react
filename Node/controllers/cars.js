const connector = require('../connect');
let sql;
exports.createCarTable = (req, res) => {
  sql = `create table cars (id int PRIMARY KEY AUTO_INCREMENT,carname varchar(100),color ENUM('black','blue','grey'),price int,instock boolean)`;
  connector.query(sql, (err, results) => {
    res.json({ err, results });
  });
};
exports.getCars = (req, res) => {
  sql = `select * from cars`;
  connector.query(sql, (err, results) => {
    res.json({ err, results });
  });
};
exports.createCar = (req, res) => {
  const { carname, color, price, instock } = req.body;
  sql = `insert into cars (carname,color,price,instock) values(?,?,?,?)`;
  connector.query(sql, [carname, color, price, instock], (err, results) => {
    res.json({ err, results });
  });
};
exports.deleteAllCars = (req, res) => {
  sql = `delete from cars`;
  connector.query(sql, (err, results) => {
    res.json({ err, results });
  });
};
exports.viewCar = (req, res) => {
  sql = `select * from cars where id=?`;
  connector.query(sql, [Number(req.params.id)], (err, results) => {
    res.json({ err, results });
  });
};
exports.deleteCar = (req, res) => {
  sql = `delete from cars where id=?`;
  connector.query(sql, [Number(req.params.id)], (err, results) => {
    res.json({ err, results });
  });
};
exports.updateCar = (req, res) => {
  const { carname, color, price, instock } = req.body;
  sql = `update cars set carname=?,color=?,price=?,instock=? where id=?`;
  connector.query(
    sql,
    [carname, color, price, instock, Number(req.params.id)],
    (err, results) => {
      res.json({ err, results });
    }
  );
};
