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
state "[条件组]OR" as 72f2d143013a8e5c6c53b026bbce6ec5 [[$./start_at#a72f2d143013a8e5c6c53b026bbce6ec5 {"[条件组]OR"}]] {
state " " as 72f2d143013a8e5c6c53b026bbce6ec5_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as dc17d3b0f3e2ba3819d2a72dce974e42 [[$./start_at#adc17d3b0f3e2ba3819d2a72dce974e42 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 215fd674e859bda9c96f337d239fad1c [[$./start_at#a215fd674e859bda9c96f337d239fad1c {"[条件组]OR"}]] {
state " " as 215fd674e859bda9c96f337d239fad1c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f6be99b33312482aa93b2275ffbb1c58 [[$./start_at#af6be99b33312482aa93b2275ffbb1c58 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as af488a6fe10912d85a9be2873292cfb7 [[$./start_at#aaf488a6fe10912d85a9be2873292cfb7 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 215fd674e859bda9c96f337d239fad1c_exit  <<exitPoint>>
}
state " " as 72f2d143013a8e5c6c53b026bbce6ec5_exit  <<exitPoint>>
}


start --> 72f2d143013a8e5c6c53b026bbce6ec5_entry 
72f2d143013a8e5c6c53b026bbce6ec5_entry --> dc17d3b0f3e2ba3819d2a72dce974e42 
dc17d3b0f3e2ba3819d2a72dce974e42 --> 72f2d143013a8e5c6c53b026bbce6ec5_exit  : yes
dc17d3b0f3e2ba3819d2a72dce974e42 -[#red]-> 215fd674e859bda9c96f337d239fad1c_entry  : no

215fd674e859bda9c96f337d239fad1c_entry --> f6be99b33312482aa93b2275ffbb1c58 
f6be99b33312482aa93b2275ffbb1c58 --> 215fd674e859bda9c96f337d239fad1c_exit  : yes
f6be99b33312482aa93b2275ffbb1c58 -[#red]-> af488a6fe10912d85a9be2873292cfb7  : no

af488a6fe10912d85a9be2873292cfb7 --> 215fd674e859bda9c96f337d239fad1c_exit  : yes
af488a6fe10912d85a9be2873292cfb7 -[#red]-> end  : no
215fd674e859bda9c96f337d239fad1c_exit --> 72f2d143013a8e5c6c53b026bbce6ec5_exit 
72f2d143013a8e5c6c53b026bbce6ec5_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=adc17d3b0f3e2ba3819d2a72dce974e42



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=aaf488a6fe10912d85a9be2873292cfb7



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=af6be99b33312482aa93b2275ffbb1c58



`END_AT(结束时间)` ISNULL 






