## 截止时间(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 8d82d26e68faee17c28a6b2af19a5766 [[$./end_at#a8d82d26e68faee17c28a6b2af19a5766 {"[条件组]OR"}]] {
state " " as 8d82d26e68faee17c28a6b2af19a5766_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 7542e7ee9535dc64aba821aed42c8ecd [[$./end_at#a7542e7ee9535dc64aba821aed42c8ecd {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 184981ce2a6a953515f684921dbeb1cf [[$./end_at#a184981ce2a6a953515f684921dbeb1cf {"[条件组]OR"}]] {
state " " as 184981ce2a6a953515f684921dbeb1cf_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as f59849fb6aee88484faf1af0eef30f4a [[$./end_at#af59849fb6aee88484faf1af0eef30f4a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as daf8e1eed43b7175d8d8078783d6a539 [[$./end_at#adaf8e1eed43b7175d8d8078783d6a539 {"[常规条件] 值为空(Nil)"}]]
state " " as 184981ce2a6a953515f684921dbeb1cf_exit  <<exitPoint>>
}
state " " as 8d82d26e68faee17c28a6b2af19a5766_exit  <<exitPoint>>
}


start --> 8d82d26e68faee17c28a6b2af19a5766_entry 
8d82d26e68faee17c28a6b2af19a5766_entry --> 7542e7ee9535dc64aba821aed42c8ecd 
7542e7ee9535dc64aba821aed42c8ecd --> 8d82d26e68faee17c28a6b2af19a5766_exit  : yes
7542e7ee9535dc64aba821aed42c8ecd -[#red]-> 184981ce2a6a953515f684921dbeb1cf_entry  : no

184981ce2a6a953515f684921dbeb1cf_entry --> f59849fb6aee88484faf1af0eef30f4a 
f59849fb6aee88484faf1af0eef30f4a --> 184981ce2a6a953515f684921dbeb1cf_exit  : yes
f59849fb6aee88484faf1af0eef30f4a -[#red]-> daf8e1eed43b7175d8d8078783d6a539  : no

daf8e1eed43b7175d8d8078783d6a539 --> 184981ce2a6a953515f684921dbeb1cf_exit  : yes
daf8e1eed43b7175d8d8078783d6a539 -[#red]-> end  : no
184981ce2a6a953515f684921dbeb1cf_exit --> 8d82d26e68faee17c28a6b2af19a5766_exit 
8d82d26e68faee17c28a6b2af19a5766_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=adaf8e1eed43b7175d8d8078783d6a539



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=af59849fb6aee88484faf1af0eef30f4a



`END_AT(截止时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=a7542e7ee9535dc64aba821aed42c8ecd



`END_AT(截止时间)` ISNULL 






