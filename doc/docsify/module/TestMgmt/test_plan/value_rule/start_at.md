## 计划开始(START_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 23ea0159ededfcd3e99d8de036b6c38d [[$./start_at#a23ea0159ededfcd3e99d8de036b6c38d {"[条件组]OR"}]] {
state " " as 23ea0159ededfcd3e99d8de036b6c38d_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 312f111cd5d9f3ff7ce54135e67eb4a4 [[$./start_at#a312f111cd5d9f3ff7ce54135e67eb4a4 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 7cb49f2bb349801e3927cb2e151dedc5 [[$./start_at#a7cb49f2bb349801e3927cb2e151dedc5 {"[条件组]OR"}]] {
state " " as 7cb49f2bb349801e3927cb2e151dedc5_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 54946c5fd2f05d00381cb2e3f7f1e0db [[$./start_at#a54946c5fd2f05d00381cb2e3f7f1e0db {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as dc9b8724dc22f67ab25d01973f521880 [[$./start_at#adc9b8724dc22f67ab25d01973f521880 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 7cb49f2bb349801e3927cb2e151dedc5_exit  <<exitPoint>>
}
state " " as 23ea0159ededfcd3e99d8de036b6c38d_exit  <<exitPoint>>
}


start --> 23ea0159ededfcd3e99d8de036b6c38d_entry 
23ea0159ededfcd3e99d8de036b6c38d_entry --> 312f111cd5d9f3ff7ce54135e67eb4a4 
312f111cd5d9f3ff7ce54135e67eb4a4 --> 23ea0159ededfcd3e99d8de036b6c38d_exit  : yes
312f111cd5d9f3ff7ce54135e67eb4a4 -[#red]-> 7cb49f2bb349801e3927cb2e151dedc5_entry  : no

7cb49f2bb349801e3927cb2e151dedc5_entry --> 54946c5fd2f05d00381cb2e3f7f1e0db 
54946c5fd2f05d00381cb2e3f7f1e0db --> 7cb49f2bb349801e3927cb2e151dedc5_exit  : yes
54946c5fd2f05d00381cb2e3f7f1e0db -[#red]-> dc9b8724dc22f67ab25d01973f521880  : no

dc9b8724dc22f67ab25d01973f521880 --> 7cb49f2bb349801e3927cb2e151dedc5_exit  : yes
dc9b8724dc22f67ab25d01973f521880 -[#red]-> end  : no
7cb49f2bb349801e3927cb2e151dedc5_exit --> 23ea0159ededfcd3e99d8de036b6c38d_exit 
23ea0159ededfcd3e99d8de036b6c38d_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a312f111cd5d9f3ff7ce54135e67eb4a4



`START_AT(计划开始)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=adc9b8724dc22f67ab25d01973f521880



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (END_AT) 值为空(Nil) :id=a54946c5fd2f05d00381cb2e3f7f1e0db



`END_AT(计划结束)` ISNULL 






