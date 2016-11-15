/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : maker

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2016-07-11 19:33:02
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for t_admin
-- ----------------------------
DROP TABLE IF EXISTS `t_admin`;
CREATE TABLE `t_admin` (
  `admin_id` int(20) NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(50) NOT NULL,
  `admin_pwd` varchar(50) NOT NULL,
  `admin_phone` varchar(25) DEFAULT NULL,
  `admin_intro` text,
  `photo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`admin_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_admin
-- ----------------------------
INSERT INTO `t_admin` VALUES ('1', 'xiaoming', '123456', '15776865531', '我是一个积极负责的人', null);

-- ----------------------------
-- Table structure for t_admin_article
-- ----------------------------
DROP TABLE IF EXISTS `t_admin_article`;
CREATE TABLE `t_admin_article` (
  `admin_article_id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `intro` varchar(255) DEFAULT NULL,
  `content` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`admin_article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_admin_article
-- ----------------------------
INSERT INTO `t_admin_article` VALUES ('38', '', '1465303600288.jpg', '', '', '', '2016-06-07 20:46:40');

-- ----------------------------
-- Table structure for t_article
-- ----------------------------
DROP TABLE IF EXISTS `t_article`;
CREATE TABLE `t_article` (
  `article_id` int(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `img` varchar(255) DEFAULT NULL,
  `contents` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` int(11) DEFAULT NULL,
  `like_amount` int(10) NOT NULL DEFAULT '0',
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_article
-- ----------------------------
INSERT INTO `t_article` VALUES ('1', '黑龙江大学信科学院', '1.png', '黑龙江大学信息科学与技术学院是在黑龙江大学现有计算机学科优势的基础上，以黑龙江大学信息与计算中心的现有教学资源及十几年的计算机教学经验为依托，采用新的教育教学方法，以培养从事计算机软件编程、软件开发、具备实际操作能力的复合型、应用型计算机软件编程人才为目的建立的。\r\n学院根据计算机行业知识更新迅速、应用技术更新换代快等特点，制定相应的教学计划，根据当今世界上计算机发展的最新变化开设专业课，注重学生基础理论培养，同时用实践课来指导教学，实验教学与理论教学的课时比例为1:1或更高，个别课程完全采用实践教学，从大学一年级就开始开设项目实践课，重在加强实验环节，使学生在上学的过程中能够接触到大量的项目实践机会；同时学院和省内多家计算机软件开发公司建立长期合作关系，使学生在上学期间有机会到公司去参加一些项目的设计和开发，逐渐提高学生的软件设计研发能力，为以后的工作就业打下坚实的基础。', '2016-06-25 17:42:36', '1', '40');
INSERT INTO `t_article` VALUES ('2', '信科师资力量师资力量', '2.png', '学院现有专职教师及实验教师40余人，均具有十几年的教学经验和丰富的科研经历，其中教授、副教授19人，获得硕士以上学位及在读博士人员30多人。设有工程实训中心和专业基础、网络技术、信息技术三个教研室；工程实训中心的教师均具有10年以上计算机行业工程师的工作经历，部分教师具有国内外知名厂商的网络认证工程师或讲师资格。近年来学院先后承担科研项目40余项，教师发表学术论文100余篇，其中SCI、EI、ISTP论文70余篇。学院拥有一流的实验教学设备和先进的多媒体教学设备，有先进的信息网络技术实验室和计算机应用实验室；现有28个计算机教学实验室，总面积4000多平方米，微机1800多台，并且可以通过校园网接入Internet。', '2016-06-25 18:02:40', '2', '27');
INSERT INTO `t_article` VALUES ('3', '信科专业指南', '3.png', '培养目标：本专业培养具有良好的科学素养，系统地掌握信息科学的基本理论，熟练运用信息网络技术，具备信息化软件研发与管理能力，能从事网络工程建设与管理、信息化软件项目的研发与管理等工作的多层次、工程型、应用型的高级专门人才。\r\n主要课程：高等数学等、大学物理、语言程序设计、数据结构与算法、数据库原理与应用、计算机组成与通信原理、网络原理与应用、信息网络安全技术、网络工程技术应用与管理、网络操作系统原理与应用、3G及无线网络技术、Java等现代网络编程技术应用、嵌入式系统设计与实现等必修和选修课程。该专业理科考生报考。[1] \r\n该专业理科考生报考。\r\n从2015年开始，信息科学与技术学院开始招收研究生', '2016-06-25 17:21:32', '3', '53');
INSERT INTO `t_article` VALUES ('4', '黑龙江大学信息与技术', '1.png', '黑龙江大学信息科学与技术学院是在黑龙江大学现有计算机学科优势的基础上，以黑龙江大学信息与计算中心的现有教学资源及十几年的计算机教学经验为依托，采用新的教育教学方法，以培养从事计算机软件编程、软件开发、具备实际操作能力的复合型、应用型计算机软件编程人才为目的建立的。\r\n学院根据计算机行业知识更新迅速、应用技术更新换代快等特点，制定相应的教学计划，根据当今世界上计算机发展的最新变化开设专业课，注重学生基础理论培养，同时用实践课来指导教学，实验教学与理论教学的课时比例为1:1或更高，个别课程完全采用实践教学，从大学一年级就开始开设项目实践课，重在加强实验环节，使学生在上学的过程中能够接触到大量的项目实践机会；同时学院和省内多家计算机软件开发公司建立长期合作关系，使学生在上学期间有机会到公司去参加一些项目的设计和开发，逐渐提高学生的软件设计研发能力，为以后的工作就业打下坚实的基础。', '2016-06-23 20:35:15', '1', '7');
INSERT INTO `t_article` VALUES ('5', '黑龙江大学信息院', '2.png', '黑龙江大学信息科学与技术学院是在黑龙江大学现有计算机学科优势的基础上，以黑龙江大学信息与计算中心的现有教学资源及十几年的计算机教学经验为依托，采用新的教育教学方法，以培养从事计算机软件编程、软件开发、具备实际操作能力的复合型、应用型计算机软件编程人才为目的建立的。\r\n学院根据计算机行业知识更新迅速、应用技术更新换代快等特点，制定相应的教学计划，根据当今世界上计算机发展的最新变化开设专业课，注重学生基础理论培养，同时用实践课来指导教学，实验教学与理论教学的课时比例为1:1或更高，个别课程完全采用实践教学，从大学一年级就开始开设项目实践课，重在加强实验环节，使学生在上学的过程中能够接触到大量的项目实践机会；同时学院和省内多家计算机软件开发公司建立长期合作关系，使学生在上学期间有机会到公司去参加一些项目的设计和开发，逐渐提高学生的软件设计研发能力，为以后的工作就业打下坚实的基础。', '2016-06-23 20:33:39', '1', '7');
INSERT INTO `t_article` VALUES ('6', '黑龙江大学信息学院', '3.png', '黑龙江大学信息科学与技术学院是在黑龙江大学现有计算机学科优势的基础上，以黑龙江大学信息与计算中心的现有教学资源及十几年的计算机教学经验为依托，采用新的教育教学方法，以培养从事计算机软件编程、软件开发、具备实际操作能力的复合型、应用型计算机软件编程人才为目的建立的。\r\n学院根据计算机行业知识更新迅速、应用技术更新换代快等特点，制定相应的教学计划，根据当今世界上计算机发展的最新变化开设专业课，注重学生基础理论培养，同时用实践课来指导教学，实验教学与理论教学的课时比例为1:1或更高，个别课程完全采用实践教学，从大学一年级就开始开设项目实践课，重在加强实验环节，使学生在上学的过程中能够接触到大量的项目实践机会；同时学院和省内多家计算机软件开发公司建立长期合作关系，使学生在上学期间有机会到公司去参加一些项目的设计和开发，逐渐提高学生的软件设计研发能力，为以后的工作就业打下坚实的基础。', '2016-06-23 20:33:45', '1', '7');
INSERT INTO `t_article` VALUES ('7', '黑龙江大学信科学院', '1.png', '黑龙江大学信息科学与技术学院是在黑龙江大学现有计算机学科优势的基础上，以黑龙江大学信息与计算中心的现有教学资源及十几年的计算机教学经验为依托，采用新的教育教学方法，以培养从事计算机软件编程、软件开发、具备实际操作能力的复合型、应用型计算机软件编程人才为目的建立的。\r\n学院根据计算机行业知识更新迅速、应用技术更新换代快等特点，制定相应的教学计划，根据当今世界上计算机发展的最新变化开设专业课，注重学生基础理论培养，同时用实践课来指导教学，实验教学与理论教学的课时比例为1:1或更高，个别课程完全采用实践教学，从大学一年级就开始开设项目实践课，重在加强实验环节，使学生在上学的过程中能够接触到大量的项目实践机会；同时学院和省内多家计算机软件开发公司建立长期合作关系，使学生在上学期间有机会到公司去参加一些项目的设计和开发，逐渐提高学生的软件设计研发能力，为以后的工作就业打下坚实的基础。', '2016-06-16 16:34:34', '1', '16');

-- ----------------------------
-- Table structure for t_click_like
-- ----------------------------
DROP TABLE IF EXISTS `t_click_like`;
CREATE TABLE `t_click_like` (
  `article_id` int(11) NOT NULL,
  `ip` varchar(20) NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`article_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_click_like
-- ----------------------------
INSERT INTO `t_click_like` VALUES ('1', '::1', '2016-06-25 17:42:36');
INSERT INTO `t_click_like` VALUES ('2', '::1', '2016-06-25 18:02:40');
INSERT INTO `t_click_like` VALUES ('3', '::1', '2016-06-25 17:21:32');

-- ----------------------------
-- Table structure for t_comment
-- ----------------------------
DROP TABLE IF EXISTS `t_comment`;
CREATE TABLE `t_comment` (
  `comment_id` int(20) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(2) DEFAULT '0',
  `article_id` int(11) DEFAULT NULL,
  `sender` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_comment
-- ----------------------------
INSERT INTO `t_comment` VALUES ('1', 'a', '2016-06-16 10:59:19', '0', '1', 'xiaohua');
INSERT INTO `t_comment` VALUES ('2', 'b', '2016-06-16 10:59:52', '0', '1', 'xiaoming');
INSERT INTO `t_comment` VALUES ('3', '你的创意很好，我很喜欢.', '2016-06-16 10:59:57', '0', '3', 'xiaohong');
INSERT INTO `t_comment` VALUES ('4', 'Your comments*', '2016-06-16 11:00:01', '0', '3', 'xiaohua');
INSERT INTO `t_comment` VALUES ('5', '好棒啊！', '2016-06-16 11:00:06', '0', '3', 'xiaoming');
INSERT INTO `t_comment` VALUES ('6', 'hahh', '2016-06-16 11:00:09', '0', '1', 'xiaohong');
INSERT INTO `t_comment` VALUES ('7', 'Your comments*', '2016-06-16 11:00:17', '0', '1', 'xiaohua');
INSERT INTO `t_comment` VALUES ('8', '写的真好啊！！', '2016-06-16 11:00:20', '0', '1', 'xiaoming');
INSERT INTO `t_comment` VALUES ('9', 'Your comments*', '2016-06-16 11:00:24', '0', '1', 'xiaohong');
INSERT INTO `t_comment` VALUES ('10', 'Your comments*', '2016-06-16 11:00:34', '0', '1', 'xiaohua');
INSERT INTO `t_comment` VALUES ('11', 'Your comments*', '2016-06-16 11:00:38', '0', '1', 'xiaoming');
INSERT INTO `t_comment` VALUES ('12', 'Your comments*', '2016-06-16 11:00:43', '0', '1', 'xiaohong');
INSERT INTO `t_comment` VALUES ('13', 'Your comments*', '2016-06-16 12:08:35', '0', '1', 'xiaohua');
INSERT INTO `t_comment` VALUES ('14', '德玛西亚万岁！！！', '2016-06-16 11:46:53', '0', '1', 'xiaoming');
INSERT INTO `t_comment` VALUES ('15', 'Your comments*德玛西亚万岁！！！', '2016-06-16 15:22:37', '0', '7', 'xiaohua');
INSERT INTO `t_comment` VALUES ('16', 'aaaa', '2016-06-22 11:19:44', '0', '1', 'xiaoming');
INSERT INTO `t_comment` VALUES ('17', '评论成功！！', '2016-06-22 11:20:53', '0', '1', 'xiaoming');
INSERT INTO `t_comment` VALUES ('18', '少时诵诗书少时诵诗书诗水蛇山神庙', '2016-06-22 11:22:15', '0', '1', 'xiaoming');
INSERT INTO `t_comment` VALUES ('19', 'Your comments*', '2016-06-22 11:26:08', '0', '1', 'xiaoming');

-- ----------------------------
-- Table structure for t_follow
-- ----------------------------
DROP TABLE IF EXISTS `t_follow`;
CREATE TABLE `t_follow` (
  `follow_id` int(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `article_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`follow_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_follow
-- ----------------------------
INSERT INTO `t_follow` VALUES ('1', '1', '1');

-- ----------------------------
-- Table structure for t_friend
-- ----------------------------
DROP TABLE IF EXISTS `t_friend`;
CREATE TABLE `t_friend` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `friend_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_friend
-- ----------------------------

-- ----------------------------
-- Table structure for t_like
-- ----------------------------
DROP TABLE IF EXISTS `t_like`;
CREATE TABLE `t_like` (
  `like_id` int(20) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `article_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`like_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_like
-- ----------------------------

-- ----------------------------
-- Table structure for t_message
-- ----------------------------
DROP TABLE IF EXISTS `t_message`;
CREATE TABLE `t_message` (
  `message_id` int(20) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `add_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(2) NOT NULL DEFAULT '0',
  `receiver` varchar(50) DEFAULT NULL,
  `sender` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`message_id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_message
-- ----------------------------
INSERT INTO `t_message` VALUES ('1', '1', '2016-05-22 09:10:18', '0', '2', '1');
INSERT INTO `t_message` VALUES ('2', '你写的很好！！，我赞成', '2016-06-15 12:13:25', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('3', '你的创意很好，我呀很喜欢！！求合作', '2016-06-15 12:40:28', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('4', '你的创意很好，我呀很喜欢！！求合作', '2016-06-15 12:40:30', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('5', '你的创意很好，我呀很喜欢！！求合作', '2016-06-15 12:40:32', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('6', '我喜欢你！！', '2016-06-15 12:41:13', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('7', '我喜欢你！！', '2016-06-15 12:41:15', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('8', '我喜欢你！！', '2016-06-15 12:41:15', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('9', 'Your comments*', '2016-06-15 12:42:18', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('10', 'Your comments*', '2016-06-15 12:42:25', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('11', '不错！', '2016-06-15 12:44:02', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('12', 'Your comments*1234', '2016-06-15 12:44:42', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('13', 'Your comments*4567', '2016-06-15 12:45:37', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('14', 'Your comments*7890', '2016-06-15 12:46:25', '0', 'xiaohua', 'xiaohua');
INSERT INTO `t_message` VALUES ('15', '2324232', '2016-06-15 12:48:16', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('16', 'aweasdasd', '2016-06-15 13:10:04', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('17', '社会主义好！@！', '2016-06-15 13:12:53', '0', 'xiaohua', 'xiaohua');
INSERT INTO `t_message` VALUES ('18', '你好呀！！', '2016-06-15 13:36:51', '0', 'xiaohua', 'xiaoming');
INSERT INTO `t_message` VALUES ('19', 'Your comments*', '2016-06-15 13:48:21', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('20', 'Your comments*111111', '2016-06-15 13:49:22', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('21', 'Your comments*111111', '2016-06-15 13:50:13', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('22', 'Your comments*111111', '2016-06-15 13:50:14', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('23', 'Your comments*111111', '2016-06-15 13:50:15', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('24', 'Your comments*111222', '2016-06-15 13:51:01', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('25', 'Your comments*111222aaaaaa', '2016-06-15 14:19:39', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('26', 'Your commeadsfadfsasdfnts*dasfasdfaaaaaaaaaaaaaaaaaaaaaaaaaaaa', '2016-06-15 14:25:13', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('27', '', '2016-06-15 14:25:16', '0', 'xiaoming', 'xiaoming');
INSERT INTO `t_message` VALUES ('28', 'aaaaaaaaaaaaaaaaaaaaaaaaaassddsdfsdfsdf', '2016-06-16 13:01:49', '0', 'xiaoming', 'xiaohong');
INSERT INTO `t_message` VALUES ('29', 'Your comments*xcsfadwDDDF', '2016-06-16 22:08:37', '0', 'xiaohong', 'xiaoming');
INSERT INTO `t_message` VALUES ('30', 'Your comments*xcsfadwDDDF', '2016-06-16 22:08:39', '0', 'xiaohong', 'xiaoming');
INSERT INTO `t_message` VALUES ('31', 'Your comments*xcsfadwDDDF', '2016-06-16 22:08:39', '0', 'xiaohong', 'xiaoming');
INSERT INTO `t_message` VALUES ('32', 'Your comments*xcsfadwDDDF', '2016-06-16 22:08:42', '0', 'xiaohong', 'xiaoming');
INSERT INTO `t_message` VALUES ('33', 'sdsds', '2016-06-22 10:05:37', '0', 'xiaohong', 'xiaoming');
INSERT INTO `t_message` VALUES ('34', 'sdsds', '2016-06-22 10:05:39', '0', 'xiaohong', 'xiaoming');
INSERT INTO `t_message` VALUES ('35', 'ni  shi  hsei  !!', '2016-06-22 11:44:31', '0', 'xiaoming', 'xiaohong');
INSERT INTO `t_message` VALUES ('36', 'aaaaaaaaaaaaaaaaaa', '2016-06-22 11:53:34', '0', 'xiaoming', 'xiaohong');
INSERT INTO `t_message` VALUES ('37', '', '2016-06-22 11:53:42', '0', 'xiaoming', 'xiaohong');

-- ----------------------------
-- Table structure for t_tag
-- ----------------------------
DROP TABLE IF EXISTS `t_tag`;
CREATE TABLE `t_tag` (
  `tag_id` int(11) NOT NULL AUTO_INCREMENT,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`tag_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_tag
-- ----------------------------

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(25) NOT NULL,
  `login_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('1', 'xiaoming', 'memberhead2.png', '123456', '15776865531', '2016-05-22 09:05:03');
INSERT INTO `t_user` VALUES ('2', 'xiaohong', 'memberhead2.png', '123456', '15203708701', '2016-06-11 13:01:33');
INSERT INTO `t_user` VALUES ('3', 'xiaohua', 'memberhead2.png', '123456', '15776865531', '2016-06-23 21:38:41');

-- ----------------------------
-- Table structure for t_user_detail
-- ----------------------------
DROP TABLE IF EXISTS `t_user_detail`;
CREATE TABLE `t_user_detail` (
  `user_id` int(20) NOT NULL,
  `sex` varchar(50) NOT NULL,
  `intro` varchar(400) DEFAULT NULL,
  `signature` varchar(100) DEFAULT NULL,
  `trade` varchar(50) NOT NULL COMMENT '行业',
  `address` varchar(100) DEFAULT NULL,
  `edu` varchar(200) DEFAULT NULL,
  `gold_coin` int(11) DEFAULT NULL,
  `maker_coin` int(11) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of t_user_detail
-- ----------------------------
INSERT INTO `t_user_detail` VALUES ('1', '女', '爱爱爱', '1', '1', '1', '1', null, null);
INSERT INTO `t_user_detail` VALUES ('2', '男', '考计算机啊哈', null, '1', null, null, null, null);
INSERT INTO `t_user_detail` VALUES ('3', '男', '考计算机啊哈', '33', '1', null, null, null, null);
