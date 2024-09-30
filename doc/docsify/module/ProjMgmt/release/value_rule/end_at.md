## 发布时间(END_AT) <!-- {docsify-ignore-all} -->

   

### 结束时间 :id=END_AT

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
state "[条件组]OR" as ec6f49ecbd8499895ee879c43f96f2c1 [[$./end_at#aec6f49ecbd8499895ee879c43f96f2c1 {"[条件组]OR"}]] {
state " " as ec6f49ecbd8499895ee879c43f96f2c1_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as f56441f348206697cfde4d1f5ef31e4f [[$./end_at#af56441f348206697cfde4d1f5ef31e4f {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 6bebc71e4592ceadf99083971db78c1d [[$./end_at#a6bebc71e4592ceadf99083971db78c1d {"[条件组]OR"}]] {
state " " as 6bebc71e4592ceadf99083971db78c1d_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 51a170ddcfd147f154c8fcacf2629abd [[$./end_at#a51a170ddcfd147f154c8fcacf2629abd {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as b468add3c0ad7b60dcb07005f9542e9c [[$./end_at#ab468add3c0ad7b60dcb07005f9542e9c {"[常规条件] 值为空(Nil)"}]]
state " " as 6bebc71e4592ceadf99083971db78c1d_exit  <<exitPoint>>
}
state " " as ec6f49ecbd8499895ee879c43f96f2c1_exit  <<exitPoint>>
}


start --> ec6f49ecbd8499895ee879c43f96f2c1_entry 
ec6f49ecbd8499895ee879c43f96f2c1_entry --> f56441f348206697cfde4d1f5ef31e4f 
f56441f348206697cfde4d1f5ef31e4f --> ec6f49ecbd8499895ee879c43f96f2c1_exit  : yes
f56441f348206697cfde4d1f5ef31e4f -[#red]-> 6bebc71e4592ceadf99083971db78c1d_entry  : no

6bebc71e4592ceadf99083971db78c1d_entry --> 51a170ddcfd147f154c8fcacf2629abd 
51a170ddcfd147f154c8fcacf2629abd --> 6bebc71e4592ceadf99083971db78c1d_exit  : yes
51a170ddcfd147f154c8fcacf2629abd -[#red]-> b468add3c0ad7b60dcb07005f9542e9c  : no

b468add3c0ad7b60dcb07005f9542e9c --> 6bebc71e4592ceadf99083971db78c1d_exit  : yes
b468add3c0ad7b60dcb07005f9542e9c -[#red]-> end  : no
6bebc71e4592ceadf99083971db78c1d_exit --> ec6f49ecbd8499895ee879c43f96f2c1_exit 
ec6f49ecbd8499895ee879c43f96f2c1_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a51a170ddcfd147f154c8fcacf2629abd



`END_AT(发布时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=af56441f348206697cfde4d1f5ef31e4f



`END_AT(发布时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=ab468add3c0ad7b60dcb07005f9542e9c



`START_AT(开始时间)` ISNULL 






