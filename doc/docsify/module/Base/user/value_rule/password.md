## 密码(PASSWORD) <!-- {docsify-ignore-all} -->

   

### 两次密码不一致 :id=PASSWORD

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
state "[条件组]OR" as 018382294217e604fa2e2f1e986a9dc7 [[$./password#a018382294217e604fa2e2f1e986a9dc7 {"[条件组]OR"}]] {
state " " as 018382294217e604fa2e2f1e986a9dc7_entry  <<entryPoint>>
state "(sure_password) 值为空(Nil)" as 4593d814038e71a0d0747f194d5ce5b6 [[$./password#a4593d814038e71a0d0747f194d5ce5b6 {"[常规条件] 值为空(Nil)"}]]
state "(new_password) 值为空(Nil)" as 7f63f9e639382c2e581bd8aae4039ddf [[$./password#a7f63f9e639382c2e581bd8aae4039ddf {"[常规条件] 值为空(Nil)"}]]
state "(sure_password) 等于(=) 数据对象属性 (new_password)" as 2c1b066fbea022efc3c72002fbb44cdd [[$./password#a2c1b066fbea022efc3c72002fbb44cdd {"[常规条件] 等于(=) 数据对象属性 (new_password)"}]]
state " " as 018382294217e604fa2e2f1e986a9dc7_exit  <<exitPoint>>
}


start --> 018382294217e604fa2e2f1e986a9dc7_entry 
018382294217e604fa2e2f1e986a9dc7_entry --> 4593d814038e71a0d0747f194d5ce5b6 
4593d814038e71a0d0747f194d5ce5b6 --> 018382294217e604fa2e2f1e986a9dc7_exit  : yes
4593d814038e71a0d0747f194d5ce5b6 -[#red]-> 7f63f9e639382c2e581bd8aae4039ddf  : no

7f63f9e639382c2e581bd8aae4039ddf --> 018382294217e604fa2e2f1e986a9dc7_exit  : yes
7f63f9e639382c2e581bd8aae4039ddf -[#red]-> 2c1b066fbea022efc3c72002fbb44cdd  : no

2c1b066fbea022efc3c72002fbb44cdd --> 018382294217e604fa2e2f1e986a9dc7_exit  : yes
2c1b066fbea022efc3c72002fbb44cdd -[#red]-> end  : no
018382294217e604fa2e2f1e986a9dc7_exit --> end 


@enduml
```

#### 条件说明

##### (sure_password) 值为空(Nil) :id=a4593d814038e71a0d0747f194d5ce5b6



`sure_password` ISNULL 

##### (sure_password) 等于(=) 数据对象属性 (new_password) :id=a2c1b066fbea022efc3c72002fbb44cdd



`sure_password` EQ  `new_password`

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 两次输入的密码不一致


##### (new_password) 值为空(Nil) :id=a7f63f9e639382c2e581bd8aae4039ddf



`new_password` ISNULL 


### 默认规则 :id=Default

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
state "默认字符串长度" as 76185abdf3fb81c9eff719668aa18ede [[$./password#a76185abdf3fb81c9eff719668aa18ede {"默认字符串长度"}]]


start --> 76185abdf3fb81c9eff719668aa18ede 
76185abdf3fb81c9eff719668aa18ede --> end 


@enduml
```

#### 条件说明

##### 默认字符串长度 :id=a76185abdf3fb81c9eff719668aa18ede


*关键条件*


`PASSWORD(密码)` 属性长度在区间 `(0 , 200]` 内

> [!ATTENTION|label:规则信息|icon:fa fa-warning]
> 内容长度必须小于等于[200]







