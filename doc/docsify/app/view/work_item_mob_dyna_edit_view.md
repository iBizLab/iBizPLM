# 编辑(work_item_mob_dyna_edit_view)  <!-- {docsify-ignore-all} -->



## 控件
#### 编辑表单(_form_mob_scrum_epic)
#### CAPTIONBAR(captionbar)
#### DATAINFOBAR(datainfobar)
#### 编辑表单(form)
#### 工具栏(righttoolbar)


### 关联界面行为
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [归档(工具栏)](module/ProjMgmt/work_item#界面行为)
  * [工作项(WORK_ITEM)](module/ProjMgmt/work_item) : [删除（工具栏）](module/ProjMgmt/work_item#界面行为)

### 关联视图
  * [关联(relation_mob_depend_on_list_view)](app/view/relation_mob_depend_on_list_view)
  * [关联(relation_mob_work_item_re_idea_list_view)](app/view/relation_mob_work_item_re_idea_list_view)
  * [关联(relation_mob_work_item_re_self_list_view)](app/view/relation_mob_work_item_re_self_list_view)
  * [关联(relation_ticket_mob_list_view)](app/view/relation_ticket_mob_list_view)
  * [工作项(work_item_mob_child_list_view)](app/view/work_item_mob_child_list_view)

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    }
  }).use(ElementPlus).mount('#app')
</script>