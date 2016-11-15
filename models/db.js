var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'maker'
});

exports.query = function (sql, data, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            //callback(err, null, null);
        } else {
            if(typeof data == 'function'){
                callback = data;
                data = null;
            }
            console.log(data);
            conn.query(sql, data, function (qerr, result) {
                //释放连接
                conn.release();
                //事件驱动回调
                console.log(sql);
                console.log(result);

                callback(result);
            });
        }
    });
};