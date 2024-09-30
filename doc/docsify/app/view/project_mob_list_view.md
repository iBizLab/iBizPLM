# 项目(project_mob_list_view)  <!-- {docsify-ignore-all} -->



## 控件
#### CAPTIONBAR(captionbar)
#### 移动端多数据视图(mdctrl)
#### 工具栏(righttoolbar)
#### 搜索栏(searchbar)

## 视图界面逻辑
  * newdata(预置新建数据逻辑)
  * opendata(预置打开数据逻辑)


### 关联界面行为
  * [项目(PROJECT)](module/ProjMgmt/project) : [设置星标](module/ProjMgmt/project#界面行为)
  * [项目(PROJECT)](module/ProjMgmt/project) : [取消星标](module/ProjMgmt/project#界面行为)

### 关联视图
  * [项目(project_mob_kanban_tab_exp_view)](app/view/project_mob_kanban_tab_exp_view)
  * [项目(project_mob_redirect_view)](app/view/project_mob_redirect_view)
  * [项目(project_mob_scrum_tab_exp_view)](app/view/project_mob_scrum_tab_exp_view)
  * [项目(project_mob_waterfall_tab_exp_view)](app/view/project_mob_waterfall_tab_exp_view)
  * [项目发布(release_mob_list_view)](app/view/release_mob_list_view)
  * [工作项(work_item_mob_list_view)](app/view/work_item_mob_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>