# 局点分发页
![react](https://img.shields.io/badge/react-%5E16.13.1-green)
![MIT](https://img.shields.io/badge/license-MIT-red)
![antd](https://img.shields.io/badge/antd-%5E4.2.0-blue)

局点分发项目，实现了用户注册登录、权限管理、局点管理、子局点管理等常用功能。

## 主要内容：
根据局点区分项目到201服务器上

##author：
李杰、伍卓睿

##服务器地址+密码：
服务器：192.168.2.201:22
账号：root
密码：Amt@2020

## 说明
> 数据库文件在后端项目中。
>

## 技术栈
前端：hooks + antd + apollo/client + graphql

后端：node.js + apollo-server + graphql + mongoose


## 安装与使用
> 请确保已安装node 前端node ～@15 后端@latest
```bash
$ git clone 
$ cd sendstation
$ yarn install
$ yarn dev
$ cd server
$ yarn install
$ yarn serve

```

## 工程结构
> server
```
.
├── data                    
│   ├── db                   # 数据库文件
├── graphql                  # graphql文件
|   ├── resolvers            # gql文件
│   │   ├── index.js         # 所有Query和Mutation
│   │   ├── users.js         # 用户的行为（登陆，注册）
│   │   ├── stronghold.js    # 一级局点操作（新增，编辑，删除）
│   │   ├── position.js      # 子局点操作（新增，编辑，删除）
├── models                   # schema文件
│   │   ├── Users.js         # 用户属性的模型
│   │   ├── Stronghold.js    # 局点属性的模型
├── util                     # 工具类
│   │   ├── check_auth.js    # token校验，用以换取用户信息
│   │   ├── validators.js    # 页面form接收的数据校验
├── config.js                # 配置文件（db地址，盐，token过期时间）   
├── index.js                 # ApolloServer入口，用nodemon做了hmr
```
