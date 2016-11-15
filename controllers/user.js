var userModel = require('../models/userModel');
var dateformat = require('dateformat');//加载时间包
exports.regist = function (req, res, next) {
    var name = req.body.username;
    var phone = req.body.phone;
    var password = req.body.password;
    var photo="memberhead2.png";
    userModel.save({
        username: name,
        password: password,
        phone: phone,
        photo:photo
    }, function (rs) {
    if(rs.affectedRows>0) {
        res.send("<script>alert('注册成功！,请您登录');window.history.go(-1)</script>");
    }
    });

};


exports.checkUser = function (req, res) {
    var name = req.query.username;

    console.log(name + '  ~~~');

    userModel.getByName(name, function (rs) {
        if (rs.length > 0) {
            res.send('fail');
        } else {
            res.send('success');
        }
    });
};


exports.getArticle = function (req, res) {
    if (req.session && req.session.loginUsers) {
        res.render('article', {loginUsers: req.session.loginUsers});//����ȡ����ֵ������ǰ��ҳ��
    } else {

        res.render('article', {loginUsers: {}});
    }
};
exports.getIndex = function (req, res) {
    //�Ƿ�֮ǰ��½
    if (req.session && req.session.loginUsers) {
        res.render('index', {loginUsers: req.session.loginUsers});//����ȡ����ֵ������ǰ��ҳ��
    } else {

        res.render('index', {loginUsers: {}});
    }
};
exports.homepage = function (req, res) {
    if (req.session && req.session.loginUsers) {
        res.render('homepage', {loginUsers: req.session.loginUsers, theUser: {}});//����ȡ����ֵ������ǰ��ҳ��
    } else {

        res.render('homepage', {loginUsers: {}, theUser: {}});
    }
}
exports.checkLogin = function (req, res) {
    name = req.body.username;
    pwd = req.body.password;
    userModel.checkUser(name, pwd, function (rs) {
        if (rs && rs.length > 0 && req.session) {   //����ǰ��¼�û�����Ϣ�洢���ڴ�session�С�
            req.session.loginUsers = rs[0];        //loginUser���ʿ�������ȡֵ  ������������
            res.redirect(req.headers.referer || "/users");//重载到当前页面！
        }else{
            res.send("<script>alert('帐号名和密码错误，登录失败！');window.history.go(-1)</script>");
        }

        //res.json(rs);
        //auth.gen_session();
        //console.log(rs);
    })
};
exports.findMember = function (req, res) {
    userModel.selectMember(function (rs) {
        res.json(rs);
    });

};
exports.findUser = function (req, res) {
    var userid = req.query.userid;
    userModel.selectUser(userid, function (rs) {
        if (req.session && req.session.loginUsers) {
            //����ȡ����ֵ������ǰ��ҳ��
            res.render('homepage', {loginUsers: req.session.loginUsers, theUser: rs[0]});
        } else {

            res.render('homepage', {loginUsers: {}, theUser: rs[0]});
        }
    })
};
exports.findCreative = function (req, res) {

    userModel.selectCreative(function (rs) {
        res.json(rs);
    })


};
exports.findArticleId = function (req, res) {
    var articleId = req.query.articleId;
    //console.log(articleId);

    userModel.findId(articleId, function (rs) {

        if (req.session && req.session.loginUsers) {

            //����ȡ����ֵ������ǰ��ҳ��
            res.render('article', {loginUsers: req.session.loginUsers, theArticle: rs[0]});
        } else {
            //console.log("a"+rs[0]);
            res.render('article', {loginUsers: {}, theArticle: rs[0]});
        }

    });
};
exports.articlesub = function (req, res) {  // 写文章路由
    //res.render('articlesub');
    if (req.session && req.session.loginUsers) {
        res.render('articlesub', {loginUsers: req.session.loginUsers});//����ȡ����ֵ������ǰ��ҳ��
    } else {

        res.render('index', {loginUsers: {}});
    }
};

