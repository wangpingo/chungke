var db = require('./db');


exports.getAll = function (name, callback) {
    console.log("fffffffffffffffffff" + name);
    db.query("select admin_name,admin_pwd from t_admin where admin_name= ?", [name], callback);
};