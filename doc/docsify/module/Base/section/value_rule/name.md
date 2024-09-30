## 名称(NAME) <!-- {docsify-ignore-all} -->

   

### 名称重复判断 :id=CHECK_NAME

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

state "start" as start  <<start>>
state "end" as end <<end>>
state "(NAME) 查询[check_name]记录数" as 6adf2d4bb5d19acaa8d2355714595b85 [[$./name#a6adf2d4bb5d19acaa8d2355714595b85 {"[查询计数] 查询[check_name]记录数"}]]


start --> 6adf2d4bb5d19acaa8d2355714595b85 
6adf2d4bb5d19acaa8d2355714595b85 --> end 


@enduml
```

#### 条件说明

##### (NAME) 查询[check_name]记录数 :id=a6adf2d4bb5d19acaa8d2355714595b85


*关键条件*


查询[检查名称是否重复(check_name)]()结果`result` 在区间 `(-∞ , 1)` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 名称已存在



### 默认规则 :id=Default

```plantuml
@startuml
hide empty description
<style>
root {
  HyperlinkColor #42b983
}
</style>

state "start" as start  <<start>>
state "end" as end <<end>>
state "默认字符串长度" as d320017a7f9d533b18245700dd7a2147 [[$./name#ad320017a7f9d533b18245700dd7a2147 {"默认字符串长度"}]]


start --> d320017a7f9d533b18245700dd7a2147 
d320017a7f9d533b18245700dd7a2147 --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=ad320017a7f9d533b18245700dd7a2147


*关键条件*


`NAME(名称)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







