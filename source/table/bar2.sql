/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80025
Source Host           : localhost:3306
Source Database       : bigscreen

Target Server Type    : MYSQL
Target Server Version : 80025
File Encoding         : 65001

Date: 2021-07-30 20:12:09
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bar2
-- ----------------------------
DROP TABLE IF EXISTS `bar2`;
CREATE TABLE `bar2` (
  `html5` int NOT NULL,
  `css3` int NOT NULL,
  `js` int NOT NULL,
  `vue` int NOT NULL,
  `nodejs` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of bar2
-- ----------------------------
INSERT INTO `bar2` VALUES ('10', '20', '50', '60', '90');
INSERT INTO `bar2` VALUES ('13', '21', '42', '78', '88');
INSERT INTO `bar2` VALUES ('24', '34', '66', '80', '80');
INSERT INTO `bar2` VALUES ('34', '46', '53', '90', '78');
INSERT INTO `bar2` VALUES ('24', '56', '40', '88', '73');
INSERT INTO `bar2` VALUES ('35', '44', '34', '80', '69');
