# 产品(product_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [产品(PRODUCT)](module/ProdMgmt/product) : [取消星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [设置星标](module/ProdMgmt/product#界面行为)
  * [产品(PRODUCT)](module/ProdMgmt/product) : [编辑界面_退出操作](module/ProdMgmt/product#界面行为)

### 关联视图
  * [需求(idea_mob_idea_md_view)](app/view/idea_mob_idea_md_view)
  * [产品(product_mob_tab_exp_view)](app/view/product_mob_tab_exp_view)
  * [工单(ticket_mob_md_view)](app/view/ticket_mob_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>