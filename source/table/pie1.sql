/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80025
Source Host           : localhost:3306
Source Database       : bigscreen

Target Server Type    : MYSQL
Target Server Version : 80025
File Encoding         : 65001

Date: 2021-07-30 20:12:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pie1
-- ----------------------------
DROP TABLE IF EXISTS `pie1`;
CREATE TABLE `pie1` (
  `0` varchar(255) DEFAULT NULL,
  `20-29` varchar(255) DEFAULT NULL,
  `30-39` varchar(255) DEFAULT NULL,
  `40-49` varchar(255) DEFAULT NULL,
  `50` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of pie1
-- ----------------------------
INSERT INTO `pie1` VALUES ('4', '1', '2', '2', '1');
INSERT INTO `pie1` VALUES ('1', '1', '4', '3', '2');
INSERT INTO `pie1` VALUES ('2', '2', '5', '2', '2');
