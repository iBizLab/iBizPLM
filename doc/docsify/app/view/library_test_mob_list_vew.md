# 测试(library_test_mob_list_vew)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [测试库(LIBRARY)](module/TestMgmt/library) : [设置星标](module/TestMgmt/library#界面行为)

### 关联视图
  * [测试(library_test_mob_tab_exp_view)](app/view/library_test_mob_tab_exp_view)
  * [用例(test_case_case_mob_md_view)](app/view/test_case_case_mob_md_view)
  * [计划(test_plan_plan_mob_md_view)](app/view/test_plan_plan_mob_md_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>