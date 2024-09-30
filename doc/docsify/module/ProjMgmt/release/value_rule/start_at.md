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
state "[条件组]OR" as d9d9458b6186fcc648f882fdeba397b5 [[$./start_at#ad9d9458b6186fcc648f882fdeba397b5 {"[条件组]OR"}]] {
state " " as d9d9458b6186fcc648f882fdeba397b5_entry  <<entryPoint>>
state "(START_AT) 值为空(Nil)" as 513f3f175d1631dce14197eff7d28022 [[$./start_at#a513f3f175d1631dce14197eff7d28022 {"[常规条件] 值为空(Nil)"}]]
state "[条件组]OR" as 79c2c122b4b545eae24bd2a04ecd9192 [[$./start_at#a79c2c122b4b545eae24bd2a04ecd9192 {"[条件组]OR"}]] {
state " " as 79c2c122b4b545eae24bd2a04ecd9192_entry  <<entryPoint>>
state "(END_AT) 值为空(Nil)" as 701d6a04ddcd6bd59a502a6114478f32 [[$./start_at#a701d6a04ddcd6bd59a502a6114478f32 {"[常规条件] 值为空(Nil)"}]]
state "(START_AT) 小于等于(<=) 数据对象属性 (END_AT)" as 90e24c406f91e915d4363b8d97d76ee6 [[$./start_at#a90e24c406f91e915d4363b8d97d76ee6 {"[常规条件] 小于等于(<=) 数据对象属性 (END_AT)"}]]
state " " as 79c2c122b4b545eae24bd2a04ecd9192_exit  <<exitPoint>>
}
state " " as d9d9458b6186fcc648f882fdeba397b5_exit  <<exitPoint>>
}


start --> d9d9458b6186fcc648f882fdeba397b5_entry 
d9d9458b6186fcc648f882fdeba397b5_entry --> 513f3f175d1631dce14197eff7d28022 
513f3f175d1631dce14197eff7d28022 --> d9d9458b6186fcc648f882fdeba397b5_exit  : yes
513f3f175d1631dce14197eff7d28022 -[#red]-> 79c2c122b4b545eae24bd2a04ecd9192_entry  : no

79c2c122b4b545eae24bd2a04ecd9192_entry --> 701d6a04ddcd6bd59a502a6114478f32 
701d6a04ddcd6bd59a502a6114478f32 --> 79c2c122b4b545eae24bd2a04ecd9192_exit  : yes
701d6a04ddcd6bd59a502a6114478f32 -[#red]-> 90e24c406f91e915d4363b8d97d76ee6  : no

90e24c406f91e915d4363b8d97d76ee6 --> 79c2c122b4b545eae24bd2a04ecd9192_exit  : yes
90e24c406f91e915d4363b8d97d76ee6 -[#red]-> end  : no
79c2c122b4b545eae24bd2a04ecd9192_exit --> d9d9458b6186fcc648f882fdeba397b5_exit 
d9d9458b6186fcc648f882fdeba397b5_exit --> end 


@enduml
```

#### 条件说明

##### (END_AT) 值为空(Nil) :id=a701d6a04ddcd6bd59a502a6114478f32



`END_AT(发布时间)` ISNULL 

##### (START_AT) 小于等于(<=) 数据对象属性 (END_AT) :id=a90e24c406f91e915d4363b8d97d76ee6



`START_AT(开始时间)` LTANDEQ  `END_AT`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 开始时间必须小于等于发布时间


##### (START_AT) 值为空(Nil) :id=a513f3f175d1631dce14197eff7d28022



`START_AT(开始时间)` ISNULL 






