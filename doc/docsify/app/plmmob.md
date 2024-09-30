# PLMMob(plmmob)  <!-- {docsify-ignore-all} -->

## 菜单

<el-row>
  <el-menu :ellipsis="false" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="menuitem5" @click="itemClick('#/app/view/recent_mob_tab_exp_view')"><i class="fa fa-home"></i>工作台</el-menu-item>
    <el-menu-item index="menuitem2" @click="itemClick('#/app/view/project_mob_list_view')">项目</el-menu-item>
    <el-menu-item index="menuitem1" @click="itemClick('#/app/view/product_mob_list_view')">产品</el-menu-item>
    <el-menu-item index="menuitem3" @click="itemClick('#/app/view/space_mob_tab_exp_view')">知识</el-menu-item>
    <el-menu-item index="menuitem4" @click="itemClick('#/app/view/discuss_post_mob_tab_exp_view')">讨论</el-menu-item>
    <el-menu-item index="menuitem7" @click="itemClick('#/app/view/library_test_mob_list_vew')">测试</el-menu-item>
    <el-menu-item index="menuitem6" @click="itemClick('#/app/view/work_item_mob_dyna_list_view')">动态工作项视图测试</el-menu-item>
  </el-menu>
</el-row>


## 视图清单

|  中文名     |   代码名  |  视图标题 | 视图类型   |   备注  |
|  --------   |------------| -----------|  -----   |  -----   |
|[PLM](app/view/app_index_view)|app_index_view|产品生命周期管理系统|应用首页视图||
|[页面](app/view/article_page_favorite_mob_list_view)|article_page_favorite_mob_list_view|页面|实体移动端列表视图||
|[页面](app/view/article_page_mob_edit_view)|article_page_mob_edit_view|页面|实体移动端编辑视图||
|[页面](app/view/article_page_mob_list_view)|article_page_mob_list_view|页面|实体移动端列表视图||
|[页面](app/view/article_page_recent_mob_list_view)|article_page_recent_mob_list_view|页面|实体移动端列表视图||
|[页面](app/view/article_page_shared_mob_list_view)|article_page_shared_mob_list_view|页面|实体移动端列表视图||
|[交付物](app/view/deliverable_mob_edit_view)|deliverable_mob_edit_view|交付物|实体移动端编辑视图||
|[交付物](app/view/deliverable_mob_list_view)|deliverable_mob_list_view|交付物|实体移动端列表视图||
|[讨论](app/view/discuss_post_mob_edit_view)|discuss_post_mob_edit_view|讨论|实体移动端编辑视图||
|[讨论](app/view/discuss_post_mob_list_view)|discuss_post_mob_list_view|讨论|实体移动端列表视图||
|[讨论](app/view/discuss_post_mob_tab_exp_view)|discuss_post_mob_tab_exp_view|讨论|实体移动端分页导航视图||
|[话题](app/view/discuss_topic_mob_list_view)|discuss_topic_mob_list_view|话题|实体移动端列表视图||
|[需求](app/view/idea_mob_edit_view)|idea_mob_edit_view|需求|实体移动端编辑视图||
|[需求](app/view/idea_mob_idea_md_view)|idea_mob_idea_md_view|需求|实体移动端多数据视图||
|[选择需求](app/view/idea_mob_mpick_up_view)|idea_mob_mpick_up_view|选择需求|实体移动端多数据选择视图||
|[需求移动端多项选择视图_选择数据视图](app/view/idea_mob_mpick_up_view_pickup_md_view)|idea_mob_mpick_up_view_pickup_md_view|需求|实体移动端选择多数据视图（部件视图）||
|[测试移动端列表](app/view/library_test_mob_list_vew)|library_test_mob_list_vew|测试|实体移动端列表视图||
|[测试移动端分页导航](app/view/library_test_mob_tab_exp_view)|library_test_mob_tab_exp_view|测试|实体移动端分页导航视图||
|[产品移动端列表视图](app/view/product_mob_list_view)|product_mob_list_view|产品|实体移动端列表视图||
|[产品列表-移动端](app/view/product_mob_md_view)|product_mob_md_view|产品|实体移动端多数据视图||
|[产品](app/view/product_mob_tab_exp_view)|product_mob_tab_exp_view|产品|实体移动端分页导航视图||
|[基本信息](app/view/project_baseinfo_over_view)|project_baseinfo_over_view|基本信息|实体编辑视图||
|[项目成员](app/view/project_member_mob_list_view)|project_member_mob_list_view|项目成员|实体移动端列表视图||
|[高级设置](app/view/project_mob_advanced_setting_view)|project_mob_advanced_setting_view|高级设置|实体移动端编辑视图||
|[项目](app/view/project_mob_kanban_tab_exp_view)|project_mob_kanban_tab_exp_view|项目|实体移动端分页导航视图||
|[项目](app/view/project_mob_list_view)|project_mob_list_view|项目|实体移动端列表视图||
|[概览](app/view/project_mob_over_view)|project_mob_over_view|概览|实体移动端数据看板视图||
|[项目](app/view/project_mob_redirect_view)|project_mob_redirect_view|项目|实体移动端数据重定向视图||
|[项目](app/view/project_mob_scrum_tab_exp_view)|project_mob_scrum_tab_exp_view|项目|实体移动端分页导航视图|_|
|[项目设置](app/view/project_mob_setting_view)|project_mob_setting_view|项目设置|实体移动端编辑视图||
|[项目](app/view/project_mob_waterfall_tab_exp_view)|project_mob_waterfall_tab_exp_view|项目|实体移动端分页导航视图||
|[项目公告](app/view/project_notice_edit_view)|project_notice_edit_view|编辑公告|实体选项操作视图||
|[项目公告](app/view/project_notice_show_view)|project_notice_show_view|项目|实体编辑视图||
|[项目动态属性呈现](app/view/project_property_edit_view)|project_property_edit_view|项目属性|实体编辑视图||
|[工作台首页](app/view/recent_mob_home_view)|recent_mob_home_view|最近访问|实体移动端自定义视图||
|[工作台](app/view/recent_mob_tab_exp_view)|recent_mob_tab_exp_view|工作台|实体移动端分页导航视图||
|[缺陷](app/view/relation_mob_case_re_bug_view)|relation_mob_case_re_bug_view|关联|实体移动端多数据视图||
|[需求](app/view/relation_mob_case_re_idea_view)|relation_mob_case_re_idea_view|关联|实体移动端多数据视图||
|[工作项](app/view/relation_mob_case_re_item_view)|relation_mob_case_re_item_view|关联|实体移动端多数据视图||
|[依赖](app/view/relation_mob_depend_on_list_view)|relation_mob_depend_on_list_view|关联|实体移动端列表视图||
|[客户](app/view/relation_mob_idea_re_customer_md_view)|relation_mob_idea_re_customer_md_view|关联|实体移动端多数据视图||
|[需求](app/view/relation_mob_idea_re_self_md_view)|relation_mob_idea_re_self_md_view|关联|实体移动端多数据视图||
|[工单](app/view/relation_mob_idea_re_ticket_md_view)|relation_mob_idea_re_ticket_md_view|关联|实体移动端多数据视图||
|[工作项](app/view/relation_mob_idea_re_work_item_md_view)|relation_mob_idea_re_work_item_md_view|关联|实体移动端多数据视图||
|[关联产品需求](app/view/relation_mob_work_item_re_idea_list_view)|relation_mob_work_item_re_idea_list_view|关联|实体移动端列表视图||
|[工作项](app/view/relation_mob_work_item_re_self_list_view)|relation_mob_work_item_re_self_list_view|关联|实体移动端列表视图||
|[工单](app/view/relation_ticket_mob_list_view)|relation_ticket_mob_list_view|关联|实体移动端列表视图||
|[发布](app/view/release_mob_list_view)|release_mob_list_view|项目发布|实体移动端列表视图||
|[空间](app/view/space_mob_list_view)|space_mob_list_view|知识|实体移动端列表视图||
|[空间](app/view/space_mob_tab_exp_view)|space_mob_tab_exp_view|知识|实体移动端分页导航视图||
|[迭代移动端列表](app/view/sprint_mob_sprint_list_view)|sprint_mob_sprint_list_view|迭代|实体移动端列表视图||
|[用例移动端多数据](app/view/test_case_case_mob_md_view)|test_case_case_mob_md_view|用例|实体移动端多数据视图||
|[测试用例](app/view/test_case_mob_edit_view)|test_case_mob_edit_view|编辑|实体移动端编辑视图||
|[计划移动端多数据](app/view/test_plan_plan_mob_md_view)|test_plan_plan_mob_md_view|计划|实体移动端多数据视图||
|[工单](app/view/ticket_mob_edit_view)|ticket_mob_edit_view|编辑|实体移动端编辑视图||
|[工单](app/view/ticket_mob_md_view)|ticket_mob_md_view|工单|实体移动端多数据视图||
|[选择需求](app/view/ticket_mob_mpick_up_view)|ticket_mob_mpick_up_view|选择需求|实体移动端多数据选择视图||
|[工单移动端多项选择视图_选择数据视图](app/view/ticket_mob_mpick_up_view_pickup_md_view)|ticket_mob_mpick_up_view_pickup_md_view|工单|实体移动端选择多数据视图（部件视图）||
|[编辑](app/view/work_item_mob_bug_edit_view)|work_item_mob_bug_edit_view|工作项|实体移动端编辑视图||
|[缺陷](app/view/work_item_mob_bug_list_view)|work_item_mob_bug_list_view|工作项|实体移动端列表视图||
|[工作项](app/view/work_item_mob_child_list_view)|work_item_mob_child_list_view|工作项|实体移动端列表视图||
|[选择子工作项](app/view/work_item_mob_child_mpick_up_view)|work_item_mob_child_mpick_up_view|选择子工作项|实体移动端多数据选择视图||
|[移动端子工作项多项选择视图_选择数据视图](app/view/work_item_mob_child_mpick_up_view_pickup_md_view)|work_item_mob_child_mpick_up_view_pickup_md_view|工作项|实体移动端选择多数据视图（部件视图）||
|[移动端通用编辑](app/view/work_item_mob_common_edit_view)|work_item_mob_common_edit_view|编辑|实体移动端编辑视图||
|[新建](app/view/work_item_mob_create_view)|work_item_mob_create_view|新建|实体移动端编辑视图||
|[选择工作项](app/view/work_item_mob_depend_mpick_up_view)|work_item_mob_depend_mpick_up_view|选择工作项|实体移动端多数据选择视图||
|[移动端工作项选择依赖多项选择视图_选择数据视图](app/view/work_item_mob_depend_mpick_up_view_pickup_md_view)|work_item_mob_depend_mpick_up_view_pickup_md_view|工作项|实体移动端选择多数据视图（部件视图）||
|[工作项](app/view/work_item_mob_dyna_edit_view)|work_item_mob_dyna_edit_view|编辑|实体移动端编辑视图||
|[工作项](app/view/work_item_mob_dyna_list_view)|work_item_mob_dyna_list_view|工作项|实体移动端列表视图||
|[工作项](app/view/work_item_mob_idea_list_view)|work_item_mob_idea_list_view|工作项|实体移动端列表视图||
|[工作项](app/view/work_item_mob_list_view)|work_item_mob_list_view|工作项|实体移动端列表视图||
|[规划](app/view/work_item_mob_md_view)|work_item_mob_md_view|工作项|实体移动端多数据视图||
|[工作项](app/view/work_item_mob_milestone_list_view)|work_item_mob_milestone_list_view|工作项|实体移动端列表视图|EDITDATA 未配置|
|[选择工作项](app/view/work_item_mob_mpick_up_view)|work_item_mob_mpick_up_view|选择工作项|实体移动端多数据选择视图||
|[其他实体关联工作项选择视图（移动端）_选择数据视图](app/view/work_item_mob_mpick_up_view_pickup_md_view)|work_item_mob_mpick_up_view_pickup_md_view|工作项|实体移动端选择多数据视图（部件视图）||
|[回收站](app/view/work_item_mob_recycle_bin_md_view)|work_item_mob_recycle_bin_md_view|回收站|实体移动端多数据视图||
|[选择工作项](app/view/work_item_mob_relation_mpick_view)|work_item_mob_relation_mpick_view|选择工作项|实体移动端多数据选择视图||
|[移动端工作项选择关联多项选择视图_选择数据视图](app/view/work_item_mob_relation_mpick_view_pickup_md_view)|work_item_mob_relation_mpick_view_pickup_md_view|工作项|实体移动端选择多数据视图（部件视图）||

<script>
 const { createApp } = Vue
  createApp({
    data() {
      return {

      }
    },
    methods: {
      itemClick(url) {
        location.href = url
      }
    }
  }).use(ElementPlus).mount('#app')
</script>