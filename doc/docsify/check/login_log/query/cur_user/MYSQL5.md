```sql
SELECT
t1.`AUTHCODE`,
t1.`AUTHTIME`,
t1.`CITY`,
t1.`COUNTRY`,
t1.`COUNTY`,
t1.`CREATE_MAN`,
t1.`CREATE_TIME`,
t1.`ID`,
t1.`IP`,
t1.`ISP`,
t1.`LOGIN_METHOD`,
t1.`NAME`,
t1.`PROVINCE`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`,
t1.`USER_AGENT`,
t1.`USER_ID`,
t1.`USER_NAME`
FROM `` t1 

WHERE ( t1.`USER_ID` = #{ctx.sessioncontext.srfuaauserid} )
```