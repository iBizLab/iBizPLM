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
state "[条件组]OR" as 809647480d636bc58b92bc70d27e7386 [[$./start_at#a809647480d636bc58b92bc70d27e7386 {"[条件组]OR"}]] {
state " " as 809647480d636bc58b92bc70d27e7386_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 881b355a4658ca694a63b764dc244443 [[$./start_at#a881b355a4658ca694a63b764dc244443 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c746bd1a8c6110aa406f35938146620e [[$./start_at#ac746bd1a8c6110aa406f35938146620e {"[条件组]OR"}]] {
state " " as c746bd1a8c6110aa406f35938146620e_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 61fffc61ace48ed7076e14224c3ba06a [[$./start_at#a61fffc61ace48ed7076e14224c3ba06a {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 431e3a1e9bc0c0769c2a6aa8b0a09a43 [[$./start_at#a431e3a1e9bc0c0769c2a6aa8b0a09a43 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c746bd1a8c6110aa406f35938146620e_exit  <<exitPoint>>
}
state " " as 809647480d636bc58b92bc70d27e7386_exit  <<exitPoint>>
}


start --> 809647480d636bc58b92bc70d27e7386_entry 
809647480d636bc58b92bc70d27e7386_entry --> 881b355a4658ca694a63b764dc244443 
881b355a4658ca694a63b764dc244443 --> 809647480d636bc58b92bc70d27e7386_exit  : yes
881b355a4658ca694a63b764dc244443 -[#red]-> c746bd1a8c6110aa406f35938146620e_entry  : no

c746bd1a8c6110aa406f35938146620e_entry --> 61fffc61ace48ed7076e14224c3ba06a 
61fffc61ace48ed7076e14224c3ba06a --> c746bd1a8c6110aa406f35938146620e_exit  : yes
61fffc61ace48ed7076e14224c3ba06a -[#red]-> 431e3a1e9bc0c0769c2a6aa8b0a09a43  : no

431e3a1e9bc0c0769c2a6aa8b0a09a43 --> c746bd1a8c6110aa406f35938146620e_exit  : yes
431e3a1e9bc0c0769c2a6aa8b0a09a43 -[#red]-> end  : no
c746bd1a8c6110aa406f35938146620e_exit --> 809647480d636bc58b92bc70d27e7386_exit 
809647480d636bc58b92bc70d27e7386_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a61fffc61ace48ed7076e14224c3ba06a



`END_AT(计划结束)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a431e3a1e9bc0c0769c2a6aa8b0a09a43



`START_AT(计划开始)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a881b355a4658ca694a63b764dc244443



`START_AT(计划开始)` ISNULL 






