/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 80025
Source Host           : localhost:3306
Source Database       : bigscreen

Target Server Type    : MYSQL
Target Server Version : 80025
File Encoding         : 65001

Date: 2021-07-30 20:12:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for bar1
-- ----------------------------
DROP TABLE IF EXISTS `bar1`;
CREATE TABLE `bar1` (
  `year` varchar(255) DEFAULT NULL,
  `travel` varchar(255) DEFAULT NULL,
  `educate` varchar(255) DEFAULT NULL,
  `game` varchar(255) DEFAULT NULL,
  `medical` varchar(255) DEFAULT NULL,
  `ecommerce` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `social` varchar(255) DEFAULT NULL,
  `finance` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of bar1
-- ----------------------------
INSERT INTO `bar1` VALUES ('2019', '100', '200', '333', '444', '555', '666', '777');
INSERT INTO `bar1` VALUES ('2020', '100', '455', '155', '111', '333', '200', '100');
