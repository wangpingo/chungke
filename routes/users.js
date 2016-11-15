var express = require('express');
var router = express.Router();

var user = require('../controllers/user');

router.post('/regist', user.regist);

router.get('/checkUser', user.checkUser);
router.get('/article',user.getArticle);
router.get('/',user.getIndex);  //��ҳ��ַ
router.get('/homepage',user.homepage);
router.post('/userLogin',user.checkLogin);//��¼·��
router.get('/memberList',user.findMember);//���س�Ա�б�
router.get('/visitUser',user.findUser);
router.get('/getCreative',user.findCreative);//���ش����·��
router.get('/visitCreative',user.findArticleId);//����ָ�����µ����µ�·��
router.get('/articlesub',user.articlesub);
router.get('/loginUserCreative',user.loginUserCreative);
router.post('/giveMessage',user.giveMessage);
router.get('/selectMessage',user.selectMessage);
router.get('/selectCreative',user.selectCreative);
router.get('/getArticleCount',user.getArticleCount);
router.get('/selectComment',user.selectComment);
router.post('/giveComment',user.giveComment);
router.get('/getCommentCount',user.getCommentCount);
router.get('/clickLike',user.clickLike);
router.get('/updateIntro',user.updateIntro);
router.get('/getHomepageIntro',user.getHomepageIntro);//主页得到个人信息表里面的简介
router.get('/getMessageCount',user.getMessageCount);
router.get('/selectUserid',user.selectUserid);
module.exports = router;
