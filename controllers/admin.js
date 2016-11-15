/**
 * Created by 35031 on 2016/5/23.
 */
var fs = require('fs');
var path = require('path');

//var multiparty  =require('connect-multiparty');
var adminModel = require('../models/adminModel');
exports.saveArticle = function (req, res) {
    var myDate = new Date();
    var a = myDate.getTime();
    var fileName = a + ".jpg";
    if (req.files.filePic != 'undefined') {

        var tempPath = req.files.filePic.path;
        var updateLoad = path.join(__dirname, "..\\uploadfiles\\images", fileName);
        var readable = fs.createReadStream(tempPath);
        var writable = fs.createWriteStream(updateLoad);
        readable.pipe(writable);


        var title = req.body.t_title;
        var author = req.body.t_author;
        var intro = req.body.t_intro;
        var content = req.body.t_content;

        adminModel.saveAdminArticle(title, fileName, author, intro, content, function (rs) {
            res.redirect('/admins/admin-form');
        });

        //res.send(updateLoad);
    }
}
exports.selectArticle = function (req, res) {
    adminModel.getSelectAdminArticle(function (rs) {

        res.json(rs);
    });

}
exports.login = function (req, res) {

    //res.render('admin-login');
    if (req.session && req.session.loginUser) {
        res.render('admin-index', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.findNull = function (req, res) {
    //res.render('admin-404');
    if (req.session && req.session.loginUser) {
        res.render('admin-404', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.form = function (req, res) {
    if (req.session && req.session.loginUser) {
    res.render('admin-form',{tab:req.query.tab});
    }
    else {
        res.render('admin-login');
    }
};
exports.gallery = function (req, res) {
   // res.render('admin-gallery');
    if (req.session && req.session.loginUser) {
        res.render('admin-gallery', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.help = function (req, res) {
    //res.render('admin-help');
    if (req.session && req.session.loginUser) {
        res.render('admin-help', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.index = function (req, res) {
   // res.render('admin-index');
    if (req.session && req.session.loginUser) {
        res.render('admin-index', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.log = function (req, res) {
    //res.render('admin-log');
    if (req.session && req.session.loginUser) {
        res.render('admin-log', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.table = function (req, res) {
    //res.render('admin-table');
    if (req.session && req.session.loginUser) {
        res.render('admin-table', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.user = function (req, res) {
   // console.log(req.session);
    if (req.session && req.session.loginUser) {
        res.render('admin-user', {loginUser: req.session.loginUser});       //这里取出来值，传到前端页面
    } else {
        res.render('admin-login');
    }
};
exports.checkAdmin = function (req, res) {
    var name = req.body.admin_id;
    var pwd = req.body.admin_pwd;
    adminModel.getAdmin(name, pwd, function (rs) {

        if (rs && rs.length > 0 && req.session) {//将当前登录用户的信息存储在内存session中。
            req.session.loginUser = rs[0]; //loginUser名词可以任意取值  。。。。。。
        }
        res.json(rs);
        //auth.gen_session();
        console.log(rs);

    });
};
exports.deleteImg = function (req, res) {
    var src = req.body.img_src;
    var a = src.replace(/\//g, '');
    adminModel.getdeleteImg(a, function (rs) {
        res.json(rs);
        console.log(rs);
    })

}
exports.showImages = function (req, res) {


    adminModel.getImageCount(function (rs) {
        res.json(rs);

    })

};
exports.pageImages = function (req, res) {
    var page = req.query.page;
    console.log("这是" + page);
    adminModel.getImage(page, function (rs) {
        res.json(rs);
    })
};
exports.updateAdmin = function (req, res) {
    var adminId = req.session.loginUser.admin_id;
    var name = req.body.name;
    var phone = req.body.phone;
    var intro = req.body.intros;
    adminModel.updateAdmins(adminId, name, phone, intro, function (rs) {

        res.send(rs);
    })

};
exports.upimg=function(req,res){
    var myDate=new Date();//得到中国标准时间
    var a=myDate.getTime();//得到时间戳
    var fileName=a+".jpg";
    if(req.files.upimgs != 'undefined') {
        var tempath=req.files.upimgs.path;//得到上传临时路径
        var updateLoad=path.join(__dirname,"..\\uploadfiles\\images",fileName);
        var readable=fs.createReadSream(tempath);
        var writable=fs.createWriteStream(updateLoad);
        readable.pipe(writable);
    }
};