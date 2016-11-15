var db = require('./db');

exports.save = function(user, callback){
    db.query("insert into t_user(username, password, phone,photo) values('"+user.username+"', '"+user.password+"', '"+user.phone+"','"+user.photo+"')",[], callback);
};

exports.getByName = function(name, callback){
    db.query('select * from t_user where username=?',[name], callback);
};
exports.checkUser=function(name,password,callback){
    db.query('select * from t_user where username=? and password=?',[name,password],callback);
};
//��ѯǰ�������ݣ���ʾ���û��б�
exports.selectMember=function(callback){
    db.query('select * from t_user limit 0,6',[],callback);
};
//�����û��ĵ���ҵ����û�
exports.selectUser=function(userid,callback){
    db.query('select * from t_user where user_id=?',[userid],callback)
};
//�����������ݿ������
exports.selectCreative=function(callback){
    db.query('select  article_id ,img,title from t_article  limit 0,6',[],callback);
};
//查询文章的sql,显示时间的格式
exports.findId=function(articleId,callback){
    db.query('select article_id,title,img,contents,DATE_FORMAT(add_time,\'%Y-%m-%d %T\') add_time,like_amount  from t_article where article_id= ? ',[articleId],callback);
};
exports.insertMessage=function(message, receiver,sender,callback){
    db.query('insert into t_message (content,receiver,sender) values (?,?,?) ',[message, receiver,sender],callback);
};
exports.selectMessage=function(theUserName,pageIndex,callback){
    var sql='select content,DATE_FORMAT(add_time,\'%Y-%m-%d %T\') add_time,status,sender,user_id from  t_message left outer join t_user  on t_user.username = t_message.sender where receiver=? order by add_time desc limit '+((pageIndex)*3)+","+3;

    db.query(sql,[theUserName],callback);
};
exports.selectCreatives=function(theUserId,pageCreative,callback){
    var sql='select article_id,title,DATE_FORMAT(add_time,\'%Y-%m-%d %T\') add_time,img,like_amount from t_article where user_id=? order by add_time desc limit '+((pageCreative)*4)+","+4;
    db.query(sql,[theUserId],callback);
};
exports.getArticleCount=function(userId,callback){
    db.query("select count(*) from t_article where user_id=? ",[userId],callback);

};
exports.selectComment=function(theArticleId,pageIndex,callback){
    var sql='select content,DATE_FORMAT(add_time,\'%Y-%m-%d %T\') add_time,status,sender,user_id from t_comment left outer join t_user  on t_user.username = t_comment.sender where article_id=? order by add_time desc limit '+((pageIndex)*3)+","+3;
    db.query(sql,[theArticleId],callback);

};
exports.giveComment=function(comment, article_id,sender,callback){
    db.query('insert into t_comment(content,article_id,sender) values (?,?,?) ',[comment, article_id,sender],callback);

};
exports.getCommentCount=function(theArticleId,callback){
    db.query("select count(*) from t_comment where article_id= ?",[theArticleId],callback);
};
exports.clickLike=function(like_amount,theArticleId,callback){
    db.query("update t_article set like_amount=like_amount+1 where article_id=?",[like_amount,theArticleId],callback)
};
exports.updateIntro=function(intro,userid,callback){
    db.query("update t_user_detail set intro = ? where user_id=?",[intro,userid],callback)
};
exports.getHomepageIntro=function(userId,callback){
    db.query("select intro from t_user_detail where user_id=?",[userId],callback);
};
exports.getMessageCount=function(name,callback){
    db.query("select count(*) from t_message where receiver = ?",[name],callback);
};
exports.insertIp=function(articleId,ip,callback){
    db.query("insert into t_click_like(article_id,ip)values (?,?)",[articleId,ip],callback);
};
exports.selectIp=function(articleId,ip,callback){
    db.query("select * from t_click_like where article_id=? and ip=? ",[articleId,ip],callback)
};
exports.selectUserid=function(theSender,callback){
  db.query("select user_id from t_user where username=? ",[theSender],callback)
};