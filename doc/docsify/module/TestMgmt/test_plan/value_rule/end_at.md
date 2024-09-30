## 计划结束(END_AT) <!-- {docsify-ignore-all} -->

   

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
state "[条件组]OR" as 9f1adc754930382246ffead6864397f3 [[$./end_at#a9f1adc754930382246ffead6864397f3 {"[条件组]OR"}]] {
state " " as 9f1adc754930382246ffead6864397f3_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as c219cf9e75e338a7f9c4c8b866951be4 [[$./end_at#ac219cf9e75e338a7f9c4c8b866951be4 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 3eff0450def422659c0bee1254f47d08 [[$./end_at#a3eff0450def422659c0bee1254f47d08 {"[条件组]OR"}]] {
state " " as 3eff0450def422659c0bee1254f47d08_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 210ea3ae50fbecec13c9f0aa72d7792a [[$./end_at#a210ea3ae50fbecec13c9f0aa72d7792a {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 5223c174ec0587515134e323b4ea736a [[$./end_at#a5223c174ec0587515134e323b4ea736a {"[常规条件] 值为空(Nil)"}]]
state " " as 3eff0450def422659c0bee1254f47d08_exit  <<exitPoint>>
}
state " " as 9f1adc754930382246ffead6864397f3_exit  <<exitPoint>>
}


start --> 9f1adc754930382246ffead6864397f3_entry 
9f1adc754930382246ffead6864397f3_entry --> c219cf9e75e338a7f9c4c8b866951be4 
c219cf9e75e338a7f9c4c8b866951be4 --> 9f1adc754930382246ffead6864397f3_exit  : yes
c219cf9e75e338a7f9c4c8b866951be4 -[#red]-> 3eff0450def422659c0bee1254f47d08_entry  : no

3eff0450def422659c0bee1254f47d08_entry --> 210ea3ae50fbecec13c9f0aa72d7792a 
210ea3ae50fbecec13c9f0aa72d7792a --> 3eff0450def422659c0bee1254f47d08_exit  : yes
210ea3ae50fbecec13c9f0aa72d7792a -[#red]-> 5223c174ec0587515134e323b4ea736a  : no

5223c174ec0587515134e323b4ea736a --> 3eff0450def422659c0bee1254f47d08_exit  : yes
5223c174ec0587515134e323b4ea736a -[#red]-> end  : no
3eff0450def422659c0bee1254f47d08_exit --> 9f1adc754930382246ffead6864397f3_exit 
9f1adc754930382246ffead6864397f3_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=ac219cf9e75e338a7f9c4c8b866951be4



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a210ea3ae50fbecec13c9f0aa72d7792a



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a5223c174ec0587515134e323b4ea736a



`START_AT(计划开始)` ISNULL 






