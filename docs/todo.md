
### mockjson 构造数据模板问题
- 解决以下数据构造语义问题
    
    {"list": "@NUMBER|1-5"}
    > {"list": 1234}

    {"list": "@NUMBER|>200|<500"}
    > {"list": 301}

    {"list|1-5": "@NUMBER"}
    > {"list": [1,2,3]}


    {"list|4": ["@NUMBER|300-500", "@NUMBER|300-500"]}

    > {"list": [[200, 300], [200, 300], [200, 300]]}

- 支持模板接口/对象/变量的复用问题

    stub.get('GET_nikon_abstract', params);
    stub.get('@SUBLINK', params);
    stub.get('@IDEA', params);


- 增加mockjson说明文档

### beef 配置问题
- 支持path 配置 (优先级高)
- 支持package 配置 (优先级低)
- 支持baseURL 配置 (优先级低)


## mock业务支持逻辑
    - 物料读写逻辑(启动服务刷新生成一定量物料；写操作后修改内存或本地物料信息; mock物料时优先从本地存储中获得物料；)
    - 物料/变量存储方案单独作为一个mock方案实现；为保证通用性和使用的简易性不建议用复杂的db去做

