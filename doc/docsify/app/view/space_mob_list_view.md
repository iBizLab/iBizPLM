# 知识(space_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [空间(SPACE)](module/Wiki/space) : [设置星标](module/Wiki/space#界面行为)
  * [空间(SPACE)](module/Wiki/space) : [取消星标](module/Wiki/space#界面行为)

### 关联视图
  * [页面(article_page_mob_list_view)](app/view/article_page_mob_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>