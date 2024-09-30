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
state "[条件组]OR" as 9a391b48f3fb0340166b079fdd5d006e [[$./end_at#a9a391b48f3fb0340166b079fdd5d006e {"[条件组]OR"}]] {
state " " as 9a391b48f3fb0340166b079fdd5d006e_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as e32db8c1e1d00f016380e2801fcb6dd2 [[$./end_at#ae32db8c1e1d00f016380e2801fcb6dd2 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 79316327e9ddfd00554646437899d300 [[$./end_at#a79316327e9ddfd00554646437899d300 {"[条件组]OR"}]] {
state " " as 79316327e9ddfd00554646437899d300_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 9ac536c0fcfb6fbfe5bb53249f3fe18e [[$./end_at#a9ac536c0fcfb6fbfe5bb53249f3fe18e {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as a9c937651d131d131f550cc9547a20ba [[$./end_at#aa9c937651d131d131f550cc9547a20ba {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 79316327e9ddfd00554646437899d300_exit  <<exitPoint>>
}
state " " as 9a391b48f3fb0340166b079fdd5d006e_exit  <<exitPoint>>
}


start --> 9a391b48f3fb0340166b079fdd5d006e_entry 
9a391b48f3fb0340166b079fdd5d006e_entry --> e32db8c1e1d00f016380e2801fcb6dd2 
e32db8c1e1d00f016380e2801fcb6dd2 --> 9a391b48f3fb0340166b079fdd5d006e_exit  : yes
e32db8c1e1d00f016380e2801fcb6dd2 -[#red]-> 79316327e9ddfd00554646437899d300_entry  : no

79316327e9ddfd00554646437899d300_entry --> 9ac536c0fcfb6fbfe5bb53249f3fe18e 
9ac536c0fcfb6fbfe5bb53249f3fe18e --> 79316327e9ddfd00554646437899d300_exit  : yes
9ac536c0fcfb6fbfe5bb53249f3fe18e -[#red]-> a9c937651d131d131f550cc9547a20ba  : no

a9c937651d131d131f550cc9547a20ba --> 79316327e9ddfd00554646437899d300_exit  : yes
a9c937651d131d131f550cc9547a20ba -[#red]-> end  : no
79316327e9ddfd00554646437899d300_exit --> 9a391b48f3fb0340166b079fdd5d006e_exit 
9a391b48f3fb0340166b079fdd5d006e_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a9ac536c0fcfb6fbfe5bb53249f3fe18e



`START_AT(开始时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=aa9c937651d131d131f550cc9547a20ba



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间


##### (END_AT) 值为空(Nil) :id=ae32db8c1e1d00f016380e2801fcb6dd2



`END_AT(结束时间)` ISNULL 






