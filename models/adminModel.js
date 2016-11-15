/**
 * Created by 35031 on 2016/5/23.
 */
var db = require('./db');
exports.getAdmin = function(name,pwd,callback){
    db.query("select * from t_admin where admin_name=? and admin_pwd=? " ,[name,pwd],callback);

};
exports.saveAdminArticle=function(title,img,author,intro,content,callback){

    db.query("insert into t_admin_article (title,img,author,intro,content) values (?,?,?,?,?) ",[title,img,author,intro,content],callback);
}
exports.getSelectAdminArticle = function(callback){
    db.query("select * from t_admin_article lim",[],callback);
}
exports.getSelectMessage= function (callback) {
    db.query("select * from t_message lim",[],callback);
}
exports.getMessageCount=function(callback){
    db.query("select count(*) from  t_message ",[],callback);
}
exports.getMessage=function(page,callback){

    var sql="select * from t_message where message_id limit " +((page)*10)+","+10;

    db.query(sql,[],callback);

}
exports.getdeleteImg=function(img_src,callback){
    db.query("DELETE FROM t_admin_article WHERE img= ? ",[img_src],callback);
}
exports.getImageCount=function(callback){
    db.query("select count(*) from t_admin_article ",[],callback);
}
;
exports.getImage=function(page,callback){

    var sql="select * from t_admin_article where admin_article_id limit " +((page)*6)+","+6;

    db.query(sql,[],callback);

};

exports.updateAdmins=function(adminId,name,phone,intro,callback){

    db.query("update t_admin set admin_name=? and admin_phone=? and admin_intro=? where admin_id= ?",[name,phone,intro,adminId],callback)
}

exports.getSelectComment= function (callback) {
    db.query("select * from t_comment lim",[],callback);
}
exports.getCommentCount=function(callback){
    db.query("select count(*) from  t_comment ",[],callback);
}
exports.getComment=function(page,callback){

    var sql="select * from t_comment where comment_id limit " +((page)*10)+","+10;

    db.query(sql,[],callback);

}

exports.getSelectArticle= function (callback) {
    db.query("select * from t_article lim",[],callback);
}
exports.getArticleCount=function(callback){
    db.query("select count(*) from  t_article ",[],callback);
}
exports.getArticle=function(page,callback){

    var sql="select * from t_article where article_id limit " +((page)*5)+","+5;

    db.query(sql,[],callback);

}