```sql
SELECT
t1.`EXPIRATION_DATE`,
t1.`ID`,
t1.`IS_SHARED`,
t1.`IS_SHARED_SUBSET`,
t1.`NAME`,
t1.`PUBLISH_NAME`,
t1.`SHARED_BY`,
t1.`SHARED_TIME`,
t1.`SPACE_ID`,
t1.`UPDATE_MAN`,
t1.`UPDATE_TIME`
FROM `PAGE` t1 

WHERE ( t1.`IS_SHARED` = '1'  AND  t1.`IS_DELETED` = 0  AND  t1.`IS_PUBLISHED` = 1 )
```