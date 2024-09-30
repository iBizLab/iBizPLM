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
state "[条件组]OR" as 9b0b262bb50da67c4d6fe30f4801402c [[$./end_at#a9b0b262bb50da67c4d6fe30f4801402c {"[条件组]OR"}]] {
state " " as 9b0b262bb50da67c4d6fe30f4801402c_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 3dca7a19f674cd9244f983ecc790c1f7 [[$./end_at#a3dca7a19f674cd9244f983ecc790c1f7 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 2fb33edd1341f502cf8d045b89f2ca4c [[$./end_at#a2fb33edd1341f502cf8d045b89f2ca4c {"[条件组]OR"}]] {
state " " as 2fb33edd1341f502cf8d045b89f2ca4c_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as bd98310a24504c87df890af1d83c0523 [[$./end_at#abd98310a24504c87df890af1d83c0523 {"[常规条件] 值为空(Nil)"}]]
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as 81921b82ad71a201ce8b1bd2dbb9128e [[$./end_at#a81921b82ad71a201ce8b1bd2dbb9128e {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state " " as 2fb33edd1341f502cf8d045b89f2ca4c_exit  <<exitPoint>>
}
state " " as 9b0b262bb50da67c4d6fe30f4801402c_exit  <<exitPoint>>
}


start --> 9b0b262bb50da67c4d6fe30f4801402c_entry 
9b0b262bb50da67c4d6fe30f4801402c_entry --> 3dca7a19f674cd9244f983ecc790c1f7 
3dca7a19f674cd9244f983ecc790c1f7 --> 9b0b262bb50da67c4d6fe30f4801402c_exit  : yes
3dca7a19f674cd9244f983ecc790c1f7 -[#red]-> 2fb33edd1341f502cf8d045b89f2ca4c_entry  : no

2fb33edd1341f502cf8d045b89f2ca4c_entry --> bd98310a24504c87df890af1d83c0523 
bd98310a24504c87df890af1d83c0523 --> 2fb33edd1341f502cf8d045b89f2ca4c_exit  : yes
bd98310a24504c87df890af1d83c0523 -[#red]-> 81921b82ad71a201ce8b1bd2dbb9128e  : no

81921b82ad71a201ce8b1bd2dbb9128e --> 2fb33edd1341f502cf8d045b89f2ca4c_exit  : yes
81921b82ad71a201ce8b1bd2dbb9128e -[#red]-> end  : no
2fb33edd1341f502cf8d045b89f2ca4c_exit --> 9b0b262bb50da67c4d6fe30f4801402c_exit 
9b0b262bb50da67c4d6fe30f4801402c_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=abd98310a24504c87df890af1d83c0523



`START_AT(开始时间)` ISNULL 

##### (END_AT) 值为空(Nil) :id=a3dca7a19f674cd9244f983ecc790c1f7



`END_AT(结束时间)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=a81921b82ad71a201ce8b1bd2dbb9128e



`END_AT(结束时间)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 结束时间必须大于等于开始时间







