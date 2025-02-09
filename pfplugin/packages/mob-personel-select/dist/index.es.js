import './style.css';
var R = Object.defineProperty;
var _ = (t, o, a) => o in t ? R(t, o, { enumerable: !0, configurable: !0, writable: !0, value: a }) : t[o] = a;
var m = (t, o, a) => (_(t, typeof o != "symbol" ? o + "" : o, a), a);
import { PluginStaticResource as $, EditorController as U, getDeACMode as K, OpenAppViewCommand as x, registerEditorProvider as W } from "@ibiz-template/runtime";
import { defineComponent as X, ref as b, watch as F, createVNode as h, createTextVNode as J, resolveComponent as P } from "vue";
import { getDataPickerProps as Z, getEditorEmits as H, useNamespace as G, useFocusAndBlur as Y } from "@ibiz-template/vue3-util";
import { clone as C, mergeDeepLeft as Q } from "ramda";
import { RuntimeModelError as w } from "@ibiz-template/core";
const q = new $(import.meta.url), ee = (t) => /[\u4e00-\u9fa5]+.*[a-zA-Z]+|[a-zA-Z]+.*[\u4e00-\u9fa5]+/.test(t), te = (t) => /[\u4E00-\u9FA5]/.test(t), ae = () => {
  const t = document.documentElement;
  return t ? getComputedStyle(t).getPropertyValue("--ibiz-color-primary") : null;
}, se = (t) => {
  if (t && t.toString().length < 2)
    return t;
  if (t && t.toString().length >= 2) {
    if (ee(t)) {
      const n = t.split("").find((d) => /[a-zA-Z]/.test(d)) || "", u = t.split("").find((d) => /[\u4E00-\u9FA5]/.test(d)) || "";
      return "".concat(n).concat(u).toLowerCase();
    }
    return /[a-zA-Z]/.test(t) ? t.split("").filter((n) => /[a-zA-Z]/.test(n)).slice(0, 2).join("").toUpperCase() : /[\u4E00-\u9FA5]/.test(t) ? t.split("").filter((n) => /[\u4E00-\u9FA5]/.test(n)).slice(-2).join("") : t.replaceAll(" ", "").substring(0, 2);
  }
}, S = (t) => {
  if (!t)
    return "";
  let o = 0;
  for (let c = 0; c < t.length; c++)
    if (te(t))
      o = t.charCodeAt(c) + ((o << 5) - o), o = o & o;
    else {
      const p = t.charCodeAt(c);
      o += p.toString(16);
    }
  const a = String(o).substring(0, 6);
  let e = parseInt(a.substring(0, 2), 16), n = parseInt(a.substring(2, 4), 16), u = parseInt(a.substring(4, 6), 16);
  e < 0 && (e = 10), n < 0 && (n = 10), u < 0 && (u = 10);
  const d = "#".concat(e.toString(16).padStart(2, "0")).concat(n.toString(16).padStart(2, "0")).concat(u.toString(16).padStart(2, "0"));
  return d === "#FFFFFF" && ae() || d;
}, ie = /* @__PURE__ */ X({
  name: "MobPersonelSelect",
  props: Z(),
  emits: H(),
  setup(t, {
    emit: o
  }) {
    const a = G("mob-personel-select"), e = t.controller, n = e.model, u = b(!0);
    n.editorParams && n.editorParams.multiple && (u.value = !e.toBoolean(n.editorParams.multiple));
    const d = b([]), c = b([]), p = b(""), g = b(C(e.context)), v = b(C(e.params)), N = b([]), k = b(null), {
      componentRef: O
    } = Y(() => o("focus"), () => o("blur"));
    F(() => t.data, (s) => {
      const {
        context: i,
        params: r
      } = e.handlePublicParams(s, e.context, e.params);
      Object.assign(g.value, i), Object.assign(v.value, r);
    }, {
      immediate: !0,
      deep: !0
    }), F(() => t.value, (s) => {
      if (u.value)
        p.value = s || "", !t.data || !e.valueItem || !t.data[e.valueItem] ? ibiz.log.error("值项异常") : (c.value = [{
          srfkey: t.data[e.valueItem],
          srfmajortext: t.value
        }], v.value.selecteddata = c.value);
      else {
        const i = [];
        if (d.value = [], s)
          if (e.model.valueType === "OBJECTS")
            s.forEach((r) => {
              const l = C(r);
              Object.assign(l, {
                [e.keyName]: r[e.objectIdField],
                [e.textName]: r[e.objectNameField]
              }), e.objectValueField && (Object.assign(l, {
                ...r[e.objectValueField]
              }), delete l[e.objectValueField]), l[e.keyName] && d.value.push(l[e.keyName]), i.push(l);
            });
          else if (!t.data || !e.valueItem || !t.data[e.valueItem])
            ibiz.log.error("值项异常");
          else {
            const r = t.data[e.valueItem].split(","), l = s.split(",");
            r.forEach((f, E) => {
              i.push({
                srfmajortext: l[E],
                srfkey: f
              });
            }), i.forEach((f) => {
              d.value.push(f.srfkey);
            });
          }
        c.value = i, v.value.selectedData = c;
      }
    }, {
      immediate: !0,
      deep: !0
    });
    const y = () => {
      c.value = [];
      const {
        dataItems: s
      } = e;
      s != null && s.length && s.forEach((i) => {
        o("change", null, i.id);
      }), e.valueItem && o("change", null, e.valueItem), o("change", null);
    }, A = (s) => {
      if (s.length === 0) {
        y();
        return;
      }
      if (u.value) {
        if (e.valueItem) {
          const r = s[0][e.keyName] ? s[0][e.keyName] : s[0].srfkey;
          o("change", r, e.valueItem);
        }
        const i = s[0][e.textName] ? s[0][e.textName] : s[0].srfmajortext;
        o("change", i);
      } else if (e.model.valueType === "OBJECTS") {
        if (s && Array.isArray(s)) {
          const i = [];
          s.forEach((r) => {
            const l = e.handleObjectParams(r);
            Object.assign(l, {
              [e.keyName]: r[e.keyName],
              [e.textName]: r[e.textName]
            }), i.push(l);
          }), k.value = i;
        }
        o("change", k.value);
      } else {
        let i = "", r = "";
        s && Array.isArray(s) && s.forEach((l) => {
          const f = l[e.keyName] ? l[e.keyName] : l.srfkey;
          i += "".concat(f, ",");
          const E = l[e.textName] ? l[e.textName] : l.srfmajortext;
          r += "".concat(E, ",");
        }), i = i.substring(0, i.length - 1), r = r.substring(0, r.length - 1), e.valueItem && o("change", i, e.valueItem), o("change", r);
      }
    }, I = async (s) => {
      if (t.readonly || t.disabled)
        return;
      s.stopPropagation();
      let i = "";
      if (c.value.length) {
        const l = c.value.map((f) => ({
          srfkey: f[e.keyName],
          srfmajortext: f[e.textName],
          id: f[e.keyName],
          ...f
        }));
        i = JSON.stringify(l);
      }
      const r = await e.openPickUpView(t.data, i);
      r && A(r);
    }, T = (s) => {
      s.stopPropagation(), y();
    }, M = (s) => {
      let i = e.keyName;
      e.model.valueType === "OBJECTS" && (i = e.objectIdField);
      const r = c.value.findIndex((l) => l[i] === s);
      r > -1 && c.value.splice(r, 1), A(c.value);
    }, V = () => h("div", {
      class: [a.b("no-select-value"), a.is("readonly", t.readonly || t.disabled)],
      onClick: I
    }, [h("img", {
      src: "".concat(q.dir("assets/images/svg/member.svg")),
      alt: ""
    }, null), h("div", {
      class: a.be("no-select-value", "text")
    }, [h("span", null, [J("未设置")])])]), D = (s) => {
      console.error("头像加载失败"), N.value.push(s);
    }, L = (s) => {
      if (!s)
        return null;
      const i = JSON.parse(s);
      if (i.length === 0)
        return null;
      const {
        downloadUrl: r
      } = ibiz.util.file.calcFileUpDownUrl(e.context, e.params, t.data, e.editorParams), l = r.replace("%fileId%", i[0].id);
      return h("img", {
        class: a.bem("select-modal", "personel-list", "avatar"),
        src: l,
        onError: () => D(s),
        alt: ""
      }, null);
    }, j = (s, i) => e.operatorMap && e.operatorMap.get(s) && e.operatorMap.get(s).data.iconurl && !N.value.includes(e.operatorMap.get(s).data.iconurl) ? L(e.operatorMap.get(s).data.iconurl) : se(i), z = () => {
      const s = t.data[e.valueItem];
      return h("div", {
        class: a.b("personel"),
        onClick: I
      }, [h("div", {
        class: a.be("personel", "info")
      }, [h("div", {
        class: a.be("personel", "avatar"),
        style: "background-color:".concat(S(p.value))
      }, [j(s, p.value)]), e.showNameText && h("div", {
        class: a.be("personel", "username")
      }, [h("span", {
        class: a.bem("personel", "username", "text")
      }, [p.value])])]), !t.readonly && !t.disabled && t.value && h(P("ion-icon"), {
        name: "close-outline",
        class: a.be("personel", "close"),
        onClick: T
      }, null)]);
    }, B = () => {
      const s = h("div", {
        class: a.be("mul-ponsel", "add-icon"),
        onClick: I
      }, [h(P("ion-icon"), {
        name: "add-outline"
      }, null)]);
      return h("div", {
        class: a.b("mul-ponsel")
      }, [c.value.map((i) => {
        let r = e.keyName, l = e.textName;
        return e.model.valueType === "OBJECTS" && (r = e.objectIdField, l = e.objectNameField), h("div", {
          class: a.be("mul-ponsel", "item")
        }, [h("div", {
          class: a.bem("mul-ponsel", "item", "avatar"),
          style: "background-color:".concat(S(i[l]))
        }, [j(i[r], i[l])]), e.showNameText && h("span", {
          class: a.bem("mul-ponsel", "item", "name")
        }, [i[l]]), !t.readonly && !t.disabled && h("div", {
          class: a.bem("mul-ponsel", "item", "close")
        }, [h(P("ion-icon"), {
          name: "close-circle",
          class: a.be("mul-ponsel", "close"),
          onClick: () => M(i[r])
        }, null)])]);
      }), !t.readonly && !t.disabled && s]);
    };
    return {
      ns: a,
      c: e,
      valueText: p,
      context: g,
      params: v,
      editorRef: O,
      onClear: y,
      openPicker: I,
      renderPersonelInfo: () => {
        if (t.value) {
          if (u.value)
            return z();
          if (c.value && c.value.length > 0)
            return B();
        }
        return V();
      }
    };
  },
  render() {
    return h("div", {
      class: [this.ns.b(), this.disabled ? this.ns.m("disabled") : "", this.readonly ? this.ns.m("readonly") : ""]
    }, [this.renderPersonelInfo()]);
  }
});
class oe extends U {
  constructor() {
    super(...arguments);
    /**
     * 是否多选
     */
    m(this, "multiple", !1);
    /**
     *选择视图相关参数
     */
    m(this, "pickupView", null);
    /**
     *链接视图相关参数
     */
    m(this, "linkView", null);
    /**
     *值项
     */
    m(this, "valueItem", "");
    /**
     * 主键属性名称
     */
    m(this, "keyName", "srfkey");
    /**
     * 主文本属性名称
     */
    m(this, "textName", "srfmajortext");
    /**
     * 数据集codeName
     */
    m(this, "interfaceName", "");
    /**
     * 自填模式sort排序
     */
    m(this, "sort", "");
    /**
     * 不支持AC（根据编辑器类型得）
     */
    m(this, "noAC", !1);
    /**
     * 不支持按钮（根据编辑器类型得）
     */
    m(this, "noButton", !1);
    /**
     * 实体自填模式模型
     */
    m(this, "deACMode");
    /**
     * 自填数据项集合（已排除了value和text)
     */
    m(this, "dataItems", []);
    // 对象标识属性
    m(this, "objectIdField", "");
    // 对象名称属性
    m(this, "objectNameField", "");
    // 对象值属性
    m(this, "objectValueField", "");
    /**
     * 是否显示姓名文字
     */
    m(this, "showNameText", !0);
    /**
     * 云系统操作者Map
     *
     * @memberof MobPersonelSelectController
     */
    m(this, "operatorMap", /* @__PURE__ */ new Map());
  }
  async onInit() {
    var e, n, u, d;
    if (super.onInit(), this.initParams(), await this.getOperatorUserList(), this.valueItem = ((e = this.model.valueItemName) == null ? void 0 : e.toLowerCase()) || "", this.model.appDataEntityId && (this.model.appDEDataSetId && (this.interfaceName = this.model.appDEDataSetId), this.model.appDEACModeId && (this.deACMode = await K(
      this.model.appDEACModeId,
      this.model.appDataEntityId,
      this.context.srfappid
    ), this.deACMode))) {
      const { minorSortAppDEFieldId: c, minorSortDir: p } = this.deACMode;
      c && p && (this.sort = "".concat(c.toLowerCase(), ",").concat(p.toLowerCase())), this.deACMode.textAppDEFieldId && (this.textName = this.deACMode.textAppDEFieldId), this.deACMode.valueAppDEFieldId && (this.keyName = this.deACMode.valueAppDEFieldId), this.deACMode.deacmodeDataItems && (this.dataItems = [], this.deACMode.deacmodeDataItems.forEach(
        (g) => {
          g.id !== "value" && g.id !== "text" && this.dataItems.push(g);
        }
      ));
    }
    const a = [
      "PICKEREX_DROPDOWNVIEW",
      "PICKEREX_DROPDOWNVIEW_LINK",
      "PICKUPVIEW"
    ];
    this.model.editorType && a.includes(this.model.editorType) && this.initPickupViewParams(), this.objectIdField = (n = this.model.objectIdField) == null ? void 0 : n.toLowerCase(), this.objectNameField = (u = this.model.objectNameField) == null ? void 0 : u.toLowerCase(), this.objectValueField = (d = this.model.objectValueField) == null ? void 0 : d.toLowerCase(), this.editorParams.SHOWNAMETEXT && (this.showNameText = this.toBoolean(this.editorParams.SHOWNAMETEXT));
  }
  /**
   * 初始化noAc和noButton
   */
  initParams() {
    switch (this.model.editorType) {
      case "PICKEREX_NOAC":
      case "PICKEREX_NOAC_LINK":
        this.noAC = !0;
        break;
      case "PICKEREX_NOBUTTON":
        this.noButton = !0;
        break;
      default:
        this.noButton = !1, this.noAC = !1;
    }
  }
  /**
   * 初始化选择视图相关参数
   */
  async initPickupViewParams() {
    this.model.pickupAppViewId && (this.pickupView = await ibiz.hub.config.view.get(
      this.model.pickupAppViewId
    ));
  }
  /**
   * 初始化链接视图相关参数
   */
  async initLinkViewParams() {
    this.model.linkAppViewId && (this.linkView = await ibiz.hub.config.view.get(this.model.linkAppViewId));
  }
  /**
   * 加载实体数据集数据
   *
   * @param {string} query 模糊匹配字符串
   * @param {IData} data 表单数据
   * @returns {*}  {Promise<IHttpResponse<IData[]>>}
   * @memberof PickerEditorController
   */
  async getServiceData(a, e) {
    const { context: n, params: u } = this.handlePublicParams(
      e,
      this.context,
      this.params
    ), d = {};
    this.sort && !Object.is(this.sort, "") && Object.assign(d, { sort: this.sort }), a && Object.assign(d, { query: a }), Object.assign(d, { size: 1e3 });
    const c = Q(u, d);
    if (this.interfaceName)
      return await ibiz.hub.getApp(this.context.srfappid).deService.exec(
        this.model.appDataEntityId,
        this.interfaceName,
        n,
        c
      );
    throw new w(
      this.model,
      ibiz.i18n.t("editor.common.entityConfigErr")
    );
  }
  /**
   * 打开数据选择视图
   *
   * @param {IData} data 数据对象
   * @param {IData[]} selectedData 选中项集合
   * @returns {*}  {(Promise<IData[] | undefined>)}
   * @memberof PickerEditorController
   */
  async openPickUpView(a, e) {
    await this.initPickupViewParams();
    const { context: n, params: u } = this.handlePublicParams(
      a,
      this.context,
      this.params
    );
    if (e && (u.selectedData = e), !this.pickupView)
      throw new w(
        this.model,
        ibiz.i18n.t("editor.common.selectViewConfigErr")
      );
    const d = await ibiz.hub.config.view.get(this.pickupView.id), { openMode: c = "POPUPMODAL" } = d, p = await ibiz.commands.execute(
      x.TAG,
      this.pickupView.id,
      n,
      u,
      { openMode: c }
    );
    if (p && p.ok && p.data)
      return p.data;
    ibiz.log.debug("模态取消或关闭异常", p);
  }
  /**
   * 打开数据链接视图
   */
  async openLinkView(a) {
    const e = this.context.clone();
    a[this.valueItem] && (e.srfkey = a[this.valueItem]);
    const { context: n, params: u } = this.handlePublicParams(
      a,
      e,
      this.params
    ), { linkAppViewId: d } = this.model;
    if (!d)
      throw new w(
        this.model,
        ibiz.i18n.t("editor.common.linkViewConfigErr")
      );
    return ibiz.commands.execute(
      x.TAG,
      d,
      n,
      u
    );
  }
  /**
   * 计算回填数据
   *
   * @author lxm
   * @date 2022-10-24 16:10:24
   * @param {IData} data 选中数据
   * @returns {*}  {Promise<Array<{ id: string; value: any }>>}
   */
  async calcFillDataItems(a) {
    return this.deACMode ? this.dataItems.length === 0 ? [] : await Promise.all(
      this.dataItems.map((n) => {
        const u = a[n.appDEFieldId];
        return n.format || n.convertToCodeItemText && n.codeListId || n.customCode, { id: n.id, value: u };
      })
    ) : [];
  }
  /**
   * 处理对象数据类型抛值
   * @param {IData} select
   * @return {*}
   * @author: zhujiamin
   * @Date: 2023-08-22 15:58:56
   */
  handleObjectParams(a) {
    const e = {};
    return this.objectIdField && Object.assign(e, {
      [this.objectIdField]: a[this.keyName]
    }), this.objectNameField && Object.assign(e, {
      [this.objectNameField]: a[this.textName]
    }), this.objectValueField && Object.assign(e, {
      [this.objectValueField]: C(a)
    }), e;
  }
  /**
   *
   * 获取操作用户列表
   * @return {*}  {Promise<void>}
   * @memberof MobPersonelSelectController
   */
  async getOperatorUserList() {
    const a = await ibiz.hub.getApp(this.context.srfappid);
    let e = [];
    e = await a.codeList.get(
      "SysOperator",
      this.context,
      this.params
    ), this.operatorMap = new Map(
      e.map((n) => [n.value, n])
    );
  }
}
class ne {
  constructor() {
    m(this, "formEditor", "MobPersonelSelect");
    m(this, "gridEditor", "MobPersonelSelect");
  }
  async createController(o, a) {
    const e = new oe(o, a);
    return await e.init(), e;
  }
}
const pe = {
  install(t) {
    t.component("MobPersonelSelect", ie), W(
      "EDITOR_CUSTOMSTYLE_MOB_PERSONEL_SELECT",
      () => new ne()
    );
  }
};
export {
  pe as default
};
