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
state "[条件组]OR" as 8714ccaa89a59ad6585359fd230c88d5 [[$./start_at#a8714ccaa89a59ad6585359fd230c88d5 {"[条件组]OR"}]] {
state " " as 8714ccaa89a59ad6585359fd230c88d5_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 133e3cead5a76620e018a82ac99c60ea [[$./start_at#a133e3cead5a76620e018a82ac99c60ea {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as c724fe7275de8e11ce4d7bed230dc8ff [[$./start_at#ac724fe7275de8e11ce4d7bed230dc8ff {"[条件组]OR"}]] {
state " " as c724fe7275de8e11ce4d7bed230dc8ff_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 121548d05770cd062044a903c3e41d96 [[$./start_at#a121548d05770cd062044a903c3e41d96 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 5f53a51a36b142f488804dcbd3d5288e [[$./start_at#a5f53a51a36b142f488804dcbd3d5288e {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as c724fe7275de8e11ce4d7bed230dc8ff_exit  <<exitPoint>>
}
state " " as 8714ccaa89a59ad6585359fd230c88d5_exit  <<exitPoint>>
}


start --> 8714ccaa89a59ad6585359fd230c88d5_entry 
8714ccaa89a59ad6585359fd230c88d5_entry --> 133e3cead5a76620e018a82ac99c60ea 
133e3cead5a76620e018a82ac99c60ea --> 8714ccaa89a59ad6585359fd230c88d5_exit  : yes
133e3cead5a76620e018a82ac99c60ea -[#red]-> c724fe7275de8e11ce4d7bed230dc8ff_entry  : no

c724fe7275de8e11ce4d7bed230dc8ff_entry --> 121548d05770cd062044a903c3e41d96 
121548d05770cd062044a903c3e41d96 --> c724fe7275de8e11ce4d7bed230dc8ff_exit  : yes
121548d05770cd062044a903c3e41d96 -[#red]-> 5f53a51a36b142f488804dcbd3d5288e  : no

5f53a51a36b142f488804dcbd3d5288e --> c724fe7275de8e11ce4d7bed230dc8ff_exit  : yes
5f53a51a36b142f488804dcbd3d5288e -[#red]-> end  : no
c724fe7275de8e11ce4d7bed230dc8ff_exit --> 8714ccaa89a59ad6585359fd230c88d5_exit 
8714ccaa89a59ad6585359fd230c88d5_exit --> end 


@enduml
```

#### 条件说明

##### (START_AT) 值为空(Nil) :id=a133e3cead5a76620e018a82ac99c60ea



`START_AT(开始时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a5f53a51a36b142f488804dcbd3d5288e



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于结束时间


##### (END_AT) 值为空(Nil) :id=a121548d05770cd062044a903c3e41d96



`END_AT(结束时间)` ISNULL 






