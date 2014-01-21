#凤巢前端测试方案

## 目标
 
> 提供前端联调、模拟数据构造数据开发方案


## 功能点
>  
- 所有mock文件能够在服务端与浏览器端同时使用 （*****）
- mock文件采用模块化开发（为方便使用，采用前端AMD规范）（*****）
- mock开发在有限约束下，保证足够灵活性（使用灵活）；独立性(前后端独立， 模块间独立) (****)
- mock文件支持模板化开发(***)
- 灵活切换请求模式(本地模拟/服务端模拟/真实线上请求) (***)


## 使用方法

### 模块化设计构造数据

>  - 文件结构

    - mock
       - aopackage
           - index.js
           - GET_nikon_detail.js
           - GET_nikon_abstract.js
       - common
           - GET_material.js
           - GET_auth.js
       - manage



> - 每个接口定义为一个模块

    define(function(require) {
        return {
            "status": 200,
            "data": {
                "aostatus": "@NUMBER|0-3",
                "ignoreitems|1-5": "@NUMBER|200-2009"
            },
            "errorCode": null
        }
    });


> - 多个接口定义在一个模块文件中

    define(function(require, exports, module) {
        var stub = require('stub/index');
        
        exports.GET_nikon_detail = function(path, param) {
            return {
                "status": 200,
                "data": {
                    "aostatus": stub.get('@NUMBER|0-3'),
                    "optmd5": stub.get('@STAMPTIME'),
                    "totalnum": stub.get('@NUMBER|0-10'),
                    "detailresitems": stub.get('@MATERIA', param, 3),
                    "commData": {
                        "begindate": stub.get('@STAMPTIME'),
                        "enddate": stub.get('@STAMPTIME')
                    },
                    "listData": stub.get('@MATERIA', param, 3)
                },
                "error": {}
            };
        };
        
        exports.GET_nikon_introduction = function(path, param) {
            param = {
                fields: ['planid', 'unitid', 'planname']
            };
            return {
                "status": 200,
                "data": {
                    "isshow": "1",
                    "introresitems": stub.get('@MATERIA' , param, 9)
                },
                "error": {}
            };
        };
    });
    
    

### 利用桩模型构造数据
>  
- 桩模型是为了方便数据构造；统一数据接口定义设定的；
- 桩模型不限制mock的使用方式；只作为辅助mock构造数据；
- 桩模型提供了接口级别；或功能、变量基本的构造数据方法


     获得接口数据
      var data = stub.get('GET_nikon_detail', params);
    
      获得功能级别数据
      var sublinks = stub.get('@SUBLINKS', params);
    
      获得变量级别数据
      var idea = stub.get('@IDEA', params);


### 服务端运行mock数据
>  
- 配置部分接口发送真实请求
- 配置edp扩展，所有request.ajax请求转为fcmock扩展处理
- 服务端使用beef兼容前端amd模块


# phoenix debug 设计

----

##1\. fenchao现有的mock方式

- 在dev模式中劫持ajax请求, 客户端js模拟构造数据

![](https://www.evernote.com/shard/s222/sh/ae873330-9ae8-4449-bd83-0a3301c7d944/282672ef8de03aa2d515335f661ccaa0/res/d09d9a13-f75f-4d48-bb48-bccbc4ac156a.png?resizeSmall&width=832)

- 缺陷与问题

>  
- 不发送真实请求
- 问题定位及业务模拟不真实 
- 非模块化开发；代码加载速度慢；维护难道大 
- 构造新接口要写大量重复代码（循环体；物料构造）
- 构造数据不能表达真实业务逻辑； 
- 每次更新数据；调整接口需要刷新浏览器； 
- 随着接口增多；文件结构复杂

##2\. 对mock的改进(已实现，进一步完善)

>* 按需转发请求（proxy, client, server） 
* 模块化设计
* BS端公用mock数据
* 桩接口定义 
* 通用公用接口/字段/物料支持

![](https://www.evernote.com/shard/s222/sh/ae873330-9ae8-4449-bd83-0a3301c7d944/282672ef8de03aa2d515335f661ccaa0/res/db2fd83f-3f7b-4609-a99e-d7b85a53fe84.png?resizeSmall&width=832)


## 3\. 业务逻辑支持（设计中）
* 对物料操作提供简单物流支持读写操作
* 
![](https://www.evernote.com/shard/s222/sh/ae873330-9ae8-4449-bd83-0a3301c7d944/282672ef8de03aa2d515335f661ccaa0/res/24406476-b37a-4b9c-97b7-d258932c44ba.png?resizeSmall&width=832)

------

# 依赖工具介绍

### mockjson
--- 支持前后端数据构造模版引擎

### beef
--- 支持前端AMD模块服务端运行

### fcpipe
——— 提供凤巢类商业平台前后端联调方案