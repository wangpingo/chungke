var productModel = require('../models/productModel');

exports.list = function(req, res){
    name="xiaoming";
    productModel.getAll(name,function(rs){
        res.send(rs);
    });
};