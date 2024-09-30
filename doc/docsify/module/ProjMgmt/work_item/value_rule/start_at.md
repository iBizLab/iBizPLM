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
state "[条件组]OR" as 807403c05d74aa8cb4fdbd48c390c68b [[$./start_at#a807403c05d74aa8cb4fdbd48c390c68b {"[条件组]OR"}]] {
state " " as 807403c05d74aa8cb4fdbd48c390c68b_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 0e331061ffc7d6fd715b45a0429dde45 [[$./start_at#a0e331061ffc7d6fd715b45a0429dde45 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 4b23d19a0bfabcb9a4d35f3c704ea2bf [[$./start_at#a4b23d19a0bfabcb9a4d35f3c704ea2bf {"[条件组]OR"}]] {
state " " as 4b23d19a0bfabcb9a4d35f3c704ea2bf_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 138011728460a5e3329af1ee31626249 [[$./start_at#a138011728460a5e3329af1ee31626249 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 504d87c44c9e66a1dbc485d5210508aa [[$./start_at#a504d87c44c9e66a1dbc485d5210508aa {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 4b23d19a0bfabcb9a4d35f3c704ea2bf_exit  <<exitPoint>>
}
state " " as 807403c05d74aa8cb4fdbd48c390c68b_exit  <<exitPoint>>
}


start --> 807403c05d74aa8cb4fdbd48c390c68b_entry 
807403c05d74aa8cb4fdbd48c390c68b_entry --> 0e331061ffc7d6fd715b45a0429dde45 
0e331061ffc7d6fd715b45a0429dde45 --> 807403c05d74aa8cb4fdbd48c390c68b_exit  : yes
0e331061ffc7d6fd715b45a0429dde45 -[#red]-> 4b23d19a0bfabcb9a4d35f3c704ea2bf_entry  : no

4b23d19a0bfabcb9a4d35f3c704ea2bf_entry --> 138011728460a5e3329af1ee31626249 
138011728460a5e3329af1ee31626249 --> 4b23d19a0bfabcb9a4d35f3c704ea2bf_exit  : yes
138011728460a5e3329af1ee31626249 -[#red]-> 504d87c44c9e66a1dbc485d5210508aa  : no

504d87c44c9e66a1dbc485d5210508aa --> 4b23d19a0bfabcb9a4d35f3c704ea2bf_exit  : yes
504d87c44c9e66a1dbc485d5210508aa -[#red]-> end  : no
4b23d19a0bfabcb9a4d35f3c704ea2bf_exit --> 807403c05d74aa8cb4fdbd48c390c68b_exit 
807403c05d74aa8cb4fdbd48c390c68b_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a0e331061ffc7d6fd715b45a0429dde45



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a504d87c44c9e66a1dbc485d5210508aa



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a138011728460a5e3329af1ee31626249



`END_AT(截止时间)` ISNULL 






