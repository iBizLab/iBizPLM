## 结束时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 41d0104c8d1312aca578be3c71bfbd55 [[$./end_at#a41d0104c8d1312aca578be3c71bfbd55 {"[条件组]OR"}]] {
state " " as 41d0104c8d1312aca578be3c71bfbd55_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 4d81cff50eacf489a0e38d20a65e2b3d [[$./end_at#a4d81cff50eacf489a0e38d20a65e2b3d {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 52e34cd5ca5e98567bb7e1398d9f2d61 [[$./end_at#a52e34cd5ca5e98567bb7e1398d9f2d61 {"[条件组]OR"}]] {
state " " as 52e34cd5ca5e98567bb7e1398d9f2d61_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 4d0175698039d5e88199129c29311bd8 [[$./end_at#a4d0175698039d5e88199129c29311bd8 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as d4de55e7c6502d440ce557ee7d1db7cb [[$./end_at#ad4de55e7c6502d440ce557ee7d1db7cb {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 52e34cd5ca5e98567bb7e1398d9f2d61_exit  <<exitPoint>>
}
state " " as 41d0104c8d1312aca578be3c71bfbd55_exit  <<exitPoint>>
}


start --> 41d0104c8d1312aca578be3c71bfbd55_entry 
41d0104c8d1312aca578be3c71bfbd55_entry --> 4d81cff50eacf489a0e38d20a65e2b3d 
4d81cff50eacf489a0e38d20a65e2b3d --> 41d0104c8d1312aca578be3c71bfbd55_exit  : yes
4d81cff50eacf489a0e38d20a65e2b3d -[#red]-> 52e34cd5ca5e98567bb7e1398d9f2d61_entry  : no

52e34cd5ca5e98567bb7e1398d9f2d61_entry --> 4d0175698039d5e88199129c29311bd8 
4d0175698039d5e88199129c29311bd8 --> 52e34cd5ca5e98567bb7e1398d9f2d61_exit  : yes
4d0175698039d5e88199129c29311bd8 -[#red]-> d4de55e7c6502d440ce557ee7d1db7cb  : no

d4de55e7c6502d440ce557ee7d1db7cb --> 52e34cd5ca5e98567bb7e1398d9f2d61_exit  : yes
d4de55e7c6502d440ce557ee7d1db7cb -[#red]-> end  : no
52e34cd5ca5e98567bb7e1398d9f2d61_exit --> 41d0104c8d1312aca578be3c71bfbd55_exit 
41d0104c8d1312aca578be3c71bfbd55_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ad4de55e7c6502d440ce557ee7d1db7cb



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a4d81cff50eacf489a0e38d20a65e2b3d



`END_AT(结束时间)` ISNULL 

##### (START_AT) 值为空(Nil) :id=a4d0175698039d5e88199129c29311bd8



`START_AT(开始时间)` ISNULL 






