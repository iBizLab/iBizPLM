<p class="panel-title"><b>执行代码</b></p>

```javascript
return (async function() { 
    console.log('临时数据删除')
    // 获取所有临时数据
    const serviceUtil = ibiz.hub.getApp(context.srfappid).deService;
    const service = await serviceUtil.getService(context, 'plmmob.attention');
    const list = service.local.getList();
    var attention_data = uiLogic.attention_data;
    // 临时数据删除
    list.forEach(item => {
        if(item.id ==uiLogic.default.id){
            service.local.delete(context, item.id);
        }else{
            attention_data.push(item);
        }
    })
    } 
)();

```
