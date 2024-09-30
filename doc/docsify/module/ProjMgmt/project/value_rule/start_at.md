## 开始时间(START_AT) <!-- {docsify-ignore-all} -->

   

### 开始时间 :id=START_AT

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
state "[条件组]OR" as 3ad4970ed00c9c0f48cdf56937b27721 [[$./start_at#a3ad4970ed00c9c0f48cdf56937b27721 {"[条件组]OR"}]] {
state " " as 3ad4970ed00c9c0f48cdf56937b27721_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 2600fdade02e0257adf34ff60a9f10ae [[$./start_at#a2600fdade02e0257adf34ff60a9f10ae {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 63f725bdb4afbd4f922ab91c653b4702 [[$./start_at#a63f725bdb4afbd4f922ab91c653b4702 {"[条件组]OR"}]] {
state " " as 63f725bdb4afbd4f922ab91c653b4702_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 367e1e3ba47347c0a718a8ff1f5a31e9 [[$./start_at#a367e1e3ba47347c0a718a8ff1f5a31e9 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 0c7e1a8f4fb8fa4773353b2fd8c55cd0 [[$./start_at#a0c7e1a8f4fb8fa4773353b2fd8c55cd0 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 63f725bdb4afbd4f922ab91c653b4702_exit  <<exitPoint>>
}
state " " as 3ad4970ed00c9c0f48cdf56937b27721_exit  <<exitPoint>>
}


start --> 3ad4970ed00c9c0f48cdf56937b27721_entry 
3ad4970ed00c9c0f48cdf56937b27721_entry --> 2600fdade02e0257adf34ff60a9f10ae 
2600fdade02e0257adf34ff60a9f10ae --> 3ad4970ed00c9c0f48cdf56937b27721_exit  : yes
2600fdade02e0257adf34ff60a9f10ae -[#red]-> 63f725bdb4afbd4f922ab91c653b4702_entry  : no

63f725bdb4afbd4f922ab91c653b4702_entry --> 367e1e3ba47347c0a718a8ff1f5a31e9 
367e1e3ba47347c0a718a8ff1f5a31e9 --> 63f725bdb4afbd4f922ab91c653b4702_exit  : yes
367e1e3ba47347c0a718a8ff1f5a31e9 -[#red]-> 0c7e1a8f4fb8fa4773353b2fd8c55cd0  : no

0c7e1a8f4fb8fa4773353b2fd8c55cd0 --> 63f725bdb4afbd4f922ab91c653b4702_exit  : yes
0c7e1a8f4fb8fa4773353b2fd8c55cd0 -[#red]-> end  : no
63f725bdb4afbd4f922ab91c653b4702_exit --> 3ad4970ed00c9c0f48cdf56937b27721_exit 
3ad4970ed00c9c0f48cdf56937b27721_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a367e1e3ba47347c0a718a8ff1f5a31e9



`END_AT(结束时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a0c7e1a8f4fb8fa4773353b2fd8c55cd0



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (START_AT) 值为空(Nil) :id=a2600fdade02e0257adf34ff60a9f10ae



`START_AT(开始时间)` ISNULL 