exports.loginUserCreative = function (req, res) { //得到当前用户的创意
    if (req.session && req.session.loginUsers) {
        res.render('homepage', {loginUsers: req.session.loginUsers, theUser: req.session.loginUsers});
    } else {

        res.render('index', {loginUsers: {}, theUser: {}});
    }
};
exports.giveMessage = function (req, res) {
    var message = req.body.comment;
    var receiver = req.body.theUserName;
    var sender = req.body.theLoginName;
    userModel.insertMessage(message, receiver, sender, function (rs) {
        var resData = {};
        resData.content = message;
        resData.receiver = receiver;
        resData.sender = sender;
        resData.add_time = dateformat(Date.now(), "yyyy-mm-dd HH:MM:ss");
        res.json(resData);

    })


};
exports.selectMessage = function (req, res) {
    var theUserName = req.query.theUserName;
    var pageIndex = req.query.pageindex;
    userModel.selectMessage(theUserName, pageIndex, function (rs) {
        res.json(rs);
    })
};
exports.selectCreative = function (req, res) {
    var theUserId = req.query.theUserId;
    var pageCreative = req.query.pageCreative;
    userModel.selectCreatives(theUserId, pageCreative, function (rs) {
        res.json(rs);
    })
};
exports.getArticleCount = function (req, res) {
    var userId = req.query.userId;
    userModel.getArticleCount(userId, function (rs) {
        res.send(rs);
    })
};
exports.selectComment = function (req, res) {
    var theArticleId = req.query.theArticleId;
    var pageindex = req.query.pageindex;
    userModel.selectComment(theArticleId, pageindex, function (rs) {
        res.json(rs);
    })
};
exports.giveComment = function (req, res) {
    var comment = req.body.comment;
    var theArticleId = req.body.theArticleId;
    var sender = req.body.theLoginName;
    userModel.giveComment(comment, theArticleId, sender, function (rs) {
        var resData = {};
        resData.content = comment;
        resData.article_id = theArticleId;
        resData.sender = sender;
        resData.add_time = dateformat(Date.now(), "yyyy-mm-dd HH:MM:ss");
        res.json(resData);

    })
};
exports.getCommentCount = function (req, res) {
    var theArticleId = req.query.theArticleId;
    userModel.getCommentCount(theArticleId, function (result) {
        res.json(result);
    })

};
exports.clickLike = function (req, res) {
    var theArticleId = req.query.theArticleId;
    var likeAmount = req.query.theArticleLikeAmount + 1;
    var ipAdre=(req.headers['x-forwarded-for'] || '').split(',')[0] || req.connection.remoteAddress;
         userModel.selectIp(theArticleId,ipAdre,function(rs){
            if(rs.length>0){
                res.send("false");
            }else{
                userModel.insertIp(theArticleId,ipAdre,function(rs){
                    userModel.clickLike(theArticleId, likeAmount, function (rs) {
                        res.send(rs);
                    })
                });
            }

         });



};
exports.updateIntro = function (req, res) {
    var intro = req.query.intro;
    var userid = req.query.userid;
    if (req.session.loginUsers.user_id === userid) {//验证是否为本人操作，非本人操作则不执行sql
        userModel.updateIntro(intro, userid, function (rs) {
            res.send(rs);
        });
    } else {
        res.send("非本人操作，签名修改失败！");
    }

};
exports.getHomepageIntro = function (req, res) {
    var userId = req.query.userId;
    userModel.getHomepageIntro(userId, function (rs) {
        res.json(rs);
    })

};
exports.getMessageCount=function(req,res){
    var name=req.query.username;
    userModel.getMessageCount(name,function(rs){
        res.send(rs);
    })

};
exports.selectUserid=function(req,res){
    var theSender=req.query.theSender;
    userModel.selectUserid(theSender,function(rs){
        res.send(rs);
    })
};
