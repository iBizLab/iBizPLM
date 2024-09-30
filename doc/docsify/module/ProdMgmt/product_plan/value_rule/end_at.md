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
state "[条件组]OR" as 42e1b2be41780375be9c12096ce5f6bd [[$./end_at#a42e1b2be41780375be9c12096ce5f6bd {"[条件组]OR"}]] {
state " " as 42e1b2be41780375be9c12096ce5f6bd_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as dbd02b4422aa8ab676ce6583811974ca [[$./end_at#adbd02b4422aa8ab676ce6583811974ca {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as fe3e7a349faae5eb332153227584c583 [[$./end_at#afe3e7a349faae5eb332153227584c583 {"[条件组]OR"}]] {
state " " as fe3e7a349faae5eb332153227584c583_entry  <<entryPoint>>
state "(END_AT) 大于等于(>=) 数据对象属性 (START_AT)" as b9436823aa616346e15e92c6d7019a6c [[$./end_at#ab9436823aa616346e15e92c6d7019a6c {"[常规条件] 大于等于(>=) 数据对象属性 (START_AT)"}]]
state "(START_AT) 值为空(Nil)" as 3f1b75b97e37cd01463b09f034aedcff [[$./end_at#a3f1b75b97e37cd01463b09f034aedcff {"[常规条件] 值为空(Nil)"}]]
state " " as fe3e7a349faae5eb332153227584c583_exit  <<exitPoint>>
}
state " " as 42e1b2be41780375be9c12096ce5f6bd_exit  <<exitPoint>>
}


start --> 42e1b2be41780375be9c12096ce5f6bd_entry 
42e1b2be41780375be9c12096ce5f6bd_entry --> dbd02b4422aa8ab676ce6583811974ca 
dbd02b4422aa8ab676ce6583811974ca --> 42e1b2be41780375be9c12096ce5f6bd_exit  : yes
dbd02b4422aa8ab676ce6583811974ca -[#red]-> fe3e7a349faae5eb332153227584c583_entry  : no

fe3e7a349faae5eb332153227584c583_entry --> b9436823aa616346e15e92c6d7019a6c 
b9436823aa616346e15e92c6d7019a6c --> fe3e7a349faae5eb332153227584c583_exit  : yes
b9436823aa616346e15e92c6d7019a6c -[#red]-> 3f1b75b97e37cd01463b09f034aedcff  : no

3f1b75b97e37cd01463b09f034aedcff --> fe3e7a349faae5eb332153227584c583_exit  : yes
3f1b75b97e37cd01463b09f034aedcff -[#red]-> end  : no
fe3e7a349faae5eb332153227584c583_exit --> 42e1b2be41780375be9c12096ce5f6bd_exit 
42e1b2be41780375be9c12096ce5f6bd_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=adbd02b4422aa8ab676ce6583811974ca



`END_AT(计划结束)` ISNULL 

##### (END_AT) 大于等于(>=) 数据对象属性 (START_AT) :id=ab9436823aa616346e15e92c6d7019a6c



`END_AT(计划结束)` GTANDEQ  `START_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 发布时间必须大于等于开始时间


##### (START_AT) 值为空(Nil) :id=a3f1b75b97e37cd01463b09f034aedcff



`START_AT(计划开始)` ISNULL 






