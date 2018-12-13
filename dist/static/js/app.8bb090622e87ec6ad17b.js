webpackJsonp(
  [1],
  {
    "+Y0f": function(n, i, e) {
      "use strict";
      function a(n) {
        e("nNGx");
      }
      var t = e("b0VZ"),
        o = e("MG9+"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    "+skl": function(n, i) {},
    "/IGb": function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticStyle: { color: "#fff", padding: "0 10px" } },
            [
              e("div", { staticClass: "mode-add" }, [
                e(
                  "div",
                  { staticStyle: { float: "right" } },
                  [
                    e(
                      "Button",
                      { attrs: { icon: "plus" }, on: { click: n.onAdd } },
                      [n._v("新增")]
                    )
                  ],
                  1
                )
              ]),
              n._v(" "),
              e("Table", {
                attrs: {
                  loading: n.table_loading,
                  stripe: !0,
                  columns: n.columns,
                  data: n.list,
                  size: "small"
                }
              }),
              n._v(" "),
              e(
                "div",
                { staticStyle: { "text-align": "right", padding: "10px 0" } },
                [
                  e("Page", {
                    attrs: { total: n.total, "page-size": 20 },
                    on: { "on-change": n.currentChange }
                  })
                ],
                1
              ),
              n._v(" "),
              e(
                "Modal",
                {
                  attrs: { title: n.modelTitle },
                  model: {
                    value: n.show,
                    callback: function(i) {
                      n.show = i;
                    },
                    expression: "show"
                  }
                },
                [
                  e(
                    "Form",
                    {
                      ref: "form",
                      attrs: {
                        model: n.model,
                        "label-width": 80,
                        rules: n.ruleValidate
                      }
                    },
                    [
                      e(
                        "FormItem",
                        { attrs: { label: "姓名", prop: "Name" } },
                        [
                          e("Input", {
                            attrs: { placeholder: "请输入用户姓名" },
                            model: {
                              value: n.model.Name,
                              callback: function(i) {
                                n.$set(n.model, "Name", i);
                              },
                              expression: "model.Name"
                            }
                          })
                        ],
                        1
                      ),
                      n._v(" "),
                      e(
                        "FormItem",
                        { attrs: { label: "用户名", prop: "UserName" } },
                        [
                          e("Input", {
                            attrs: { placeholder: "请输入用户名" },
                            model: {
                              value: n.model.UserName,
                              callback: function(i) {
                                n.$set(n.model, "UserName", i);
                              },
                              expression: "model.UserName"
                            }
                          })
                        ],
                        1
                      ),
                      n._v(" "),
                      e(
                        "FormItem",
                        { attrs: { label: "密码", prop: "Password" } },
                        [
                          e("Input", {
                            attrs: { placeholder: "请输入密码" },
                            model: {
                              value: n.model.Password,
                              callback: function(i) {
                                n.$set(n.model, "Password", i);
                              },
                              expression: "model.Password"
                            }
                          })
                        ],
                        1
                      ),
                      n._v(" "),
                      e(
                        "FormItem",
                        { attrs: { label: "是否启用" } },
                        [
                          e(
                            "i-switch",
                            {
                              attrs: { size: "large" },
                              model: {
                                value: n.model.Visible,
                                callback: function(i) {
                                  n.$set(n.model, "Visible", i);
                                },
                                expression: "model.Visible"
                              }
                            },
                            [
                              e(
                                "span",
                                { attrs: { slot: "open" }, slot: "open" },
                                [n._v("启用")]
                              ),
                              n._v(" "),
                              e(
                                "span",
                                { attrs: { slot: "close" }, slot: "close" },
                                [n._v("禁用")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      e(
                        "Button",
                        {
                          attrs: { loading: n.loading, type: "primary" },
                          on: { click: n.onSave }
                        },
                        [n._v("提交")]
                      ),
                      n._v(" "),
                      e(
                        "Button",
                        {
                          staticStyle: { "margin-left": "8px" },
                          attrs: { type: "default" },
                          on: { click: n.onCancel }
                        },
                        [n._v("取消")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "/Lvf": function(n, i, e) {
      "use strict";
      var a = e("oaOm");
      i.a = {
        data: function() {
          return { ips: "" };
        },
        methods: {
          onSave: function() {
            var n = this,
              i = this.ips.split("\n");
            Object(a.m)({ ips: i }).then(function(i) {
              alert("保存成功！"), n.render();
            });
          },
          render: function() {
            var n = this;
            Object(a.g)().then(function(i) {
              0 == i.errno && i.data && (n.ips = i.data.ips.join("\n"));
            });
          }
        },
        mounted: function() {
          this.render();
        }
      };
    },
    "/Y0d": function(n, i, e) {
      "use strict";
      i.a = [
        {
          label: "北京Beijing010",
          name: "北京",
          pinyin: "Beijing",
          zip: "010"
        },
        {
          label: "重庆Chongqing023",
          name: "重庆",
          pinyin: "Chongqing",
          zip: "023"
        },
        {
          label: "上海Shanghai021",
          name: "上海",
          pinyin: "Shanghai",
          zip: "021"
        },
        {
          label: "天津Tianjin022",
          name: "天津",
          pinyin: "Tianjin",
          zip: "022"
        },
        {
          label: "长春Changchun0431",
          name: "长春",
          pinyin: "Changchun",
          zip: "0431"
        },
        {
          label: "长沙Changsha0731",
          name: "长沙",
          pinyin: "Changsha",
          zip: "0731"
        },
        {
          label: "常州Changzhou0519",
          name: "常州",
          pinyin: "Changzhou",
          zip: "0519"
        },
        {
          label: "成都Chengdu028",
          name: "成都",
          pinyin: "Chengdu",
          zip: "028"
        },
        {
          label: "大连Dalian0411",
          name: "大连",
          pinyin: "Dalian",
          zip: "0411"
        },
        {
          label: "东莞Dongguan0769",
          name: "东莞",
          pinyin: "Dongguan",
          zip: "0769"
        },
        {
          label: "佛山Foshan0757",
          name: "佛山",
          pinyin: "Foshan",
          zip: "0757"
        },
        {
          label: "福州Fuzhou0591",
          name: "福州",
          pinyin: "Fuzhou",
          zip: "0591"
        },
        {
          label: "广州Guangzhou020",
          name: "广州",
          pinyin: "Guangzhou",
          zip: "020"
        },
        {
          label: "贵阳Guiyang0851",
          name: "贵阳",
          pinyin: "Guiyang",
          zip: "0851"
        },
        {
          label: "哈尔滨Haerbin0451",
          name: "哈尔滨",
          pinyin: "Haerbin",
          zip: "0451"
        },
        {
          label: "海口Haikou0898",
          name: "海口",
          pinyin: "Haikou",
          zip: "0898"
        },
        {
          label: "邯郸Handan0310",
          name: "邯郸",
          pinyin: "Handan",
          zip: "0310"
        },
        {
          label: "杭州Hangzhou0571",
          name: "杭州",
          pinyin: "Hangzhou",
          zip: "0571"
        },
        { label: "合肥Hefei0551", name: "合肥", pinyin: "Hefei", zip: "0551" },
        {
          label: "惠州Huizhou0752",
          name: "惠州",
          pinyin: "Huizhou",
          zip: "0752"
        },
        {
          label: "焦作Jiaozuo0391",
          name: "焦作",
          pinyin: "Jiaozuo",
          zip: "0391"
        },
        {
          label: "嘉兴Jiaxing0573",
          name: "嘉兴",
          pinyin: "Jiaxing",
          zip: "0573"
        },
        { label: "吉林Jilin0423", name: "吉林", pinyin: "Jilin", zip: "0423" },
        { label: "济南Jinan0531", name: "济南", pinyin: "Jinan", zip: "0531" },
        {
          label: "昆明Kunming0871",
          name: "昆明",
          pinyin: "Kunming",
          zip: "0871"
        },
        {
          label: "兰州Lanzhou0931",
          name: "兰州",
          pinyin: "Lanzhou",
          zip: "0931"
        },
        {
          label: "柳州Liuzhou0772",
          name: "柳州",
          pinyin: "Liuzhou",
          zip: "0772"
        },
        {
          label: "洛阳Luoyang0379",
          name: "洛阳",
          pinyin: "Luoyang",
          zip: "0379"
        },
        {
          label: "南昌Nanchang0791",
          name: "南昌",
          pinyin: "Nanchang",
          zip: "0791"
        },
        {
          label: "南京Nanjing025",
          name: "南京",
          pinyin: "Nanjing",
          zip: "025"
        },
        {
          label: "南宁Nanning0771",
          name: "南宁",
          pinyin: "Nanning",
          zip: "0771"
        },
        {
          label: "南通Nantong0513",
          name: "南通",
          pinyin: "Nantong",
          zip: "0513"
        },
        {
          label: "宁波Ningbo0574",
          name: "宁波",
          pinyin: "Ningbo",
          zip: "0574"
        },
        {
          label: "青岛Qingdao0532",
          name: "青岛",
          pinyin: "Qingdao",
          zip: "0532"
        },
        {
          label: "泉州Quanzhou0595",
          name: "泉州",
          pinyin: "Quanzhou",
          zip: "0595"
        },
        {
          label: "沈阳Shenyang024",
          name: "沈阳",
          pinyin: "Shenyang",
          zip: "024"
        },
        {
          label: "深圳Shenzhen0755",
          name: "深圳",
          pinyin: "Shenzhen",
          zip: "0755"
        },
        {
          label: "石家庄Shijiazhuang0311",
          name: "石家庄",
          pinyin: "Shijiazhuang",
          zip: "0311"
        },
        {
          label: "苏州Suzhou0512",
          name: "苏州",
          pinyin: "Suzhou",
          zip: "0512"
        },
        {
          label: "台州Taizhou0576",
          name: "台州",
          pinyin: "Taizhou",
          zip: "0576"
        },
        {
          label: "唐山Tangshan0315",
          name: "唐山",
          pinyin: "Tangshan",
          zip: "0315"
        },
        {
          label: "潍坊Weifang0536",
          name: "潍坊",
          pinyin: "Weifang",
          zip: "0536"
        },
        {
          label: "威海Weihai0631",
          name: "威海",
          pinyin: "Weihai",
          zip: "0631"
        },
        { label: "武汉Wuhan027", name: "武汉", pinyin: "Wuhan", zip: "027" },
        { label: "无锡Wuxi0510", name: "无锡", pinyin: "Wuxi", zip: "0510" },
        {
          label: "厦门Xiamen0592",
          name: "厦门",
          pinyin: "Xiamen",
          zip: "0592"
        },
        { label: "西安Xian029", name: "西安", pinyin: "Xian", zip: "029" },
        {
          label: "许昌Xuchang0374",
          name: "许昌",
          pinyin: "Xuchang",
          zip: "0374"
        },
        {
          label: "徐州Xuzhou0516",
          name: "徐州",
          pinyin: "Xuzhou",
          zip: "0516"
        },
        {
          label: "扬州Yangzhou0514",
          name: "扬州",
          pinyin: "Yangzhou",
          zip: "0514"
        },
        {
          label: "烟台Yantai0535",
          name: "烟台",
          pinyin: "Yantai",
          zip: "0535"
        },
        {
          label: "漳州Zhangzhou0596",
          name: "漳州",
          pinyin: "Zhangzhou",
          zip: "0596"
        },
        {
          label: "郑州Zhengzhou0371",
          name: "郑州",
          pinyin: "Zhengzhou",
          zip: "0371"
        },
        {
          label: "中山Zhongshan0760",
          name: "中山",
          pinyin: "Zhongshan",
          zip: "0760"
        },
        {
          label: "珠海Zhuhai0756",
          name: "珠海",
          pinyin: "Zhuhai",
          zip: "0756"
        },
        { label: "阿坝Aba0837", name: "阿坝", pinyin: "Aba", zip: "0837" },
        {
          label: "阿克苏Akesu0997",
          name: "阿克苏",
          pinyin: "Akesu",
          zip: "0997"
        },
        {
          label: "阿拉善盟Alashanmeng0483",
          name: "阿拉善盟",
          pinyin: "Alashanmeng",
          zip: "0483"
        },
        {
          label: "阿勒泰Aletai0906",
          name: "阿勒泰",
          pinyin: "Aletai",
          zip: "0906"
        },
        { label: "阿里Ali0897", name: "阿里", pinyin: "Ali", zip: "0897" },
        {
          label: "安康Ankang0915",
          name: "安康",
          pinyin: "Ankang",
          zip: "0915"
        },
        {
          label: "安庆Anqing0556",
          name: "安庆",
          pinyin: "Anqing",
          zip: "0556"
        },
        {
          label: "鞍山Anshan0412",
          name: "鞍山",
          pinyin: "Anshan",
          zip: "0412"
        },
        {
          label: "安顺Anshun0853",
          name: "安顺",
          pinyin: "Anshun",
          zip: "0853"
        },
        {
          label: "安阳Anyang0372",
          name: "安阳",
          pinyin: "Anyang",
          zip: "0372"
        },
        {
          label: "白城Baicheng0436",
          name: "白城",
          pinyin: "Baicheng",
          zip: "0436"
        },
        { label: "百色Baise0776", name: "百色", pinyin: "Baise", zip: "0776" },
        {
          label: "白山Baishan0439",
          name: "白山",
          pinyin: "Baishan",
          zip: "0439"
        },
        {
          label: "白银Baiyin0943",
          name: "白银",
          pinyin: "Baiyin",
          zip: "0943"
        },
        {
          label: "蚌埠Bangbu0552",
          name: "蚌埠",
          pinyin: "Bangbu",
          zip: "0552"
        },
        {
          label: "保定Baoding0312",
          name: "保定",
          pinyin: "Baoding",
          zip: "0312"
        },
        { label: "宝鸡Baoji0917", name: "宝鸡", pinyin: "Baoji", zip: "0917" },
        {
          label: "保山Baoshan0875",
          name: "保山",
          pinyin: "Baoshan",
          zip: "0875"
        },
        {
          label: "包头Baotou0472",
          name: "包头",
          pinyin: "Baotou",
          zip: "0472"
        },
        {
          label: "巴彦淖尔Bayannaoer0478",
          name: "巴彦淖尔",
          pinyin: "Bayannaoer",
          zip: "0478"
        },
        {
          label: "巴音郭楞Bayinguoleng0996",
          name: "巴音郭楞",
          pinyin: "Bayinguoleng",
          zip: "0996"
        },
        {
          label: "巴中Bazhong0827",
          name: "巴中",
          pinyin: "Bazhong",
          zip: "0827"
        },
        {
          label: "北海Beihai0779",
          name: "北海",
          pinyin: "Beihai",
          zip: "0779"
        },
        { label: "本溪Benxi0414", name: "本溪", pinyin: "Benxi", zip: "0414" },
        { label: "毕节Bijie0857", name: "毕节", pinyin: "Bijie", zip: "0857" },
        {
          label: "滨州Binzhou0543",
          name: "滨州",
          pinyin: "Binzhou",
          zip: "0543"
        },
        {
          label: "博尔塔拉Boertala0909",
          name: "博尔塔拉",
          pinyin: "Boertala",
          zip: "0909"
        },
        {
          label: "亳州Bozhou0558",
          name: "亳州",
          pinyin: "Bozhou",
          zip: "0558"
        },
        {
          label: "沧州Cangzhou0317",
          name: "沧州",
          pinyin: "Cangzhou",
          zip: "0317"
        },
        {
          label: "常德Changde0736",
          name: "常德",
          pinyin: "Changde",
          zip: "0736"
        },
        {
          label: "昌都Changdu0895",
          name: "昌都",
          pinyin: "Changdu",
          zip: "0895"
        },
        {
          label: "昌吉Changji0997",
          name: "昌吉",
          pinyin: "Changji",
          zip: "0997"
        },
        {
          label: "长治Changzhi0355",
          name: "长治",
          pinyin: "Changzhi",
          zip: "0355"
        },
        {
          label: "巢湖Chaohu0565",
          name: "巢湖",
          pinyin: "Chaohu",
          zip: "0565"
        },
        {
          label: "朝阳Chaoyang0421",
          name: "朝阳",
          pinyin: "Chaoyang",
          zip: "0421"
        },
        {
          label: "潮州Chaozhou0768",
          name: "潮州",
          pinyin: "Chaozhou",
          zip: "0768"
        },
        {
          label: "承德Chengde0314",
          name: "承德",
          pinyin: "Chengde",
          zip: "0314"
        },
        {
          label: "郴州Chenzhou0735",
          name: "郴州",
          pinyin: "Chenzhou",
          zip: "0735"
        },
        {
          label: "赤峰Chifeng0476",
          name: "赤峰",
          pinyin: "Chifeng",
          zip: "0476"
        },
        {
          label: "池州Chizhou0566",
          name: "池州",
          pinyin: "Chizhou",
          zip: "0566"
        },
        {
          label: "崇左Chongzuo0771",
          name: "崇左",
          pinyin: "Chongzuo",
          zip: "0771"
        },
        {
          label: "楚雄Chuxiong0875",
          name: "楚雄",
          pinyin: "Chuxiong",
          zip: "0875"
        },
        {
          label: "滁州Chuzhou0550",
          name: "滁州",
          pinyin: "Chuzhou",
          zip: "0550"
        },
        { label: "大理Dali0872", name: "大理", pinyin: "Dali", zip: "0872" },
        {
          label: "丹东Dandong0415",
          name: "丹东",
          pinyin: "Dandong",
          zip: "0415"
        },
        {
          label: "大庆Daqing0459",
          name: "大庆",
          pinyin: "Daqing",
          zip: "0459"
        },
        {
          label: "大同Datong0352",
          name: "大同",
          pinyin: "Datong",
          zip: "0352"
        },
        {
          label: "大兴安岭Daxinganling0457",
          name: "大兴安岭",
          pinyin: "Daxinganling",
          zip: "0457"
        },
        {
          label: "达州Dazhou0818",
          name: "达州",
          pinyin: "Dazhou",
          zip: "0818"
        },
        {
          label: "德宏Dehong0692",
          name: "德宏",
          pinyin: "Dehong",
          zip: "0692"
        },
        {
          label: "德阳Deyang0838",
          name: "德阳",
          pinyin: "Deyang",
          zip: "0838"
        },
        {
          label: "德州Dezhou0534",
          name: "德州",
          pinyin: "Dezhou",
          zip: "0534"
        },
        {
          label: "定西Dingxi0932",
          name: "定西",
          pinyin: "Dingxi",
          zip: "0932"
        },
        {
          label: "迪庆Diqing0887",
          name: "迪庆",
          pinyin: "Diqing",
          zip: "0887"
        },
        {
          label: "东营Dongying0546",
          name: "东营",
          pinyin: "Dongying",
          zip: "0546"
        },
        {
          label: "鄂尔多斯Eerduosi0477",
          name: "鄂尔多斯",
          pinyin: "Eerduosi",
          zip: "0477"
        },
        { label: "恩施Enshi0718", name: "恩施", pinyin: "Enshi", zip: "0718" },
        { label: "鄂州Ezhou0711", name: "鄂州", pinyin: "Ezhou", zip: "0711" },
        {
          label: "防城港Fangchenggang0770",
          name: "防城港",
          pinyin: "Fangchenggang",
          zip: "0770"
        },
        {
          label: "抚顺Fushun0413",
          name: "抚顺",
          pinyin: "Fushun",
          zip: "0413"
        },
        { label: "阜新Fuxin0418", name: "阜新", pinyin: "Fuxin", zip: "0418" },
        {
          label: "阜阳Fuyang0558",
          name: "阜阳",
          pinyin: "Fuyang",
          zip: "0558"
        },
        {
          label: "抚州Fuzhou0794",
          name: "抚州",
          pinyin: "Fuzhou",
          zip: "0794"
        },
        {
          label: "甘南Gannan0941",
          name: "甘南",
          pinyin: "Gannan",
          zip: "0941"
        },
        {
          label: "赣州Ganzhou0797",
          name: "赣州",
          pinyin: "Ganzhou",
          zip: "0797"
        },
        { label: "甘孜Ganzi0836", name: "甘孜", pinyin: "Ganzi", zip: "0836" },
        {
          label: "广安Guangan0826",
          name: "广安",
          pinyin: "Guangan",
          zip: "0826"
        },
        {
          label: "广元Guangyuan0839",
          name: "广元",
          pinyin: "Guangyuan",
          zip: "0839"
        },
        {
          label: "贵港Guigang0775",
          name: "贵港",
          pinyin: "Guigang",
          zip: "0775"
        },
        {
          label: "桂林Guilin0773",
          name: "桂林",
          pinyin: "Guilin",
          zip: "0773"
        },
        {
          label: "果洛Guoluo0975",
          name: "果洛",
          pinyin: "Guoluo",
          zip: "0975"
        },
        {
          label: "固原Guyuan0954",
          name: "固原",
          pinyin: "Guyuan",
          zip: "0954"
        },
        {
          label: "海北Haibei0970",
          name: "海北",
          pinyin: "Haibei",
          zip: "0970"
        },
        {
          label: "海东Haidong0972",
          name: "海东",
          pinyin: "Haidong",
          zip: "0972"
        },
        {
          label: "海南Hainan0974",
          name: "海南",
          pinyin: "Hainan",
          zip: "0974"
        },
        { label: "海西Haixi0977", name: "海西", pinyin: "Haixi", zip: "0977" },
        { label: "哈密Hami0902", name: "哈密", pinyin: "Hami", zip: "0902" },
        {
          label: "汉中Hanzhong0916",
          name: "汉中",
          pinyin: "Hanzhong",
          zip: "0916"
        },
        { label: "鹤壁Hebi0392", name: "鹤壁", pinyin: "Hebi", zip: "0392" },
        { label: "河池Hechi0778", name: "河池", pinyin: "Hechi", zip: "0778" },
        {
          label: "鹤岗Hegang0468",
          name: "鹤岗",
          pinyin: "Hegang",
          zip: "0468"
        },
        { label: "黑河Heihe0456", name: "黑河", pinyin: "Heihe", zip: "0456" },
        {
          label: "衡水Hengshui0318",
          name: "衡水",
          pinyin: "Hengshui",
          zip: "0318"
        },
        {
          label: "衡阳Hengyang0734",
          name: "衡阳",
          pinyin: "Hengyang",
          zip: "0734"
        },
        {
          label: "和田地Hetiandi0903",
          name: "和田地",
          pinyin: "Hetiandi",
          zip: "0903"
        },
        {
          label: "河源Heyuan0762",
          name: "河源",
          pinyin: "Heyuan",
          zip: "0762"
        },
        { label: "菏泽Heze0530", name: "菏泽", pinyin: "Heze", zip: "0530" },
        {
          label: "贺州Hezhou0774",
          name: "贺州",
          pinyin: "Hezhou",
          zip: "0774"
        },
        {
          label: "红河Honghe0873",
          name: "红河",
          pinyin: "Honghe",
          zip: "0873"
        },
        {
          label: "淮安Huaian0517",
          name: "淮安",
          pinyin: "Huaian",
          zip: "0517"
        },
        {
          label: "淮北Huaibei0561",
          name: "淮北",
          pinyin: "Huaibei",
          zip: "0561"
        },
        {
          label: "怀化Huaihua0745",
          name: "怀化",
          pinyin: "Huaihua",
          zip: "0745"
        },
        {
          label: "淮南Huainan0554",
          name: "淮南",
          pinyin: "Huainan",
          zip: "0554"
        },
        {
          label: "黄冈Huanggang0713",
          name: "黄冈",
          pinyin: "Huanggang",
          zip: "0713"
        },
        {
          label: "黄南Huangnan0973",
          name: "黄南",
          pinyin: "Huangnan",
          zip: "0973"
        },
        {
          label: "黄山Huangshan0559",
          name: "黄山",
          pinyin: "Huangshan",
          zip: "0559"
        },
        {
          label: "黄石Huangshi0714",
          name: "黄石",
          pinyin: "Huangshi",
          zip: "0714"
        },
        {
          label: "呼和浩特Huhehaote0471",
          name: "呼和浩特",
          pinyin: "Huhehaote",
          zip: "0471"
        },
        {
          label: "葫芦岛Huludao0429",
          name: "葫芦岛",
          pinyin: "Huludao",
          zip: "0429"
        },
        {
          label: "呼伦贝尔Hulunbeier0470",
          name: "呼伦贝尔",
          pinyin: "Hulunbeier",
          zip: "0470"
        },
        {
          label: "湖州Huzhou0572",
          name: "湖州",
          pinyin: "Huzhou",
          zip: "0572"
        },
        {
          label: "佳木斯Jiamusi0454",
          name: "佳木斯",
          pinyin: "Jiamusi",
          zip: "0454"
        },
        {
          label: "江门Jiangmen0750",
          name: "江门",
          pinyin: "Jiangmen",
          zip: "0750"
        },
        { label: "吉安Jian0796", name: "吉安", pinyin: "Jian", zip: "0796" },
        {
          label: "嘉峪关Jiayuguan0937",
          name: "嘉峪关",
          pinyin: "Jiayuguan",
          zip: "0937"
        },
        {
          label: "揭阳Jieyang0663",
          name: "揭阳",
          pinyin: "Jieyang",
          zip: "0663"
        },
        {
          label: "金昌Jinchang0935",
          name: "金昌",
          pinyin: "Jinchang",
          zip: "0935"
        },
        {
          label: "晋城Jincheng0356",
          name: "晋城",
          pinyin: "Jincheng",
          zip: "0356"
        },
        {
          label: "景德镇Jingdezhen0798",
          name: "景德镇",
          pinyin: "Jingdezhen",
          zip: "0798"
        },
        {
          label: "荆门Jingmen0724",
          name: "荆门",
          pinyin: "Jingmen",
          zip: "0724"
        },
        {
          label: "荆州Jingzhou0716",
          name: "荆州",
          pinyin: "Jingzhou",
          zip: "0716"
        },
        {
          label: "金华Jinhua0579",
          name: "金华",
          pinyin: "Jinhua",
          zip: "0579"
        },
        {
          label: "济宁Jining0537",
          name: "济宁",
          pinyin: "Jining",
          zip: "0537"
        },
        {
          label: "晋中Jinzhong0354",
          name: "晋中",
          pinyin: "Jinzhong",
          zip: "0354"
        },
        {
          label: "锦州Jinzhou0416",
          name: "锦州",
          pinyin: "Jinzhou",
          zip: "0416"
        },
        {
          label: "九江Jiujiang0792",
          name: "九江",
          pinyin: "Jiujiang",
          zip: "0792"
        },
        {
          label: "酒泉Jiuquan0937",
          name: "酒泉",
          pinyin: "Jiuquan",
          zip: "0937"
        },
        { label: "鸡西Jixi0467", name: "鸡西", pinyin: "Jixi", zip: "0467" },
        {
          label: "开封Kaifeng0378",
          name: "开封",
          pinyin: "Kaifeng",
          zip: "0378"
        },
        {
          label: "喀什地Kashidi0998",
          name: "喀什地",
          pinyin: "Kashidi",
          zip: "0998"
        },
        {
          label: "克拉玛依Kelamayi0990",
          name: "克拉玛依",
          pinyin: "Kelamayi",
          zip: "0990"
        },
        {
          label: "克孜勒Kezile0908",
          name: "克孜勒",
          pinyin: "Kezile",
          zip: "0908"
        },
        {
          label: "来宾Laibin0772",
          name: "来宾",
          pinyin: "Laibin",
          zip: "0772"
        },
        { label: "莱芜Laiwu0634", name: "莱芜", pinyin: "Laiwu", zip: "0634" },
        {
          label: "廊坊Langfang0316",
          name: "廊坊",
          pinyin: "Langfang",
          zip: "0316"
        },
        { label: "拉萨Lasa0891", name: "拉萨", pinyin: "Lasa", zip: "0891" },
        {
          label: "乐山Leshan0833",
          name: "乐山",
          pinyin: "Leshan",
          zip: "0833"
        },
        {
          label: "凉山Liangshan0834",
          name: "凉山",
          pinyin: "Liangshan",
          zip: "0834"
        },
        {
          label: "连云港Lianyungang0518",
          name: "连云港",
          pinyin: "Lianyungang",
          zip: "0518"
        },
        {
          label: "聊城Liaocheng0635",
          name: "聊城",
          pinyin: "Liaocheng",
          zip: "0635"
        },
        {
          label: "辽阳Liaoyang0419",
          name: "辽阳",
          pinyin: "Liaoyang",
          zip: "0419"
        },
        {
          label: "辽源Liaoyuan0437",
          name: "辽源",
          pinyin: "Liaoyuan",
          zip: "0437"
        },
        {
          label: "丽江Lijiang0888",
          name: "丽江",
          pinyin: "Lijiang",
          zip: "0888"
        },
        {
          label: "临沧Lincang0883",
          name: "临沧",
          pinyin: "Lincang",
          zip: "0883"
        },
        {
          label: "临汾Linfen0357",
          name: "临汾",
          pinyin: "Linfen",
          zip: "0357"
        },
        {
          label: "临夏Linxia0930",
          name: "临夏",
          pinyin: "Linxia",
          zip: "0930"
        },
        { label: "临沂Linyi0539", name: "临沂", pinyin: "Linyi", zip: "0539" },
        {
          label: "林芝Linzhi0894",
          name: "林芝",
          pinyin: "Linzhi",
          zip: "0894"
        },
        {
          label: "丽水Lishui0578",
          name: "丽水",
          pinyin: "Lishui",
          zip: "0578"
        },
        { label: "六安Liuan0564", name: "六安", pinyin: "Liuan", zip: "0564" },
        {
          label: "六盘水Liupanshui0858",
          name: "六盘水",
          pinyin: "Liupanshui",
          zip: "0858"
        },
        {
          label: "陇南Longnan0939",
          name: "陇南",
          pinyin: "Longnan",
          zip: "0939"
        },
        {
          label: "龙岩Longyan0597",
          name: "龙岩",
          pinyin: "Longyan",
          zip: "0597"
        },
        { label: "娄底Loudi0738", name: "娄底", pinyin: "Loudi", zip: "0738" },
        { label: "漯河Luohe0395", name: "漯河", pinyin: "Luohe", zip: "0395" },
        {
          label: "泸州Luzhou0830",
          name: "泸州",
          pinyin: "Luzhou",
          zip: "0830"
        },
        {
          label: "吕梁Lvliang0358",
          name: "吕梁",
          pinyin: "Lvliang",
          zip: "0358"
        },
        {
          label: "马鞍山Maanshan0555",
          name: "马鞍山",
          pinyin: "Maanshan",
          zip: "0555"
        },
        {
          label: "茂名Maoming0668",
          name: "茂名",
          pinyin: "Maoming",
          zip: "0668"
        },
        {
          label: "眉山Meishan028",
          name: "眉山",
          pinyin: "Meishan",
          zip: "028"
        },
        {
          label: "梅州Meizhou0753",
          name: "梅州",
          pinyin: "Meizhou",
          zip: "0753"
        },
        {
          label: "绵阳Mianyang0816",
          name: "绵阳",
          pinyin: "Mianyang",
          zip: "0816"
        },
        {
          label: "牡丹江Mudanjiang0453",
          name: "牡丹江",
          pinyin: "Mudanjiang",
          zip: "0453"
        },
        {
          label: "南充Nanchong0817",
          name: "南充",
          pinyin: "Nanchong",
          zip: "0817"
        },
        {
          label: "南平Nanping0599",
          name: "南平",
          pinyin: "Nanping",
          zip: "0599"
        },
        {
          label: "南阳Nanyang0377",
          name: "南阳",
          pinyin: "Nanyang",
          zip: "0377"
        },
        { label: "那曲Naqu0896", name: "那曲", pinyin: "Naqu", zip: "0896" },
        {
          label: "内江Neijiang0832",
          name: "内江",
          pinyin: "Neijiang",
          zip: "0832"
        },
        {
          label: "宁德Ningde0593",
          name: "宁德",
          pinyin: "Ningde",
          zip: "0593"
        },
        {
          label: "怒江Nujiang0886",
          name: "怒江",
          pinyin: "Nujiang",
          zip: "0886"
        },
        {
          label: "盘锦Panjin0427",
          name: "盘锦",
          pinyin: "Panjin",
          zip: "0427"
        },
        {
          label: "攀枝花Panzhihua0812",
          name: "攀枝花",
          pinyin: "Panzhihua",
          zip: "0812"
        },
        {
          label: "平顶山Pingdingshan0375",
          name: "平顶山",
          pinyin: "Pingdingshan",
          zip: "0375"
        },
        {
          label: "平凉Pingliang0933",
          name: "平凉",
          pinyin: "Pingliang",
          zip: "0933"
        },
        {
          label: "萍乡Pingxiang0799",
          name: "萍乡",
          pinyin: "Pingxiang",
          zip: "0799"
        },
        { label: "普洱Puer0879", name: "普洱", pinyin: "Puer", zip: "0879" },
        {
          label: "莆田Putian0594",
          name: "莆田",
          pinyin: "Putian",
          zip: "0594"
        },
        {
          label: "濮阳Puyang0393",
          name: "濮阳",
          pinyin: "Puyang",
          zip: "0393"
        },
        {
          label: "黔东Qiandong0855",
          name: "黔东",
          pinyin: "Qiandong",
          zip: "0855"
        },
        {
          label: "黔南Qiannan0854",
          name: "黔南",
          pinyin: "Qiannan",
          zip: "0854"
        },
        {
          label: "黔西南Qianxinan0859",
          name: "黔西南",
          pinyin: "Qianxinan",
          zip: "0859"
        },
        {
          label: "庆阳Qingyang0934",
          name: "庆阳",
          pinyin: "Qingyang",
          zip: "0934"
        },
        {
          label: "清远Qingyuan0763",
          name: "清远",
          pinyin: "Qingyuan",
          zip: "0763"
        },
        {
          label: "秦皇岛Qinhuangdao0335",
          name: "秦皇岛",
          pinyin: "Qinhuangdao",
          zip: "0335"
        },
        {
          label: "钦州Qinzhou0777",
          name: "钦州",
          pinyin: "Qinzhou",
          zip: "0777"
        },
        {
          label: "齐齐哈尔Qiqihaer0452",
          name: "齐齐哈尔",
          pinyin: "Qiqihaer",
          zip: "0452"
        },
        {
          label: "七台河Qitaihe0464",
          name: "七台河",
          pinyin: "Qitaihe",
          zip: "0464"
        },
        {
          label: "曲靖Qujing0874",
          name: "曲靖",
          pinyin: "Qujing",
          zip: "0874"
        },
        {
          label: "衢州Quzhou0570",
          name: "衢州",
          pinyin: "Quzhou",
          zip: "0570"
        },
        {
          label: "日喀则Rikaze0892",
          name: "日喀则",
          pinyin: "Rikaze",
          zip: "0892"
        },
        {
          label: "日照Rizhao0633",
          name: "日照",
          pinyin: "Rizhao",
          zip: "0633"
        },
        {
          label: "三门峡Sanmenxia0398",
          name: "三门峡",
          pinyin: "Sanmenxia",
          zip: "0398"
        },
        {
          label: "三明Sanming0598",
          name: "三明",
          pinyin: "Sanming",
          zip: "0598"
        },
        { label: "三亚Sanya0899", name: "三亚", pinyin: "Sanya", zip: "0899" },
        {
          label: "商洛Shangluo0914",
          name: "商洛",
          pinyin: "Shangluo",
          zip: "0914"
        },
        {
          label: "商丘Shangqiu0370",
          name: "商丘",
          pinyin: "Shangqiu",
          zip: "0370"
        },
        {
          label: "上饶Shangrao0793",
          name: "上饶",
          pinyin: "Shangrao",
          zip: "0793"
        },
        {
          label: "山南Shannan0893",
          name: "山南",
          pinyin: "Shannan",
          zip: "0893"
        },
        {
          label: "汕头Shantou0754",
          name: "汕头",
          pinyin: "Shantou",
          zip: "0754"
        },
        {
          label: "汕尾Shanwei0660",
          name: "汕尾",
          pinyin: "Shanwei",
          zip: "0660"
        },
        {
          label: "韶关Shaoguan0751",
          name: "韶关",
          pinyin: "Shaoguan",
          zip: "0751"
        },
        {
          label: "绍兴Shaoxing0575",
          name: "绍兴",
          pinyin: "Shaoxing",
          zip: "0575"
        },
        {
          label: "邵阳Shaoyang0739",
          name: "邵阳",
          pinyin: "Shaoyang",
          zip: "0739"
        },
        {
          label: "十堰Shiyan0719",
          name: "十堰",
          pinyin: "Shiyan",
          zip: "0719"
        },
        {
          label: "石嘴山Shizuishan0952",
          name: "石嘴山",
          pinyin: "Shizuishan",
          zip: "0952"
        },
        {
          label: "双鸭山Shuangyashan0469",
          name: "双鸭山",
          pinyin: "Shuangyashan",
          zip: "0469"
        },
        {
          label: "朔州Shuozhou0349",
          name: "朔州",
          pinyin: "Shuozhou",
          zip: "0349"
        },
        {
          label: "四平Siping0434",
          name: "四平",
          pinyin: "Siping",
          zip: "0434"
        },
        {
          label: "松原Songyuan0438",
          name: "松原",
          pinyin: "Songyuan",
          zip: "0438"
        },
        {
          label: "绥化Suihua0455",
          name: "绥化",
          pinyin: "Suihua",
          zip: "0455"
        },
        {
          label: "遂宁Suining0825",
          name: "遂宁",
          pinyin: "Suining",
          zip: "0825"
        },
        {
          label: "随州Suizhou0722",
          name: "随州",
          pinyin: "Suizhou",
          zip: "0722"
        },
        {
          label: "宿迁Suqian0527",
          name: "宿迁",
          pinyin: "Suqian",
          zip: "0527"
        },
        {
          label: "宿州Suzhou0557",
          name: "宿州",
          pinyin: "Suzhou",
          zip: "0557"
        },
        {
          label: "塔城地Tachengdi0901",
          name: "塔城地",
          pinyin: "Tachengdi",
          zip: "0901"
        },
        { label: "泰安Taian0538", name: "泰安", pinyin: "Taian", zip: "0538" },
        {
          label: "太原Taiyuan0351",
          name: "太原",
          pinyin: "Taiyuan",
          zip: "0351"
        },
        {
          label: "泰州Taizhou0523",
          name: "泰州",
          pinyin: "Taizhou",
          zip: "0523"
        },
        {
          label: "天水Tianshui0938",
          name: "天水",
          pinyin: "Tianshui",
          zip: "0938"
        },
        {
          label: "铁岭Tieling0410",
          name: "铁岭",
          pinyin: "Tieling",
          zip: "0410"
        },
        {
          label: "铜川Tongchuan0919",
          name: "铜川",
          pinyin: "Tongchuan",
          zip: "0919"
        },
        {
          label: "通化Tonghua0435",
          name: "通化",
          pinyin: "Tonghua",
          zip: "0435"
        },
        {
          label: "通辽Tongliao0475",
          name: "通辽",
          pinyin: "Tongliao",
          zip: "0475"
        },
        {
          label: "铜陵Tongling0562",
          name: "铜陵",
          pinyin: "Tongling",
          zip: "0562"
        },
        {
          label: "铜仁Tongren0856",
          name: "铜仁",
          pinyin: "Tongren",
          zip: "0856"
        },
        {
          label: "吐鲁番Tulufan0995",
          name: "吐鲁番",
          pinyin: "Tulufan",
          zip: "0995"
        },
        {
          label: "渭南Weinan0913",
          name: "渭南",
          pinyin: "Weinan",
          zip: "0913"
        },
        {
          label: "文山Wenshan0876",
          name: "文山",
          pinyin: "Wenshan",
          zip: "0876"
        },
        {
          label: "温州Wenzhou0577",
          name: "温州",
          pinyin: "Wenzhou",
          zip: "0577"
        },
        { label: "乌海Wuhai0473", name: "乌海", pinyin: "Wuhai", zip: "0473" },
        { label: "芜湖Wuhu0553", name: "芜湖", pinyin: "Wuhu", zip: "0553" },
        {
          label: "乌兰察布Wulanchabu0474",
          name: "乌兰察布",
          pinyin: "Wulanchabu",
          zip: "0474"
        },
        {
          label: "乌鲁木齐Wulumuqi0991",
          name: "乌鲁木齐",
          pinyin: "Wulumuqi",
          zip: "0991"
        },
        { label: "武威Wuwei0935", name: "武威", pinyin: "Wuwei", zip: "0935" },
        {
          label: "吴忠Wuzhong0953",
          name: "吴忠",
          pinyin: "Wuzhong",
          zip: "0953"
        },
        {
          label: "梧州Wuzhou0774",
          name: "梧州",
          pinyin: "Wuzhou",
          zip: "0774"
        },
        {
          label: "襄樊Xiangfan0710",
          name: "襄樊",
          pinyin: "Xiangfan",
          zip: "0710"
        },
        {
          label: "湘潭Xiangtan0732",
          name: "湘潭",
          pinyin: "Xiangtan",
          zip: "0732"
        },
        {
          label: "湘西Xiangxi0743",
          name: "湘西",
          pinyin: "Xiangxi",
          zip: "0743"
        },
        {
          label: "咸宁Xianning0715",
          name: "咸宁",
          pinyin: "Xianning",
          zip: "0715"
        },
        {
          label: "咸阳Xianyang029",
          name: "咸阳",
          pinyin: "Xianyang",
          zip: "029"
        },
        {
          label: "孝感Xiaogan0712",
          name: "孝感",
          pinyin: "Xiaogan",
          zip: "0712"
        },
        {
          label: "锡林郭勒盟Xilinguolemeng0479",
          name: "锡林郭勒盟",
          pinyin: "Xilinguolemeng",
          zip: "0479"
        },
        {
          label: "兴安盟Xinganmeng0482",
          name: "兴安盟",
          pinyin: "Xinganmeng",
          zip: "0482"
        },
        {
          label: "邢台Xingtai0319",
          name: "邢台",
          pinyin: "Xingtai",
          zip: "0319"
        },
        {
          label: "西宁Xining0971",
          name: "西宁",
          pinyin: "Xining",
          zip: "0971"
        },
        {
          label: "新乡Xinxiang0373",
          name: "新乡",
          pinyin: "Xinxiang",
          zip: "0373"
        },
        {
          label: "信阳Xinyang0376",
          name: "信阳",
          pinyin: "Xinyang",
          zip: "0376"
        },
        { label: "新余Xinyu0790", name: "新余", pinyin: "Xinyu", zip: "0790" },
        {
          label: "忻州Xinzhou0350",
          name: "忻州",
          pinyin: "Xinzhou",
          zip: "0350"
        },
        {
          label: "西双版纳Xishuangbanna0691",
          name: "西双版纳",
          pinyin: "Xishuangbanna",
          zip: "0691"
        },
        {
          label: "宣城Xuancheng0563",
          name: "宣城",
          pinyin: "Xuancheng",
          zip: "0563"
        },
        { label: "雅安Yaan0835", name: "雅安", pinyin: "Yaan", zip: "0835" },
        { label: "延安Yanan0911", name: "延安", pinyin: "Yanan", zip: "0911" },
        {
          label: "延边Yanbian0433",
          name: "延边",
          pinyin: "Yanbian",
          zip: "0433"
        },
        {
          label: "盐城Yancheng0515",
          name: "盐城",
          pinyin: "Yancheng",
          zip: "0515"
        },
        {
          label: "阳江Yangjiang0662",
          name: "阳江",
          pinyin: "Yangjiang",
          zip: "0662"
        },
        {
          label: "阳泉Yangquan0353",
          name: "阳泉",
          pinyin: "Yangquan",
          zip: "0353"
        },
        { label: "宜宾Yibin0831", name: "宜宾", pinyin: "Yibin", zip: "0831" },
        {
          label: "宜昌Yichang0717",
          name: "宜昌",
          pinyin: "Yichang",
          zip: "0717"
        },
        {
          label: "伊春Yichun0458",
          name: "伊春",
          pinyin: "Yichun",
          zip: "0458"
        },
        {
          label: "宜春Yichun0795",
          name: "宜春",
          pinyin: "Yichun",
          zip: "0795"
        },
        {
          label: "伊犁哈萨克Yilihasake0999",
          name: "伊犁哈萨克",
          pinyin: "Yilihasake",
          zip: "0999"
        },
        {
          label: "银川Yinchuan0951",
          name: "银川",
          pinyin: "Yinchuan",
          zip: "0951"
        },
        {
          label: "营口Yingkou0417",
          name: "营口",
          pinyin: "Yingkou",
          zip: "0417"
        },
        {
          label: "鹰潭Yingtan0701",
          name: "鹰潭",
          pinyin: "Yingtan",
          zip: "0701"
        },
        {
          label: "益阳Yiyang0737",
          name: "益阳",
          pinyin: "Yiyang",
          zip: "0737"
        },
        {
          label: "永州Yongzhou0746",
          name: "永州",
          pinyin: "Yongzhou",
          zip: "0746"
        },
        {
          label: "岳阳Yueyang0730",
          name: "岳阳",
          pinyin: "Yueyang",
          zip: "0730"
        },
        { label: "玉林Yulin0775", name: "玉林", pinyin: "Yulin", zip: "0775" },
        { label: "榆林Yulin0912", name: "榆林", pinyin: "Yulin", zip: "0912" },
        {
          label: "运城Yuncheng0359",
          name: "运城",
          pinyin: "Yuncheng",
          zip: "0359"
        },
        { label: "云浮Yunfu0766", name: "云浮", pinyin: "Yunfu", zip: "0766" },
        { label: "玉树Yushu0976", name: "玉树", pinyin: "Yushu", zip: "0976" },
        { label: "玉溪Yuxi0877", name: "玉溪", pinyin: "Yuxi", zip: "0877" },
        {
          label: "枣庄Zaozhuang0623",
          name: "枣庄",
          pinyin: "Zaozhuang",
          zip: "0623"
        },
        {
          label: "张家界Zhangjiajie0744",
          name: "张家界",
          pinyin: "Zhangjiajie",
          zip: "0744"
        },
        {
          label: "张家口Zhangjiakou0313",
          name: "张家口",
          pinyin: "Zhangjiakou",
          zip: "0313"
        },
        {
          label: "张掖Zhangye0936",
          name: "张掖",
          pinyin: "Zhangye",
          zip: "0936"
        },
        {
          label: "湛江Zhanjiang0759",
          name: "湛江",
          pinyin: "Zhanjiang",
          zip: "0759"
        },
        {
          label: "肇庆Zhaoqing0758",
          name: "肇庆",
          pinyin: "Zhaoqing",
          zip: "0758"
        },
        {
          label: "昭通Zhaotong0870",
          name: "昭通",
          pinyin: "Zhaotong",
          zip: "0870"
        },
        {
          label: "镇江Zhenjiang0511",
          name: "镇江",
          pinyin: "Zhenjiang",
          zip: "0511"
        },
        {
          label: "中卫Zhongwei0955",
          name: "中卫",
          pinyin: "Zhongwei",
          zip: "0955"
        },
        {
          label: "周口Zhoukou0394",
          name: "周口",
          pinyin: "Zhoukou",
          zip: "0394"
        },
        {
          label: "舟山Zhoushan0580",
          name: "舟山",
          pinyin: "Zhoushan",
          zip: "0580"
        },
        {
          label: "驻马店Zhumadian0396",
          name: "驻马店",
          pinyin: "Zhumadian",
          zip: "0396"
        },
        {
          label: "株洲Zhuzhou0731",
          name: "株洲",
          pinyin: "Zhuzhou",
          zip: "0731"
        },
        { label: "淄博Zibo0533", name: "淄博", pinyin: "Zibo", zip: "0533" },
        {
          label: "自贡Zigong0813",
          name: "自贡",
          pinyin: "Zigong",
          zip: "0813"
        },
        { label: "资阳Ziyang028", name: "资阳", pinyin: "Ziyang", zip: "028" },
        { label: "遵义Zunyi0852", name: "遵义", pinyin: "Zunyi", zip: "0852" },
        {
          label: "阿城Acheng0451",
          name: "阿城",
          pinyin: "Acheng",
          zip: "0451"
        },
        { label: "安福Anfu0796", name: "安福", pinyin: "Anfu", zip: "0796" },
        { label: "安吉Anji0572", name: "安吉", pinyin: "Anji", zip: "0572" },
        {
          label: "安宁Anning0871",
          name: "安宁",
          pinyin: "Anning",
          zip: "0871"
        },
        { label: "安丘Anqiu0536", name: "安丘", pinyin: "Anqiu", zip: "0536" },
        { label: "安溪Anxi0595", name: "安溪", pinyin: "Anxi", zip: "0595" },
        { label: "安义Anyi0791", name: "安义", pinyin: "Anyi", zip: "0791" },
        {
          label: "安远Anyuan0797",
          name: "安远",
          pinyin: "Anyuan",
          zip: "0797"
        },
        {
          label: "宝应Baoying0514",
          name: "宝应",
          pinyin: "Baoying",
          zip: "0514"
        },
        { label: "巴彦Bayan0451", name: "巴彦", pinyin: "Bayan", zip: "0451" },
        {
          label: "滨海Binhai0515",
          name: "滨海",
          pinyin: "Binhai",
          zip: "0515"
        },
        {
          label: "宾县Binxian0451",
          name: "宾县",
          pinyin: "Binxian",
          zip: "0451"
        },
        {
          label: "宾阳Binyang0771",
          name: "宾阳",
          pinyin: "Binyang",
          zip: "0771"
        },
        { label: "璧山Bishan023", name: "璧山", pinyin: "Bishan", zip: "023" },
        { label: "博爱Boai0391", name: "博爱", pinyin: "Boai", zip: "0391" },
        { label: "博罗Boluo0752", name: "博罗", pinyin: "Boluo", zip: "0752" },
        {
          label: "博兴Boxing0543",
          name: "博兴",
          pinyin: "Boxing",
          zip: "0543"
        },
        {
          label: "苍南Cangnan0577",
          name: "苍南",
          pinyin: "Cangnan",
          zip: "0577"
        },
        {
          label: "苍山Cangshan0539",
          name: "苍山",
          pinyin: "Cangshan",
          zip: "0539"
        },
        {
          label: "曹县Caoxian0530",
          name: "曹县",
          pinyin: "Caoxian",
          zip: "0530"
        },
        {
          label: "长岛Changdao0535",
          name: "长岛",
          pinyin: "Changdao",
          zip: "0535"
        },
        {
          label: "长丰Changfeng0551",
          name: "长丰",
          pinyin: "Changfeng",
          zip: "0551"
        },
        {
          label: "长海Changhai0411",
          name: "长海",
          pinyin: "Changhai",
          zip: "0411"
        },
        {
          label: "长乐Changle0591",
          name: "长乐",
          pinyin: "Changle",
          zip: "0591"
        },
        {
          label: "昌乐Changle0536",
          name: "昌乐",
          pinyin: "Changle",
          zip: "0536"
        },
        {
          label: "常山Changshan0570",
          name: "常山",
          pinyin: "Changshan",
          zip: "0570"
        },
        {
          label: "常熟Changshu0512",
          name: "常熟",
          pinyin: "Changshu",
          zip: "0512"
        },
        {
          label: "长泰Changtai0596",
          name: "长泰",
          pinyin: "Changtai",
          zip: "0596"
        },
        {
          label: "长汀Changting0597",
          name: "长汀",
          pinyin: "Changting",
          zip: "0597"
        },
        {
          label: "长兴Changxing0572",
          name: "长兴",
          pinyin: "Changxing",
          zip: "0572"
        },
        {
          label: "昌邑Changyi0536",
          name: "昌邑",
          pinyin: "Changyi",
          zip: "0536"
        },
        {
          label: "潮安Chaoan0768",
          name: "潮安",
          pinyin: "Chaoan",
          zip: "0768"
        },
        {
          label: "呈贡Chenggong0871",
          name: "呈贡",
          pinyin: "Chenggong",
          zip: "0871"
        },
        {
          label: "城口Chengkou023",
          name: "城口",
          pinyin: "Chengkou",
          zip: "023"
        },
        {
          label: "成武Chengwu0530",
          name: "成武",
          pinyin: "Chengwu",
          zip: "0530"
        },
        {
          label: "茌平Chiping0635",
          name: "茌平",
          pinyin: "Chiping",
          zip: "0635"
        },
        {
          label: "崇仁Chongren0794",
          name: "崇仁",
          pinyin: "Chongren",
          zip: "0794"
        },
        {
          label: "崇义Chongyi0797",
          name: "崇义",
          pinyin: "Chongyi",
          zip: "0797"
        },
        {
          label: "崇州Chongzhou028",
          name: "崇州",
          pinyin: "Chongzhou",
          zip: "028"
        },
        {
          label: "淳安Chunan0571",
          name: "淳安",
          pinyin: "Chunan",
          zip: "0571"
        },
        { label: "慈溪Cixi0574", name: "慈溪", pinyin: "Cixi", zip: "0574" },
        {
          label: "从化Conghua020",
          name: "从化",
          pinyin: "Conghua",
          zip: "020"
        },
        {
          label: "枞阳Congyang0556",
          name: "枞阳",
          pinyin: "Congyang",
          zip: "0556"
        },
        {
          label: "大丰Dafeng0515",
          name: "大丰",
          pinyin: "Dafeng",
          zip: "0515"
        },
        {
          label: "岱山Daishan0580",
          name: "岱山",
          pinyin: "Daishan",
          zip: "0580"
        },
        {
          label: "砀山Dangshan0557",
          name: "砀山",
          pinyin: "Dangshan",
          zip: "0557"
        },
        {
          label: "当涂Dangtu0555",
          name: "当涂",
          pinyin: "Dangtu",
          zip: "0555"
        },
        {
          label: "单县Danxian0530",
          name: "单县",
          pinyin: "Danxian",
          zip: "0530"
        },
        {
          label: "丹阳Danyang0511",
          name: "丹阳",
          pinyin: "Danyang",
          zip: "0511"
        },
        { label: "大埔Dapu0753", name: "大埔", pinyin: "Dapu", zip: "0753" },
        {
          label: "大田Datian0598",
          name: "大田",
          pinyin: "Datian",
          zip: "0598"
        },
        { label: "大邑Dayi028", name: "大邑", pinyin: "Dayi", zip: "028" },
        { label: "大余Dayu0797", name: "大余", pinyin: "Dayu", zip: "0797" },
        { label: "大足Dazu023", name: "大足", pinyin: "Dazu", zip: "023" },
        { label: "德安Dean0792", name: "德安", pinyin: "Dean", zip: "0792" },
        { label: "德化Dehua0595", name: "德化", pinyin: "Dehua", zip: "0595" },
        { label: "德惠Dehui0431", name: "德惠", pinyin: "Dehui", zip: "0431" },
        {
          label: "登封Dengfeng0371",
          name: "登封",
          pinyin: "Dengfeng",
          zip: "0371"
        },
        {
          label: "德清Deqing0572",
          name: "德清",
          pinyin: "Deqing",
          zip: "0572"
        },
        {
          label: "德庆Deqing0758",
          name: "德庆",
          pinyin: "Deqing",
          zip: "0758"
        },
        {
          label: "德兴Dexing0793",
          name: "德兴",
          pinyin: "Dexing",
          zip: "0793"
        },
        {
          label: "电白Dianbai0668",
          name: "电白",
          pinyin: "Dianbai",
          zip: "0668"
        },
        {
          label: "垫江Dianjiang023",
          name: "垫江",
          pinyin: "Dianjiang",
          zip: "023"
        },
        {
          label: "定南Dingnan0797",
          name: "定南",
          pinyin: "Dingnan",
          zip: "0797"
        },
        {
          label: "定陶Dingtao0530",
          name: "定陶",
          pinyin: "Dingtao",
          zip: "0530"
        },
        {
          label: "定远Dingyuan0550",
          name: "定远",
          pinyin: "Dingyuan",
          zip: "0550"
        },
        { label: "东阿Donga0635", name: "东阿", pinyin: "Donga", zip: "0635" },
        {
          label: "东海Donghai0518",
          name: "东海",
          pinyin: "Donghai",
          zip: "0518"
        },
        {
          label: "东明Dongming0530",
          name: "东明",
          pinyin: "Dongming",
          zip: "0530"
        },
        {
          label: "东平Dongping0538",
          name: "东平",
          pinyin: "Dongping",
          zip: "0538"
        },
        {
          label: "东山Dongshan0596",
          name: "东山",
          pinyin: "Dongshan",
          zip: "0596"
        },
        {
          label: "东台Dongtai0515",
          name: "东台",
          pinyin: "Dongtai",
          zip: "0515"
        },
        {
          label: "洞头Dongtou0577",
          name: "洞头",
          pinyin: "Dongtou",
          zip: "0577"
        },
        {
          label: "东乡Dongxiang0794",
          name: "东乡",
          pinyin: "Dongxiang",
          zip: "0794"
        },
        {
          label: "东阳Dongyang0579",
          name: "东阳",
          pinyin: "Dongyang",
          zip: "0579"
        },
        {
          label: "东源Dongyuan0762",
          name: "东源",
          pinyin: "Dongyuan",
          zip: "0762"
        },
        {
          label: "东至Dongzhi0566",
          name: "东至",
          pinyin: "Dongzhi",
          zip: "0566"
        },
        {
          label: "都昌Duchang0792",
          name: "都昌",
          pinyin: "Duchang",
          zip: "0792"
        },
        {
          label: "都江堰Dujiangyan028",
          name: "都江堰",
          pinyin: "Dujiangyan",
          zip: "028"
        },
        {
          label: "恩平Enping0750",
          name: "恩平",
          pinyin: "Enping",
          zip: "0750"
        },
        { label: "法库Faku024", name: "法库", pinyin: "Faku", zip: "024" },
        {
          label: "繁昌Fanchang0553",
          name: "繁昌",
          pinyin: "Fanchang",
          zip: "0553"
        },
        {
          label: "方正Fangzheng0451",
          name: "方正",
          pinyin: "Fangzheng",
          zip: "0451"
        },
        {
          label: "肥城Feicheng0538",
          name: "肥城",
          pinyin: "Feicheng",
          zip: "0538"
        },
        {
          label: "肥东Feidong0551",
          name: "肥东",
          pinyin: "Feidong",
          zip: "0551"
        },
        { label: "肥西Feixi0551", name: "肥西", pinyin: "Feixi", zip: "0551" },
        {
          label: "费县Feixian0539",
          name: "费县",
          pinyin: "Feixian",
          zip: "0539"
        },
        {
          label: "丰城Fengcheng0795",
          name: "丰城",
          pinyin: "Fengcheng",
          zip: "0795"
        },
        { label: "丰都Fengdu023", name: "丰都", pinyin: "Fengdu", zip: "023" },
        {
          label: "奉化Fenghua0574",
          name: "奉化",
          pinyin: "Fenghua",
          zip: "0574"
        },
        {
          label: "奉节Fengjie023",
          name: "奉节",
          pinyin: "Fengjie",
          zip: "023"
        },
        {
          label: "封开Fengkai0758",
          name: "封开",
          pinyin: "Fengkai",
          zip: "0758"
        },
        {
          label: "丰顺Fengshun0753",
          name: "丰顺",
          pinyin: "Fengshun",
          zip: "0753"
        },
        {
          label: "凤台Fengtai0554",
          name: "凤台",
          pinyin: "Fengtai",
          zip: "0554"
        },
        {
          label: "丰县Fengxian0516",
          name: "丰县",
          pinyin: "Fengxian",
          zip: "0516"
        },
        {
          label: "奉新Fengxin0795",
          name: "奉新",
          pinyin: "Fengxin",
          zip: "0795"
        },
        {
          label: "凤阳Fengyang0550",
          name: "凤阳",
          pinyin: "Fengyang",
          zip: "0550"
        },
        { label: "分宜Fenyi0790", name: "分宜", pinyin: "Fenyi", zip: "0790" },
        {
          label: "佛冈Fogang0763",
          name: "佛冈",
          pinyin: "Fogang",
          zip: "0763"
        },
        { label: "福安Fuan0593", name: "福安", pinyin: "Fuan", zip: "0593" },
        {
          label: "福鼎Fuding0593",
          name: "福鼎",
          pinyin: "Fuding",
          zip: "0593"
        },
        {
          label: "浮梁Fuliang0798",
          name: "浮梁",
          pinyin: "Fuliang",
          zip: "0798"
        },
        { label: "富民Fumin0871", name: "富民", pinyin: "Fumin", zip: "0871" },
        { label: "阜南Funan0558", name: "阜南", pinyin: "Funan", zip: "0558" },
        {
          label: "阜宁Funing0515",
          name: "阜宁",
          pinyin: "Funing",
          zip: "0515"
        },
        {
          label: "福清Fuqing0591",
          name: "福清",
          pinyin: "Fuqing",
          zip: "0591"
        },
        {
          label: "富阳Fuyang0571",
          name: "富阳",
          pinyin: "Fuyang",
          zip: "0571"
        },
        {
          label: "赣县Ganxian0797",
          name: "赣县",
          pinyin: "Ganxian",
          zip: "0797"
        },
        { label: "赣榆Ganyu0518", name: "赣榆", pinyin: "Ganyu", zip: "0518" },
        { label: "高安Gaoan0795", name: "高安", pinyin: "Gaoan", zip: "0795" },
        {
          label: "藁城Gaocheng0311",
          name: "藁城",
          pinyin: "Gaocheng",
          zip: "0311"
        },
        {
          label: "高淳Gaochun025",
          name: "高淳",
          pinyin: "Gaochun",
          zip: "025"
        },
        {
          label: "皋兰Gaolan0931",
          name: "皋兰",
          pinyin: "Gaolan",
          zip: "0931"
        },
        {
          label: "高陵Gaoling029",
          name: "高陵",
          pinyin: "Gaoling",
          zip: "029"
        },
        { label: "高密Gaomi0536", name: "高密", pinyin: "Gaomi", zip: "0536" },
        {
          label: "高青Gaoqing0533",
          name: "高青",
          pinyin: "Gaoqing",
          zip: "0533"
        },
        {
          label: "高唐Gaotang0635",
          name: "高唐",
          pinyin: "Gaotang",
          zip: "0635"
        },
        {
          label: "高要Gaoyao0758",
          name: "高要",
          pinyin: "Gaoyao",
          zip: "0758"
        },
        { label: "高邑Gaoyi0311", name: "高邑", pinyin: "Gaoyi", zip: "0311" },
        {
          label: "高邮Gaoyou0514",
          name: "高邮",
          pinyin: "Gaoyou",
          zip: "0514"
        },
        {
          label: "高州Gaozhou0668",
          name: "高州",
          pinyin: "Gaozhou",
          zip: "0668"
        },
        {
          label: "巩义Gongyi0371",
          name: "巩义",
          pinyin: "Gongyi",
          zip: "0371"
        },
        {
          label: "广昌Guangchang0794",
          name: "广昌",
          pinyin: "Guangchang",
          zip: "0794"
        },
        {
          label: "广德Guangde0563",
          name: "广德",
          pinyin: "Guangde",
          zip: "0563"
        },
        {
          label: "广丰Guangfeng0793",
          name: "广丰",
          pinyin: "Guangfeng",
          zip: "0793"
        },
        {
          label: "广宁Guangning0758",
          name: "广宁",
          pinyin: "Guangning",
          zip: "0758"
        },
        {
          label: "广饶Guangrao0546",
          name: "广饶",
          pinyin: "Guangrao",
          zip: "0546"
        },
        {
          label: "光泽Guangze0599",
          name: "光泽",
          pinyin: "Guangze",
          zip: "0599"
        },
        {
          label: "灌南Guannan0518",
          name: "灌南",
          pinyin: "Guannan",
          zip: "0518"
        },
        {
          label: "冠县Guanxian0635",
          name: "冠县",
          pinyin: "Guanxian",
          zip: "0635"
        },
        {
          label: "灌云Guanyun0518",
          name: "灌云",
          pinyin: "Guanyun",
          zip: "0518"
        },
        { label: "贵溪Guixi0701", name: "贵溪", pinyin: "Guixi", zip: "0701" },
        {
          label: "古田Gutian0593",
          name: "古田",
          pinyin: "Gutian",
          zip: "0593"
        },
        {
          label: "固镇Guzhen0552",
          name: "固镇",
          pinyin: "Guzhen",
          zip: "0552"
        },
        { label: "海安Haian0513", name: "海安", pinyin: "Haian", zip: "0513" },
        {
          label: "海丰Haifeng0660",
          name: "海丰",
          pinyin: "Haifeng",
          zip: "0660"
        },
        {
          label: "海门Haimen0513",
          name: "海门",
          pinyin: "Haimen",
          zip: "0513"
        },
        {
          label: "海宁Haining0573",
          name: "海宁",
          pinyin: "Haining",
          zip: "0573"
        },
        {
          label: "海盐Haiyan0573",
          name: "海盐",
          pinyin: "Haiyan",
          zip: "0573"
        },
        {
          label: "海阳Haiyang0535",
          name: "海阳",
          pinyin: "Haiyang",
          zip: "0535"
        },
        {
          label: "含山Hanshan0565",
          name: "含山",
          pinyin: "Hanshan",
          zip: "0565"
        },
        {
          label: "合川Hechuan023",
          name: "合川",
          pinyin: "Hechuan",
          zip: "023"
        },
        {
          label: "横峰Hengfeng0793",
          name: "横峰",
          pinyin: "Hengfeng",
          zip: "0793"
        },
        {
          label: "横县Hengxian0771",
          name: "横县",
          pinyin: "Hengxian",
          zip: "0771"
        },
        {
          label: "和平Heping0762",
          name: "和平",
          pinyin: "Heping",
          zip: "0762"
        },
        {
          label: "鹤山Heshan0750",
          name: "鹤山",
          pinyin: "Heshan",
          zip: "0750"
        },
        {
          label: "和县Hexian0565",
          name: "和县",
          pinyin: "Hexian",
          zip: "0565"
        },
        {
          label: "洪泽Hongze0517",
          name: "洪泽",
          pinyin: "Hongze",
          zip: "0517"
        },
        { label: "华安Huaan0596", name: "华安", pinyin: "Huaan", zip: "0596" },
        {
          label: "桦甸Huadian0423",
          name: "桦甸",
          pinyin: "Huadian",
          zip: "0423"
        },
        {
          label: "怀集Huaiji0758",
          name: "怀集",
          pinyin: "Huaiji",
          zip: "0758"
        },
        {
          label: "怀宁Huaining0556",
          name: "怀宁",
          pinyin: "Huaining",
          zip: "0556"
        },
        {
          label: "怀远Huaiyuan0552",
          name: "怀远",
          pinyin: "Huaiyuan",
          zip: "0552"
        },
        {
          label: "桓台Huantai0533",
          name: "桓台",
          pinyin: "Huantai",
          zip: "0533"
        },
        {
          label: "化州Huazhou0668",
          name: "化州",
          pinyin: "Huazhou",
          zip: "0668"
        },
        { label: "惠安Huian0595", name: "惠安", pinyin: "Huian", zip: "0595" },
        {
          label: "会昌Huichang0797",
          name: "会昌",
          pinyin: "Huichang",
          zip: "0797"
        },
        {
          label: "惠东Huidong0752",
          name: "惠东",
          pinyin: "Huidong",
          zip: "0752"
        },
        {
          label: "惠来Huilai0663",
          name: "惠来",
          pinyin: "Huilai",
          zip: "0663"
        },
        {
          label: "惠民Huimin0543",
          name: "惠民",
          pinyin: "Huimin",
          zip: "0543"
        },
        { label: "湖口Hukou0792", name: "湖口", pinyin: "Hukou", zip: "0792" },
        { label: "呼兰Hulan0451", name: "呼兰", pinyin: "Hulan", zip: "0451" },
        {
          label: "霍邱Huoqiu0564",
          name: "霍邱",
          pinyin: "Huoqiu",
          zip: "0564"
        },
        {
          label: "霍山Huoshan0564",
          name: "霍山",
          pinyin: "Huoshan",
          zip: "0564"
        },
        { label: "户县Huxian029", name: "户县", pinyin: "Huxian", zip: "029" },
        {
          label: "建德Jiande0571",
          name: "建德",
          pinyin: "Jiande",
          zip: "0571"
        },
        {
          label: "江都Jiangdu0514",
          name: "江都",
          pinyin: "Jiangdu",
          zip: "0514"
        },
        {
          label: "江津Jiangjin023",
          name: "江津",
          pinyin: "Jiangjin",
          zip: "023"
        },
        {
          label: "将乐Jiangle0598",
          name: "将乐",
          pinyin: "Jiangle",
          zip: "0598"
        },
        {
          label: "江山Jiangshan0570",
          name: "江山",
          pinyin: "Jiangshan",
          zip: "0570"
        },
        {
          label: "姜堰Jiangyan0523",
          name: "姜堰",
          pinyin: "Jiangyan",
          zip: "0523"
        },
        {
          label: "江阴Jiangyin0510",
          name: "江阴",
          pinyin: "Jiangyin",
          zip: "0510"
        },
        {
          label: "建湖Jianhu0515",
          name: "建湖",
          pinyin: "Jianhu",
          zip: "0515"
        },
        {
          label: "建宁Jianning0598",
          name: "建宁",
          pinyin: "Jianning",
          zip: "0598"
        },
        {
          label: "建瓯Jianou0599",
          name: "建瓯",
          pinyin: "Jianou",
          zip: "0599"
        },
        {
          label: "建阳Jianyang0599",
          name: "建阳",
          pinyin: "Jianyang",
          zip: "0599"
        },
        { label: "吉安Jian0796", name: "吉安", pinyin: "Jian", zip: "0796" },
        {
          label: "蛟河Jiaohe0423",
          name: "蛟河",
          pinyin: "Jiaohe",
          zip: "0423"
        },
        {
          label: "蕉岭Jiaoling0753",
          name: "蕉岭",
          pinyin: "Jiaoling",
          zip: "0753"
        },
        {
          label: "胶南Jiaonan0532",
          name: "胶南",
          pinyin: "Jiaonan",
          zip: "0532"
        },
        {
          label: "胶州Jiaozhou0532",
          name: "胶州",
          pinyin: "Jiaozhou",
          zip: "0532"
        },
        {
          label: "嘉善Jiashan0573",
          name: "嘉善",
          pinyin: "Jiashan",
          zip: "0573"
        },
        {
          label: "嘉祥Jiaxiang0537",
          name: "嘉祥",
          pinyin: "Jiaxiang",
          zip: "0537"
        },
        {
          label: "揭东Jiedong0663",
          name: "揭东",
          pinyin: "Jiedong",
          zip: "0663"
        },
        {
          label: "界首Jieshou0558",
          name: "界首",
          pinyin: "Jieshou",
          zip: "0558"
        },
        { label: "揭西Jiexi0663", name: "揭西", pinyin: "Jiexi", zip: "0663" },
        { label: "即墨Jimo0532", name: "即墨", pinyin: "Jimo", zip: "0532" },
        {
          label: "靖安Jingan0795",
          name: "靖安",
          pinyin: "Jingan",
          zip: "0795"
        },
        {
          label: "旌德Jingde0563",
          name: "旌德",
          pinyin: "Jingde",
          zip: "0563"
        },
        {
          label: "井冈山Jinggangshan0796",
          name: "井冈山",
          pinyin: "Jinggangshan",
          zip: "0796"
        },
        {
          label: "靖江Jingjiang0523",
          name: "靖江",
          pinyin: "Jingjiang",
          zip: "0523"
        },
        {
          label: "景宁Jingning0578",
          name: "景宁",
          pinyin: "Jingning",
          zip: "0578"
        },
        {
          label: "泾县Jingxian0563",
          name: "泾县",
          pinyin: "Jingxian",
          zip: "0563"
        },
        {
          label: "井陉Jingxing0311",
          name: "井陉",
          pinyin: "Jingxing",
          zip: "0311"
        },
        { label: "金湖Jinhu0517", name: "金湖", pinyin: "Jinhu", zip: "0517" },
        {
          label: "晋江Jinjiang0595",
          name: "晋江",
          pinyin: "Jinjiang",
          zip: "0595"
        },
        {
          label: "金门Jinmen0595",
          name: "金门",
          pinyin: "Jinmen",
          zip: "0595"
        },
        {
          label: "晋宁Jinning0871",
          name: "晋宁",
          pinyin: "Jinning",
          zip: "0871"
        },
        {
          label: "金坛Jintan0519",
          name: "金坛",
          pinyin: "Jintan",
          zip: "0519"
        },
        {
          label: "金堂Jintang028",
          name: "金堂",
          pinyin: "Jintang",
          zip: "028"
        },
        {
          label: "进贤Jinxian0791",
          name: "进贤",
          pinyin: "Jinxian",
          zip: "0791"
        },
        { label: "金溪Jinxi0794", name: "金溪", pinyin: "Jinxi", zip: "0794" },
        {
          label: "金乡Jinxiang0537",
          name: "金乡",
          pinyin: "Jinxiang",
          zip: "0537"
        },
        {
          label: "缙云Jinyun0578",
          name: "缙云",
          pinyin: "Jinyun",
          zip: "0578"
        },
        {
          label: "金寨Jinzhai0564",
          name: "金寨",
          pinyin: "Jinzhai",
          zip: "0564"
        },
        {
          label: "晋州Jinzhou0311",
          name: "晋州",
          pinyin: "Jinzhou",
          zip: "0311"
        },
        {
          label: "吉水Jishui0796",
          name: "吉水",
          pinyin: "Jishui",
          zip: "0796"
        },
        {
          label: "九江Jiujiang0792",
          name: "九江",
          pinyin: "Jiujiang",
          zip: "0792"
        },
        {
          label: "九台Jiutai0431",
          name: "九台",
          pinyin: "Jiutai",
          zip: "0431"
        },
        { label: "绩溪Jixi0563", name: "绩溪", pinyin: "Jixi", zip: "0563" },
        {
          label: "济阳Jiyang0531",
          name: "济阳",
          pinyin: "Jiyang",
          zip: "0531"
        },
        {
          label: "济源Jiyuan0391",
          name: "济源",
          pinyin: "Jiyuan",
          zip: "0391"
        },
        {
          label: "鄄城Juancheng0530",
          name: "鄄城",
          pinyin: "Juancheng",
          zip: "0530"
        },
        { label: "莒南Junan0539", name: "莒南", pinyin: "Junan", zip: "0539" },
        {
          label: "句容Jurong0511",
          name: "句容",
          pinyin: "Jurong",
          zip: "0511"
        },
        {
          label: "莒县Juxian0633",
          name: "莒县",
          pinyin: "Juxian",
          zip: "0633"
        },
        { label: "巨野Juye0530", name: "巨野", pinyin: "Juye", zip: "0530" },
        {
          label: "开化Kaihua0570",
          name: "开化",
          pinyin: "Kaihua",
          zip: "0570"
        },
        {
          label: "开平Kaiping0750",
          name: "开平",
          pinyin: "Kaiping",
          zip: "0750"
        },
        {
          label: "开县Kaixian023",
          name: "开县",
          pinyin: "Kaixian",
          zip: "023"
        },
        {
          label: "开阳Kaiyang0851",
          name: "开阳",
          pinyin: "Kaiyang",
          zip: "0851"
        },
        {
          label: "康平Kangping024",
          name: "康平",
          pinyin: "Kangping",
          zip: "024"
        },
        { label: "垦利Kenli0546", name: "垦利", pinyin: "Kenli", zip: "0546" },
        {
          label: "昆山Kunshan0512",
          name: "昆山",
          pinyin: "Kunshan",
          zip: "0512"
        },
        { label: "来安Laian0550", name: "来安", pinyin: "Laian", zip: "0550" },
        { label: "莱西Laixi0532", name: "莱西", pinyin: "Laixi", zip: "0532" },
        {
          label: "莱阳Laiyang0535",
          name: "莱阳",
          pinyin: "Laiyang",
          zip: "0535"
        },
        {
          label: "莱州Laizhou0535",
          name: "莱州",
          pinyin: "Laizhou",
          zip: "0535"
        },
        {
          label: "郎溪Langxi0563",
          name: "郎溪",
          pinyin: "Langxi",
          zip: "0563"
        },
        {
          label: "蓝田Lantian029",
          name: "蓝田",
          pinyin: "Lantian",
          zip: "029"
        },
        { label: "兰溪Lanxi0579", name: "兰溪", pinyin: "Lanxi", zip: "0579" },
        { label: "乐安Lean0794", name: "乐安", pinyin: "Lean", zip: "0794" },
        {
          label: "乐昌Lechang0751",
          name: "乐昌",
          pinyin: "Lechang",
          zip: "0751"
        },
        {
          label: "雷州Leizhou0759",
          name: "雷州",
          pinyin: "Leizhou",
          zip: "0759"
        },
        {
          label: "乐陵Leling0534",
          name: "乐陵",
          pinyin: "Leling",
          zip: "0534"
        },
        {
          label: "乐平Leping0798",
          name: "乐平",
          pinyin: "Leping",
          zip: "0798"
        },
        {
          label: "乐清Leqing0577",
          name: "乐清",
          pinyin: "Leqing",
          zip: "0577"
        },
        {
          label: "乐亭Leting0315",
          name: "乐亭",
          pinyin: "Leting",
          zip: "0315"
        },
        {
          label: "连城Liancheng0597",
          name: "连城",
          pinyin: "Liancheng",
          zip: "0597"
        },
        {
          label: "梁平Liangping023",
          name: "梁平",
          pinyin: "Liangping",
          zip: "023"
        },
        {
          label: "梁山Liangshan0537",
          name: "梁山",
          pinyin: "Liangshan",
          zip: "0537"
        },
        {
          label: "莲花Lianhua0799",
          name: "莲花",
          pinyin: "Lianhua",
          zip: "0799"
        },
        {
          label: "连江Lianjiang0591",
          name: "连江",
          pinyin: "Lianjiang",
          zip: "0591"
        },
        {
          label: "廉江Lianjiang0759",
          name: "廉江",
          pinyin: "Lianjiang",
          zip: "0759"
        },
        {
          label: "连南Liannan0763",
          name: "连南",
          pinyin: "Liannan",
          zip: "0763"
        },
        {
          label: "连平Lianping0762",
          name: "连平",
          pinyin: "Lianping",
          zip: "0762"
        },
        {
          label: "连山Lianshan0763",
          name: "连山",
          pinyin: "Lianshan",
          zip: "0763"
        },
        {
          label: "涟水Lianshui0517",
          name: "涟水",
          pinyin: "Lianshui",
          zip: "0517"
        },
        {
          label: "连州Lianzhou0763",
          name: "连州",
          pinyin: "Lianzhou",
          zip: "0763"
        },
        {
          label: "辽中Liaozhong024",
          name: "辽中",
          pinyin: "Liaozhong",
          zip: "024"
        },
        {
          label: "黎川Lichuan0794",
          name: "黎川",
          pinyin: "Lichuan",
          zip: "0794"
        },
        { label: "利津Lijin0546", name: "利津", pinyin: "Lijin", zip: "0546" },
        { label: "临安Linan0571", name: "临安", pinyin: "Linan", zip: "0571" },
        {
          label: "灵璧Lingbi0557",
          name: "灵璧",
          pinyin: "Lingbi",
          zip: "0557"
        },
        {
          label: "灵寿Lingshou0311",
          name: "灵寿",
          pinyin: "Lingshou",
          zip: "0311"
        },
        {
          label: "陵县Lingxian0534",
          name: "陵县",
          pinyin: "Lingxian",
          zip: "0534"
        },
        {
          label: "临海Linhai0576",
          name: "临海",
          pinyin: "Linhai",
          zip: "0576"
        },
        {
          label: "临清Linqing0635",
          name: "临清",
          pinyin: "Linqing",
          zip: "0635"
        },
        {
          label: "临泉Linquan0558",
          name: "临泉",
          pinyin: "Linquan",
          zip: "0558"
        },
        { label: "临朐Linqu0536", name: "临朐", pinyin: "Linqu", zip: "0536" },
        {
          label: "临沭Linshu0539",
          name: "临沭",
          pinyin: "Linshu",
          zip: "0539"
        },
        { label: "临邑Linyi0534", name: "临邑", pinyin: "Linyi", zip: "0534" },
        { label: "溧水Lishui025", name: "溧水", pinyin: "Lishui", zip: "025" },
        {
          label: "柳城Liucheng0772",
          name: "柳城",
          pinyin: "Liucheng",
          zip: "0772"
        },
        {
          label: "柳江Liujiang0772",
          name: "柳江",
          pinyin: "Liujiang",
          zip: "0772"
        },
        {
          label: "浏阳Liuyang0731",
          name: "浏阳",
          pinyin: "Liuyang",
          zip: "0731"
        },
        { label: "利辛Lixin0558", name: "利辛", pinyin: "Lixin", zip: "0558" },
        {
          label: "溧阳Liyang0519",
          name: "溧阳",
          pinyin: "Liyang",
          zip: "0519"
        },
        {
          label: "隆安Longan0771",
          name: "隆安",
          pinyin: "Longan",
          zip: "0771"
        },
        {
          label: "龙川Longchuan0762",
          name: "龙川",
          pinyin: "Longchuan",
          zip: "0762"
        },
        {
          label: "龙海Longhai0596",
          name: "龙海",
          pinyin: "Longhai",
          zip: "0596"
        },
        {
          label: "龙口Longkou0535",
          name: "龙口",
          pinyin: "Longkou",
          zip: "0535"
        },
        {
          label: "龙门Longmen0752",
          name: "龙门",
          pinyin: "Longmen",
          zip: "0752"
        },
        {
          label: "龙南Longnan0797",
          name: "龙南",
          pinyin: "Longnan",
          zip: "0797"
        },
        {
          label: "龙泉Longquan0578",
          name: "龙泉",
          pinyin: "Longquan",
          zip: "0578"
        },
        {
          label: "龙游Longyou0570",
          name: "龙游",
          pinyin: "Longyou",
          zip: "0570"
        },
        {
          label: "栾城Luancheng0311",
          name: "栾城",
          pinyin: "Luancheng",
          zip: "0311"
        },
        {
          label: "栾川Luanchuan0379",
          name: "栾川",
          pinyin: "Luanchuan",
          zip: "0379"
        },
        {
          label: "滦南Luannan0315",
          name: "滦南",
          pinyin: "Luannan",
          zip: "0315"
        },
        {
          label: "滦县Luanxian0315",
          name: "滦县",
          pinyin: "Luanxian",
          zip: "0315"
        },
        {
          label: "陆丰Lufeng0660",
          name: "陆丰",
          pinyin: "Lufeng",
          zip: "0660"
        },
        { label: "陆河Luhe0660", name: "陆河", pinyin: "Luhe", zip: "0660" },
        {
          label: "庐江Lujiang0565",
          name: "庐江",
          pinyin: "Lujiang",
          zip: "0565"
        },
        {
          label: "罗定Luoding0766",
          name: "罗定",
          pinyin: "Luoding",
          zip: "0766"
        },
        {
          label: "洛宁Luoning0379",
          name: "洛宁",
          pinyin: "Luoning",
          zip: "0379"
        },
        {
          label: "罗源Luoyuan0591",
          name: "罗源",
          pinyin: "Luoyuan",
          zip: "0591"
        },
        {
          label: "鹿泉Luquan0311",
          name: "鹿泉",
          pinyin: "Luquan",
          zip: "0311"
        },
        {
          label: "禄劝Luquan0871",
          name: "禄劝",
          pinyin: "Luquan",
          zip: "0871"
        },
        { label: "芦溪Luxi0799", name: "芦溪", pinyin: "Luxi", zip: "0799" },
        {
          label: "鹿寨Luzhai0772",
          name: "鹿寨",
          pinyin: "Luzhai",
          zip: "0772"
        },
        {
          label: "马山Mashan0771",
          name: "马山",
          pinyin: "Mashan",
          zip: "0771"
        },
        {
          label: "梅县Meixian0753",
          name: "梅县",
          pinyin: "Meixian",
          zip: "0753"
        },
        {
          label: "蒙城Mengcheng0558",
          name: "蒙城",
          pinyin: "Mengcheng",
          zip: "0558"
        },
        {
          label: "孟津Mengjin0379",
          name: "孟津",
          pinyin: "Mengjin",
          zip: "0379"
        },
        {
          label: "蒙阴Mengyin0539",
          name: "蒙阴",
          pinyin: "Mengyin",
          zip: "0539"
        },
        {
          label: "孟州Mengzhou0391",
          name: "孟州",
          pinyin: "Mengzhou",
          zip: "0391"
        },
        {
          label: "明光Mingguang0550",
          name: "明光",
          pinyin: "Mingguang",
          zip: "0550"
        },
        {
          label: "明溪Mingxi0598",
          name: "明溪",
          pinyin: "Mingxi",
          zip: "0598"
        },
        {
          label: "闽侯Minhou0591",
          name: "闽侯",
          pinyin: "Minhou",
          zip: "0591"
        },
        {
          label: "闽清Minqing0591",
          name: "闽清",
          pinyin: "Minqing",
          zip: "0591"
        },
        { label: "木兰Mulan0451", name: "木兰", pinyin: "Mulan", zip: "0451" },
        { label: "南安Nanan0595", name: "南安", pinyin: "Nanan", zip: "0595" },
        { label: "南澳Nanao0754", name: "南澳", pinyin: "Nanao", zip: "0754" },
        {
          label: "南城Nancheng0794",
          name: "南城",
          pinyin: "Nancheng",
          zip: "0794"
        },
        {
          label: "南川Nanchuan023",
          name: "南川",
          pinyin: "Nanchuan",
          zip: "023"
        },
        {
          label: "南丰Nanfeng0794",
          name: "南丰",
          pinyin: "Nanfeng",
          zip: "0794"
        },
        {
          label: "南靖Nanjing0596",
          name: "南靖",
          pinyin: "Nanjing",
          zip: "0596"
        },
        {
          label: "南康Nankang0797",
          name: "南康",
          pinyin: "Nankang",
          zip: "0797"
        },
        {
          label: "南陵Nanling0553",
          name: "南陵",
          pinyin: "Nanling",
          zip: "0553"
        },
        {
          label: "南雄Nanxiong0751",
          name: "南雄",
          pinyin: "Nanxiong",
          zip: "0751"
        },
        {
          label: "宁都Ningdu0797",
          name: "宁都",
          pinyin: "Ningdu",
          zip: "0797"
        },
        {
          label: "宁国Ningguo0563",
          name: "宁国",
          pinyin: "Ningguo",
          zip: "0563"
        },
        {
          label: "宁海Ninghai0574",
          name: "宁海",
          pinyin: "Ninghai",
          zip: "0574"
        },
        {
          label: "宁化Ninghua0598",
          name: "宁化",
          pinyin: "Ninghua",
          zip: "0598"
        },
        {
          label: "宁津Ningjin0534",
          name: "宁津",
          pinyin: "Ningjin",
          zip: "0534"
        },
        {
          label: "宁乡Ningxiang0731",
          name: "宁乡",
          pinyin: "Ningxiang",
          zip: "0731"
        },
        {
          label: "宁阳Ningyang0538",
          name: "宁阳",
          pinyin: "Ningyang",
          zip: "0538"
        },
        {
          label: "农安Nongan0431",
          name: "农安",
          pinyin: "Nongan",
          zip: "0431"
        },
        { label: "磐安Panan0579", name: "磐安", pinyin: "Panan", zip: "0579" },
        {
          label: "磐石Panshi0423",
          name: "磐石",
          pinyin: "Panshi",
          zip: "0423"
        },
        {
          label: "沛县Peixian0516",
          name: "沛县",
          pinyin: "Peixian",
          zip: "0516"
        },
        {
          label: "蓬莱Penglai0535",
          name: "蓬莱",
          pinyin: "Penglai",
          zip: "0535"
        },
        {
          label: "彭水Pengshui023",
          name: "彭水",
          pinyin: "Pengshui",
          zip: "023"
        },
        {
          label: "彭泽Pengze0792",
          name: "彭泽",
          pinyin: "Pengze",
          zip: "0792"
        },
        {
          label: "彭州Pengzhou028",
          name: "彭州",
          pinyin: "Pengzhou",
          zip: "028"
        },
        {
          label: "平度Pingdu0532",
          name: "平度",
          pinyin: "Pingdu",
          zip: "0532"
        },
        {
          label: "平和Pinghe0596",
          name: "平和",
          pinyin: "Pinghe",
          zip: "0596"
        },
        {
          label: "平湖Pinghu0573",
          name: "平湖",
          pinyin: "Pinghu",
          zip: "0573"
        },
        {
          label: "屏南Pingnan0593",
          name: "屏南",
          pinyin: "Pingnan",
          zip: "0593"
        },
        {
          label: "平山Pingshan0311",
          name: "平山",
          pinyin: "Pingshan",
          zip: "0311"
        },
        {
          label: "平潭Pingtan0591",
          name: "平潭",
          pinyin: "Pingtan",
          zip: "0591"
        },
        {
          label: "平阳Pingyang0577",
          name: "平阳",
          pinyin: "Pingyang",
          zip: "0577"
        },
        {
          label: "平阴Pingyin0531",
          name: "平阴",
          pinyin: "Pingyin",
          zip: "0531"
        },
        {
          label: "平邑Pingyi0539",
          name: "平邑",
          pinyin: "Pingyi",
          zip: "0539"
        },
        {
          label: "平原Pingyuan0534",
          name: "平原",
          pinyin: "Pingyuan",
          zip: "0534"
        },
        {
          label: "平远Pingyuan0753",
          name: "平远",
          pinyin: "Pingyuan",
          zip: "0753"
        },
        { label: "郫县Pixian028", name: "郫县", pinyin: "Pixian", zip: "028" },
        {
          label: "邳州Pizhou0516",
          name: "邳州",
          pinyin: "Pizhou",
          zip: "0516"
        },
        {
          label: "鄱阳Poyang0793",
          name: "鄱阳",
          pinyin: "Poyang",
          zip: "0793"
        },
        {
          label: "浦城Pucheng0599",
          name: "浦城",
          pinyin: "Pucheng",
          zip: "0599"
        },
        {
          label: "浦江Pujiang0579",
          name: "浦江",
          pinyin: "Pujiang",
          zip: "0579"
        },
        {
          label: "蒲江Pujiang028",
          name: "蒲江",
          pinyin: "Pujiang",
          zip: "028"
        },
        {
          label: "普兰店Pulandian0411",
          name: "普兰店",
          pinyin: "Pulandian",
          zip: "0411"
        },
        {
          label: "普宁Puning0663",
          name: "普宁",
          pinyin: "Puning",
          zip: "0663"
        },
        {
          label: "迁安Qianan0315",
          name: "迁安",
          pinyin: "Qianan",
          zip: "0315"
        },
        {
          label: "潜山Qianshan0556",
          name: "潜山",
          pinyin: "Qianshan",
          zip: "0556"
        },
        {
          label: "铅山Qianshan0793",
          name: "铅山",
          pinyin: "Qianshan",
          zip: "0793"
        },
        {
          label: "迁西Qianxi0315",
          name: "迁西",
          pinyin: "Qianxi",
          zip: "0315"
        },
        {
          label: "启东Qidong0513",
          name: "启东",
          pinyin: "Qidong",
          zip: "0513"
        },
        { label: "齐河Qihe0534", name: "齐河", pinyin: "Qihe", zip: "0534" },
        {
          label: "綦江Qijiang023",
          name: "綦江",
          pinyin: "Qijiang",
          zip: "023"
        },
        { label: "祁门Qimen0559", name: "祁门", pinyin: "Qimen", zip: "0559" },
        {
          label: "清流Qingliu0598",
          name: "清流",
          pinyin: "Qingliu",
          zip: "0598"
        },
        {
          label: "青田Qingtian0578",
          name: "青田",
          pinyin: "Qingtian",
          zip: "0578"
        },
        {
          label: "清新Qingxin0763",
          name: "清新",
          pinyin: "Qingxin",
          zip: "0763"
        },
        {
          label: "青阳Qingyang0566",
          name: "青阳",
          pinyin: "Qingyang",
          zip: "0566"
        },
        {
          label: "庆元Qingyuan0578",
          name: "庆元",
          pinyin: "Qingyuan",
          zip: "0578"
        },
        {
          label: "庆云Qingyun0534",
          name: "庆云",
          pinyin: "Qingyun",
          zip: "0534"
        },
        {
          label: "清镇Qingzhen0851",
          name: "清镇",
          pinyin: "Qingzhen",
          zip: "0851"
        },
        {
          label: "青州Qingzhou0536",
          name: "青州",
          pinyin: "Qingzhou",
          zip: "0536"
        },
        {
          label: "沁阳Qinyang0391",
          name: "沁阳",
          pinyin: "Qinyang",
          zip: "0391"
        },
        {
          label: "邛崃Qionglai028",
          name: "邛崃",
          pinyin: "Qionglai",
          zip: "028"
        },
        { label: "栖霞Qixia0535", name: "栖霞", pinyin: "Qixia", zip: "0535" },
        {
          label: "全椒Quanjiao0550",
          name: "全椒",
          pinyin: "Quanjiao",
          zip: "0550"
        },
        {
          label: "全南Quannan0797",
          name: "全南",
          pinyin: "Quannan",
          zip: "0797"
        },
        { label: "曲阜Qufu0537", name: "曲阜", pinyin: "Qufu", zip: "0537" },
        {
          label: "曲江Qujiang0751",
          name: "曲江",
          pinyin: "Qujiang",
          zip: "0751"
        },
        {
          label: "饶平Raoping0768",
          name: "饶平",
          pinyin: "Raoping",
          zip: "0768"
        },
        {
          label: "仁化Renhua0751",
          name: "仁化",
          pinyin: "Renhua",
          zip: "0751"
        },
        {
          label: "融安Rongan0772",
          name: "融安",
          pinyin: "Rongan",
          zip: "0772"
        },
        {
          label: "荣昌Rongchang023",
          name: "荣昌",
          pinyin: "Rongchang",
          zip: "023"
        },
        {
          label: "荣成Rongcheng0631",
          name: "荣成",
          pinyin: "Rongcheng",
          zip: "0631"
        },
        {
          label: "融水Rongshui0772",
          name: "融水",
          pinyin: "Rongshui",
          zip: "0772"
        },
        {
          label: "如东Rudong0513",
          name: "如东",
          pinyin: "Rudong",
          zip: "0513"
        },
        { label: "如皋Rugao0513", name: "如皋", pinyin: "Rugao", zip: "0513" },
        { label: "瑞安Ruian0577", name: "瑞安", pinyin: "Ruian", zip: "0577" },
        {
          label: "瑞昌Ruichang0792",
          name: "瑞昌",
          pinyin: "Ruichang",
          zip: "0792"
        },
        {
          label: "瑞金Ruijin0797",
          name: "瑞金",
          pinyin: "Ruijin",
          zip: "0797"
        },
        {
          label: "乳山Rushan0631",
          name: "乳山",
          pinyin: "Rushan",
          zip: "0631"
        },
        {
          label: "汝阳Ruyang0379",
          name: "汝阳",
          pinyin: "Ruyang",
          zip: "0379"
        },
        {
          label: "乳源Ruyuan0751",
          name: "乳源",
          pinyin: "Ruyuan",
          zip: "0751"
        },
        {
          label: "三江Sanjiang0772",
          name: "三江",
          pinyin: "Sanjiang",
          zip: "0772"
        },
        {
          label: "三门Sanmen0576",
          name: "三门",
          pinyin: "Sanmen",
          zip: "0576"
        },
        { label: "诏安Saoan0596", name: "诏安", pinyin: "Saoan", zip: "0596" },
        {
          label: "上高Shanggao0795",
          name: "上高",
          pinyin: "Shanggao",
          zip: "0795"
        },
        {
          label: "上杭Shanghang0597",
          name: "上杭",
          pinyin: "Shanghang",
          zip: "0597"
        },
        {
          label: "商河Shanghe0531",
          name: "商河",
          pinyin: "Shanghe",
          zip: "0531"
        },
        {
          label: "上栗Shangli0799",
          name: "上栗",
          pinyin: "Shangli",
          zip: "0799"
        },
        {
          label: "上林Shanglin0771",
          name: "上林",
          pinyin: "Shanglin",
          zip: "0771"
        },
        {
          label: "上饶Shangrao0793",
          name: "上饶",
          pinyin: "Shangrao",
          zip: "0793"
        },
        {
          label: "上犹Shangyou0797",
          name: "上犹",
          pinyin: "Shangyou",
          zip: "0797"
        },
        {
          label: "上虞Shangyu0575",
          name: "上虞",
          pinyin: "Shangyu",
          zip: "0575"
        },
        {
          label: "尚志Shangzhi0451",
          name: "尚志",
          pinyin: "Shangzhi",
          zip: "0451"
        },
        {
          label: "邵武Shaowu0599",
          name: "邵武",
          pinyin: "Shaowu",
          zip: "0599"
        },
        {
          label: "绍兴Shaoxing0575",
          name: "绍兴",
          pinyin: "Shaoxing",
          zip: "0575"
        },
        {
          label: "沙县Shaxian0598",
          name: "沙县",
          pinyin: "Shaxian",
          zip: "0598"
        },
        {
          label: "嵊泗Shengsi0580",
          name: "嵊泗",
          pinyin: "Shengsi",
          zip: "0580"
        },
        {
          label: "嵊州Shengzhou0575",
          name: "嵊州",
          pinyin: "Shengzhou",
          zip: "0575"
        },
        {
          label: "莘县Shenxian0635",
          name: "莘县",
          pinyin: "Shenxian",
          zip: "0635"
        },
        {
          label: "深泽Shenze0311",
          name: "深泽",
          pinyin: "Shenze",
          zip: "0311"
        },
        {
          label: "歙县Shexian0559",
          name: "歙县",
          pinyin: "Shexian",
          zip: "0559"
        },
        {
          label: "射阳Sheyang0515",
          name: "射阳",
          pinyin: "Sheyang",
          zip: "0515"
        },
        {
          label: "石城Shicheng0797",
          name: "石城",
          pinyin: "Shicheng",
          zip: "0797"
        },
        {
          label: "石林Shilin0871",
          name: "石林",
          pinyin: "Shilin",
          zip: "0871"
        },
        {
          label: "石狮Shishi0595",
          name: "石狮",
          pinyin: "Shishi",
          zip: "0595"
        },
        {
          label: "石台Shitai0566",
          name: "石台",
          pinyin: "Shitai",
          zip: "0566"
        },
        {
          label: "始兴Shixing0751",
          name: "始兴",
          pinyin: "Shixing",
          zip: "0751"
        },
        { label: "石柱Shizhu023", name: "石柱", pinyin: "Shizhu", zip: "023" },
        {
          label: "寿光Shouguang0536",
          name: "寿光",
          pinyin: "Shouguang",
          zip: "0536"
        },
        {
          label: "寿宁Shouning0593",
          name: "寿宁",
          pinyin: "Shouning",
          zip: "0593"
        },
        {
          label: "寿县Shouxian0564",
          name: "寿县",
          pinyin: "Shouxian",
          zip: "0564"
        },
        {
          label: "双城Shuangcheng0451",
          name: "双城",
          pinyin: "Shuangcheng",
          zip: "0451"
        },
        {
          label: "双流Shuangliu028",
          name: "双流",
          pinyin: "Shuangliu",
          zip: "028"
        },
        {
          label: "舒城Shucheng0564",
          name: "舒城",
          pinyin: "Shucheng",
          zip: "0564"
        },
        {
          label: "舒兰Shulan0423",
          name: "舒兰",
          pinyin: "Shulan",
          zip: "0423"
        },
        {
          label: "顺昌Shunchang0599",
          name: "顺昌",
          pinyin: "Shunchang",
          zip: "0599"
        },
        {
          label: "沭阳Shuyang0527",
          name: "沭阳",
          pinyin: "Shuyang",
          zip: "0527"
        },
        {
          label: "泗洪Sihong0527",
          name: "泗洪",
          pinyin: "Sihong",
          zip: "0527"
        },
        { label: "四会Sihui0758", name: "四会", pinyin: "Sihui", zip: "0758" },
        {
          label: "泗水Sishui0537",
          name: "泗水",
          pinyin: "Sishui",
          zip: "0537"
        },
        {
          label: "泗县Sixian0557",
          name: "泗县",
          pinyin: "Sixian",
          zip: "0557"
        },
        {
          label: "泗阳Siyang0527",
          name: "泗阳",
          pinyin: "Siyang",
          zip: "0527"
        },
        {
          label: "嵩明Songming0871",
          name: "嵩明",
          pinyin: "Songming",
          zip: "0871"
        },
        {
          label: "松溪Songxi0599",
          name: "松溪",
          pinyin: "Songxi",
          zip: "0599"
        },
        {
          label: "嵩县Songxian0379",
          name: "嵩县",
          pinyin: "Songxian",
          zip: "0379"
        },
        {
          label: "松阳Songyang0578",
          name: "松阳",
          pinyin: "Songyang",
          zip: "0578"
        },
        {
          label: "遂昌Suichang0578",
          name: "遂昌",
          pinyin: "Suichang",
          zip: "0578"
        },
        {
          label: "遂川Suichuan0796",
          name: "遂川",
          pinyin: "Suichuan",
          zip: "0796"
        },
        {
          label: "睢宁Suining0516",
          name: "睢宁",
          pinyin: "Suining",
          zip: "0516"
        },
        { label: "濉溪Suixi0561", name: "濉溪", pinyin: "Suixi", zip: "0561" },
        { label: "遂溪Suixi0759", name: "遂溪", pinyin: "Suixi", zip: "0759" },
        {
          label: "宿松Susong0556",
          name: "宿松",
          pinyin: "Susong",
          zip: "0556"
        },
        { label: "宿豫Suyu0527", name: "宿豫", pinyin: "Suyu", zip: "0527" },
        {
          label: "太仓Taicang0512",
          name: "太仓",
          pinyin: "Taicang",
          zip: "0512"
        },
        { label: "太和Taihe0558", name: "太和", pinyin: "Taihe", zip: "0558" },
        { label: "泰和Taihe0796", name: "泰和", pinyin: "Taihe", zip: "0796" },
        { label: "太湖Taihu0556", name: "太湖", pinyin: "Taihu", zip: "0556" },
        {
          label: "泰宁Taining0598",
          name: "泰宁",
          pinyin: "Taining",
          zip: "0598"
        },
        {
          label: "台山Taishan0750",
          name: "台山",
          pinyin: "Taishan",
          zip: "0750"
        },
        {
          label: "泰顺Taishun0577",
          name: "泰顺",
          pinyin: "Taishun",
          zip: "0577"
        },
        {
          label: "泰兴Taixing0523",
          name: "泰兴",
          pinyin: "Taixing",
          zip: "0523"
        },
        {
          label: "郯城Tancheng0539",
          name: "郯城",
          pinyin: "Tancheng",
          zip: "0539"
        },
        {
          label: "唐海Tanghai0315",
          name: "唐海",
          pinyin: "Tanghai",
          zip: "0315"
        },
        {
          label: "滕州Tengzhou0623",
          name: "滕州",
          pinyin: "Tengzhou",
          zip: "0623"
        },
        {
          label: "天长Tianchang0550",
          name: "天长",
          pinyin: "Tianchang",
          zip: "0550"
        },
        {
          label: "天台Tiantai0576",
          name: "天台",
          pinyin: "Tiantai",
          zip: "0576"
        },
        {
          label: "桐城Tongcheng0556",
          name: "桐城",
          pinyin: "Tongcheng",
          zip: "0556"
        },
        {
          label: "铜鼓Tonggu0795",
          name: "铜鼓",
          pinyin: "Tonggu",
          zip: "0795"
        },
        {
          label: "通河Tonghe0451",
          name: "通河",
          pinyin: "Tonghe",
          zip: "0451"
        },
        {
          label: "铜梁Tongliang023",
          name: "铜梁",
          pinyin: "Tongliang",
          zip: "023"
        },
        {
          label: "铜陵Tongling0562",
          name: "铜陵",
          pinyin: "Tongling",
          zip: "0562"
        },
        {
          label: "桐庐Tonglu0571",
          name: "桐庐",
          pinyin: "Tonglu",
          zip: "0571"
        },
        {
          label: "潼南Tongnan023",
          name: "潼南",
          pinyin: "Tongnan",
          zip: "023"
        },
        {
          label: "铜山Tongshan0516",
          name: "铜山",
          pinyin: "Tongshan",
          zip: "0516"
        },
        {
          label: "桐乡Tongxiang0573",
          name: "桐乡",
          pinyin: "Tongxiang",
          zip: "0573"
        },
        {
          label: "通州Tongzhou0513",
          name: "通州",
          pinyin: "Tongzhou",
          zip: "0513"
        },
        {
          label: "瓦房店Wafangdian0411",
          name: "瓦房店",
          pinyin: "Wafangdian",
          zip: "0411"
        },
        { label: "万安Wanan0796", name: "万安", pinyin: "Wanan", zip: "0796" },
        {
          label: "望城Wangcheng0731",
          name: "望城",
          pinyin: "Wangcheng",
          zip: "0731"
        },
        {
          label: "望江Wangjiang0556",
          name: "望江",
          pinyin: "Wangjiang",
          zip: "0556"
        },
        {
          label: "万年Wannian0793",
          name: "万年",
          pinyin: "Wannian",
          zip: "0793"
        },
        {
          label: "万载Wanzai0795",
          name: "万载",
          pinyin: "Wanzai",
          zip: "0795"
        },
        {
          label: "微山Weishan0537",
          name: "微山",
          pinyin: "Weishan",
          zip: "0537"
        },
        {
          label: "文成Wencheng0577",
          name: "文成",
          pinyin: "Wencheng",
          zip: "0577"
        },
        {
          label: "文登Wendeng0631",
          name: "文登",
          pinyin: "Wendeng",
          zip: "0631"
        },
        {
          label: "翁源Wengyuan0751",
          name: "翁源",
          pinyin: "Wengyuan",
          zip: "0751"
        },
        {
          label: "温岭Wenling0576",
          name: "温岭",
          pinyin: "Wenling",
          zip: "0576"
        },
        {
          label: "汶上Wenshang0537",
          name: "汶上",
          pinyin: "Wenshang",
          zip: "0537"
        },
        {
          label: "温县Wenxian0391",
          name: "温县",
          pinyin: "Wenxian",
          zip: "0391"
        },
        {
          label: "涡阳Woyang0558",
          name: "涡阳",
          pinyin: "Woyang",
          zip: "0558"
        },
        {
          label: "五常Wuchang0451",
          name: "五常",
          pinyin: "Wuchang",
          zip: "0451"
        },
        {
          label: "武城Wucheng0534",
          name: "武城",
          pinyin: "Wucheng",
          zip: "0534"
        },
        {
          label: "吴川Wuchuan0759",
          name: "吴川",
          pinyin: "Wuchuan",
          zip: "0759"
        },
        { label: "无棣Wudi0543", name: "无棣", pinyin: "Wudi", zip: "0543" },
        { label: "五河Wuhe0552", name: "五河", pinyin: "Wuhe", zip: "0552" },
        { label: "芜湖Wuhu0553", name: "芜湖", pinyin: "Wuhu", zip: "0553" },
        { label: "五华Wuhua0753", name: "五华", pinyin: "Wuhua", zip: "0753" },
        { label: "无极Wuji0311", name: "无极", pinyin: "Wuji", zip: "0311" },
        {
          label: "吴江Wujiang0512",
          name: "吴江",
          pinyin: "Wujiang",
          zip: "0512"
        },
        {
          label: "五莲Wulian0633",
          name: "五莲",
          pinyin: "Wulian",
          zip: "0633"
        },
        { label: "武隆Wulong023", name: "武隆", pinyin: "Wulong", zip: "023" },
        {
          label: "武鸣Wuming0771",
          name: "武鸣",
          pinyin: "Wuming",
          zip: "0771"
        },
        {
          label: "武宁Wuning0792",
          name: "武宁",
          pinyin: "Wuning",
          zip: "0792"
        },
        {
          label: "武平Wuping0597",
          name: "武平",
          pinyin: "Wuping",
          zip: "0597"
        },
        { label: "巫山Wushan023", name: "巫山", pinyin: "Wushan", zip: "023" },
        { label: "无为Wuwei0565", name: "无为", pinyin: "Wuwei", zip: "0565" },
        { label: "巫溪Wuxi023", name: "巫溪", pinyin: "Wuxi", zip: "023" },
        { label: "武义Wuyi0579", name: "武义", pinyin: "Wuyi", zip: "0579" },
        {
          label: "武夷山Wuyishan0599",
          name: "武夷山",
          pinyin: "Wuyishan",
          zip: "0599"
        },
        {
          label: "婺源Wuyuan0793",
          name: "婺源",
          pinyin: "Wuyuan",
          zip: "0793"
        },
        { label: "武陟Wuzhi0391", name: "武陟", pinyin: "Wuzhi", zip: "0391" },
        {
          label: "峡江Xiajiang0796",
          name: "峡江",
          pinyin: "Xiajiang",
          zip: "0796"
        },
        {
          label: "夏津Xiajin0534",
          name: "夏津",
          pinyin: "Xiajin",
          zip: "0534"
        },
        {
          label: "象山Xiangshan0574",
          name: "象山",
          pinyin: "Xiangshan",
          zip: "0574"
        },
        {
          label: "响水Xiangshui0515",
          name: "响水",
          pinyin: "Xiangshui",
          zip: "0515"
        },
        {
          label: "仙居Xianju0576",
          name: "仙居",
          pinyin: "Xianju",
          zip: "0576"
        },
        {
          label: "仙游Xianyou0594",
          name: "仙游",
          pinyin: "Xianyou",
          zip: "0594"
        },
        {
          label: "萧县Xiaoxian0557",
          name: "萧县",
          pinyin: "Xiaoxian",
          zip: "0557"
        },
        { label: "霞浦Xiapu0593", name: "霞浦", pinyin: "Xiapu", zip: "0593" },
        {
          label: "息烽Xifeng0851",
          name: "息烽",
          pinyin: "Xifeng",
          zip: "0851"
        },
        { label: "新安Xinan0379", name: "新安", pinyin: "Xinan", zip: "0379" },
        {
          label: "新昌Xinchang0575",
          name: "新昌",
          pinyin: "Xinchang",
          zip: "0575"
        },
        {
          label: "信丰Xinfeng0797",
          name: "信丰",
          pinyin: "Xinfeng",
          zip: "0797"
        },
        {
          label: "新丰Xinfeng0751",
          name: "新丰",
          pinyin: "Xinfeng",
          zip: "0751"
        },
        {
          label: "新干Xingan0796",
          name: "新干",
          pinyin: "Xingan",
          zip: "0796"
        },
        {
          label: "兴国Xingguo0797",
          name: "兴国",
          pinyin: "Xingguo",
          zip: "0797"
        },
        {
          label: "兴化Xinghua0523",
          name: "兴化",
          pinyin: "Xinghua",
          zip: "0523"
        },
        {
          label: "兴宁Xingning0753",
          name: "兴宁",
          pinyin: "Xingning",
          zip: "0753"
        },
        {
          label: "行唐Xingtang0311",
          name: "行唐",
          pinyin: "Xingtang",
          zip: "0311"
        },
        {
          label: "荥阳Xingyang0371",
          name: "荥阳",
          pinyin: "Xingyang",
          zip: "0371"
        },
        {
          label: "星子Xingzi0792",
          name: "星子",
          pinyin: "Xingzi",
          zip: "0792"
        },
        { label: "辛集Xinji0311", name: "辛集", pinyin: "Xinji", zip: "0311" },
        {
          label: "新建Xinjian0791",
          name: "新建",
          pinyin: "Xinjian",
          zip: "0791"
        },
        { label: "新津Xinjin028", name: "新津", pinyin: "Xinjin", zip: "028" },
        { label: "新乐Xinle0311", name: "新乐", pinyin: "Xinle", zip: "0311" },
        { label: "新民Xinmin024", name: "新民", pinyin: "Xinmin", zip: "024" },
        { label: "新密Xinmi0371", name: "新密", pinyin: "Xinmi", zip: "0371" },
        {
          label: "新泰Xintai0538",
          name: "新泰",
          pinyin: "Xintai",
          zip: "0538"
        },
        {
          label: "新兴Xinxing0766",
          name: "新兴",
          pinyin: "Xinxing",
          zip: "0766"
        },
        { label: "新沂Xinyi0516", name: "新沂", pinyin: "Xinyi", zip: "0516" },
        { label: "信宜Xinyi0668", name: "信宜", pinyin: "Xinyi", zip: "0668" },
        {
          label: "新郑Xinzheng0371",
          name: "新郑",
          pinyin: "Xinzheng",
          zip: "0371"
        },
        {
          label: "休宁Xiuning0559",
          name: "休宁",
          pinyin: "Xiuning",
          zip: "0559"
        },
        {
          label: "秀山Xiushan023",
          name: "秀山",
          pinyin: "Xiushan",
          zip: "023"
        },
        {
          label: "修水Xiushui0792",
          name: "修水",
          pinyin: "Xiushui",
          zip: "0792"
        },
        {
          label: "修文Xiuwen0851",
          name: "修文",
          pinyin: "Xiuwen",
          zip: "0851"
        },
        { label: "修武Xiuwu0391", name: "修武", pinyin: "Xiuwu", zip: "0391" },
        {
          label: "寻甸Xundian0871",
          name: "寻甸",
          pinyin: "Xundian",
          zip: "0871"
        },
        { label: "寻乌Xunwu0797", name: "寻乌", pinyin: "Xunwu", zip: "0797" },
        { label: "徐闻Xuwen0759", name: "徐闻", pinyin: "Xuwen", zip: "0759" },
        { label: "盱眙Xuyi0517", name: "盱眙", pinyin: "Xuyi", zip: "0517" },
        {
          label: "阳春Yangchun0662",
          name: "阳春",
          pinyin: "Yangchun",
          zip: "0662"
        },
        {
          label: "阳东Yangdong0662",
          name: "阳东",
          pinyin: "Yangdong",
          zip: "0662"
        },
        {
          label: "阳谷Yanggu0635",
          name: "阳谷",
          pinyin: "Yanggu",
          zip: "0635"
        },
        {
          label: "阳山Yangshan0763",
          name: "阳山",
          pinyin: "Yangshan",
          zip: "0763"
        },
        {
          label: "阳信Yangxin0543",
          name: "阳信",
          pinyin: "Yangxin",
          zip: "0543"
        },
        {
          label: "阳西Yangxi0662",
          name: "阳西",
          pinyin: "Yangxi",
          zip: "0662"
        },
        {
          label: "扬中Yangzhong0511",
          name: "扬中",
          pinyin: "Yangzhong",
          zip: "0511"
        },
        {
          label: "偃师Yanshi0379",
          name: "偃师",
          pinyin: "Yanshi",
          zip: "0379"
        },
        {
          label: "延寿Yanshou0451",
          name: "延寿",
          pinyin: "Yanshou",
          zip: "0451"
        },
        {
          label: "兖州Yanzhou0537",
          name: "兖州",
          pinyin: "Yanzhou",
          zip: "0537"
        },
        {
          label: "伊川Yichuan0379",
          name: "伊川",
          pinyin: "Yichuan",
          zip: "0379"
        },
        {
          label: "宜丰Yifeng0795",
          name: "宜丰",
          pinyin: "Yifeng",
          zip: "0795"
        },
        {
          label: "宜黄Yihuang0794",
          name: "宜黄",
          pinyin: "Yihuang",
          zip: "0794"
        },
        { label: "依兰Yilan0451", name: "依兰", pinyin: "Yilan", zip: "0451" },
        {
          label: "宜良Yiliang0871",
          name: "宜良",
          pinyin: "Yiliang",
          zip: "0871"
        },
        { label: "沂南Yinan0539", name: "沂南", pinyin: "Yinan", zip: "0539" },
        {
          label: "英德Yingde0763",
          name: "英德",
          pinyin: "Yingde",
          zip: "0763"
        },
        {
          label: "颍上Yingshang0558",
          name: "颍上",
          pinyin: "Yingshang",
          zip: "0558"
        },
        {
          label: "沂水Yishui0539",
          name: "沂水",
          pinyin: "Yishui",
          zip: "0539"
        },
        { label: "义乌Yiwu0579", name: "义乌", pinyin: "Yiwu", zip: "0579" },
        {
          label: "黟县Yixian0559",
          name: "黟县",
          pinyin: "Yixian",
          zip: "0559"
        },
        {
          label: "宜兴Yixing0510",
          name: "宜兴",
          pinyin: "Yixing",
          zip: "0510"
        },
        {
          label: "弋阳Yiyang0793",
          name: "弋阳",
          pinyin: "Yiyang",
          zip: "0793"
        },
        {
          label: "宜阳Yiyang0379",
          name: "宜阳",
          pinyin: "Yiyang",
          zip: "0379"
        },
        {
          label: "沂源Yiyuan0533",
          name: "沂源",
          pinyin: "Yiyuan",
          zip: "0533"
        },
        {
          label: "仪征Yizheng0514",
          name: "仪征",
          pinyin: "Yizheng",
          zip: "0514"
        },
        {
          label: "永安Yongan0598",
          name: "永安",
          pinyin: "Yongan",
          zip: "0598"
        },
        {
          label: "永川Yongchuan023",
          name: "永川",
          pinyin: "Yongchuan",
          zip: "023"
        },
        {
          label: "永春Yongchun0595",
          name: "永春",
          pinyin: "Yongchun",
          zip: "0595"
        },
        {
          label: "永登Yongdeng0931",
          name: "永登",
          pinyin: "Yongdeng",
          zip: "0931"
        },
        {
          label: "永定Yongding0597",
          name: "永定",
          pinyin: "Yongding",
          zip: "0597"
        },
        {
          label: "永丰Yongfeng0796",
          name: "永丰",
          pinyin: "Yongfeng",
          zip: "0796"
        },
        {
          label: "永吉Yongji0423",
          name: "永吉",
          pinyin: "Yongji",
          zip: "0423"
        },
        {
          label: "永嘉Yongjia0577",
          name: "永嘉",
          pinyin: "Yongjia",
          zip: "0577"
        },
        {
          label: "永康Yongkang0579",
          name: "永康",
          pinyin: "Yongkang",
          zip: "0579"
        },
        {
          label: "邕宁Yongning0771",
          name: "邕宁",
          pinyin: "Yongning",
          zip: "0771"
        },
        {
          label: "永泰Yongtai0591",
          name: "永泰",
          pinyin: "Yongtai",
          zip: "0591"
        },
        {
          label: "永新Yongxin0796",
          name: "永新",
          pinyin: "Yongxin",
          zip: "0796"
        },
        {
          label: "永修Yongxiu0792",
          name: "永修",
          pinyin: "Yongxiu",
          zip: "0792"
        },
        { label: "尤溪Youxi0598", name: "尤溪", pinyin: "Youxi", zip: "0598" },
        {
          label: "酉阳Youyang023",
          name: "酉阳",
          pinyin: "Youyang",
          zip: "023"
        },
        {
          label: "元氏Yuanshi0311",
          name: "元氏",
          pinyin: "Yuanshi",
          zip: "0311"
        },
        {
          label: "禹城Yucheng0534",
          name: "禹城",
          pinyin: "Yucheng",
          zip: "0534"
        },
        { label: "于都Yudu0797", name: "于都", pinyin: "Yudu", zip: "0797" },
        { label: "岳西Yuexi0556", name: "岳西", pinyin: "Yuexi", zip: "0556" },
        { label: "余干Yugan0793", name: "余干", pinyin: "Yugan", zip: "0793" },
        {
          label: "玉环Yuhuan0576",
          name: "玉环",
          pinyin: "Yuhuan",
          zip: "0576"
        },
        {
          label: "余江Yujiang0701",
          name: "余江",
          pinyin: "Yujiang",
          zip: "0701"
        },
        { label: "郁南Yunan0766", name: "郁南", pinyin: "Yunan", zip: "0766" },
        { label: "云安Yunan0766", name: "云安", pinyin: "Yunan", zip: "0766" },
        {
          label: "郓城Yuncheng0530",
          name: "郓城",
          pinyin: "Yuncheng",
          zip: "0530"
        },
        { label: "云和Yunhe0578", name: "云和", pinyin: "Yunhe", zip: "0578" },
        {
          label: "云霄Yunxiao0596",
          name: "云霄",
          pinyin: "Yunxiao",
          zip: "0596"
        },
        {
          label: "云阳Yunyang023",
          name: "云阳",
          pinyin: "Yunyang",
          zip: "023"
        },
        {
          label: "玉山Yushan0793",
          name: "玉山",
          pinyin: "Yushan",
          zip: "0793"
        },
        { label: "榆树Yushu0431", name: "榆树", pinyin: "Yushu", zip: "0431" },
        { label: "鱼台Yutai0537", name: "鱼台", pinyin: "Yutai", zip: "0537" },
        {
          label: "玉田Yutian0315",
          name: "玉田",
          pinyin: "Yutian",
          zip: "0315"
        },
        { label: "余姚Yuyao0574", name: "余姚", pinyin: "Yuyao", zip: "0574" },
        {
          label: "榆中Yuzhong0931",
          name: "榆中",
          pinyin: "Yuzhong",
          zip: "0931"
        },
        {
          label: "赞皇Zanhuang0311",
          name: "赞皇",
          pinyin: "Zanhuang",
          zip: "0311"
        },
        {
          label: "增城Zengcheng020",
          name: "增城",
          pinyin: "Zengcheng",
          zip: "020"
        },
        {
          label: "张家港Zhangjiagang0512",
          name: "张家港",
          pinyin: "Zhangjiagang",
          zip: "0512"
        },
        {
          label: "漳平Zhangping0597",
          name: "漳平",
          pinyin: "Zhangping",
          zip: "0597"
        },
        {
          label: "漳浦Zhangpu0596",
          name: "漳浦",
          pinyin: "Zhangpu",
          zip: "0596"
        },
        {
          label: "章丘Zhangqiu0531",
          name: "章丘",
          pinyin: "Zhangqiu",
          zip: "0531"
        },
        {
          label: "樟树Zhangshu0795",
          name: "樟树",
          pinyin: "Zhangshu",
          zip: "0795"
        },
        {
          label: "沾化Zhanhua0543",
          name: "沾化",
          pinyin: "Zhanhua",
          zip: "0543"
        },
        {
          label: "赵县Zhaoxian0311",
          name: "赵县",
          pinyin: "Zhaoxian",
          zip: "0311"
        },
        {
          label: "招远Zhaoyuan0535",
          name: "招远",
          pinyin: "Zhaoyuan",
          zip: "0535"
        },
        {
          label: "正定Zhengding0311",
          name: "正定",
          pinyin: "Zhengding",
          zip: "0311"
        },
        {
          label: "政和Zhenghe0599",
          name: "政和",
          pinyin: "Zhenghe",
          zip: "0599"
        },
        {
          label: "柘荣Zherong0593",
          name: "柘荣",
          pinyin: "Zherong",
          zip: "0593"
        },
        {
          label: "中牟Zhongmou0371",
          name: "中牟",
          pinyin: "Zhongmou",
          zip: "0371"
        },
        {
          label: "忠县Zhongxian023",
          name: "忠县",
          pinyin: "Zhongxian",
          zip: "023"
        },
        {
          label: "周宁Zhouning0593",
          name: "周宁",
          pinyin: "Zhouning",
          zip: "0593"
        },
        {
          label: "周至Zhouzhi029",
          name: "周至",
          pinyin: "Zhouzhi",
          zip: "029"
        },
        {
          label: "庄河Zhuanghe0411",
          name: "庄河",
          pinyin: "Zhuanghe",
          zip: "0411"
        },
        {
          label: "诸城Zhucheng0536",
          name: "诸城",
          pinyin: "Zhucheng",
          zip: "0536"
        },
        { label: "诸暨Zhuji0575", name: "诸暨", pinyin: "Zhuji", zip: "0575" },
        { label: "紫金Zijin0762", name: "紫金", pinyin: "Zijin", zip: "0762" },
        { label: "资溪Zixi0794", name: "资溪", pinyin: "Zixi", zip: "0794" },
        {
          label: "邹城Zoucheng0537",
          name: "邹城",
          pinyin: "Zoucheng",
          zip: "0537"
        },
        {
          label: "邹平Zouping0543",
          name: "邹平",
          pinyin: "Zouping",
          zip: "0543"
        },
        { label: "遵化Zunhua0315", name: "遵化", pinyin: "Zunhua", zip: "0315" }
      ];
    },
    "0PT1": function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            [
              e("div", {
                ref: "chart",
                staticClass: "chart",
                staticStyle: { width: "100%" },
                style: { height: n.height + "px" }
              }),
              n._v(" "),
              n.loading
                ? e(
                    "Spin",
                    { attrs: { size: "large", fix: "" } },
                    [
                      e("Icon", {
                        staticClass: "demo-spin-icon-load",
                        attrs: { type: "load-c", size: "18" }
                      }),
                      n._v(" "),
                      e("div", [n._v("加载中")])
                    ],
                    1
                  )
                : n._e()
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "0ilG": function(n, i) {},
    "1Vx0": function(n, i, e) {
      "use strict";
      var a = e("mvHQ"),
        t = e.n(a),
        o = e("oaOm");
      i.a = {
        data: function() {
          var n = this;
          return {
            height: document.documentElement.clientHeight - 350,
            prefix: "@sjtu.edu.cn",
            form: {
              name: "qizhwei",
              date: [],
              type: "imap_login",
              page: 1,
              size: 20
            },
            rules: {
              name: [{ required: !0, message: "必填项", trigger: "blur" }]
            },
            data: [],
            total: 0,
            loading: !1,
            columns: [
              {
                title: "#",
                width: 60,
                render: function(i, e) {
                  return i("span", e.index + 20 * (n.form.page - 1) + 1);
                }
              },
              { title: "地址", key: "name" },
              { title: "系统IP（oip）", key: "oip" },
              { title: "via", key: "via" },
              { title: "city", key: "city" },
              { title: "country", key: "country" },
              {
                title: "操作时间（timestamp）",
                render: function(n, i) {
                  var e = i.row;
                  return n(
                    "span",
                    new Date(1e3 * e.timestamp).Format("yyyy-MM-dd hh:ss")
                  );
                }
              }
            ],
            actions: [
              { value: "imap_login", name: "imap_login" },
              { value: "imap_delete", name: "imap_delete" },
              { value: "pop3_login", name: "pop3_login" },
              { value: "pop3_delete", name: "pop3_delete" }
            ]
          };
        },
        methods: {
          onSearch: function() {
            var n = this;
            this.loading ||
              this.$refs.form.validate(function(i) {
                i && n.getData();
              });
          },
          onReset: function() {
            (this.form.name = ""),
              (this.form.date = []),
              (this.form.type = "authlogin"),
              (this.form.page = 1),
              (this.data = []);
          },
          getData: function() {
            var n = this;
            this.loading = !0;
            var i = JSON.parse(t()(this.form));
            i.name += this.prefix;
            var e = this.getDate(this.form.date);
            e.begin && ((i.begin = e.begin), (i.end = e.end)),
              Object(o.q)(i).then(function(i) {
                var e = i.data;
                (n.total = e.count), (n.data = e.data), (n.loading = !1);
              });
          },
          getDate: function(n) {
            return 2 == n.length
              ? { begin: n[0].valueOf() / 1e3, end: n[1].valueOf() / 1e3 }
              : {};
          },
          handleCurrentChange: function(n) {
            (this.form.page = n), this.getData();
          }
        },
        mounted: function() {}
      };
    },
    "1Yic": function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticStyle: { color: "#fff", padding: "0 10px" } },
            [
              e("Input", {
                attrs: {
                  type: "textarea",
                  autosize: { minRows: 10 },
                  placeholder: "请输入"
                },
                model: {
                  value: n.ips,
                  callback: function(i) {
                    n.ips = i;
                  },
                  expression: "ips"
                }
              }),
              n._v(" "),
              e(
                "div",
                {
                  staticStyle: { padding: "10px", "text-align": "right" },
                  on: { click: n.onSave }
                },
                [e("Button", { attrs: { type: "primary" } }, [n._v("保存")])],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "1sUg": function(n, i) {},
    "30m8": function(n, i, e) {
      "use strict";
      function a(n) {
        e("ca1m");
      }
      var t = e("Umf/"),
        o = e("UaKG"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-3d57464d", null);
      i.a = s.exports;
    },
    "4C9/": function(n, i, e) {
      "use strict";
      function a(n) {
        e("F2Ux");
      }
      var t = e("/Lvf"),
        o = e("1Yic"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    "5Eu/": function(n, i, e) {
      "use strict";
      var a = e("30m8"),
        t = e("oaOm");
      i.a = {
        data: function() {
          return { height: "200px", type: "hour", domains: [] };
        },
        computed: { list: function() {} },
        methods: {
          onSelect: function(n) {
            this.type = n;
          },
          render: function() {
            var n = this;
            Object(t.e)().then(function(i) {
              n.domains = i.data.domain;
            });
          }
        },
        components: { bChart: a.a },
        created: function() {
          var n = document.documentElement.clientHeight / 2;
          (this.height = n < 220 ? 220 : n), this.render();
        }
      };
    },
    "5e79": function(n, i, e) {
      "use strict";
      var a = e("Dd8w"),
        t = e.n(a),
        o = e("oaOm"),
        l = e("JkAm");
      i.a = {
        store: ["modes"],
        data: function() {
          var n = this;
          return {
            modelTitle: "新增指标",
            columns: [
              { type: "index", width: 60, align: "center" },
              { title: "名称", key: "Name" },
              { title: "查询条件", key: "Query" },
              {
                title: "状态",
                key: "Visible",
                width: 80,
                align: "center",
                render: function(n, i) {
                  return n("div", [
                    i.row.Visible
                      ? n("Icon", {
                          props: { type: "checkmark-circled" },
                          style: { color: "#2d8cf0" }
                        })
                      : n("Icon", {
                          props: { type: "close-circled" },
                          style: { color: "red" }
                        })
                  ]);
                }
              },
              {
                title: "创建时间",
                key: "Created",
                width: 180,
                align: "center",
                render: function(n, i) {
                  return n("div", [
                    n("Icon", { props: { type: "clock" } }),
                    n(
                      "span",
                      new Date(1e3 * i.row.Created).Format(" yyyy-MM-dd hh:mm")
                    )
                  ]);
                }
              },
              { title: "排序", key: "Index", width: 80, align: "center" },
              {
                title: "操作",
                key: "action",
                width: 200,
                align: "center",
                render: function(i, e) {
                  return i("div", [
                    i(
                      "Button",
                      {
                        props: { size: "small" },
                        style: { marginRight: "5px" },
                        on: {
                          click: function() {
                            n.onTest(e.row);
                          }
                        }
                      },
                      "测试"
                    ),
                    i(
                      "Button",
                      {
                        props: { type: "primary", size: "small" },
                        style: { marginRight: "5px" },
                        on: {
                          click: function() {
                            n.onEdit(e.row);
                          }
                        }
                      },
                      "编辑"
                    ),
                    i(
                      "Button",
                      {
                        props: { type: "error", size: "small" },
                        on: {
                          click: function() {
                            n.onRemove(e.row);
                          }
                        }
                      },
                      "删除"
                    )
                  ]);
                }
              }
            ],
            show: !1,
            loading: !1,
            table_loading: !1,
            model: { Id: "", Name: "", Query: "", Index: 0, Visible: !0 },
            ruleValidate: {
              Name: [{ required: !0, message: "必填", trigger: "blur" }],
              Query: [{ required: !0, message: "必填", trigger: "blur" }]
            },
            testModal: !1,
            testMode: { query: "", type: "24h", height: 300, name: "" }
          };
        },
        computed: {
          list: function() {
            return this.modes
              ? this.modes
                  .sort(function(n, i) {
                    return i.Created - n.Created;
                  })
                  .sort(function(n, i) {
                    return i.Index - n.Index;
                  })
              : [];
          }
        },
        methods: {
          onAdd: function() {
            (this.modelTitle = "新增指标"), (this.show = !0);
          },
          onSave: function() {
            var n = this;
            this.$refs.form.validate(function(i) {
              i &&
                ((n.loading = !0),
                n.model.Id
                  ? Object(o.t)(n.model).then(function(i) {
                      0 == i.Code &&
                        ((n.loading = !1),
                        (n.show = !1),
                        n.$Message.success("更新指标成功！"),
                        n.refresh());
                    })
                  : Object(o.n)(n.model).then(function(i) {
                      0 == i.Code &&
                        ((n.loading = !1),
                        (n.show = !1),
                        n.$Message.success("新增指标成功！"),
                        n.refresh());
                    }));
            });
          },
          onCancel: function() {
            (this.show = !1), this.$refs.form.resetFields();
          },
          refresh: function() {
            var n = this;
            (this.table_loading = !0),
              Object(o.i)().then(function(i) {
                0 == i.Code && (n.modes = i.Response), (n.table_loading = !1);
              });
          },
          onEdit: function(n) {
            (this.modelTitle = "编辑指标"),
              (this.model = t()({}, n)),
              (this.show = !0);
          },
          onRemove: function(n) {
            var i = this;
            this.$Modal.confirm({
              title: "提示",
              content:
                '确定要删除指标："<strong style="color:red">' +
                n.Name +
                '</strong>"？',
              onOk: function() {
                Object(o.a)(n.Id).then(function(n) {
                  0 == n.Code && (i.$Message.success("删除成功"), i.refresh());
                });
              },
              onCancel: function() {}
            });
          },
          onTest: function(n) {
            (this.testMode.name = n.Name),
              (this.testMode.query = n.Query),
              (this.testModal = !0);
          },
          onSelect: function(n) {
            this.testMode.type = n;
          }
        },
        components: { vChart: l.a }
      };
    },
    "7MCe": function(n, i) {},
    "8dpG": function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            [
              e("div", { staticClass: "mode-change" }, [
                e(
                  "div",
                  { staticStyle: { float: "right" } },
                  [
                    e(
                      "ButtonGroup",
                      [
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "hour" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("hour");
                              }
                            }
                          },
                          [n._v("最近1小时")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "day" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("day");
                              }
                            }
                          },
                          [n._v("最近24小时")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "week" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("week");
                              }
                            }
                          },
                          [n._v("最近7天")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "month" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("month");
                              }
                            }
                          },
                          [n._v("最近30天")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              n._v(" "),
              e(
                "Row",
                n._l(n.domains, function(i, a) {
                  return e(
                    "Col",
                    {
                      key: a,
                      staticStyle: { padding: "5px" },
                      attrs: { lg: 8, md: 8, sm: 12, xs: 24 }
                    },
                    [
                      e(
                        "div",
                        { staticClass: "chart-box" },
                        [
                          e("b-chart", {
                            attrs: { type: n.type, domain: i, height: n.height }
                          })
                        ],
                        1
                      )
                    ]
                  );
                }),
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "9pr+": function(n, i, e) {
      "use strict";
      var a = e("Dd8w"),
        t = e.n(a),
        o = e("oaOm"),
        l = e("JkAm");
      i.a = {
        data: function() {
          var n = this;
          return {
            users: [],
            modelTitle: "新增用户",
            columns: [
              { type: "index", width: 60, align: "center" },
              { title: "名称", key: "Name" },
              { title: "用户名", key: "UserName" },
              { title: "密码", key: "Password" },
              {
                title: "状态",
                key: "Visible",
                width: 80,
                align: "center",
                render: function(n, i) {
                  return n("div", [
                    i.row.Visible
                      ? n("Icon", {
                          props: { type: "checkmark-circled" },
                          style: { color: "#2d8cf0" }
                        })
                      : n("Icon", {
                          props: { type: "close-circled" },
                          style: { color: "red" }
                        })
                  ]);
                }
              },
              {
                title: "创建时间",
                key: "Created",
                width: 180,
                align: "center",
                render: function(n, i) {
                  return n("div", [
                    n("Icon", { props: { type: "clock" } }),
                    n(
                      "span",
                      new Date(1e3 * i.row.Created).Format(" yyyy-MM-dd hh:mm")
                    )
                  ]);
                }
              },
              {
                title: "操作",
                key: "action",
                width: 200,
                align: "center",
                render: function(i, e) {
                  return i("div", [
                    i(
                      "Button",
                      {
                        props: { type: "primary", size: "small" },
                        style: { marginRight: "5px" },
                        on: {
                          click: function() {
                            n.onEdit(e.row);
                          }
                        }
                      },
                      "编辑"
                    ),
                    i(
                      "Button",
                      {
                        props: { type: "error", size: "small" },
                        on: {
                          click: function() {
                            n.onRemove(e.row);
                          }
                        }
                      },
                      "删除"
                    )
                  ]);
                }
              }
            ],
            show: !1,
            loading: !1,
            table_loading: !1,
            model: {
              Id: "",
              Name: "",
              UserName: "",
              Password: "",
              Visible: !0
            },
            ruleValidate: {
              Name: [{ required: !0, message: "必填", trigger: "blur" }],
              UserName: [{ required: !0, message: "必填", trigger: "blur" }],
              Password: [{ required: !0, message: "必填", trigger: "blur" }]
            },
            testModal: !1,
            testMode: { query: "", type: "24h", height: 300, name: "" },
            page: 0,
            size: 20,
            total: 0
          };
        },
        computed: {
          list: function() {
            return this.users
              ? this.users
                  .sort(function(n, i) {
                    return i.Created - n.Created;
                  })
                  .sort(function(n, i) {
                    return i.Index - n.Index;
                  })
              : [];
          }
        },
        methods: {
          onAdd: function() {
            this.$refs.form.resetFields(),
              (this.modelTitle = "新增用户"),
              (this.show = !0);
          },
          onSave: function() {
            var n = this;
            this.$refs.form.validate(function(i) {
              i &&
                ((n.loading = !0),
                n.model.Id
                  ? Object(o.u)(n.model).then(function(i) {
                      0 == i.Code &&
                        ((n.loading = !1),
                        (n.show = !1),
                        n.$Message.success("更新用户成功！"),
                        n.refresh());
                    })
                  : Object(o.o)(n.model).then(function(i) {
                      0 == i.Code &&
                        ((n.loading = !1),
                        (n.show = !1),
                        n.$Message.success("新增用户成功！"),
                        n.refresh());
                    }));
            });
          },
          onCancel: function() {
            (this.show = !1), this.$refs.form.resetFields();
          },
          refresh: function() {
            var n = this;
            (this.table_loading = !0),
              Object(o.k)(this.page * this.size).then(function(i) {
                0 == i.Code &&
                  ((n.users = i.Response.Data),
                  (n.page = i.Response.Page),
                  (n.total = i.Response.Total)),
                  (n.table_loading = !1);
              });
          },
          onEdit: function(n) {
            (this.modelTitle = "编辑用户"),
              (this.model = t()({}, n)),
              (this.show = !0);
          },
          onRemove: function(n) {
            var i = this;
            this.$Modal.confirm({
              title: "提示",
              content:
                '确定要删除用户："<strong style="color:red">' +
                n.Name +
                '</strong>"？',
              onOk: function() {
                Object(o.b)(n.Id).then(function(n) {
                  0 == n.Code && (i.$Message.success("删除成功"), i.refresh());
                });
              },
              onCancel: function() {}
            });
          },
          onTest: function(n) {
            (this.testMode.name = n.Name),
              (this.testMode.query = n.Query),
              (this.testModal = !0);
          },
          onSelect: function(n) {
            this.testMode.type = n;
          },
          currentChange: function(n) {
            (this.page = n), this.refresh();
          }
        },
        mounted: function() {
          this.refresh();
        },
        components: { vChart: l.a }
      };
    },
    AdlV: function(n, i) {},
    AqnQ: function(n, i, e) {
      "use strict";
      e("7+uW").default.filter("formatNum", function(n) {
        if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(n)) return "-";
        for (
          var i = RegExp.$1,
            e = RegExp.$2,
            a = RegExp.$3,
            t = new RegExp().compile("(\\d)(\\d{3})(,|$)");
          t.test(e);

        )
          e = e.replace(t, "$1,$2$3");
        return i + "" + e + a;
      });
    },
    BWw3: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            [
              e(
                "div",
                { staticClass: "mode-select" },
                [
                  e(
                    "Select",
                    {
                      on: { "on-change": n.onModeChange },
                      model: {
                        value: n.mode,
                        callback: function(i) {
                          n.mode = i;
                        },
                        expression: "mode"
                      }
                    },
                    [
                      e("Option", { attrs: { value: "all" } }, [n._v("全部")]),
                      n._v(" "),
                      n._l(n.list, function(i) {
                        return i.Visible
                          ? e(
                              "Option",
                              { key: i.Name, attrs: { value: i.Query } },
                              [n._v(n._s(i.Name))]
                            )
                          : n._e();
                      })
                    ],
                    2
                  )
                ],
                1
              ),
              n._v(" "),
              e(
                "Row",
                [
                  e("Col", { attrs: { span: "6" } }, [
                    e("div", { staticClass: "base-block" }, [
                      e(
                        "div",
                        { staticClass: "content" },
                        [
                          e("h5", [n._v("最近24小时")]),
                          n._v(" "),
                          e("p", [
                            n._v(n._s(n._f("formatNum")(n.times.last24h)))
                          ]),
                          n._v(" "),
                          null == n.times.last24h
                            ? e(
                                "Spin",
                                { attrs: { size: "large", fix: "" } },
                                [
                                  e("Icon", {
                                    staticClass: "demo-spin-icon-load",
                                    attrs: { type: "load-c", size: "18" }
                                  }),
                                  n._v(" "),
                                  e("div", [n._v("加载中")])
                                ],
                                1
                              )
                            : n._e()
                        ],
                        1
                      )
                    ])
                  ]),
                  n._v(" "),
                  e("Col", { attrs: { span: "6" } }, [
                    e("div", { staticClass: "base-block" }, [
                      e(
                        "div",
                        { staticClass: "content" },
                        [
                          e("h5", [n._v("最近7天")]),
                          n._v(" "),
                          e("p", [
                            n._v(n._s(n._f("formatNum")(n.times.last7d)))
                          ]),
                          n._v(" "),
                          null == n.times.last7d
                            ? e(
                                "Spin",
                                { attrs: { size: "large", fix: "" } },
                                [
                                  e("Icon", {
                                    staticClass: "demo-spin-icon-load",
                                    attrs: { type: "load-c", size: "18" }
                                  }),
                                  n._v(" "),
                                  e("div", [n._v("加载中")])
                                ],
                                1
                              )
                            : n._e()
                        ],
                        1
                      )
                    ])
                  ]),
                  n._v(" "),
                  e("Col", { attrs: { span: "6" } }, [
                    e("div", { staticClass: "base-block" }, [
                      e(
                        "div",
                        { staticClass: "content" },
                        [
                          e("h5", [n._v("最近30天")]),
                          n._v(" "),
                          e("p", [
                            n._v(n._s(n._f("formatNum")(n.times.last30d)))
                          ]),
                          n._v(" "),
                          null == n.times.last30d
                            ? e(
                                "Spin",
                                { attrs: { size: "large", fix: "" } },
                                [
                                  e("Icon", {
                                    staticClass: "demo-spin-icon-load",
                                    attrs: { type: "load-c", size: "18" }
                                  }),
                                  n._v(" "),
                                  e("div", [n._v("加载中")])
                                ],
                                1
                              )
                            : n._e()
                        ],
                        1
                      )
                    ])
                  ]),
                  n._v(" "),
                  e("Col", { attrs: { span: "6" } }, [
                    e("div", { staticClass: "base-block" }, [
                      e(
                        "div",
                        { staticClass: "content" },
                        [
                          e("h5", [n._v("全部")]),
                          n._v(" "),
                          e("p", [n._v(n._s(n._f("formatNum")(n.times.all)))]),
                          n._v(" "),
                          null == n.times.all
                            ? e(
                                "Spin",
                                { attrs: { size: "large", fix: "" } },
                                [
                                  e("Icon", {
                                    staticClass: "demo-spin-icon-load",
                                    attrs: { type: "load-c", size: "18" }
                                  }),
                                  n._v(" "),
                                  e("div", [n._v("加载中")])
                                ],
                                1
                              )
                            : n._e()
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              ),
              n._v(" "),
              e(
                "Row",
                { staticStyle: { "margin-top": "15px" } },
                [
                  e("Col", [
                    e("div", { staticClass: "base-block" }, [
                      e(
                        "div",
                        { staticClass: "content" },
                        [
                          e("h5", [
                            n._v("实时数据\n\n          "),
                            e(
                              "div",
                              { staticStyle: { float: "right" } },
                              [
                                e(
                                  "ButtonGroup",
                                  { attrs: { size: "small" } },
                                  [
                                    e(
                                      "Button",
                                      {
                                        attrs: {
                                          type:
                                            "m" == n.type
                                              ? "primary"
                                              : "default"
                                        },
                                        on: {
                                          click: function(i) {
                                            n.onSelect("m");
                                          }
                                        }
                                      },
                                      [n._v("分")]
                                    ),
                                    n._v(" "),
                                    e(
                                      "Button",
                                      {
                                        attrs: {
                                          type:
                                            "d" == n.type
                                              ? "primary"
                                              : "default"
                                        },
                                        on: {
                                          click: function(i) {
                                            n.onSelect("d");
                                          }
                                        }
                                      },
                                      [n._v("日")]
                                    ),
                                    n._v(" "),
                                    e(
                                      "Button",
                                      {
                                        attrs: {
                                          type:
                                            "M" == n.type
                                              ? "primary"
                                              : "default"
                                        },
                                        on: {
                                          click: function(i) {
                                            n.onSelect("M");
                                          }
                                        }
                                      },
                                      [n._v("月")]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ]),
                          n._v(" "),
                          e("div", { attrs: { id: "history-chart" } }),
                          n._v(" "),
                          n.loading
                            ? e(
                                "Spin",
                                { attrs: { size: "large", fix: "" } },
                                [
                                  e("Icon", {
                                    staticClass: "demo-spin-icon-load",
                                    attrs: { type: "load-c", size: "18" }
                                  }),
                                  n._v(" "),
                                  e("div", [n._v("加载中")])
                                ],
                                1
                              )
                            : n._e()
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "Bg/3": function(n, i, e) {
      "use strict";
      var a = e("oaOm");
      i.a = {
        props: {
          email: { type: String, default: "" },
          date: {
            type: Array,
            default: function() {
              return [];
            }
          }
        },
        name: "Receive",
        data: function() {
          return {
            columns: [
              {
                title: "#",
                width: 60,
                render: function(n, i) {
                  var e = i.row;
                  return n("span", e.index + 20 * (e.page - 1) + 1);
                }
              },
              { title: "邮件ID", key: "messageId" },
              { title: "对方地址", key: "toAddr" },
              {
                title: "发件时间",
                render: function(n, i) {
                  var e = i.row;
                  return n(
                    "span",
                    new Date(1e3 * e.timestamp + 288e5).Format(
                      "yyyy-MM-dd hh:mm:ss"
                    )
                  );
                }
              },
              {
                title: "发件IP",
                render: function(n, i) {
                  return n("span", i.row.ipAddr);
                }
              },
              {
                title: "邮件大小(KB)",
                key: "mailSize",
                render: function(n, i) {
                  return n("span", (i.row.mailSize / 1e3).toFixed(2));
                }
              }
            ],
            loading: !1,
            data: [],
            total: 0,
            form: { page: 1, fromAddr: "", begin: void 0, end: void 0 },
            height: document.documentElement.clientHeight
          };
        },
        methods: {
          render: function() {
            this.init(), this.getData();
          },
          init: function() {
            this.form = { page: 1, fromAddr: "", begin: void 0, end: void 0 };
          },
          onCurrentChange: function(n) {
            (this.form.page = n), this.getData();
          },
          getData: function() {
            var n = this;
            if (
              ((this.loading = !0),
              this.email && (this.form.fromAddr = this.email),
              this.date)
            ) {
              var i = this.getDate(this.date);
              0 != i[0] &&
                0 != i[1] &&
                ((this.form.begin = i[0] - 28800),
                (this.form.end = i[1] - 28800));
            }
            Object(a.r)(this.form).then(function(i) {
              var e = i.data;
              (n.total = e.count),
                (n.data = e.data.map(function(i, e) {
                  return (i.index = e), (i.page = n.form.page), i;
                })),
                (n.loading = !1);
            });
          },
          getDate: function(n) {
            return 2 == n.length
              ? [n[0].valueOf() / 1e3, n[1].valueOf() / 1e3]
              : [];
          }
        }
      };
    },
    "C/E/": function(n, i, e) {
      "use strict";
      function a(n) {
        e("0ilG");
      }
      var t = e("OF+o"),
        o = e("Thy2"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    CLwM: function(n, i, e) {
      "use strict";
      function a(n) {
        e("YRHF");
      }
      var t = e("5Eu/"),
        o = e("8dpG"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-691af114", null);
      i.a = s.exports;
    },
    D5Sc: function(n, i) {},
    DDgV: function(n, i, e) {
      "use strict";
      function a(n) {
        e("q2q/");
      }
      var t = e("hNIV"),
        o = e("PetY"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-4d08b96e", null);
      i.a = s.exports;
    },
    DX7h: function(n, i, e) {
      "use strict";
      var a = e("oaOm"),
        t = e("XLwt"),
        o = e.n(t);
      i.a = {
        props: ["query", "name", "height", "type"],
        data: function() {
          return { loading: !0 };
        },
        methods: {
          renderChart: function(n) {
            var i = {
              title: { text: this.name, textStyle: { color: "#fff" } },
              color: ["#677cd5"],
              backgroundColor: "rgba(255,255,255,0)",
              tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
              grid: { left: "3%", bottom: "3%", containLabel: !0 },
              xAxis: [
                {
                  type: "category",
                  data: n.map(function(n) {
                    return n.key_as_string;
                  }),
                  axisTick: { alignWithLabel: !0 },
                  axisLabel: { color: "#fff" },
                  axisLine: { lineStyle: { color: "#ccc" } }
                }
              ],
              yAxis: [{ type: "value", axisLabel: { color: "#fff" } }],
              series: [
                {
                  name: "日志数量",
                  type: "bar",
                  barWidth: "60%",
                  label: { normal: { show: !1, position: "inside" } },
                  data: n.map(function(n) {
                    return n.doc_count;
                  }),
                  markPoint: {
                    data: [
                      { type: "max", name: "最大值" },
                      { type: "min", name: "最小值" }
                    ]
                  }
                }
              ]
            };
            this.chart || (this.chart = o.a.init(this.$refs.chart)),
              this.chart.setOption(i),
              (this.loading = !1);
          },
          getHistoryParams: function(n) {
            var i = "1h",
              e = "YYYY-MM-dd",
              a = void 0;
            switch (n) {
              case "1h":
                (i = "1h"), (e = "HH:mm:ss"), (a = "60s");
                break;
              case "24h":
                (i = "24h"), (e = "HH:mm:ss"), (a = "30m");
                break;
              case "7d":
                (i = "7d"), (e = "YYYY-MM HH:mm"), (a = "3h");
                break;
              case "30d":
                (i = "30d"), (e = "YYYY-MM-dd"), (a = "1d");
                break;
              case "12m":
                (i = "12M"), (e = "YYYY-MM"), (a = "1M");
                break;
              case "all":
                (e = "YYYY-MM"), (a = "1M");
            }
            var t = {
              size: 0,
              query: {
                bool: {
                  must: [
                    { range: { "@timestamp": { gte: "now-" + i, lte: "now" } } }
                  ]
                }
              },
              aggs: {
                mail: {
                  date_histogram: {
                    field: "@timestamp",
                    interval: a,
                    format: e,
                    min_doc_count: 0,
                    time_zone: "+08:00"
                  }
                }
              }
            };
            return (
              "all" != this.query &&
                t.query.bool.must.push({
                  query_string: { query: this.query, all_fields: !0 }
                }),
              "all" == n && delete t.query,
              t
            );
          },
          render: function() {
            var n = this;
            this.loading = !0;
            var i = this.getHistoryParams(this.type);
            Object(a.p)(i).then(function(i) {
              var e = i.aggregations.mail.buckets,
                a = void 0 === e ? [] : e;
              n.renderChart(a);
            });
          }
        },
        watch: {
          type: function(n) {
            this.render();
          }
        },
        mounted: function() {
          this.render();
        }
      };
    },
    Doo6: function(n, i) {},
    EKgW: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            [
              e("Table", {
                attrs: { loading: n.loading, columns: n.columns, data: n.data }
              }),
              n._v(" "),
              e(
                "div",
                { staticStyle: { "text-align": "right", padding: "10px 0" } },
                [
                  e("Page", {
                    attrs: {
                      total: n.total,
                      "page-size": n.form.size,
                      current: n.form.page
                    },
                    on: {
                      "on-change": n.onCurrentChange,
                      "update:current": function(i) {
                        n.$set(n.form, "page", i);
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    F2Ux: function(n, i) {},
    FwSB: function(n, i, e) {
      "use strict";
      var a = e("JkAm");
      i.a = {
        store: ["modes"],
        data: function() {
          return { height: "200px", type: "1h" };
        },
        computed: {
          list: function() {
            return this.modes
              ? this.modes
                  .sort(function(n, i) {
                    return i.Created - n.Created;
                  })
                  .sort(function(n, i) {
                    return i.Index - n.Index;
                  })
              : [];
          }
        },
        methods: {
          onSelect: function(n) {
            this.type = n;
          }
        },
        components: { vChart: a.a },
        created: function() {
          var n = document.documentElement.clientHeight / 4;
          this.height = n < 220 ? 220 : n;
        }
      };
    },
    IcnI: function(n, i, e) {
      "use strict";
      i.a = {
        modes: [],
        login: !1,
        token: "",
        admin: !1,
        userId: "",
        username: ""
      };
    },
    JkAm: function(n, i, e) {
      "use strict";
      function a(n) {
        e("Doo6");
      }
      var t = e("DX7h"),
        o = e("0PT1"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-ae9aab64", null);
      i.a = s.exports;
    },
    K72n: function(n, i) {},
    M93x: function(n, i, e) {
      "use strict";
      function a(n) {
        e("K72n");
      }
      var t = e("xJD8"),
        o = e("mBwk"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-b89285ba", null);
      i.a = s.exports;
    },
    "MG9+": function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticStyle: { color: "#fff", padding: "0 10px" } },
            [
              e("Input", {
                attrs: {
                  type: "textarea",
                  autosize: { minRows: 10 },
                  placeholder: "请输入"
                },
                model: {
                  value: n.domain,
                  callback: function(i) {
                    n.domain = i;
                  },
                  expression: "domain"
                }
              }),
              n._v(" "),
              e(
                "div",
                {
                  staticStyle: { padding: "10px", "text-align": "right" },
                  on: { click: n.onSave }
                },
                [e("Button", { attrs: { type: "primary" } }, [n._v("保存")])],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    Mhrc: function(n, i, e) {
      "use strict";
      var a = e("bOdI"),
        t = e.n(a),
        o = e("oaOm");
      i.a = {
        data: function() {
          var n;
          return (
            (n = {
              form: { email: "aquarius@sjtu.edu.cn" },
              logs: [],
              loading: !1,
              rules: {
                email: [{ required: !0, message: "必填项", trigger: "blur" }]
              },
              columns: [
                {
                  title: "#",
                  width: 60,
                  render: function(n, i) {
                    return n("span", i.index + 20 * i.row.page + 1);
                  }
                },
                { title: "目标邮箱", key: "Mail" },
                { title: "操作用户", key: "UserName" },
                {
                  title: "操作时间",
                  render: function(n, i) {
                    var e = i.row;
                    return n(
                      "span",
                      new Date(1e3 * e.Created).Format("yyyy-MM-dd hh:mm:ss")
                    );
                  }
                },
                {
                  title: "操作指令",
                  render: function(n, i) {
                    var e = i.row,
                      a = "#666";
                    switch (e.Action) {
                      case "locked":
                        a = "red";
                        break;
                      case "active":
                        a = "green";
                    }
                    return n("span", { style: { color: a } }, e.Action);
                  }
                },
                { title: "结果", key: "Content" }
              ]
            }),
            t()(n, "loading", !1),
            t()(n, "page", 0),
            t()(n, "size", 20),
            t()(n, "total", 0),
            n
          );
        },
        methods: {
          onCmd: function(n) {
            var i = this;
            this.$refs.form.validate(function(e) {
              (i.loading = !0),
                e &&
                  Object(o.c)({ mail: i.form.email, action: n }).then(function(
                    n
                  ) {
                    (i.loading = !1),
                      0 == n.Code ? i.render() : alert(n.Response);
                  });
            });
          },
          render: function() {
            var n = this;
            (this.loading = !0),
              Object(o.h)(this.page * this.size).then(function(i) {
                (n.loading = !1),
                  0 == i.Code
                    ? ((n.logs = i.Response.Data),
                      n.logs.forEach(function(i) {
                        i.page = n.page;
                      }),
                      (n.total = i.Response.Total))
                    : alert(i.Response);
              });
          },
          currentChange: function(n) {
            (this.page = n), this.render();
          }
        },
        watch: {},
        mounted: function() {
          this.render();
        }
      };
    },
    N38G: function(n, i, e) {
      "use strict";
      function a(n) {
        e("AdlV");
      }
      var t = e("9pr+"),
        o = e("/IGb"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    NHnr: function(n, i, e) {
      "use strict";
      Object.defineProperty(i, "__esModule", { value: !0 });
      var a = e("7+uW"),
        t = e("M93x"),
        o = e("UkDw"),
        l = e("YaEn"),
        r = e("BTaQ"),
        s = e.n(r),
        p = e("dboO"),
        h = e.n(p),
        u = (e("AqnQ"), e("IcnI")),
        c = e("qFDj"),
        m = (e.n(c), e("yXtV")),
        g = e.n(m),
        y = e("+skl");
      e.n(y);
      e("kYjW"),
        a.default.use(s.a),
        a.default.use(h.a),
        (a.default.config.productionTip = !1),
        a.default.use(g.a, { namespace: "mail__" }),
        new a.default({
          el: "#app",
          data: { store: u.a },
          router: l.a,
          template:
            '\n    <App v-if="store.login" />\n    <Login v-else></Login>\n  ',
          created: function() {
            var n = this.$ls.get("token");
            n &&
              ((u.a.token = n),
              (u.a.login = !0),
              (u.a.username = this.$ls.get("username")),
              (u.a.userId = this.$ls.get("userId")),
              (u.a.admin = "admin" == u.a.username));
          },
          components: { App: t.a, Login: o.a }
        });
    },
    "Nx/i": function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticClass: "top-page" },
            [
              e("Spin", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: n.loading,
                    expression: "loading"
                  }
                ],
                attrs: { fix: "" }
              }),
              n._v(" "),
              e(
                "Form",
                {
                  ref: "form",
                  attrs: { model: n.form, "label-width": 80, inline: "" }
                },
                [
                  e(
                    "FormItem",
                    {
                      staticStyle: { color: "#fff" },
                      attrs: { label: "统计类型" }
                    },
                    [
                      e(
                        "Select",
                        {
                          staticStyle: { width: "200px" },
                          model: {
                            value: n.form.type,
                            callback: function(i) {
                              n.$set(n.form, "type", i);
                            },
                            expression: "form.type"
                          }
                        },
                        [
                          e("Option", { attrs: { value: "china" } }, [
                            n._v("中国")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "world" } }, [
                            n._v("世界")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    {
                      staticStyle: { color: "#fff" },
                      attrs: { label: "统计范围" }
                    },
                    [
                      e(
                        "Select",
                        {
                          staticStyle: { width: "200px" },
                          model: {
                            value: n.form.range,
                            callback: function(i) {
                              n.$set(n.form, "range", i);
                            },
                            expression: "form.range"
                          }
                        },
                        [
                          e("Option", { attrs: { value: "hour" } }, [
                            n._v("最近1小时")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "day" } }, [
                            n._v("最近1天")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "week" } }, [
                            n._v("最近7天")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "month" } }, [
                            n._v("最近30天")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              n._v(" "),
              e("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "china" == n.form.type,
                    expression: "form.type == 'china'"
                  }
                ],
                ref: "china",
                style: { height: n.height }
              }),
              n._v(" "),
              e("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: "world" == n.form.type,
                    expression: "form.type == 'world'"
                  }
                ],
                ref: "world",
                style: { height: n.height }
              })
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    O04U: function(n, i, e) {
      "use strict";
      var a = a || {};
      (a.Color = function(n) {
        (this.autoUpdate = !0), this.setHex(n);
      }),
        (a.Color.prototype = {
          setRGBA: function(n, i, e, a) {
            (this.r = n),
              (this.g = i),
              (this.b = e),
              (this.a = a),
              this.autoUpdate && (this.updateHex(), this.updateStyleString());
          },
          setHex: function(n) {
            (this.hex = n),
              this.autoUpdate && (this.updateRGBA(), this.updateStyleString());
          },
          copyRGB: function(n) {
            (this.r = n.r), (this.g = n.g), (this.b = n.b);
          },
          copyRGBA: function(n) {
            (this.r = n.r), (this.g = n.g), (this.b = n.b), (this.a = n.a);
          },
          multiplySelfRGB: function(n) {
            (this.r *= n.r), (this.g *= n.g), (this.b *= n.b);
          },
          updateHex: function() {
            this.hex =
              (Math.floor(255 * this.a) << 24) |
              (Math.floor(255 * this.r) << 16) |
              (Math.floor(255 * this.g) << 8) |
              Math.floor(255 * this.b);
          },
          updateRGBA: function() {
            (this.a = ((this.hex >> 24) & 255) / 255),
              (this.r = ((this.hex >> 16) & 255) / 255),
              (this.g = ((this.hex >> 8) & 255) / 255),
              (this.b = (255 & this.hex) / 255);
          },
          updateStyleString: function() {
            this.__styleString =
              "rgba(" +
              Math.floor(255 * this.r) +
              "," +
              Math.floor(255 * this.g) +
              "," +
              Math.floor(255 * this.b) +
              "," +
              this.a +
              ")";
          },
          toString: function() {
            return (
              "THREE.Color ( r: " +
              this.r +
              ", g: " +
              this.g +
              ", b: " +
              this.b +
              ", a: " +
              this.a +
              ", hex: " +
              this.hex +
              " )"
            );
          }
        }),
        (a.Vector2 = function(n, i) {
          (this.x = n || 0), (this.y = i || 0);
        }),
        (a.Vector2.prototype = {
          set: function(n, i) {
            return (this.x = n), (this.y = i), this;
          },
          copy: function(n) {
            return (this.x = n.x), (this.y = n.y), this;
          },
          addSelf: function(n) {
            return (this.x += n.x), (this.y += n.y), this;
          },
          add: function(n, i) {
            return (this.x = n.x + i.x), (this.y = n.y + i.y), this;
          },
          subSelf: function(n) {
            return (this.x -= n.x), (this.y -= n.y), this;
          },
          sub: function(n, i) {
            return (this.x = n.x - i.x), (this.y = n.y - i.y), this;
          },
          multiplyScalar: function(n) {
            return (this.x *= n), (this.y *= n), this;
          },
          unit: function() {
            return this.multiplyScalar(1 / this.length()), this;
          },
          length: function() {
            return Math.sqrt(this.x * this.x + this.y * this.y);
          },
          lengthSq: function() {
            return this.x * this.x + this.y * this.y;
          },
          negate: function() {
            return (this.x = -this.x), (this.y = -this.y), this;
          },
          clone: function() {
            return new a.Vector2(this.x, this.y);
          },
          toString: function() {
            return "THREE.Vector2 (" + this.x + ", " + this.y + ")";
          }
        }),
        (a.Vector3 = function(n, i, e) {
          (this.x = n || 0), (this.y = i || 0), (this.z = e || 0);
        }),
        (a.Vector3.prototype = {
          set: function(n, i, e) {
            return (this.x = n), (this.y = i), (this.z = e), this;
          },
          copy: function(n) {
            return (this.x = n.x), (this.y = n.y), (this.z = n.z), this;
          },
          add: function(n, i) {
            return (
              (this.x = n.x + i.x),
              (this.y = n.y + i.y),
              (this.z = n.z + i.z),
              this
            );
          },
          addSelf: function(n) {
            return (this.x += n.x), (this.y += n.y), (this.z += n.z), this;
          },
          addScalar: function(n) {
            return (this.x += n), (this.y += n), (this.z += n), this;
          },
          sub: function(n, i) {
            return (
              (this.x = n.x - i.x),
              (this.y = n.y - i.y),
              (this.z = n.z - i.z),
              this
            );
          },
          subSelf: function(n) {
            return (this.x -= n.x), (this.y -= n.y), (this.z -= n.z), this;
          },
          cross: function(n, i) {
            return (
              (this.x = n.y * i.z - n.z * i.y),
              (this.y = n.z * i.x - n.x * i.z),
              (this.z = n.x * i.y - n.y * i.x),
              this
            );
          },
          crossSelf: function(n) {
            var i = this.x,
              e = this.y,
              a = this.z;
            return (
              (this.x = e * n.z - a * n.y),
              (this.y = a * n.x - i * n.z),
              (this.z = i * n.y - e * n.x),
              this
            );
          },
          multiplySelf: function(n) {
            return (this.x *= n.x), (this.y *= n.y), (this.z *= n.z), this;
          },
          multiplyScalar: function(n) {
            return (this.x *= n), (this.y *= n), (this.z *= n), this;
          },
          divideScalar: function(n) {
            return (this.x /= n), (this.y /= n), (this.z /= n), this;
          },
          dot: function(n) {
            return this.x * n.x + this.y * n.y + this.z * n.z;
          },
          distanceTo: function(n) {
            return Math.sqrt(this.distanceToSquared(n));
          },
          distanceToSquared: function(n) {
            var i = this.x - n.x,
              e = this.y - n.y,
              a = this.z - n.z;
            return i * i + e * e + a * a;
          },
          length: function() {
            return Math.sqrt(
              this.x * this.x + this.y * this.y + this.z * this.z
            );
          },
          lengthSq: function() {
            return this.x * this.x + this.y * this.y + this.z * this.z;
          },
          negate: function() {
            return (
              (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this
            );
          },
          normalize: function() {
            return (
              this.length() > 0
                ? this.multiplyScalar(1 / this.length())
                : this.multiplyScalar(0),
              this
            );
          },
          setLength: function(n) {
            return this.normalize().multiplyScalar(n);
          },
          isZero: function() {
            var n = 1e-4;
            return (
              Math.abs(this.x) < n &&
              Math.abs(this.y) < n &&
              Math.abs(this.z) < n
            );
          },
          clone: function() {
            return new a.Vector3(this.x, this.y, this.z);
          },
          toString: function() {
            return (
              "THREE.Vector3 ( " + this.x + ", " + this.y + ", " + this.z + " )"
            );
          }
        }),
        (a.Vector4 = function(n, i, e, a) {
          (this.x = n || 0),
            (this.y = i || 0),
            (this.z = e || 0),
            (this.w = a || 1);
        }),
        (a.Vector4.prototype = {
          set: function(n, i, e, a) {
            return (this.x = n), (this.y = i), (this.z = e), (this.w = a), this;
          },
          copy: function(n) {
            return (
              (this.x = n.x),
              (this.y = n.y),
              (this.z = n.z),
              (this.w = n.w),
              this
            );
          },
          add: function(n, i) {
            return (
              (this.x = n.x + i.x),
              (this.y = n.y + i.y),
              (this.z = n.z + i.z),
              (this.w = n.w + i.w),
              this
            );
          },
          addSelf: function(n) {
            return (
              (this.x += n.x),
              (this.y += n.y),
              (this.z += n.z),
              (this.w += n.w),
              this
            );
          },
          sub: function(n, i) {
            return (
              (this.x = n.x - i.x),
              (this.y = n.y - i.y),
              (this.z = n.z - i.z),
              (this.w = n.w - i.w),
              this
            );
          },
          subSelf: function(n) {
            return (
              (this.x -= n.x),
              (this.y -= n.y),
              (this.z -= n.z),
              (this.w -= n.w),
              this
            );
          },
          clone: function() {
            return new a.Vector4(this.x, this.y, this.z, this.w);
          },
          toString: function() {
            return (
              "THREE.Vector4 (" +
              this.x +
              ", " +
              this.y +
              ", " +
              this.z +
              ", " +
              this.w +
              ")"
            );
          }
        }),
        (a.Rectangle = function() {
          function n() {
            (o = a - i), (l = t - e);
          }
          var i,
            e,
            a,
            t,
            o,
            l,
            r = !0;
          (this.getX = function() {
            return i;
          }),
            (this.getY = function() {
              return e;
            }),
            (this.getWidth = function() {
              return o;
            }),
            (this.getHeight = function() {
              return l;
            }),
            (this.getX1 = function() {
              return i;
            }),
            (this.getY1 = function() {
              return e;
            }),
            (this.getX2 = function() {
              return a;
            }),
            (this.getY2 = function() {
              return t;
            }),
            (this.set = function(o, l, s, p) {
              (r = !1), (i = o), (e = l), (a = s), (t = p), n();
            }),
            (this.addPoint = function(o, l) {
              r
                ? ((r = !1), (i = o), (e = l), (a = o), (t = l))
                : ((i = Math.min(i, o)),
                  (e = Math.min(e, l)),
                  (a = Math.max(a, o)),
                  (t = Math.max(t, l))),
                n();
            }),
            (this.addRectangle = function(o) {
              r
                ? ((r = !1),
                  (i = o.getX1()),
                  (e = o.getY1()),
                  (a = o.getX2()),
                  (t = o.getY2()))
                : ((i = Math.min(i, o.getX1())),
                  (e = Math.min(e, o.getY1())),
                  (a = Math.max(a, o.getX2())),
                  (t = Math.max(t, o.getY2()))),
                n();
            }),
            (this.inflate = function(o) {
              (i -= o), (e -= o), (a += o), (t += o), n();
            }),
            (this.minSelf = function(o) {
              (i = Math.max(i, o.getX1())),
                (e = Math.max(e, o.getY1())),
                (a = Math.min(a, o.getX2())),
                (t = Math.min(t, o.getY2())),
                n();
            }),
            (this.instersects = function(n) {
              return (
                Math.min(a, n.getX2()) - Math.max(i, n.getX1()) >= 0 &&
                Math.min(t, n.getY2()) - Math.max(e, n.getY1()) >= 0
              );
            }),
            (this.empty = function() {
              (r = !0), (i = 0), (e = 0), (a = 0), (t = 0), n();
            }),
            (this.isEmpty = function() {
              return r;
            }),
            (this.toString = function() {
              return (
                "THREE.Rectangle (x1: " +
                i +
                ", y1: " +
                t +
                ", x2: " +
                a +
                ", y1: " +
                e +
                ", width: " +
                o +
                ", height: " +
                l +
                ")"
              );
            });
        }),
        (a.Matrix3 = function() {
          this.m = [];
        }),
        (a.Matrix3.prototype = {
          transpose: function() {
            var n;
            return (
              (n = this.m[1]),
              (this.m[1] = this.m[3]),
              (this.m[3] = n),
              (n = this.m[2]),
              (this.m[2] = this.m[6]),
              (this.m[6] = n),
              (n = this.m[5]),
              (this.m[5] = this.m[7]),
              (this.m[7] = n),
              this
            );
          }
        }),
        (a.Matrix4 = function() {
          (this._x = new a.Vector3()),
            (this._y = new a.Vector3()),
            (this._z = new a.Vector3());
        }),
        (a.Matrix4.prototype = {
          n11: 1,
          n12: 0,
          n13: 0,
          n14: 0,
          n21: 0,
          n22: 1,
          n23: 0,
          n24: 0,
          n31: 0,
          n32: 0,
          n33: 1,
          n34: 0,
          n41: 0,
          n42: 0,
          n43: 0,
          n44: 1,
          identity: function() {
            (this.n11 = 1),
              (this.n12 = 0),
              (this.n13 = 0),
              (this.n14 = 0),
              (this.n21 = 0),
              (this.n22 = 1),
              (this.n23 = 0),
              (this.n24 = 0),
              (this.n31 = 0),
              (this.n32 = 0),
              (this.n33 = 1),
              (this.n34 = 0),
              (this.n41 = 0),
              (this.n42 = 0),
              (this.n43 = 0),
              (this.n44 = 1);
          },
          copy: function(n) {
            (this.n11 = n.n11),
              (this.n12 = n.n12),
              (this.n13 = n.n13),
              (this.n14 = n.n14),
              (this.n21 = n.n21),
              (this.n22 = n.n22),
              (this.n23 = n.n23),
              (this.n24 = n.n24),
              (this.n31 = n.n31),
              (this.n32 = n.n32),
              (this.n33 = n.n33),
              (this.n34 = n.n34),
              (this.n41 = n.n41),
              (this.n42 = n.n42),
              (this.n43 = n.n43),
              (this.n44 = n.n44);
          },
          lookAt: function(n, i, e) {
            var a = this._x,
              t = this._y,
              o = this._z;
            o.sub(n, i),
              o.normalize(),
              a.cross(e, o),
              a.normalize(),
              t.cross(o, a),
              t.normalize(),
              (this.n11 = a.x),
              (this.n12 = a.y),
              (this.n13 = a.z),
              (this.n14 = -a.dot(n)),
              (this.n21 = t.x),
              (this.n22 = t.y),
              (this.n23 = t.z),
              (this.n24 = -t.dot(n)),
              (this.n31 = o.x),
              (this.n32 = o.y),
              (this.n33 = o.z),
              (this.n34 = -o.dot(n)),
              (this.n41 = 0),
              (this.n42 = 0),
              (this.n43 = 0),
              (this.n44 = 1);
          },
          transform: function(n) {
            var i = n.x,
              e = n.y,
              a = n.z,
              t = n.w ? n.w : 1;
            return (
              (n.x = this.n11 * i + this.n12 * e + this.n13 * a + this.n14 * t),
              (n.y = this.n21 * i + this.n22 * e + this.n23 * a + this.n24 * t),
              (n.z = this.n31 * i + this.n32 * e + this.n33 * a + this.n34 * t),
              (t = this.n41 * i + this.n42 * e + this.n43 * a + this.n44 * t),
              n.w
                ? (n.w = t)
                : ((n.x = n.x / t), (n.y = n.y / t), (n.z = n.z / t)),
              n
            );
          },
          crossVector: function(n) {
            var i = new a.Vector4();
            return (
              (i.x =
                this.n11 * n.x +
                this.n12 * n.y +
                this.n13 * n.z +
                this.n14 * n.w),
              (i.y =
                this.n21 * n.x +
                this.n22 * n.y +
                this.n23 * n.z +
                this.n24 * n.w),
              (i.z =
                this.n31 * n.x +
                this.n32 * n.y +
                this.n33 * n.z +
                this.n34 * n.w),
              (i.w = n.w
                ? this.n41 * n.x +
                  this.n42 * n.y +
                  this.n43 * n.z +
                  this.n44 * n.w
                : 1),
              i
            );
          },
          multiply: function(n, i) {
            (this.n11 =
              n.n11 * i.n11 + n.n12 * i.n21 + n.n13 * i.n31 + n.n14 * i.n41),
              (this.n12 =
                n.n11 * i.n12 + n.n12 * i.n22 + n.n13 * i.n32 + n.n14 * i.n42),
              (this.n13 =
                n.n11 * i.n13 + n.n12 * i.n23 + n.n13 * i.n33 + n.n14 * i.n43),
              (this.n14 =
                n.n11 * i.n14 + n.n12 * i.n24 + n.n13 * i.n34 + n.n14 * i.n44),
              (this.n21 =
                n.n21 * i.n11 + n.n22 * i.n21 + n.n23 * i.n31 + n.n24 * i.n41),
              (this.n22 =
                n.n21 * i.n12 + n.n22 * i.n22 + n.n23 * i.n32 + n.n24 * i.n42),
              (this.n23 =
                n.n21 * i.n13 + n.n22 * i.n23 + n.n23 * i.n33 + n.n24 * i.n43),
              (this.n24 =
                n.n21 * i.n14 + n.n22 * i.n24 + n.n23 * i.n34 + n.n24 * i.n44),
              (this.n31 =
                n.n31 * i.n11 + n.n32 * i.n21 + n.n33 * i.n31 + n.n34 * i.n41),
              (this.n32 =
                n.n31 * i.n12 + n.n32 * i.n22 + n.n33 * i.n32 + n.n34 * i.n42),
              (this.n33 =
                n.n31 * i.n13 + n.n32 * i.n23 + n.n33 * i.n33 + n.n34 * i.n43),
              (this.n34 =
                n.n31 * i.n14 + n.n32 * i.n24 + n.n33 * i.n34 + n.n34 * i.n44),
              (this.n41 =
                n.n41 * i.n11 + n.n42 * i.n21 + n.n43 * i.n31 + n.n44 * i.n41),
              (this.n42 =
                n.n41 * i.n12 + n.n42 * i.n22 + n.n43 * i.n32 + n.n44 * i.n42),
              (this.n43 =
                n.n41 * i.n13 + n.n42 * i.n23 + n.n43 * i.n33 + n.n44 * i.n43),
              (this.n44 =
                n.n41 * i.n14 + n.n42 * i.n24 + n.n43 * i.n34 + n.n44 * i.n44);
          },
          multiplySelf: function(n) {
            var i = this.n11,
              e = this.n12,
              a = this.n13,
              t = this.n14,
              o = this.n21,
              l = this.n22,
              r = this.n23,
              s = this.n24,
              p = this.n31,
              h = this.n32,
              u = this.n33,
              c = this.n34,
              m = this.n41,
              g = this.n42,
              y = this.n43,
              d = this.n44;
            (this.n11 = i * n.n11 + e * n.n21 + a * n.n31 + t * n.n41),
              (this.n12 = i * n.n12 + e * n.n22 + a * n.n32 + t * n.n42),
              (this.n13 = i * n.n13 + e * n.n23 + a * n.n33 + t * n.n43),
              (this.n14 = i * n.n14 + e * n.n24 + a * n.n34 + t * n.n44),
              (this.n21 = o * n.n11 + l * n.n21 + r * n.n31 + s * n.n41),
              (this.n22 = o * n.n12 + l * n.n22 + r * n.n32 + s * n.n42),
              (this.n23 = o * n.n13 + l * n.n23 + r * n.n33 + s * n.n43),
              (this.n24 = o * n.n14 + l * n.n24 + r * n.n34 + s * n.n44),
              (this.n31 = p * n.n11 + h * n.n21 + u * n.n31 + c * n.n41),
              (this.n32 = p * n.n12 + h * n.n22 + u * n.n32 + c * n.n42),
              (this.n33 = p * n.n13 + h * n.n23 + u * n.n33 + c * n.n43),
              (this.n34 = p * n.n14 + h * n.n24 + u * n.n34 + c * n.n44),
              (this.n41 = m * n.n11 + g * n.n21 + y * n.n31 + d * n.n41),
              (this.n42 = m * n.n12 + g * n.n22 + y * n.n32 + d * n.n42),
              (this.n43 = m * n.n13 + g * n.n23 + y * n.n33 + d * n.n43),
              (this.n44 = m * n.n14 + g * n.n24 + y * n.n34 + d * n.n44);
          },
          multiplyScalar: function(n) {
            (this.n11 *= n),
              (this.n12 *= n),
              (this.n13 *= n),
              (this.n14 *= n),
              (this.n21 *= n),
              (this.n22 *= n),
              (this.n23 *= n),
              (this.n24 *= n),
              (this.n31 *= n),
              (this.n32 *= n),
              (this.n33 *= n),
              (this.n34 *= n),
              (this.n41 *= n),
              (this.n42 *= n),
              (this.n43 *= n),
              (this.n44 *= n);
          },
          determinant: function() {
            return (
              this.n14 * this.n23 * this.n32 * this.n41 -
              this.n13 * this.n24 * this.n32 * this.n41 -
              this.n14 * this.n22 * this.n33 * this.n41 +
              this.n12 * this.n24 * this.n33 * this.n41 +
              this.n13 * this.n22 * this.n34 * this.n41 -
              this.n12 * this.n23 * this.n34 * this.n41 -
              this.n14 * this.n23 * this.n31 * this.n42 +
              this.n13 * this.n24 * this.n31 * this.n42 +
              this.n14 * this.n21 * this.n33 * this.n42 -
              this.n11 * this.n24 * this.n33 * this.n42 -
              this.n13 * this.n21 * this.n34 * this.n42 +
              this.n11 * this.n23 * this.n34 * this.n42 +
              this.n14 * this.n22 * this.n31 * this.n43 -
              this.n12 * this.n24 * this.n31 * this.n43 -
              this.n14 * this.n21 * this.n32 * this.n43 +
              this.n11 * this.n24 * this.n32 * this.n43 +
              this.n12 * this.n21 * this.n34 * this.n43 -
              this.n11 * this.n22 * this.n34 * this.n43 -
              this.n13 * this.n22 * this.n31 * this.n44 +
              this.n12 * this.n23 * this.n31 * this.n44 +
              this.n13 * this.n21 * this.n32 * this.n44 -
              this.n11 * this.n23 * this.n32 * this.n44 -
              this.n12 * this.n21 * this.n33 * this.n44 +
              this.n11 * this.n22 * this.n33 * this.n44
            );
          },
          transpose: function() {
            function n(n, i, e) {
              var a = n[i];
              (n[i] = n[e]), (n[e] = a);
            }
            return (
              n(this, "n21", "n12"),
              n(this, "n31", "n13"),
              n(this, "n32", "n23"),
              n(this, "n41", "n14"),
              n(this, "n42", "n24"),
              n(this, "n43", "n34"),
              this
            );
          },
          clone: function() {
            var n = new a.Matrix4();
            return (
              (n.n11 = this.n11),
              (n.n12 = this.n12),
              (n.n13 = this.n13),
              (n.n14 = this.n14),
              (n.n21 = this.n21),
              (n.n22 = this.n22),
              (n.n23 = this.n23),
              (n.n24 = this.n24),
              (n.n31 = this.n31),
              (n.n32 = this.n32),
              (n.n33 = this.n33),
              (n.n34 = this.n34),
              (n.n41 = this.n41),
              (n.n42 = this.n42),
              (n.n43 = this.n43),
              (n.n44 = this.n44),
              n
            );
          },
          flatten: function() {
            return [
              this.n11,
              this.n21,
              this.n31,
              this.n41,
              this.n12,
              this.n22,
              this.n32,
              this.n42,
              this.n13,
              this.n23,
              this.n33,
              this.n43,
              this.n14,
              this.n24,
              this.n34,
              this.n44
            ];
          },
          toString: function() {
            return (
              "| " +
              this.n11 +
              " " +
              this.n12 +
              " " +
              this.n13 +
              " " +
              this.n14 +
              " |\n| " +
              this.n21 +
              " " +
              this.n22 +
              " " +
              this.n23 +
              " " +
              this.n24 +
              " |\n| " +
              this.n31 +
              " " +
              this.n32 +
              " " +
              this.n33 +
              " " +
              this.n34 +
              " |\n| " +
              this.n41 +
              " " +
              this.n42 +
              " " +
              this.n43 +
              " " +
              this.n44 +
              " |"
            );
          }
        }),
        (a.Matrix4.translationMatrix = function(n, i, e) {
          var t = new a.Matrix4();
          return (t.n14 = n), (t.n24 = i), (t.n34 = e), t;
        }),
        (a.Matrix4.scaleMatrix = function(n, i, e) {
          var t = new a.Matrix4();
          return (t.n11 = n), (t.n22 = i), (t.n33 = e), t;
        }),
        (a.Matrix4.rotationXMatrix = function(n) {
          var i = new a.Matrix4();
          return (
            (i.n22 = i.n33 = Math.cos(n)),
            (i.n32 = Math.sin(n)),
            (i.n23 = -i.n32),
            i
          );
        }),
        (a.Matrix4.rotationYMatrix = function(n) {
          var i = new a.Matrix4();
          return (
            (i.n11 = i.n33 = Math.cos(n)),
            (i.n13 = Math.sin(n)),
            (i.n31 = -i.n13),
            i
          );
        }),
        (a.Matrix4.rotationZMatrix = function(n) {
          var i = new a.Matrix4();
          return (
            (i.n11 = i.n22 = Math.cos(n)),
            (i.n21 = Math.sin(n)),
            (i.n12 = -i.n21),
            i
          );
        }),
        (a.Matrix4.rotationAxisAngleMatrix = function(n, i) {
          var e = new a.Matrix4(),
            t = Math.cos(i),
            o = Math.sin(i),
            l = 1 - t,
            r = n.x,
            s = n.y,
            p = n.z;
          return (
            (e.n11 = l * r * r + t),
            (e.n12 = l * r * s - o * p),
            (e.n13 = l * r * p + o * s),
            (e.n21 = l * r * s + o * p),
            (e.n22 = l * s * s + t),
            (e.n23 = l * s * p - o * r),
            (e.n31 = l * r * p - o * s),
            (e.n32 = l * s * p + o * r),
            (e.n33 = l * p * p + t),
            e
          );
        }),
        (a.Matrix4.makeInvert = function(n) {
          var i = new a.Matrix4();
          return (
            (i.n11 =
              n.n23 * n.n34 * n.n42 -
              n.n24 * n.n33 * n.n42 +
              n.n24 * n.n32 * n.n43 -
              n.n22 * n.n34 * n.n43 -
              n.n23 * n.n32 * n.n44 +
              n.n22 * n.n33 * n.n44),
            (i.n12 =
              n.n14 * n.n33 * n.n42 -
              n.n13 * n.n34 * n.n42 -
              n.n14 * n.n32 * n.n43 +
              n.n12 * n.n34 * n.n43 +
              n.n13 * n.n32 * n.n44 -
              n.n12 * n.n33 * n.n44),
            (i.n13 =
              n.n13 * n.n24 * n.n42 -
              n.n14 * n.n23 * n.n42 +
              n.n14 * n.n22 * n.n43 -
              n.n12 * n.n24 * n.n43 -
              n.n13 * n.n22 * n.n44 +
              n.n12 * n.n23 * n.n44),
            (i.n14 =
              n.n14 * n.n23 * n.n32 -
              n.n13 * n.n24 * n.n32 -
              n.n14 * n.n22 * n.n33 +
              n.n12 * n.n24 * n.n33 +
              n.n13 * n.n22 * n.n34 -
              n.n12 * n.n23 * n.n34),
            (i.n21 =
              n.n24 * n.n33 * n.n41 -
              n.n23 * n.n34 * n.n41 -
              n.n24 * n.n31 * n.n43 +
              n.n21 * n.n34 * n.n43 +
              n.n23 * n.n31 * n.n44 -
              n.n21 * n.n33 * n.n44),
            (i.n22 =
              n.n13 * n.n34 * n.n41 -
              n.n14 * n.n33 * n.n41 +
              n.n14 * n.n31 * n.n43 -
              n.n11 * n.n34 * n.n43 -
              n.n13 * n.n31 * n.n44 +
              n.n11 * n.n33 * n.n44),
            (i.n23 =
              n.n14 * n.n23 * n.n41 -
              n.n13 * n.n24 * n.n41 -
              n.n14 * n.n21 * n.n43 +
              n.n11 * n.n24 * n.n43 +
              n.n13 * n.n21 * n.n44 -
              n.n11 * n.n23 * n.n44),
            (i.n24 =
              n.n13 * n.n24 * n.n31 -
              n.n14 * n.n23 * n.n31 +
              n.n14 * n.n21 * n.n33 -
              n.n11 * n.n24 * n.n33 -
              n.n13 * n.n21 * n.n34 +
              n.n11 * n.n23 * n.n34),
            (i.n31 =
              n.n22 * n.n34 * n.n41 -
              n.n24 * n.n32 * n.n41 +
              n.n24 * n.n31 * n.n42 -
              n.n21 * n.n34 * n.n42 -
              n.n22 * n.n31 * n.n44 +
              n.n21 * n.n32 * n.n44),
            (i.n32 =
              n.n14 * n.n32 * n.n41 -
              n.n12 * n.n34 * n.n41 -
              n.n14 * n.n31 * n.n42 +
              n.n11 * n.n34 * n.n42 +
              n.n12 * n.n31 * n.n44 -
              n.n11 * n.n32 * n.n44),
            (i.n33 =
              n.n13 * n.n24 * n.n41 -
              n.n14 * n.n22 * n.n41 +
              n.n14 * n.n21 * n.n42 -
              n.n11 * n.n24 * n.n42 -
              n.n12 * n.n21 * n.n44 +
              n.n11 * n.n22 * n.n44),
            (i.n34 =
              n.n14 * n.n22 * n.n31 -
              n.n12 * n.n24 * n.n31 -
              n.n14 * n.n21 * n.n32 +
              n.n11 * n.n24 * n.n32 +
              n.n12 * n.n21 * n.n34 -
              n.n11 * n.n22 * n.n34),
            (i.n41 =
              n.n23 * n.n32 * n.n41 -
              n.n22 * n.n33 * n.n41 -
              n.n23 * n.n31 * n.n42 +
              n.n21 * n.n33 * n.n42 +
              n.n22 * n.n31 * n.n43 -
              n.n21 * n.n32 * n.n43),
            (i.n42 =
              n.n12 * n.n33 * n.n41 -
              n.n13 * n.n32 * n.n41 +
              n.n13 * n.n31 * n.n42 -
              n.n11 * n.n33 * n.n42 -
              n.n12 * n.n31 * n.n43 +
              n.n11 * n.n32 * n.n43),
            (i.n43 =
              n.n13 * n.n22 * n.n41 -
              n.n12 * n.n23 * n.n41 -
              n.n13 * n.n21 * n.n42 +
              n.n11 * n.n23 * n.n42 +
              n.n12 * n.n21 * n.n43 -
              n.n11 * n.n22 * n.n43),
            (i.n44 =
              n.n12 * n.n23 * n.n31 -
              n.n13 * n.n22 * n.n31 +
              n.n13 * n.n21 * n.n32 -
              n.n11 * n.n23 * n.n32 -
              n.n12 * n.n21 * n.n33 +
              n.n11 * n.n22 * n.n33),
            i.multiplyScalar(1 / n.determinant()),
            i
          );
        }),
        (a.Matrix4.makeInvert3x3 = function(n) {
          var i,
            e = n.flatten(),
            t = new a.Matrix3(),
            o = e[10] * e[5] - e[6] * e[9],
            l = -e[10] * e[1] + e[2] * e[9],
            r = e[6] * e[1] - e[2] * e[5],
            s = -e[10] * e[4] + e[6] * e[8],
            p = e[10] * e[0] - e[2] * e[8],
            h = -e[6] * e[0] + e[2] * e[4],
            u = e[9] * e[4] - e[5] * e[8],
            c = -e[9] * e[0] + e[1] * e[8],
            m = e[5] * e[0] - e[1] * e[4],
            g = e[0] * o + e[1] * s + e[2] * u;
          if (0 == g) throw "matrix not invertible";
          return (
            (i = 1 / g),
            (t.m[0] = i * o),
            (t.m[1] = i * l),
            (t.m[2] = i * r),
            (t.m[3] = i * s),
            (t.m[4] = i * p),
            (t.m[5] = i * h),
            (t.m[6] = i * u),
            (t.m[7] = i * c),
            (t.m[8] = i * m),
            t
          );
        }),
        (a.Matrix4.makeFrustum = function(n, i, e, t, o, l) {
          var r, s, p, h, u, c, m;
          return (
            (r = new a.Matrix4()),
            (s = (2 * o) / (i - n)),
            (p = (2 * o) / (t - e)),
            (h = (i + n) / (i - n)),
            (u = (t + e) / (t - e)),
            (c = -(l + o) / (l - o)),
            (m = (-2 * l * o) / (l - o)),
            (r.n11 = s),
            (r.n12 = 0),
            (r.n13 = h),
            (r.n14 = 0),
            (r.n21 = 0),
            (r.n22 = p),
            (r.n23 = u),
            (r.n24 = 0),
            (r.n31 = 0),
            (r.n32 = 0),
            (r.n33 = c),
            (r.n34 = m),
            (r.n41 = 0),
            (r.n42 = 0),
            (r.n43 = -1),
            (r.n44 = 0),
            r
          );
        }),
        (a.Matrix4.makePerspective = function(n, i, e, t) {
          var o, l, r, s;
          return (
            (o = e * Math.tan((n * Math.PI) / 360)),
            (l = -o),
            (r = l * i),
            (s = o * i),
            a.Matrix4.makeFrustum(r, s, l, o, e, t)
          );
        }),
        (a.Matrix4.makeOrtho = function(n, i, e, t, o, l) {
          var r, s, p, h, u, c, m;
          return (
            (r = new a.Matrix4()),
            (u = i - n),
            (c = t - e),
            (m = l - o),
            (s = (i + n) / u),
            (p = (t + e) / c),
            (h = (l + o) / m),
            (r.n11 = 2 / u),
            (r.n12 = 0),
            (r.n13 = 0),
            (r.n14 = -s),
            (r.n21 = 0),
            (r.n22 = 2 / c),
            (r.n23 = 0),
            (r.n24 = -p),
            (r.n31 = 0),
            (r.n32 = 0),
            (r.n33 = -2 / m),
            (r.n34 = -h),
            (r.n41 = 0),
            (r.n42 = 0),
            (r.n43 = 0),
            (r.n44 = 1),
            r
          );
        }),
        (a.Vertex = function(n, i) {
          (this.position = n || new a.Vector3()),
            (this.positionWorld = new a.Vector3()),
            (this.positionScreen = new a.Vector3()),
            (this.normal = i || new a.Vector3()),
            (this.normalWorld = new a.Vector3()),
            (this.normalScreen = new a.Vector3()),
            (this.__visible = !0);
        }),
        (a.Vertex.prototype = {
          toString: function() {
            return (
              "THREE.Vertex ( position: " +
              this.position +
              ", normal: " +
              this.normal +
              " )"
            );
          }
        }),
        (a.Face3 = function(n, i, e, t, o) {
          (this.a = n),
            (this.b = i),
            (this.c = e),
            (this.centroid = new a.Vector3()),
            (this.normal = t instanceof a.Vector3 ? t : new a.Vector3()),
            (this.vertexNormals = t instanceof Array ? t : []),
            (this.material = o instanceof Array ? o : [o]);
        }),
        (a.Face3.prototype = {
          toString: function() {
            return (
              "THREE.Face3 ( " + this.a + ", " + this.b + ", " + this.c + " )"
            );
          }
        }),
        (a.Face4 = function(n, i, e, t, o, l) {
          (this.a = n),
            (this.b = i),
            (this.c = e),
            (this.d = t),
            (this.centroid = new a.Vector3()),
            (this.normal = o instanceof a.Vector3 ? o : new a.Vector3()),
            (this.vertexNormals = o instanceof Array ? o : []),
            (this.material = l instanceof Array ? l : [l]);
        }),
        (a.Face4.prototype = {
          toString: function() {
            return (
              "THREE.Face4 ( " +
              this.a +
              ", " +
              this.b +
              ", " +
              this.c +
              " " +
              this.d +
              " )"
            );
          }
        }),
        (a.UV = function(n, i) {
          (this.u = n || 0), (this.v = i || 0);
        }),
        (a.UV.prototype = {
          copy: function(n) {
            (this.u = n.u), (this.v = n.v);
          },
          toString: function() {
            return "THREE.UV (" + this.u + ", " + this.v + ")";
          }
        }),
        (a.Geometry = function() {
          (this.vertices = []), (this.faces = []), (this.uvs = []);
        }),
        (a.Geometry.prototype = {
          computeCentroids: function() {
            var n, i, e;
            for (n = 0, i = this.faces.length; n < i; n++)
              (e = this.faces[n]),
                e.centroid.set(0, 0, 0),
                e instanceof a.Face3
                  ? (e.centroid.addSelf(this.vertices[e.a].position),
                    e.centroid.addSelf(this.vertices[e.b].position),
                    e.centroid.addSelf(this.vertices[e.c].position),
                    e.centroid.divideScalar(3))
                  : e instanceof a.Face4 &&
                    (e.centroid.addSelf(this.vertices[e.a].position),
                    e.centroid.addSelf(this.vertices[e.b].position),
                    e.centroid.addSelf(this.vertices[e.c].position),
                    e.centroid.addSelf(this.vertices[e.d].position),
                    e.centroid.divideScalar(4));
          },
          computeNormals: function(n) {
            var i,
              e,
              t,
              o,
              l,
              r,
              s,
              p,
              h,
              u,
              c,
              m = new a.Vector3(),
              g = new a.Vector3();
            for (t = 0, o = this.vertices.length; t < o; t++)
              (l = this.vertices[t]), l.normal.set(0, 0, 0);
            for (r = 0, s = this.faces.length; r < s; r++)
              if (((p = this.faces[r]), n && p.vertexNormals.length)) {
                for (m.set(0, 0, 0), i = 0, e = p.normal.length; i < e; i++)
                  m.addSelf(p.vertexNormals[i]);
                m.divideScalar(3),
                  m.isZero() || m.normalize(),
                  p.normal.copy(m);
              } else
                (h = this.vertices[p.a]),
                  (u = this.vertices[p.b]),
                  (c = this.vertices[p.c]),
                  m.sub(c.position, u.position),
                  g.sub(h.position, u.position),
                  m.crossSelf(g),
                  m.isZero() || m.normalize(),
                  p.normal.copy(m);
          },
          computeBoundingBox: function() {
            if (this.vertices.length > 0) {
              this.bbox = {
                x: [this.vertices[0].position.x, this.vertices[0].position.x],
                y: [this.vertices[0].position.y, this.vertices[0].position.y],
                z: [this.vertices[0].position.z, this.vertices[0].position.z]
              };
              for (var n = 1, i = this.vertices.length; n < i; n++)
                (vertex = this.vertices[n]),
                  vertex.position.x < this.bbox.x[0]
                    ? (this.bbox.x[0] = vertex.position.x)
                    : vertex.position.x > this.bbox.x[1] &&
                      (this.bbox.x[1] = vertex.position.x),
                  vertex.position.y < this.bbox.y[0]
                    ? (this.bbox.y[0] = vertex.position.y)
                    : vertex.position.y > this.bbox.y[1] &&
                      (this.bbox.y[1] = vertex.position.y),
                  vertex.position.z < this.bbox.z[0]
                    ? (this.bbox.z[0] = vertex.position.z)
                    : vertex.position.z > this.bbox.z[1] &&
                      (this.bbox.z[1] = vertex.position.z);
            }
          },
          toString: function() {
            return (
              "THREE.Geometry ( vertices: " +
              this.vertices +
              ", faces: " +
              this.faces +
              " )"
            );
          }
        }),
        (a.Camera = function(n, i, e, t) {
          (this.fov = n),
            (this.aspect = i),
            (this.position = new a.Vector3(0, 0, 0)),
            (this.target = { position: new a.Vector3(0, 0, 0) }),
            (this.projectionMatrix = a.Matrix4.makePerspective(n, i, e, t)),
            (this.up = new a.Vector3(0, 1, 0)),
            (this.matrix = new a.Matrix4()),
            (this.autoUpdateMatrix = !0),
            (this.updateMatrix = function() {
              this.matrix.lookAt(this.position, this.target.position, this.up);
            }),
            (this.toString = function() {
              return (
                "THREE.Camera ( " +
                this.position +
                ", " +
                this.target.position +
                " )"
              );
            });
        }),
        (a.Light = function(n) {
          this.color = new a.Color((255 << 24) | n);
        }),
        (a.AmbientLight = function(n) {
          a.Light.call(this, n);
        }),
        (a.AmbientLight.prototype = new a.Light()),
        (a.AmbientLight.prototype.constructor = a.AmbientLight),
        (a.DirectionalLight = function(n, i) {
          a.Light.call(this, n),
            (this.position = new a.Vector3(0, 1, 0)),
            (this.intensity = i || 1);
        }),
        (a.DirectionalLight.prototype = new a.Light()),
        (a.DirectionalLight.prototype.constructor = a.DirectionalLight),
        (a.PointLight = function(n, i) {
          a.Light.call(this, n),
            (this.position = new a.Vector3(0, 0, 0)),
            (this.intensity = i || 1);
        }),
        (a.DirectionalLight.prototype = new a.Light()),
        (a.DirectionalLight.prototype.constructor = a.PointLight),
        (a.Object3D = function(n) {
          (this.position = new a.Vector3()),
            (this.rotation = new a.Vector3()),
            (this.scale = new a.Vector3(1, 1, 1)),
            (this.matrix = new a.Matrix4()),
            (this.matrixTranslation = new a.Matrix4()),
            (this.matrixRotation = new a.Matrix4()),
            (this.matrixScale = new a.Matrix4()),
            (this.screen = new a.Vector3()),
            (this.autoUpdateMatrix = !0),
            (this.updateMatrix = function() {
              (this.matrixPosition = a.Matrix4.translationMatrix(
                this.position.x,
                this.position.y,
                this.position.z
              )),
                (this.matrixRotation = a.Matrix4.rotationXMatrix(
                  this.rotation.x
                )),
                this.matrixRotation.multiplySelf(
                  a.Matrix4.rotationYMatrix(this.rotation.y)
                ),
                this.matrixRotation.multiplySelf(
                  a.Matrix4.rotationZMatrix(this.rotation.z)
                ),
                (this.matrixScale = a.Matrix4.scaleMatrix(
                  this.scale.x,
                  this.scale.y,
                  this.scale.z
                )),
                this.matrix.copy(this.matrixPosition),
                this.matrix.multiplySelf(this.matrixRotation),
                this.matrix.multiplySelf(this.matrixScale);
            });
        }),
        (a.Particle = function(n) {
          a.Object3D.call(this),
            (this.material = n instanceof Array ? n : [n]),
            (this.autoUpdateMatrix = !1);
        }),
        (a.Particle.prototype = new a.Object3D()),
        (a.Particle.prototype.constructor = a.Particle),
        (a.Line = function(n, i) {
          a.Object3D.call(this),
            (this.geometry = n),
            (this.material = i instanceof Array ? i : [i]);
        }),
        (a.Line.prototype = new a.Object3D()),
        (a.Line.prototype.constructor = a.Line),
        (a.Mesh = function(n, i, e) {
          a.Object3D.call(this),
            (this.geometry = n),
            (this.material = i instanceof Array ? i : [i]),
            (this.flipSided = !1),
            (this.doubleSided = !1),
            (this.overdraw = !1),
            (this.materialFaceGroup = {}),
            this.sortFacesByMaterial(),
            e && this.normalizeUVs(),
            this.geometry.computeBoundingBox();
        }),
        (a.Mesh.prototype = new a.Object3D()),
        (a.Mesh.prototype.constructor = a.Mesh),
        (a.Mesh.prototype.sortFacesByMaterial = function() {
          var n, i, e, a, t, o, l;
          for (e = 0, a = this.geometry.faces.length; e < a; e++)
            (t = this.geometry.faces[e]),
              (o = t.material),
              (hash = (function(e) {
                for (l = [], n = 0, i = e.length; n < i; n++)
                  void 0 == e[n]
                    ? l.push("undefined")
                    : l.push(e[n].toString());
                return l.join("_");
              })(o)),
              void 0 == this.materialFaceGroup[hash] &&
                (this.materialFaceGroup[hash] = { faces: [], material: o }),
              this.materialFaceGroup[hash].faces.push(e);
        }),
        (a.Mesh.prototype.normalizeUVs = function() {
          var n, i, e, a, t;
          for (n = 0, i = this.geometry.uvs.length; n < i; n++)
            for (t = this.geometry.uvs[n], e = 0, a = t.length; e < a; e++)
              1 != t[e].u && (t[e].u = t[e].u - Math.floor(t[e].u)),
                1 != t[e].v && (t[e].v = t[e].v - Math.floor(t[e].v));
        }),
        (a.LineColorMaterial = function(n, i, e) {
          (this.lineWidth = e || 1),
            (this.color = new a.Color(
              (i >= 0 ? (255 * i) << 24 : 4278190080) | n
            ));
        }),
        (a.LineColorMaterial.prototype = {
          toString: function() {
            return (
              "THREE.LineColorMaterial ( color: " +
              this.color +
              ", lineWidth: " +
              this.lineWidth +
              " )"
            );
          }
        }),
        (a.MeshPhongMaterial = function(n, i, e, t, o) {
          (this.ambient = new a.Color(
            (o >= 0 ? (255 * o) << 24 : 4278190080) | n
          )),
            (this.diffuse = new a.Color(
              (o >= 0 ? (255 * o) << 24 : 4278190080) | i
            )),
            (this.specular = new a.Color(
              (o >= 0 ? (255 * o) << 24 : 4278190080) | e
            )),
            (this.shininess = t),
            (this.opacity = o),
            (this.toString = function() {
              return (
                "THREE.MeshPhongMaterial ( <br/>ambient: " +
                this.ambient +
                ", <br/>diffuse: " +
                this.diffuse +
                ", <br/>specular: " +
                this.specular +
                ", <br/>shininess: " +
                this.shininess +
                ", <br/>opacity: " +
                this.opacity +
                ")"
              );
            });
        }),
        (a.MeshBitmapMaterial = function(n, i) {
          (this.bitmap = n),
            (this.mode = i || a.MeshBitmapMaterialMode.UVMAPPING),
            (this.id = a.MeshBitmapMaterialCounter.value++),
            (this.toString = function() {
              return (
                "THREE.MeshBitmapMaterial ( bitmap: " +
                this.bitmap +
                ", mode: " +
                this.mode +
                ", id: " +
                this.id +
                " )"
              );
            });
        }),
        (a.MeshBitmapMaterialCounter = { value: 0 }),
        (a.MeshBitmapMaterialMode = { UVMAPPING: 0 }),
        (a.MeshColorFillMaterial = function(n, i) {
          (this.color = new a.Color(
            (i >= 0 ? (255 * i) << 24 : 4278190080) | n
          )),
            (this.toString = function() {
              return (
                "THREE.MeshColorFillMaterial ( color: " + this.color + " )"
              );
            });
        }),
        (a.MeshColorStrokeMaterial = function(n, i, e) {
          (this.lineWidth = e || 1),
            (this.color = new a.Color(
              (i >= 0 ? (255 * i) << 24 : 4278190080) | n
            )),
            (this.toString = function() {
              return (
                "THREE.MeshColorStrokeMaterial ( lineWidth: " +
                this.lineWidth +
                ", color: " +
                this.color +
                " )"
              );
            });
        }),
        (a.MeshFaceMaterial = function() {
          this.toString = function() {
            return "THREE.MeshFaceMaterial";
          };
        }),
        (a.ParticleBitmapMaterial = function(n) {
          (this.bitmap = n),
            (this.offset = new a.Vector2()),
            (this.toString = function() {
              return (
                "THREE.ParticleBitmapMaterial ( bitmap: " + this.bitmap + " )"
              );
            });
        }),
        (a.ParticleCircleMaterial = function(n, i) {
          (this.color = new a.Color(
            (i >= 0 ? (255 * i) << 24 : 4278190080) | n
          )),
            (this.toString = function() {
              return (
                "THREE.ParticleCircleMaterial ( color: " + this.color + " )"
              );
            });
        }),
        (a.ParticleDOMMaterial = function(n) {
          (this.domElement = n),
            (this.toString = function() {
              return (
                "THREE.ParticleDOMMaterial ( domElement: " +
                this.domElement +
                " )"
              );
            });
        }),
        (a.Scene = function() {
          (this.objects = []),
            (this.lights = []),
            (this.addObject = function(n) {
              this.objects.push(n);
            }),
            (this.removeObject = function(n) {
              for (var i = 0, e = this.objects.length; i < e; i++)
                if (n == this.objects[i]) return void this.objects.splice(i, 1);
            }),
            (this.addLight = function(n) {
              this.lights.push(n);
            }),
            (this.removeLight = function(n) {
              for (var i = 0, e = this.lights.length; i < e; i++)
                if (n == this.lights[i]) return void this.lights.splice(i, 1);
            }),
            (this.add = function(n) {
              this.addObject(n);
            }),
            (this.toString = function() {
              return "THREE.Scene ( " + this.objects + " )";
            });
        }),
        (a.Projector = function() {
          var n,
            i,
            e,
            t,
            o,
            l,
            r,
            s,
            p = null,
            h = [],
            u = [],
            c = [],
            m = [],
            g = new a.Vector4(),
            y = new a.Matrix4(),
            d = new a.Matrix4();
          this.projectScene = function(f, b) {
            var z, v, x, S, w, _, M, C, L, P, k, R, D, F, A, Y, B, T, j;
            for (
              p = [],
                i = 0,
                t = 0,
                l = 0,
                s = 0,
                b.autoUpdateMatrix && b.updateMatrix(),
                y.multiply(b.projectionMatrix, b.matrix),
                M = f.objects,
                z = 0,
                v = M.length;
              z < v;
              z++
            )
              if (
                ((C = M[z]),
                (L = C.matrix),
                C.autoUpdateMatrix && C.updateMatrix(),
                C instanceof a.Mesh)
              ) {
                for (
                  d.multiply(y, L),
                    P = C.geometry.vertices,
                    x = 0,
                    S = P.length;
                  x < S;
                  x++
                )
                  (k = P[x]),
                    (R = k.positionScreen),
                    R.copy(k.position),
                    d.transform(R),
                    (k.__visible = R.z > 0 && R.z < 1);
                for (F = C.geometry.faces, w = 0, _ = F.length; w < _; w++)
                  (A = F[w]),
                    A instanceof a.Face3
                      ? ((Y = P[A.a]),
                        (B = P[A.b]),
                        (T = P[A.c]),
                        Y.__visible &&
                          B.__visible &&
                          T.__visible &&
                          (C.doubleSided ||
                            C.flipSided !=
                              (T.positionScreen.x - Y.positionScreen.x) *
                                (B.positionScreen.y - Y.positionScreen.y) -
                                (T.positionScreen.y - Y.positionScreen.y) *
                                  (B.positionScreen.x - Y.positionScreen.x) <
                                0) &&
                          ((n = h[i] = h[i] || new a.RenderableFace3()),
                          n.v1.copy(Y.positionScreen),
                          n.v2.copy(B.positionScreen),
                          n.v3.copy(T.positionScreen),
                          n.centroidWorld.copy(A.centroid),
                          C.matrix.transform(n.centroidWorld),
                          n.normalWorld.copy(A.normal),
                          C.matrixRotation.transform(n.normalWorld),
                          (n.z = Math.max(
                            Y.positionScreen.z,
                            Math.max(B.positionScreen.z, T.positionScreen.z)
                          )),
                          (n.meshMaterial = C.material),
                          (n.faceMaterial = A.material),
                          (n.overdraw = C.overdraw),
                          (n.uvs = C.geometry.uvs[w]),
                          (n.color = A.color),
                          p.push(n),
                          i++))
                      : A instanceof a.Face4 &&
                        ((Y = P[A.a]),
                        (B = P[A.b]),
                        (T = P[A.c]),
                        (j = P[A.d]),
                        Y.__visible &&
                          B.__visible &&
                          T.__visible &&
                          j.__visible &&
                          (C.doubleSided ||
                            C.flipSided !=
                              ((j.positionScreen.x - Y.positionScreen.x) *
                                (B.positionScreen.y - Y.positionScreen.y) -
                                (j.positionScreen.y - Y.positionScreen.y) *
                                  (B.positionScreen.x - Y.positionScreen.x) <
                                0 ||
                                (B.positionScreen.x - T.positionScreen.x) *
                                  (j.positionScreen.y - T.positionScreen.y) -
                                  (B.positionScreen.y - T.positionScreen.y) *
                                    (j.positionScreen.x - T.positionScreen.x) <
                                  0)) &&
                          ((e = u[t] = u[t] || new a.RenderableFace4()),
                          e.v1.copy(Y.positionScreen),
                          e.v2.copy(B.positionScreen),
                          e.v3.copy(T.positionScreen),
                          e.v4.copy(j.positionScreen),
                          e.centroidWorld.copy(A.centroid),
                          C.matrix.transform(e.centroidWorld),
                          e.normalWorld.copy(A.normal),
                          C.matrixRotation.transform(e.normalWorld),
                          (e.z = Math.max(
                            Y.positionScreen.z,
                            Math.max(
                              B.positionScreen.z,
                              Math.max(T.positionScreen.z, j.positionScreen.z)
                            )
                          )),
                          (e.meshMaterial = C.material),
                          (e.faceMaterial = A.material),
                          (e.overdraw = C.overdraw),
                          (e.uvs = C.geometry.uvs[w]),
                          (e.color = A.color),
                          p.push(e),
                          t++));
              } else if (C instanceof a.Line)
                for (
                  d.multiply(y, L),
                    P = C.geometry.vertices,
                    x = 0,
                    S = P.length;
                  x < S;
                  x++
                )
                  (k = P[x]),
                    (R = k.positionScreen),
                    R.copy(k.position),
                    d.transform(R),
                    (k.__visible = R.z > 0 && R.z < 1),
                    x > 0 &&
                      ((D = C.geometry.vertices[x - 1]),
                      k.__visible &&
                        D.__visible &&
                        ((o = c[l] = c[l] || new a.RenderableLine()),
                        o.v1.copy(k.positionScreen),
                        o.v2.copy(D.positionScreen),
                        (o.z = Math.max(
                          k.positionScreen.z,
                          D.positionScreen.z
                        )),
                        (o.material = C.material),
                        p.push(o),
                        l++));
              else
                C instanceof a.Particle &&
                  (g.set(C.position.x, C.position.y, C.position.z, 1),
                  b.matrix.transform(g),
                  b.projectionMatrix.transform(g),
                  C.screen.set(g.x / g.w, g.y / g.w, g.z / g.w),
                  C.screen.z > 0 &&
                    C.screen.z < 1 &&
                    ((r = m[s] = m[s] || new a.RenderableParticle()),
                    (r.x = C.screen.x),
                    (r.y = C.screen.y),
                    (r.z = C.screen.z),
                    (r.rotation = C.rotation.z),
                    (r.scale.x =
                      C.scale.x *
                      Math.abs(
                        g.x / g.w -
                          (g.x + b.projectionMatrix.n11) /
                            (g.w + b.projectionMatrix.n14)
                      )),
                    (r.scale.y =
                      C.scale.y *
                      Math.abs(
                        g.y / g.w -
                          (g.y + b.projectionMatrix.n22) /
                            (g.w + b.projectionMatrix.n24)
                      )),
                    (r.material = C.material),
                    (r.color = C.color),
                    p.push(r),
                    s++));
            return (
              p.sort(function(n, i) {
                return i.z - n.z;
              }),
              p
            );
          };
        }),
        (a.DOMRenderer = function() {
          a.Renderer.call(this);
          var n,
            i,
            e,
            t,
            o = null,
            l = new a.Projector(),
            r = document.createElement("div");
          (this.domElement = r),
            (this.setSize = function(a, o) {
              (n = a), (i = o), (e = n / 2), (t = i / 2);
            }),
            (this.render = function(n, i) {
              var r, s, p, h, u, c, m, g, y;
              for (o = l.projectScene(n, i), r = 0, s = o.length; r < s; r++)
                if ((u = o[r]) instanceof a.RenderableParticle)
                  for (
                    g = u.x * e + e,
                      y = u.y * t + t,
                      p = 0,
                      h = u.material.length;
                    p < h;
                    p++
                  )
                    (c = u.material[p]) instanceof a.ParticleDOMMaterial &&
                      ((m = c.domElement),
                      (m.style.left = g + "px"),
                      (m.style.top = y + "px"));
            });
        }),
        (a.CanvasRenderer = function() {
          function n(n, i) {
            var e, t, o;
            for (i.setRGBA(1, 1, 1, 1), e = 0, t = n.lights.length; e < t; e++)
              (o = n.lights[e]) instanceof a.AmbientLight &&
                ((i.r *= o.color.r), (i.g *= o.color.g), (i.b *= o.color.b));
          }
          function i(n, i, e) {
            var t, o, l;
            for (t = 0, o = n.lights.length; t < o; t++)
              (l = n.lights[t]),
                l instanceof a.DirectionalLight
                  ? ((e.r += l.color.r), (e.g += l.color.g), (e.b += l.color.b))
                  : l instanceof a.PointLight &&
                    ((e.r += l.color.r),
                    (e.g += l.color.g),
                    (e.b += l.color.b));
          }
          function e(n, i, e) {
            var t, o, l, r;
            for (t = 0, o = n.lights.length; t < o; t++)
              (l = n.lights[t]),
                l instanceof a.DirectionalLight
                  ? (r = i.normalWorld.dot(l.position) * l.intensity) > 0 &&
                    ((e.r += l.color.r * r),
                    (e.g += l.color.g * r),
                    (e.b += l.color.b * r))
                  : l instanceof a.PointLight &&
                    (L.sub(l.position, i.centroidWorld),
                    L.normalize(),
                    (r = i.normalWorld.dot(L) * l.intensity) > 0 &&
                      ((e.r += l.color.r * r),
                      (e.g += l.color.g * r),
                      (e.b += l.color.b * r)));
          }
          function t(n, e, t, o, l) {
            var r, s, p, h, u, g, y, d, z;
            if (o instanceof a.ParticleCircleMaterial) {
              if (
                (x
                  ? (w.copyRGB(_),
                    i(l, t, w),
                    S.copyRGBA(o.color),
                    S.multiplySelfRGB(w),
                    S.updateStyleString())
                  : (S = o.color),
                (r = t.scale.x * c),
                (s = t.scale.y * m),
                v.set(n - r, e - s, n + r, e + s),
                !b.instersects(v))
              )
                return;
              f.save(),
                f.translate(n, e),
                f.rotate(-t.rotation),
                f.scale(r, s),
                f.beginPath(),
                f.arc(0, 0, 1, 0, M, !0),
                f.closePath(),
                (f.fillStyle = S.__styleString),
                f.fill(),
                f.restore();
            } else if (o instanceof a.ParticleBitmapMaterial) {
              if (
                ((y = o.bitmap),
                (d = y.width / 2),
                (z = y.height / 2),
                (p = t.scale.x * c),
                (h = t.scale.y * m),
                (r = p * d),
                (s = h * z),
                (u = o.offset.x * p),
                (g = o.offset.y * h),
                v.set(n + u - r, e + g - s, n + u + r, e + g + s),
                !b.instersects(v))
              )
                return;
              f.save(),
                f.translate(n, e),
                f.rotate(-t.rotation),
                f.scale(p, -h),
                f.translate(-d + o.offset.x, -z - o.offset.y),
                f.drawImage(y, 0, 0),
                f.restore();
            }
          }
          function o(n, e, t, o, l, r, s) {
            r instanceof a.LineColorMaterial &&
              (x
                ? (w.copyRGB(_),
                  i(s, l, w),
                  S.copyRGBA(r.color),
                  S.multiplySelfRGB(w),
                  S.updateStyleString())
                : (S = r.color),
              (f.lineWidth = r.lineWidth),
              (f.lineJoin = "round"),
              (f.lineCap = "round"),
              (f.strokeStyle = S.__styleString),
              f.stroke(),
              v.inflate(f.lineWidth));
          }
          function l(n, i, t, o, l, r, p, h, u) {
            var c, m, g;
            h instanceof a.MeshColorFillMaterial
              ? (x
                  ? (w.copyRGB(_),
                    e(u, p, w),
                    S.copyRGBA(h.color),
                    S.multiplySelfRGB(w),
                    S.updateStyleString())
                  : (S = h.color),
                f.beginPath(),
                f.moveTo(n, i),
                f.lineTo(t, o),
                f.lineTo(l, r),
                f.lineTo(n, i),
                f.closePath(),
                (f.fillStyle = S.__styleString),
                f.fill())
              : h instanceof a.MeshColorStrokeMaterial
              ? (x
                  ? (w.copyRGB(_),
                    e(u, p, w),
                    S.copyRGBA(h.color),
                    S.multiplySelfRGB(w),
                    S.updateStyleString())
                  : (S = h.color),
                f.beginPath(),
                f.moveTo(n, i),
                f.lineTo(t, o),
                f.lineTo(l, r),
                f.lineTo(n, i),
                f.closePath(),
                (f.lineWidth = h.lineWidth),
                (f.lineJoin = "round"),
                (f.lineCap = "round"),
                (f.strokeStyle = S.__styleString),
                f.stroke(),
                v.inflate(f.lineWidth))
              : h instanceof a.MeshBitmapMaterial &&
                ((c = h.bitmap),
                (m = c.width - 1),
                (g = c.height - 1),
                P.copy(p.uvs[0]),
                k.copy(p.uvs[1]),
                R.copy(p.uvs[2]),
                (P.u *= m),
                (P.v *= g),
                (k.u *= m),
                (k.v *= g),
                (R.u *= m),
                (R.v *= g),
                s(c, n, i, t, o, l, r, P.u, P.v, k.u, k.v, R.u, R.v));
          }
          function r(n, i, t, o, l, r, p, h, u, c, m, g, y, d, b) {
            var z, M, C;
            d instanceof a.MeshColorFillMaterial
              ? (x
                  ? (w.copyRGB(_),
                    e(b, y, w),
                    S.copyRGBA(d.color),
                    S.multiplySelfRGB(w),
                    S.updateStyleString())
                  : (S = d.color),
                f.beginPath(),
                f.moveTo(n, i),
                f.lineTo(t, o),
                f.lineTo(l, r),
                f.lineTo(p, h),
                f.lineTo(n, i),
                f.closePath(),
                (f.fillStyle = S.__styleString),
                f.fill())
              : d instanceof a.MeshColorStrokeMaterial
              ? (x
                  ? (w.copyRGB(_),
                    e(b, y, w),
                    S.copyRGBA(d.color),
                    S.multiplySelfRGB(w),
                    S.updateStyleString())
                  : (S = d.color),
                f.beginPath(),
                f.moveTo(n, i),
                f.lineTo(t, o),
                f.lineTo(l, r),
                f.lineTo(p, h),
                f.lineTo(n, i),
                f.closePath(),
                (f.lineWidth = d.lineWidth),
                (f.lineJoin = "round"),
                (f.lineCap = "round"),
                (f.strokeStyle = S.__styleString),
                f.stroke(),
                v.inflate(f.lineWidth))
              : d instanceof a.MeshBitmapMaterial &&
                ((z = d.bitmap),
                (M = z.width - 1),
                (C = z.height - 1),
                P.copy(y.uvs[0]),
                k.copy(y.uvs[1]),
                R.copy(y.uvs[2]),
                D.copy(y.uvs[3]),
                (P.u *= M),
                (P.v *= C),
                (k.u *= M),
                (k.v *= C),
                (R.u *= M),
                (R.v *= C),
                (D.u *= M),
                (D.v *= C),
                s(z, n, i, t, o, p, h, P.u, P.v, k.u, k.v, D.u, D.v),
                s(z, u, c, l, r, m, g, k.u, k.v, R.u, R.v, D.u, D.v));
          }
          function s(n, i, e, a, t, o, l, r, s, p, h, u, c) {
            var m, g, y, d, b, z, v;
            f.beginPath(),
              f.moveTo(i, e),
              f.lineTo(a, t),
              f.lineTo(o, l),
              f.lineTo(i, e),
              f.closePath(),
              f.save(),
              f.clip(),
              (m = r * (c - h) - p * c + u * h + (p - u) * s),
              (g = -(s * (o - a) - h * o + c * a + (h - c) * i) / m),
              (y = (h * l + s * (t - l) - c * t + (c - h) * e) / m),
              (d = (r * (o - a) - p * o + u * a + (p - u) * i) / m),
              (b = -(p * l + r * (t - l) - u * t + (u - p) * e) / m),
              (z =
                (r * (c * a - h * o) +
                  s * (p * o - u * a) +
                  (u * h - p * c) * i) /
                m),
              (v =
                (r * (c * t - h * l) +
                  s * (p * l - u * t) +
                  (u * h - p * c) * e) /
                m),
              f.transform(g, y, d, b, z, v),
              f.drawImage(n, 0, 0),
              f.restore();
          }
          function p(n, i) {
            C.sub(i, n),
              C.unit(),
              C.multiplyScalar(0.75),
              i.addSelf(C),
              n.subSelf(C);
          }
          var h,
            u,
            c,
            m,
            g = null,
            y = new a.Projector(),
            d = document.createElement("canvas"),
            f = d.getContext("2d"),
            b = new a.Rectangle(),
            z = new a.Rectangle(),
            v = new a.Rectangle(),
            x = !1,
            S = new a.Color(4294967295),
            w = new a.Color(4294967295),
            _ = new a.Color(4294967295),
            M = 2 * Math.PI,
            C = new a.Vector2(),
            L = new a.Vector3(),
            P = new a.UV(),
            k = new a.UV(),
            R = new a.UV(),
            D = new a.UV(),
            F = new a.Vector2(),
            A = new a.Vector2();
          (this.domElement = d),
            (this.autoClear = !0),
            (this.setSize = function(n, i) {
              (h = n),
                (u = i),
                (c = h / 2),
                (m = u / 2),
                (d.width = h),
                (d.height = u),
                b.set(-c, -m, c, m);
            }),
            (this.clear = function() {
              z.isEmpty() ||
                (z.inflate(1),
                z.minSelf(b),
                f.setTransform(1, 0, 0, -1, c, m),
                f.clearRect(z.getX(), z.getY(), z.getWidth(), z.getHeight()),
                z.empty());
            }),
            (this.render = function(i, e) {
              var s, h, u, d, S, w, M, C, L, P, k, R, D, Y, B, T, j, E, H, N;
              for (
                this.autoClear && this.clear(),
                  g = y.projectScene(i, e),
                  f.setTransform(1, 0, 0, -1, c, m),
                  x = i.lights.length > 0,
                  x && n(i, _),
                  s = 0,
                  h = g.length;
                s < h;
                s++
              ) {
                if (((u = g[s]), v.empty(), u instanceof a.RenderableParticle))
                  for (
                    L = u.x * c, P = u.y * m, d = 0, S = u.material.length;
                    d < S;
                    d++
                  )
                    (C = u.material[d]), t(L, P, u, C, i);
                else if (u instanceof a.RenderableLine) {
                  if (
                    ((L = u.v1.x * c),
                    (P = u.v1.y * m),
                    (k = u.v2.x * c),
                    (R = u.v2.y * m),
                    v.addPoint(L, P),
                    v.addPoint(k, R),
                    !b.instersects(v))
                  )
                    continue;
                  for (
                    f.beginPath(),
                      f.moveTo(L, P),
                      f.lineTo(k, R),
                      f.closePath(),
                      d = 0,
                      S = u.material.length;
                    d < S;
                    d++
                  )
                    (C = u.material[d]), o(L, P, k, R, u, C, i);
                } else if (u instanceof a.RenderableFace3) {
                  if (
                    ((u.v1.x *= c),
                    (u.v1.y *= m),
                    (u.v2.x *= c),
                    (u.v2.y *= m),
                    (u.v3.x *= c),
                    (u.v3.y *= m),
                    u.overdraw && (p(u.v1, u.v2), p(u.v2, u.v3), p(u.v3, u.v1)),
                    (L = u.v1.x),
                    (P = u.v1.y),
                    (k = u.v2.x),
                    (R = u.v2.y),
                    (D = u.v3.x),
                    (Y = u.v3.y),
                    v.addPoint(L, P),
                    v.addPoint(k, R),
                    v.addPoint(D, Y),
                    !b.instersects(v))
                  )
                    continue;
                  for (d = 0, S = u.meshMaterial.length; d < S; )
                    if ((C = u.meshMaterial[d++]) instanceof a.MeshFaceMaterial)
                      for (w = 0, M = u.faceMaterial.length; w < M; )
                        (C = u.faceMaterial[w++]), l(L, P, k, R, D, Y, u, C, i);
                    else l(L, P, k, R, D, Y, u, C, i);
                } else if (u instanceof a.RenderableFace4) {
                  if (
                    ((u.v1.x *= c),
                    (u.v1.y *= m),
                    (u.v2.x *= c),
                    (u.v2.y *= m),
                    (u.v3.x *= c),
                    (u.v3.y *= m),
                    (u.v4.x *= c),
                    (u.v4.y *= m),
                    F.copy(u.v2),
                    A.copy(u.v4),
                    u.overdraw && (p(u.v1, u.v2), p(u.v2, u.v4), p(u.v4, u.v1)),
                    (L = u.v1.x),
                    (P = u.v1.y),
                    (k = u.v2.x),
                    (R = u.v2.y),
                    (B = u.v4.x),
                    (T = u.v4.y),
                    u.overdraw && (p(u.v3, F), p(u.v3, A)),
                    (D = u.v3.x),
                    (Y = u.v3.y),
                    (j = F.x),
                    (E = F.y),
                    (H = A.x),
                    (N = A.y),
                    v.addPoint(L, P),
                    v.addPoint(k, R),
                    v.addPoint(D, Y),
                    v.addPoint(B, T),
                    !b.instersects(v))
                  )
                    continue;
                  for (d = 0, S = u.meshMaterial.length; d < S; )
                    if ((C = u.meshMaterial[d++]) instanceof a.MeshFaceMaterial)
                      for (w = 0, M = u.faceMaterial.length; w < M; )
                        (C = u.faceMaterial[w++]),
                          r(L, P, k, R, D, Y, B, T, j, E, H, N, u, C, i);
                    else r(L, P, k, R, D, Y, B, T, j, E, H, N, u, C, i);
                }
                z.addRectangle(v);
              }
              f.setTransform(1, 0, 0, 1, 0, 0);
            });
        }),
        (a.SVGRenderer = function() {
          function n(n, i) {
            var e, t, o;
            for (i.setRGBA(1, 1, 1, 1), e = 0, t = n.lights.length; e < t; e++)
              (o = n.lights[e]) instanceof a.AmbientLight &&
                ((i.r *= o.color.r), (i.g *= o.color.g), (i.b *= o.color.b));
          }
          function i(n, i, e) {
            var t, o, l;
            for (t = 0, o = n.lights.length; t < o; t++)
              (l = n.lights[t]),
                l instanceof a.DirectionalLight
                  ? ((e.r += l.color.r), (e.g += l.color.g), (e.b += l.color.b))
                  : l instanceof a.PointLight &&
                    ((e.r += l.color.r),
                    (e.g += l.color.g),
                    (e.b += l.color.b));
          }
          function e(n, i, e) {
            var t, o, l, r;
            for (t = 0, o = n.lights.length; t < o; t++)
              (l = n.lights[t]),
                l instanceof a.DirectionalLight
                  ? (r = i.normalWorld.dot(l.position) * l.intensity) > 0 &&
                    ((e.r += l.color.r * r),
                    (e.g += l.color.g * r),
                    (e.b += l.color.b * r))
                  : l instanceof a.PointLight &&
                    (M.sub(l.position, i.centroidWorld),
                    M.normalize(),
                    (r = i.normalWorld.dot(M) * l.intensity) > 0 &&
                      ((e.r += l.color.r * r),
                      (e.g += l.color.g * r),
                      (e.b += l.color.b * r)));
          }
          function t(n, e, t, o, l) {
            (m = s(y++)),
              m.setAttribute("cx", n),
              m.setAttribute("cy", e),
              m.setAttribute("r", t.scale.x * u),
              o instanceof a.ParticleCircleMaterial &&
                (x
                  ? (w.copyRGB(_),
                    i(l, t, w),
                    S.copyRGBA(o.color),
                    S.multiplySelfRGB(w),
                    S.updateStyleString())
                  : (S = o.color),
                m.setAttribute("style", "fill: " + S.__styleString)),
              b.appendChild(m);
          }
          function o(n, i, t, o, l, s, p, h, u) {
            (m = r(g++)),
              m.setAttribute(
                "d",
                "M " +
                  n +
                  " " +
                  i +
                  " L " +
                  t +
                  " " +
                  o +
                  " L " +
                  l +
                  "," +
                  s +
                  "z"
              ),
              h instanceof a.MeshColorFillMaterial
                ? (x
                    ? (w.copyRGB(_),
                      e(u, p, w),
                      S.copyRGBA(h.color),
                      S.multiplySelfRGB(w),
                      S.updateStyleString())
                    : (S = h.color),
                  m.setAttribute("style", "fill: " + S.__styleString))
                : h instanceof a.MeshColorStrokeMaterial &&
                  (x
                    ? (w.copyRGB(_),
                      e(u, p, w),
                      S.copyRGBA(h.color),
                      S.multiplySelfRGB(w),
                      S.updateStyleString())
                    : (S = h.color),
                  m.setAttribute(
                    "style",
                    "fill: none; stroke: " +
                      S.__styleString +
                      "; stroke-width: " +
                      h.lineWidth +
                      "; stroke-linecap: round; stroke-linejoin: round"
                  )),
              b.appendChild(m);
          }
          function l(n, i, t, o, l, s, p, h, u, c, y) {
            (m = r(g++)),
              m.setAttribute(
                "d",
                "M " +
                  n +
                  " " +
                  i +
                  " L " +
                  t +
                  " " +
                  o +
                  " L " +
                  l +
                  "," +
                  s +
                  " L " +
                  p +
                  "," +
                  h +
                  "z"
              ),
              c instanceof a.MeshColorFillMaterial
                ? (x
                    ? (w.copyRGB(_),
                      e(y, u, w),
                      S.copyRGBA(c.color),
                      S.multiplySelfRGB(w),
                      S.updateStyleString())
                    : (S = c.color),
                  m.setAttribute("style", "fill: " + S.__styleString))
                : c instanceof a.MeshColorStrokeMaterial &&
                  (x
                    ? (w.copyRGB(_),
                      e(y, u, w),
                      S.copyRGBA(c.color),
                      S.multiplySelfRGB(w),
                      S.updateStyleString())
                    : (S = c.color),
                  m.setAttribute(
                    "style",
                    "fill: none; stroke: " +
                      S.__styleString +
                      "; stroke-width: " +
                      c.lineWidth +
                      "; stroke-linecap: round; stroke-linejoin: round"
                  )),
              b.appendChild(m);
          }
          function r(n) {
            return null == C[n]
              ? ((C[n] = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "path"
                )),
                0 == P && C[n].setAttribute("shape-rendering", "crispEdges"),
                C[n])
              : C[n];
          }
          function s(n) {
            return null == L[n]
              ? ((L[n] = document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "circle"
                )),
                0 == P && L[n].setAttribute("shape-rendering", "crispEdges"),
                L[n])
              : L[n];
          }
          var p,
            h,
            u,
            c,
            m,
            g,
            y,
            d = null,
            f = new a.Projector(),
            b = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            z = new a.Rectangle(),
            v = new a.Rectangle(),
            x = !1,
            S = new a.Color(4294967295),
            w = new a.Color(4294967295),
            _ = new a.Color(4294967295),
            M = new a.Vector3(),
            C = [],
            L = [],
            P = 1;
          (this.domElement = b),
            (this.autoClear = !0),
            (this.setQuality = function(n) {
              switch (n) {
                case "high":
                  P = 1;
                  break;
                case "low":
                  P = 0;
              }
            }),
            (this.setSize = function(n, i) {
              (p = n),
                (h = i),
                (u = p / 2),
                (c = h / 2),
                b.setAttribute("viewBox", -u + " " + -c + " " + p + " " + h),
                b.setAttribute("width", p),
                b.setAttribute("height", h),
                z.set(-u, -c, u, c);
            }),
            (this.clear = function() {
              for (; b.childNodes.length > 0; ) b.removeChild(b.childNodes[0]);
            }),
            (this.render = function(i, e) {
              var r, s, p, h, m, b, S, w, M, C, L, P, k, R, D, F;
              for (
                this.autoClear && this.clear(),
                  d = f.projectScene(i, e),
                  g = 0,
                  y = 0,
                  x = i.lights.length > 0,
                  x && n(i, _),
                  r = 0,
                  s = d.length;
                r < s;
                r++
              )
                if (((S = d[r]), v.empty(), S instanceof a.RenderableParticle))
                  for (
                    M = S.x * u, C = S.y * -c, p = 0, h = S.material.length;
                    p < h;
                    p++
                  )
                    (w = S.material[p]), t(M, C, S, w, i);
                else if (S instanceof a.RenderableFace3) {
                  if (
                    ((M = S.v1.x * u),
                    (C = S.v1.y * -c),
                    (L = S.v2.x * u),
                    (P = S.v2.y * -c),
                    (k = S.v3.x * u),
                    (R = S.v3.y * -c),
                    v.addPoint(M, C),
                    v.addPoint(L, P),
                    v.addPoint(k, R),
                    !z.instersects(v))
                  )
                    continue;
                  for (p = 0, h = S.meshMaterial.length; p < h; )
                    if ((w = S.meshMaterial[p++]) instanceof a.MeshFaceMaterial)
                      for (m = 0, b = S.faceMaterial.length; m < b; )
                        (w = S.faceMaterial[m++]), o(M, C, L, P, k, R, S, w, i);
                    else o(M, C, L, P, k, R, S, w, i);
                } else if (S instanceof a.RenderableFace4) {
                  if (
                    ((M = S.v1.x * u),
                    (C = S.v1.y * -c),
                    (L = S.v2.x * u),
                    (P = S.v2.y * -c),
                    (k = S.v3.x * u),
                    (R = S.v3.y * -c),
                    (D = S.v4.x * u),
                    (F = S.v4.y * -c),
                    v.addPoint(M, C),
                    v.addPoint(L, P),
                    v.addPoint(k, R),
                    v.addPoint(D, F),
                    !z.instersects(v))
                  )
                    continue;
                  for (p = 0, h = S.meshMaterial.length; p < h; )
                    if ((w = S.meshMaterial[p++]) instanceof a.MeshFaceMaterial)
                      for (m = 0, b = S.faceMaterial.length; m < b; )
                        (w = S.faceMaterial[m++]),
                          l(M, C, L, P, k, R, D, F, S, w, i);
                    else l(M, C, L, P, k, R, D, F, S, w, i);
                }
            });
        }),
        (a.WebGLRenderer = function() {
          function n(n, e) {
            var a;
            return (
              "fragment" == n
                ? (a = i.createShader(i.FRAGMENT_SHADER))
                : "vertex" == n && (a = i.createShader(i.VERTEX_SHADER)),
              i.shaderSource(a, e),
              i.compileShader(a),
              i.getShaderParameter(a, i.COMPILE_STATUS)
                ? a
                : (alert(i.getShaderInfoLog(a)), null)
            );
          }
          var i,
            e,
            t,
            o = document.createElement("canvas"),
            l = new a.Matrix4();
          (this.domElement = o),
            (this.autoClear = !0),
            (function() {
              try {
                i = o.getContext("experimental-webgl", { antialias: !0 });
              } catch (n) {}
              if (!i)
                throw (alert("WebGL not supported"),
                "cannot create webgl context");
              i.clearColor(0, 0, 0, 1),
                i.clearDepth(1),
                i.enable(i.DEPTH_TEST),
                i.depthFunc(i.LEQUAL),
                i.enable(i.BLEND),
                i.blendFunc(i.ONE, i.ONE_MINUS_SRC_ALPHA),
                i.clearColor(0, 0, 0, 0);
            })(),
            (function() {
              (e = i.createProgram()),
                i.attachShader(
                  e,
                  n(
                    "fragment",
                    [
                      "#ifdef GL_ES",
                      "precision highp float;",
                      "#endif",
                      "uniform sampler2D diffuse;",
                      "uniform vec4 uniformColor;",
                      "varying vec2 vertexUv;",
                      "varying vec3 lightWeighting;",
                      "varying vec3 vNormal;",
                      "uniform int material;",
                      "uniform vec4 mAmbient;",
                      "uniform vec4 mDiffuse;",
                      "uniform vec4 mSpecular;",
                      "uniform float mShininess;",
                      "varying vec3 pLightVectorPoint;",
                      "varying vec3 pLightVectorDirection;",
                      "varying vec3 pViewPosition;",
                      "void main(){",
                      "if(material==3) { ",
                      "vec3 lightVectorPoint = normalize(pLightVectorPoint);",
                      "vec3 lightVectorDir = normalize(pLightVectorDirection);",
                      "vec3 normal = normalize(vNormal);",
                      "vec3 viewPosition = normalize(pViewPosition);",
                      "vec3 halfVectorPoint = normalize(pLightVectorPoint + pViewPosition);",
                      "float dotNormalHalfPoint = dot(normal, halfVectorPoint);",
                      "float ambientCompPoint = 1.0;",
                      "float diffuseCompPoint = max(dot(normal, lightVectorPoint), 0.0);",
                      "float specularCompPoint = pow(dotNormalHalfPoint, mShininess);",
                      "vec4 ambientPoint  = mAmbient * ambientCompPoint;",
                      "vec4 diffusePoint  = mDiffuse * diffuseCompPoint;",
                      "vec4 specularPoint = mSpecular * specularCompPoint;",
                      "vec3 halfVectorDir = normalize(pLightVectorDirection + pViewPosition);",
                      "float dotNormalHalfDir = dot(normal, halfVectorDir);",
                      "float ambientCompDir = 1.0;",
                      "float diffuseCompDir = max(dot(normal, lightVectorDir), 0.0);",
                      "float specularCompDir = pow(dotNormalHalfDir, mShininess);",
                      "vec4 ambientDir  = mAmbient * ambientCompDir;",
                      "vec4 diffuseDir  = mDiffuse * diffuseCompDir;",
                      "vec4 specularDir = mSpecular * specularCompDir;",
                      "vec4 pointLight = ambientPoint + diffusePoint + specularPoint;",
                      "vec4 dirLight = ambientDir + diffuseDir + specularDir;",
                      "gl_FragColor = vec4((pointLight.xyz + dirLight.xyz) * lightWeighting, 1.0);",
                      "} else if(material==2) {",
                      "vec4 texelColor = texture2D(diffuse, vertexUv);",
                      "gl_FragColor = vec4(texelColor.rgb * lightWeighting, texelColor.a);",
                      "} else if(material==1) {",
                      "gl_FragColor = vec4(uniformColor.rgb * lightWeighting, uniformColor.a);",
                      "} else {",
                      "gl_FragColor = vec4(uniformColor.rgb * lightWeighting, uniformColor.a);",
                      "}",
                      "}"
                    ].join("\n")
                  )
                ),
                i.attachShader(
                  e,
                  n(
                    "vertex",
                    [
                      "attribute vec3 position;",
                      "attribute vec3 normal;",
                      "attribute vec2 uv;",
                      "uniform bool enableLighting;",
                      "uniform vec3 ambientColor;",
                      "uniform vec3 directionalColor;",
                      "uniform vec3 lightingDirection;",
                      "uniform vec3 pointColor;",
                      "uniform vec3 pointPosition;",
                      "uniform mat4 objMatrix;",
                      "uniform mat4 viewMatrix;",
                      "uniform mat4 modelViewMatrix;",
                      "uniform mat4 projectionMatrix;",
                      "uniform mat3 normalMatrix;",
                      "varying vec4 vertexColor;",
                      "varying vec2 vertexUv;",
                      "varying vec3 lightWeighting;",
                      "varying vec3 vNormal;",
                      "varying vec3 pLightVectorPoint;",
                      "varying vec3 pLightVectorDirection;",
                      "varying vec3 pViewPosition;",
                      "uniform vec3 cameraPosition;",
                      "void main(void) {",
                      "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
                      "vec3 transformedNormal = normalize(normalMatrix * normal);",
                      "vec4 lPosition = viewMatrix * vec4( pointPosition, 1.0 );",
                      "vec4 lDirection = viewMatrix * vec4( lightingDirection, 0.0 );",
                      "pLightVectorPoint = normalize(pointPosition.xyz - position.xyz);",
                      "pLightVectorDirection = normalize(lDirection.xyz);",
                      "vec4 mPosition = objMatrix * vec4( position, 1.0 );",
                      "pViewPosition = cameraPosition - mPosition.xyz;",
                      "if(!enableLighting) {",
                      "lightWeighting = vec3(1.0, 1.0, 1.0);",
                      "} else {",
                      "vec3 pointLight = normalize(lPosition.xyz - mvPosition.xyz);",
                      "float directionalLightWeighting = max(dot(transformedNormal, normalize(lDirection.xyz)), 0.0);",
                      "float pointLightWeighting = max(dot(transformedNormal, pointLight), 0.0);",
                      "lightWeighting = ambientColor + directionalColor * directionalLightWeighting + pointColor * pointLightWeighting;",
                      "}",
                      "vNormal = transformedNormal;",
                      "vertexUv = uv;",
                      "gl_Position = projectionMatrix * mvPosition;",
                      "}"
                    ].join("\n")
                  )
                ),
                i.linkProgram(e),
                i.getProgramParameter(e, i.LINK_STATUS) ||
                  alert("Could not initialise shaders"),
                i.useProgram(e),
                (e.viewMatrix = i.getUniformLocation(e, "viewMatrix")),
                (e.modelViewMatrix = i.getUniformLocation(
                  e,
                  "modelViewMatrix"
                )),
                (e.projectionMatrix = i.getUniformLocation(
                  e,
                  "projectionMatrix"
                )),
                (e.normalMatrix = i.getUniformLocation(e, "normalMatrix")),
                (e.objMatrix = i.getUniformLocation(e, "objMatrix")),
                (e.enableLighting = i.getUniformLocation(e, "enableLighting")),
                (e.ambientColor = i.getUniformLocation(e, "ambientColor")),
                (e.directionalColor = i.getUniformLocation(
                  e,
                  "directionalColor"
                )),
                (e.lightingDirection = i.getUniformLocation(
                  e,
                  "lightingDirection"
                )),
                (e.pointColor = i.getUniformLocation(e, "pointColor")),
                (e.pointPosition = i.getUniformLocation(e, "pointPosition")),
                (e.material = i.getUniformLocation(e, "material")),
                (e.uniformColor = i.getUniformLocation(e, "uniformColor")),
                (e.mAmbient = i.getUniformLocation(e, "mAmbient")),
                (e.mDiffuse = i.getUniformLocation(e, "mDiffuse")),
                (e.mSpecular = i.getUniformLocation(e, "mSpecular")),
                (e.mShininess = i.getUniformLocation(e, "mShininess")),
                (e.cameraPosition = i.getUniformLocation(e, "cameraPosition")),
                (e.position = i.getAttribLocation(e, "position")),
                i.enableVertexAttribArray(e.position),
                (e.normal = i.getAttribLocation(e, "normal")),
                i.enableVertexAttribArray(e.normal),
                (e.uv = i.getAttribLocation(e, "uv")),
                i.enableVertexAttribArray(e.uv),
                (e.diffuse = i.getUniformLocation(e, "diffuse")),
                i.uniform1i(e.diffuse, 0),
                (e.viewMatrixArray = new Float32Array(16)),
                (e.modelViewMatrixArray = new Float32Array(16)),
                (e.projectionMatrixArray = new Float32Array(16));
            })(),
            (this.setSize = function(n, e) {
              (o.width = n),
                (o.height = e),
                i.viewport(0, 0, o.width, o.height);
            }),
            (this.clear = function() {
              i.clear(i.COLOR_BUFFER_BIT | i.DEPTH_BUFFER_BIT);
            }),
            (this.setupLights = function(n) {
              var t, o, l, r, s, p;
              for (
                i.uniform1i(e.enableLighting, n.lights.length),
                  t = 0,
                  o = n.lights.length;
                t < o;
                t++
              )
                (p = n.lights[t]),
                  p instanceof a.AmbientLight
                    ? ((l = p.color),
                      i.uniform3f(e.ambientColor, l.r, l.g, l.b))
                    : p instanceof a.DirectionalLight
                    ? ((l = p.color),
                      (r = p.position),
                      (s = p.intensity),
                      i.uniform3f(e.lightingDirection, r.x, r.y, r.z),
                      i.uniform3f(
                        e.directionalColor,
                        l.r * s,
                        l.g * s,
                        l.b * s
                      ))
                    : p instanceof a.PointLight &&
                      ((l = p.color),
                      (r = p.position),
                      (s = p.intensity),
                      i.uniform3f(e.pointPosition, r.x, r.y, r.z),
                      i.uniform3f(e.pointColor, l.r * s, l.g * s, l.b * s));
            }),
            (this.createBuffers = function(n, e) {
              var t,
                o,
                l,
                r,
                s,
                p,
                h,
                u,
                c,
                m,
                g,
                y = n.materialFaceGroup[e],
                d = [],
                f = [],
                b = [],
                z = [],
                v = [],
                x = 0;
              for (t = 0, o = y.faces.length; t < o; t++)
                (l = y.faces[t]),
                  (r = n.geometry.faces[l]),
                  (s = r.vertexNormals),
                  (p = r.normal),
                  (h = n.geometry.uvs[l]),
                  r instanceof a.Face3
                    ? ((u = n.geometry.vertices[r.a].position),
                      (c = n.geometry.vertices[r.b].position),
                      (m = n.geometry.vertices[r.c].position),
                      b.push(u.x, u.y, u.z),
                      b.push(c.x, c.y, c.z),
                      b.push(m.x, m.y, m.z),
                      3 == s.length
                        ? (z.push(s[0].x, s[0].y, s[0].z),
                          z.push(s[1].x, s[1].y, s[1].z),
                          z.push(s[2].x, s[2].y, s[2].z))
                        : (z.push(p.x, p.y, p.z),
                          z.push(p.x, p.y, p.z),
                          z.push(p.x, p.y, p.z)),
                      h &&
                        (v.push(h[0].u, h[0].v),
                        v.push(h[1].u, h[1].v),
                        v.push(h[2].u, h[2].v)),
                      d.push(x, x + 1, x + 2),
                      f.push(x, x + 1),
                      f.push(x, x + 2),
                      f.push(x + 1, x + 2),
                      (x += 3))
                    : r instanceof a.Face4 &&
                      ((u = n.geometry.vertices[r.a].position),
                      (c = n.geometry.vertices[r.b].position),
                      (m = n.geometry.vertices[r.c].position),
                      (g = n.geometry.vertices[r.d].position),
                      b.push(u.x, u.y, u.z),
                      b.push(c.x, c.y, c.z),
                      b.push(m.x, m.y, m.z),
                      b.push(g.x, g.y, g.z),
                      4 == s.length
                        ? (z.push(s[0].x, s[0].y, s[0].z),
                          z.push(s[1].x, s[1].y, s[1].z),
                          z.push(s[2].x, s[2].y, s[2].z),
                          z.push(s[3].x, s[3].y, s[3].z))
                        : (z.push(p.x, p.y, p.z),
                          z.push(p.x, p.y, p.z),
                          z.push(p.x, p.y, p.z),
                          z.push(p.x, p.y, p.z)),
                      h &&
                        (v.push(h[0].u, h[0].v),
                        v.push(h[1].u, h[1].v),
                        v.push(h[2].u, h[2].v),
                        v.push(h[3].u, h[3].v)),
                      d.push(x, x + 1, x + 2),
                      d.push(x, x + 2, x + 3),
                      f.push(x, x + 1),
                      f.push(x, x + 2),
                      f.push(x, x + 3),
                      f.push(x + 1, x + 2),
                      f.push(x + 2, x + 3),
                      (x += 4));
              b.length &&
                ((y.__webGLVertexBuffer = i.createBuffer()),
                i.bindBuffer(i.ARRAY_BUFFER, y.__webGLVertexBuffer),
                i.bufferData(
                  i.ARRAY_BUFFER,
                  new Float32Array(b),
                  i.STATIC_DRAW
                ),
                (y.__webGLNormalBuffer = i.createBuffer()),
                i.bindBuffer(i.ARRAY_BUFFER, y.__webGLNormalBuffer),
                i.bufferData(
                  i.ARRAY_BUFFER,
                  new Float32Array(z),
                  i.STATIC_DRAW
                ),
                (y.__webGLUVBuffer = i.createBuffer()),
                i.bindBuffer(i.ARRAY_BUFFER, y.__webGLUVBuffer),
                i.bufferData(
                  i.ARRAY_BUFFER,
                  new Float32Array(v),
                  i.STATIC_DRAW
                ),
                (y.__webGLFaceBuffer = i.createBuffer()),
                i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, y.__webGLFaceBuffer),
                i.bufferData(
                  i.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array(d),
                  i.STATIC_DRAW
                ),
                (y.__webGLLineBuffer = i.createBuffer()),
                i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, y.__webGLLineBuffer),
                i.bufferData(
                  i.ELEMENT_ARRAY_BUFFER,
                  new Uint16Array(f),
                  i.STATIC_DRAW
                ),
                (y.__webGLFaceCount = d.length),
                (y.__webGLLineCount = f.length));
            }),
            (this.renderBuffer = function(n, t) {
              n instanceof a.MeshPhongMaterial
                ? ((mAmbient = n.ambient),
                  (mDiffuse = n.diffuse),
                  (mSpecular = n.specular),
                  i.uniform4f(
                    e.mAmbient,
                    mAmbient.r,
                    mAmbient.g,
                    mAmbient.b,
                    n.opacity
                  ),
                  i.uniform4f(
                    e.mDiffuse,
                    mDiffuse.r,
                    mDiffuse.g,
                    mDiffuse.b,
                    n.opacity
                  ),
                  i.uniform4f(
                    e.mSpecular,
                    mSpecular.r,
                    mSpecular.g,
                    mSpecular.b,
                    n.opacity
                  ),
                  i.uniform1f(e.mShininess, n.shininess),
                  i.uniform1i(e.material, 3))
                : n instanceof a.MeshColorFillMaterial
                ? ((color = n.color),
                  i.uniform4f(
                    e.uniformColor,
                    color.r * color.a,
                    color.g * color.a,
                    color.b * color.a,
                    color.a
                  ),
                  i.uniform1i(e.material, 0))
                : n instanceof a.MeshColorStrokeMaterial
                ? ((lineWidth = n.lineWidth),
                  (color = n.color),
                  i.uniform4f(
                    e.uniformColor,
                    color.r * color.a,
                    color.g * color.a,
                    color.b * color.a,
                    color.a
                  ),
                  i.uniform1i(e.material, 1))
                : n instanceof a.MeshBitmapMaterial &&
                  (!n.__webGLTexture &&
                    n.loaded &&
                    ((n.__webGLTexture = i.createTexture()),
                    i.bindTexture(i.TEXTURE_2D, n.__webGLTexture),
                    i.texImage2D(
                      i.TEXTURE_2D,
                      0,
                      i.RGBA,
                      i.RGBA,
                      i.UNSIGNED_BYTE,
                      n.bitmap
                    ),
                    i.texParameteri(
                      i.TEXTURE_2D,
                      i.TEXTURE_MAG_FILTER,
                      i.LINEAR
                    ),
                    i.texParameteri(
                      i.TEXTURE_2D,
                      i.TEXTURE_MIN_FILTER,
                      i.LINEAR_MIPMAP_LINEAR
                    ),
                    i.generateMipmap(i.TEXTURE_2D),
                    i.bindTexture(i.TEXTURE_2D, null)),
                  i.activeTexture(i.TEXTURE0),
                  i.bindTexture(i.TEXTURE_2D, n.__webGLTexture),
                  i.uniform1i(e.diffuse, 0),
                  i.uniform1i(e.material, 2)),
                i.bindBuffer(i.ARRAY_BUFFER, t.__webGLVertexBuffer),
                i.vertexAttribPointer(e.position, 3, i.FLOAT, !1, 0, 0),
                i.bindBuffer(i.ARRAY_BUFFER, t.__webGLNormalBuffer),
                i.vertexAttribPointer(e.normal, 3, i.FLOAT, !1, 0, 0),
                n instanceof a.MeshBitmapMaterial
                  ? (i.bindBuffer(i.ARRAY_BUFFER, t.__webGLUVBuffer),
                    i.enableVertexAttribArray(e.uv),
                    i.vertexAttribPointer(e.uv, 2, i.FLOAT, !1, 0, 0))
                  : i.disableVertexAttribArray(e.uv),
                n instanceof a.MeshBitmapMaterial ||
                n instanceof a.MeshColorFillMaterial ||
                n instanceof a.MeshPhongMaterial
                  ? (i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.__webGLFaceBuffer),
                    i.drawElements(
                      i.TRIANGLES,
                      t.__webGLFaceCount,
                      i.UNSIGNED_SHORT,
                      0
                    ))
                  : n instanceof a.MeshColorStrokeMaterial &&
                    (i.lineWidth(lineWidth),
                    i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, t.__webGLLineBuffer),
                    i.drawElements(
                      i.LINES,
                      t.__webGLLineCount,
                      i.UNSIGNED_SHORT,
                      0
                    ));
            }),
            (this.renderMesh = function(n, i) {
              var e, t, o, l, r, s, p, h;
              for (r in n.materialFaceGroup)
                for (
                  h = n.materialFaceGroup[r],
                    h.__webGLVertexBuffer || this.createBuffers(n, r),
                    o = 0,
                    l = n.material.length;
                  o < l;
                  o++
                )
                  if ((p = n.material[o]) instanceof a.MeshFaceMaterial)
                    for (e = 0, t = h.material.length; e < t; e++)
                      (s = h.material[e]), this.renderBuffer(s, h);
                  else (s = p), this.renderBuffer(s, h);
            }),
            (this.setupMatrices = function(n, o) {
              n.autoUpdateMatrix && n.updateMatrix(),
                l.multiply(o.matrix, n.matrix),
                (e.viewMatrixArray = new Float32Array(o.matrix.flatten())),
                (e.modelViewMatrixArray = new Float32Array(l.flatten())),
                (e.projectionMatrixArray = new Float32Array(
                  o.projectionMatrix.flatten()
                )),
                (t = a.Matrix4.makeInvert3x3(l).transpose()),
                (e.normalMatrixArray = new Float32Array(t.m)),
                i.uniformMatrix4fv(e.viewMatrix, !1, e.viewMatrixArray),
                i.uniformMatrix4fv(
                  e.modelViewMatrix,
                  !1,
                  e.modelViewMatrixArray
                ),
                i.uniformMatrix4fv(
                  e.projectionMatrix,
                  !1,
                  e.projectionMatrixArray
                ),
                i.uniformMatrix3fv(e.normalMatrix, !1, e.normalMatrixArray),
                i.uniformMatrix4fv(
                  e.objMatrix,
                  !1,
                  new Float32Array(n.matrix.flatten())
                );
            }),
            (this.render = function(n, t) {
              var o, l, r;
              for (
                this.autoClear && this.clear(),
                  t.autoUpdateMatrix && t.updateMatrix(),
                  i.uniform3f(
                    e.cameraPosition,
                    t.position.x,
                    t.position.y,
                    t.position.z
                  ),
                  this.setupLights(n),
                  o = 0,
                  l = n.objects.length;
                o < l;
                o++
              )
                (r = n.objects[o]),
                  this.setupMatrices(r, t),
                  r instanceof a.Mesh
                    ? this.renderMesh(r, t)
                    : r instanceof a.Line || a.Particle;
            });
        }),
        (a.RenderableFace3 = function() {
          (this.v1 = new a.Vector2()),
            (this.v2 = new a.Vector2()),
            (this.v3 = new a.Vector2()),
            (this.centroidWorld = new a.Vector3()),
            (this.normalWorld = new a.Vector3()),
            (this.z = null),
            (this.color = null),
            (this.material = null);
        }),
        (a.RenderableFace4 = function() {
          (this.v1 = new a.Vector2()),
            (this.v2 = new a.Vector2()),
            (this.v3 = new a.Vector2()),
            (this.v4 = new a.Vector2()),
            (this.centroidWorld = new a.Vector3()),
            (this.normalWorld = new a.Vector3()),
            (this.z = null),
            (this.color = null),
            (this.material = null);
        }),
        (a.RenderableParticle = function() {
          (this.x = null),
            (this.y = null),
            (this.z = null),
            (this.rotation = null),
            (this.scale = new a.Vector2()),
            (this.color = null),
            (this.material = null);
        }),
        (a.RenderableLine = function() {
          (this.v1 = new a.Vector2()),
            (this.v2 = new a.Vector2()),
            (this.z = null),
            (this.color = null),
            (this.material = null);
        }),
        (i.a = a);
    },
    "OF+o": function(n, i, e) {
      "use strict";
      var a = e("DDgV"),
        t = e("pzdW");
      i.a = {
        components: { receive: a.a, sent: t.a },
        data: function() {
          return {
            form: { email: "zhujunx@sjtu.edu.cn", date: [], size: 20 },
            rules: {
              email: [{ required: !0, message: "必填项", trigger: "blur" }]
            },
            height: document.documentElement.clientHeight - 247,
            activeName: "receive"
          };
        },
        methods: {
          onSearch: function() {
            var n = this;
            this.$refs.form.validate(function(i) {
              i && (n.$refs.receive.render(), n.$refs.sent.render());
            });
          }
        },
        mounted: function() {}
      };
    },
    PetY: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            [
              e("Table", {
                attrs: { loading: n.loading, columns: n.columns, data: n.data }
              }),
              n._v(" "),
              e(
                "div",
                { staticStyle: { "text-align": "right", padding: "10px 0" } },
                [
                  e("Page", {
                    attrs: {
                      total: n.total,
                      "page-size": n.form.size,
                      current: n.form.page
                    },
                    on: {
                      "on-change": n.onCurrentChange,
                      "update:current": function(i) {
                        n.$set(n.form, "page", i);
                      }
                    }
                  })
                ],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    SA9r: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            [
              e("div", { staticClass: "mode-change" }, [
                e(
                  "div",
                  { staticStyle: { float: "right" } },
                  [
                    e(
                      "ButtonGroup",
                      [
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "1h" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("1h");
                              }
                            }
                          },
                          [n._v("最近1小时")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "24h" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("24h");
                              }
                            }
                          },
                          [n._v("最近24小时")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "7d" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("7d");
                              }
                            }
                          },
                          [n._v("最近7天")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "30d" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("30d");
                              }
                            }
                          },
                          [n._v("最近30天")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "12m" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("12m");
                              }
                            }
                          },
                          [n._v("最近12月")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            attrs: {
                              type: "all" == n.type ? "primary" : "default"
                            },
                            on: {
                              click: function(i) {
                                n.onSelect("all");
                              }
                            }
                          },
                          [n._v("全部")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]),
              n._v(" "),
              e(
                "Row",
                n._l(n.list, function(i, a) {
                  return i.Visible
                    ? e(
                        "Col",
                        {
                          key: a,
                          staticStyle: { padding: "5px" },
                          attrs: { lg: 8, md: 8, sm: 12, xs: 24 }
                        },
                        [
                          e(
                            "div",
                            { staticClass: "chart-box" },
                            [
                              e("v-chart", {
                                attrs: {
                                  type: n.type,
                                  query: i.Query,
                                  name: i.Name,
                                  height: n.height
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    : n._e();
                }),
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    Ssm4: function(n, i) {},
    Thy2: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticClass: "app", staticStyle: { color: "#fff" } },
            [
              e(
                "Form",
                {
                  ref: "form",
                  attrs: {
                    model: n.form,
                    "label-width": 80,
                    rules: n.rules,
                    inline: ""
                  }
                },
                [
                  e(
                    "FormItem",
                    {
                      staticStyle: { color: "#fff" },
                      attrs: { prop: "email", label: "目标邮件" }
                    },
                    [
                      e("Input", {
                        model: {
                          value: n.form.email,
                          callback: function(i) {
                            n.$set(n.form, "email", i);
                          },
                          expression: "form.email"
                        }
                      })
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    {
                      staticStyle: { color: "#fff" },
                      attrs: { label: "日期范围" }
                    },
                    [
                      e("DatePicker", {
                        staticStyle: { width: "200px" },
                        attrs: {
                          format: "yyyy/MM/dd",
                          type: "daterange",
                          placement: "bottom-end",
                          placeholder: "请选择日期范围"
                        },
                        model: {
                          value: n.form.date,
                          callback: function(i) {
                            n.$set(n.form, "date", i);
                          },
                          expression: "form.date"
                        }
                      })
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    [
                      e(
                        "Button",
                        {
                          attrs: { icon: "search" },
                          on: { click: n.onSearch }
                        },
                        [n._v("查询")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              n._v(" "),
              e(
                "div",
                { staticStyle: { padding: "0 10px" } },
                [
                  e(
                    "Tabs",
                    { attrs: { value: n.activeName } },
                    [
                      e(
                        "TabPane",
                        { attrs: { label: "收件箱", name: "receive" } },
                        [
                          e("receive", {
                            ref: "receive",
                            attrs: { email: n.form.email, date: n.form.date }
                          })
                        ],
                        1
                      ),
                      n._v(" "),
                      e(
                        "TabPane",
                        { attrs: { label: "发件箱", name: "send" } },
                        [
                          e("sent", {
                            ref: "sent",
                            attrs: { email: n.form.email, date: n.form.date }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    U9Qk: function(n, i) {},
    UaKG: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            [
              e("div", {
                ref: "chart",
                staticClass: "chart",
                staticStyle: { width: "100%" },
                style: { height: n.height + "px" }
              }),
              n._v(" "),
              n.loading
                ? e(
                    "Spin",
                    { attrs: { size: "large", fix: "" } },
                    [
                      e("Icon", {
                        staticClass: "demo-spin-icon-load",
                        attrs: { type: "load-c", size: "18" }
                      }),
                      n._v(" "),
                      e("div", [n._v("加载中")])
                    ],
                    1
                  )
                : n._e()
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    UhUd: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticClass: "app", staticStyle: { color: "#fff" } },
            [
              e(
                "Form",
                {
                  ref: "form",
                  attrs: {
                    model: n.form,
                    "label-width": 80,
                    rules: n.rules,
                    inline: ""
                  }
                },
                [
                  e(
                    "FormItem",
                    { attrs: { prop: "name", label: "目标邮件" } },
                    [
                      e(
                        "Input",
                        {
                          model: {
                            value: n.form.name,
                            callback: function(i) {
                              n.$set(n.form, "name", i);
                            },
                            expression: "form.name"
                          }
                        },
                        [
                          e(
                            "span",
                            { attrs: { slot: "append" }, slot: "append" },
                            [n._v("@sjtu.edu.cn")]
                          )
                        ]
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    { attrs: { label: "操作行为" } },
                    [
                      e(
                        "Select",
                        {
                          staticStyle: { width: "200px" },
                          model: {
                            value: n.form.type,
                            callback: function(i) {
                              n.$set(n.form, "type", i);
                            },
                            expression: "form.type"
                          }
                        },
                        n._l(n.actions, function(i) {
                          return e(
                            "Option",
                            { key: i.value, attrs: { value: i.value } },
                            [n._v(n._s(i.name))]
                          );
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    { attrs: { label: "日期范围" } },
                    [
                      e("DatePicker", {
                        staticStyle: { width: "200px" },
                        attrs: {
                          format: "yyyy-MM-dd",
                          type: "daterange",
                          placement: "bottom-end",
                          placeholder: "请选择日期范围"
                        },
                        model: {
                          value: n.form.date,
                          callback: function(i) {
                            n.$set(n.form, "date", i);
                          },
                          expression: "form.date"
                        }
                      })
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    [
                      e(
                        "Button",
                        {
                          attrs: { icon: "search" },
                          on: { click: n.onSearch }
                        },
                        [n._v("查询")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              n._v(" "),
              e(
                "div",
                { staticStyle: { padding: "0 10px" } },
                [
                  e("Table", {
                    attrs: {
                      height: n.height,
                      loading: n.loading,
                      columns: n.columns,
                      data: n.data
                    }
                  }),
                  n._v(" "),
                  e(
                    "div",
                    {
                      staticStyle: { "text-align": "right", padding: "10px 0" }
                    },
                    [
                      e("Page", {
                        attrs: { total: n.total, "page-size": 20 },
                        on: { "on-change": n.handleCurrentChange }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    UkDw: function(n, i, e) {
      "use strict";
      function a(n) {
        e("1sUg");
      }
      var t = e("VXQX"),
        o = e("WDH1"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-36ddce24", null);
      i.a = s.exports;
    },
    "Umf/": function(n, i, e) {
      "use strict";
      var a = e("oaOm"),
        t = e("XLwt"),
        o = e.n(t);
      i.a = {
        props: ["domain", "height", "type"],
        data: function() {
          return { loading: !0 };
        },
        methods: {
          renderChart: function(n) {
            var i = {
              color: ["#3398DB", "#6AB0B8", "#E98F6F", "#9FDABF", "#DE9325"],
              title: { text: this.domain, textStyle: { color: "#fff" } },
              tooltip: {
                trigger: "item",
                formatter: "{a} <br/>{b}: {c} ({d}%)"
              },
              label: {
                normal: {
                  formatter:
                    "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
                  backgroundColor: "#eee",
                  borderColor: "#aaa",
                  borderWidth: 1,
                  borderRadius: 4,
                  rich: {
                    a: { color: "#999", lineHeight: 22, align: "center" },
                    hr: {
                      borderColor: "#aaa",
                      width: "100%",
                      borderWidth: 0.5,
                      height: 0
                    },
                    b: { fontSize: 16, lineHeight: 33 },
                    per: {
                      color: "#eee",
                      backgroundColor: "#334455",
                      padding: [2, 4],
                      borderRadius: 2
                    }
                  }
                }
              },
              grid: { left: "3%", bottom: "3%", containLabel: !0 },
              series: [
                {
                  name: this.domain,
                  type: "pie",
                  roseType: "radius",
                  radius: [0, "55%"],
                  labelLine: { normal: { show: !1 } },
                  data: n.map(function(n) {
                    return { value: n.count, name: n._id };
                  })
                }
              ]
            };
            this.chart || (this.chart = o.a.init(this.$refs.chart)),
              this.chart.setOption(i),
              (this.loading = !1);
          },
          render: function() {
            var n = this;
            (this.loading = !0),
              Object(a.j)({ domain: this.domain, type: this.type }).then(
                function(i) {
                  n.renderChart(i.data);
                }
              );
          }
        },
        watch: {
          type: function(n) {
            this.render();
          }
        },
        mounted: function() {
          this.render();
        }
      };
    },
    VNxc: function(n, i, e) {
      "use strict";
      function a(n) {
        e("a7c0");
      }
      var t = e("FwSB"),
        o = e("SA9r"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-5d17f7a7", null);
      i.a = s.exports;
    },
    VXQX: function(n, i, e) {
      "use strict";
      var a = e("O04U"),
        t = e("oaOm");
      i.a = {
        store: ["login", "token", "admin", "username"],
        data: function() {
          return {
            login_loading: !1,
            form: { UserName: "", Password: "" },
            error: ""
          };
        },
        methods: {
          onClick: function() {
            var n = this;
            return "" == this.form.UserName
              ? this.$Message.warning("请输入用户名！")
              : "" == this.form.Password
              ? this.$Message.warning("请输入密码！")
              : ((this.login_loading = !0),
                void Object(t.d)(this.form).then(function(i) {
                  (n.login_loading = !1),
                    0 == i.Code
                      ? ((n.token = i.Response.Token),
                        "admin" == n.form.UserName && (n.admin = !0),
                        (n.login = !0),
                        (n.username = n.form.UserName),
                        n.$ls.set(
                          "token",
                          n.token,
                          i.Response.Expires - new Date().valueOf() / 1e3
                        ),
                        n.$ls.set("username", n.form.UserName),
                        n.$ls.set("userId", i.Response.Id))
                      : (n.error = i.Message);
                }));
          },
          liziInit: function() {
            function n(n) {
              (y = n.clientX - f), (d = n.clientY - b);
            }
            function i() {
              (r.position.x += 0.05 * (y - r.position.x)), (r.position.y = 364);
              for (var n = 0, i = 0; i < m; i++)
                for (var e = 0; e < g; e++)
                  (o = t[n++]),
                    (o.position.y =
                      50 * Math.sin(0.3 * (i + l)) +
                      50 * Math.sin(0.5 * (e + l))),
                    (o.scale.x = o.scale.y =
                      2 * (Math.sin(0.3 * (i + l)) + 1) +
                      2 * (Math.sin(0.5 * (e + l)) + 1));
              p.render(s, r), (l += 0.1);
            }
            var e,
              t,
              o,
              l,
              r,
              s,
              p,
              h = window.innerWidth,
              u = window.innerHeight,
              c = 90,
              m = 50,
              g = 50,
              y = 0,
              d = 0,
              f = window.innerWidth / 2,
              b = window.innerHeight / 2;
            !(function() {
              (e = document.createElement("div")),
                (e.style.position = "relative"),
                (e.style.top = "200px"),
                document.getElementById("indexLizi").appendChild(e),
                (r = new a.a.Camera(75, h / u, 1, 1e4)),
                (r.position.z = 1e3),
                (s = new a.a.Scene()),
                (p = new a.a.CanvasRenderer()),
                p.setSize(h, u),
                (t = new Array());
              for (
                var i = 0, y = new a.a.ParticleCircleMaterial(621531, 1), d = 0;
                d < m;
                d++
              )
                for (var f = 0; f < g; f++)
                  (o = t[i++] = new a.a.Particle(y)),
                    (o.position.x = d * c - (m * c) / 2),
                    (o.position.z = f * c - (g * c) / 2),
                    s.add(o);
              (l = 0),
                e.appendChild(p.domElement),
                document.addEventListener("mousemove", n, !1);
            })(),
              (this.interval = setInterval(i, 1e3 / 60));
          }
        },
        mounted: function() {
          this.liziInit();
        },
        beforeDestroy: function() {
          this.interval && clearInterval(this.interval);
        }
      };
    },
    Vbuf: function(n, i, e) {
      "use strict";
      var a = e("oaOm"),
        t = e("XLwt"),
        o = e.n(t);
      i.a = {
        store: ["modes"],
        data: function() {
          return {
            times: { last24h: null, last7d: null, last30d: null, all: null },
            loading: !0,
            type: "m",
            mode: "all"
          };
        },
        computed: {
          list: function() {
            return this.modes
              ? this.modes
                  .sort(function(n, i) {
                    return i.Created - n.Created;
                  })
                  .sort(function(n, i) {
                    return i.Index - n.Index;
                  })
              : [];
          }
        },
        methods: {
          render: function() {
            this.renderTarget();
          },
          renderTarget: function() {
            var n = this;
            Object(a.p)(this.getParams("24h")).then(function(i) {
              var e = i.hits.total;
              n.times.last24h = e;
            }),
              Object(a.p)(this.getParams("7d")).then(function(i) {
                var e = i.hits.total;
                n.times.last7d = e;
              }),
              Object(a.p)(this.getParams("30d")).then(function(i) {
                var e = i.hits.total;
                n.times.last30d = e;
              }),
              Object(a.p)(this.getParams("all")).then(function(i) {
                n.times.all = i.hits.total;
              }),
              this.renderHistory();
          },
          renderHistory: function() {
            var n = this;
            Object(a.p)(this.getHistoryParams(this.type)).then(function(i) {
              var e = i.aggregations.mail.buckets,
                a = void 0 === e ? [] : e;
              n.renderChart(a);
            });
          },
          renderChart: function(n) {
            var i = {
              color: ["#1cb781"],
              backgroundColor: "rgba(255,255,255,0)",
              tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
              grid: {
                left: "3%",
                right: "3%",
                bottom: "3%",
                top: "12%",
                containLabel: !0
              },
              xAxis: [
                {
                  type: "category",
                  data: n.map(function(n) {
                    return n.key_as_string;
                  }),
                  axisTick: { alignWithLabel: !0 },
                  axisLabel: { color: "#fff" },
                  axisLine: { lineStyle: { color: "#ccc" } }
                }
              ],
              yAxis: [{ type: "value", axisLabel: { color: "#fff" } }],
              series: [
                {
                  name: "日志数量",
                  type: "bar",
                  barWidth: "60%",
                  label: { normal: { show: !1, position: "inside" } },
                  data: n.map(function(n) {
                    return n.doc_count;
                  }),
                  markPoint: {
                    data: [
                      { type: "max", name: "最大值" },
                      { type: "min", name: "最小值" }
                    ]
                  }
                }
              ]
            };
            if (!this.chart) {
              var e = document.getElementById("history-chart");
              (e.style.height =
                document.documentElement.clientHeight - 310 + "px"),
                (this.chart = o.a.init(e));
            }
            this.chart.setOption(i), (this.loading = !1);
          },
          onSelect: function(n) {
            n != this.type &&
              ((this.type = n), (this.loading = !0), this.renderHistory());
          },
          getParams: function(n) {
            var i = {
              size: 0,
              query: {
                bool: {
                  must: [
                    { range: { "@timestamp": { gt: "now-" + n, lt: "now" } } }
                  ]
                }
              }
            };
            return (
              "all" == n && (i = { size: 0, query: { bool: { must: [] } } }),
              "all" != this.mode &&
                i.query.bool.must.push({
                  query_string: { query: this.mode, all_fields: !0 }
                }),
              i
            );
          },
          getHistoryParams: function(n) {
            var i = "1h",
              e = "YYYY-MM-dd",
              a = void 0;
            switch (n) {
              case "m":
                (i = "1h"), (e = "HH:mm:ss"), (a = "60s");
                break;
              case "d":
                (i = "30d"), (e = "YYYY-MM-dd"), (a = "1d");
                break;
              case "M":
                (i = "12M"), (e = "YYYY-MM"), (a = "1M");
            }
            var t = {
              size: 0,
              query: {
                bool: {
                  must: [
                    { range: { "@timestamp": { gte: "now-" + i, lte: "now" } } }
                  ]
                }
              },
              aggs: {
                mail: {
                  date_histogram: {
                    field: "@timestamp",
                    interval: a,
                    format: e,
                    min_doc_count: 0,
                    time_zone: "+08:00"
                  }
                }
              }
            };
            return (
              "all" != this.mode &&
                t.query.bool.must.push({
                  query_string: { query: this.mode, all_fields: !0 }
                }),
              t
            );
          },
          onModeChange: function(n) {
            (this.times.last24h = null),
              (this.times.last30d = null),
              (this.times.last7d = null),
              (this.times.all = null),
              (this.loading = !0),
              this.render();
          }
        },
        mounted: function() {
          this.render();
        }
      };
    },
    WDH1: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticClass: "wrapper", attrs: { id: "indexLizi" } },
            [
              e(
                "form",
                {
                  staticClass: "login",
                  class: { login_loading: n.login_loading }
                },
                [
                  e("p", { staticClass: "title" }, [
                    n._v("电子邮件运行数据分析平台")
                  ]),
                  n._v(" "),
                  e("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: n.form.UserName,
                        expression: "form.UserName"
                      }
                    ],
                    attrs: {
                      type: "text",
                      required: "",
                      placeholder: "请输入用户名",
                      autofocus: ""
                    },
                    domProps: { value: n.form.UserName },
                    on: {
                      input: function(i) {
                        i.target.composing ||
                          n.$set(n.form, "UserName", i.target.value);
                      }
                    }
                  }),
                  n._v(" "),
                  e("i", { staticClass: "ivu-icon ivu-icon-person" }),
                  n._v(" "),
                  e("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: n.form.Password,
                        expression: "form.Password"
                      }
                    ],
                    attrs: {
                      type: "password",
                      required: "",
                      placeholder: "请输入密码"
                    },
                    domProps: { value: n.form.Password },
                    on: {
                      input: function(i) {
                        i.target.composing ||
                          n.$set(n.form, "Password", i.target.value);
                      }
                    }
                  }),
                  n._v(" "),
                  e("i", { staticClass: "ivu-icon ivu-icon-android-lock" }),
                  n._v(" "),
                  e("span", { staticStyle: { color: "red" } }, [
                    n._v(n._s(n.error))
                  ]),
                  n._v(" "),
                  e("button", { on: { click: n.onClick } }, [
                    e("i", { staticClass: "spinner" }),
                    n._v(" "),
                    e("span", { staticClass: "state" }, [n._v("Log in")])
                  ])
                ]
              )
            ]
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    YRHF: function(n, i) {},
    YaEn: function(n, i, e) {
      "use strict";
      var a = e("7+uW"),
        t = e("/ocq"),
        o = e("v/+q"),
        l = e("VNxc"),
        r = e("CLwM"),
        s = e("tfs9"),
        p = e("wRtQ"),
        h = e("C/E/"),
        u = e("iq+0"),
        c = e("N38G"),
        m = e("wxRh"),
        g = e("kDMA"),
        y = e("4C9/"),
        d = e("+Y0f");
      a.default.use(t.a),
        (i.a = new t.a({
          routes: [
            { path: "/", name: "mail-index", component: o.a },
            { path: "/contrast", name: "mail-contrast", component: l.a },
            { path: "/success", name: "mail-success", component: r.a },
            { path: "/config", name: "mail-config", component: s.a },
            { path: "/search", name: "search-record", component: p.a },
            { path: "/search_email", name: "search-email", component: h.a },
            { path: "/config_mail", name: "config-mail", component: u.a },
            { path: "/config_user", name: "config-user", component: c.a },
            { path: "/config_ip", name: "config-ip", component: y.a },
            { path: "/config_domain", name: "config-domain", component: d.a },
            { path: "/search_top", name: "search-top", component: m.a },
            { path: "/search_geo", name: "search-geo", component: g.a }
          ]
        }));
    },
    a7c0: function(n, i) {},
    b0VZ: function(n, i, e) {
      "use strict";
      var a = e("oaOm");
      i.a = {
        data: function() {
          return { domain: "" };
        },
        methods: {
          onSave: function() {
            var n = this,
              i = this.domain.split("\n");
            Object(a.l)({ domain: i }).then(function(i) {
              alert("保存成功！"), n.render();
            });
          },
          render: function() {
            var n = this;
            Object(a.e)().then(function(i) {
              0 == i.errno && i.data && (n.domain = i.data.domain.join("\n"));
            });
          }
        },
        mounted: function() {
          this.render();
        }
      };
    },
    cYwH: function(n, i) {},
    ca1m: function(n, i) {},
    chAY: function(n, i, e) {
      "use strict";
      i.a = {
        data: function() {
          return {
            time: "",
            date: "",
            week: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
          };
        },
        methods: {
          updateTime: function() {
            var n = new Date();
            (this.time =
              this.zeroPadding(n.getHours(), 2) +
              ":" +
              this.zeroPadding(n.getMinutes(), 2) +
              ":" +
              this.zeroPadding(n.getSeconds(), 2)),
              (this.date =
                this.zeroPadding(n.getFullYear(), 4) +
                "-" +
                this.zeroPadding(n.getMonth() + 1, 2) +
                "-" +
                this.zeroPadding(n.getDate(), 2) +
                " " +
                this.week[n.getDay()]);
          },
          zeroPadding: function(n, i) {
            for (var e = "", a = 0; a < i; a++) e += "0";
            return (e + n).slice(-i);
          }
        },
        mounted: function() {
          this.updateTime();
          setInterval(this.updateTime, 1e3);
        }
      };
    },
    fVtT: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticClass: "app", staticStyle: { color: "#fff" } },
            [
              e(
                "Form",
                {
                  ref: "form",
                  attrs: {
                    model: n.form,
                    "label-width": 80,
                    rules: n.rules,
                    inline: ""
                  }
                },
                [
                  e(
                    "FormItem",
                    { attrs: { prop: "email", label: "目标邮箱" } },
                    [
                      e("Input", {
                        staticStyle: { width: "300px" },
                        attrs: { placeholder: "请输入邮箱地址" },
                        model: {
                          value: n.form.email,
                          callback: function(i) {
                            n.$set(n.form, "email", i);
                          },
                          expression: "form.email"
                        }
                      })
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    [
                      e(
                        "Button",
                        {
                          attrs: { icon: "search" },
                          on: {
                            click: function(i) {
                              n.onCmd("status");
                            }
                          }
                        },
                        [n._v("状态")]
                      ),
                      n._v("\n          \n        "),
                      e(
                        "Button",
                        {
                          attrs: { icon: "locked", type: "warning" },
                          on: {
                            click: function(i) {
                              n.onCmd("locked");
                            }
                          }
                        },
                        [n._v("Locked")]
                      ),
                      n._v("\n          \n        "),
                      e(
                        "Button",
                        {
                          attrs: { icon: "unlocked", type: "primary" },
                          on: {
                            click: function(i) {
                              n.onCmd("active");
                            }
                          }
                        },
                        [n._v("Active")]
                      ),
                      n._v(" "),
                      e(
                        "Button",
                        {
                          attrs: { icon: "size" },
                          on: {
                            click: function(i) {
                              n.onCmd("gmi");
                            }
                          }
                        },
                        [n._v("查看空间")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              n._v(" "),
              e(
                "div",
                { staticStyle: { padding: "0 10px" } },
                [
                  e("Table", {
                    attrs: {
                      loading: n.loading,
                      columns: n.columns,
                      data: n.logs
                    }
                  }),
                  n._v(" "),
                  e(
                    "div",
                    {
                      staticStyle: { "text-align": "right", padding: "10px 0" }
                    },
                    [
                      e("Page", {
                        attrs: { total: n.total, "page-size": 20 },
                        on: { "on-change": n.currentChange }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              n._v(" "),
              n.loading
                ? e("Spin", { attrs: { size: "large", fix: "" } })
                : n._e()
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "h+Sb": function(n, i) {},
    hNIV: function(n, i, e) {
      "use strict";
      var a = e("oaOm");
      i.a = {
        props: {
          email: { type: String, default: "" },
          date: {
            type: Array,
            default: function() {
              return [];
            }
          }
        },
        name: "Receive",
        data: function() {
          return {
            columns: [
              {
                title: "#",
                width: 60,
                render: function(n, i) {
                  var e = i.row;
                  return n("span", e.index + 20 * (e.page - 1) + 1);
                }
              },
              { title: "邮件ID", key: "messageId" },
              { title: "对方地址", key: "fromAddr" },
              {
                title: "收件时间",
                render: function(n, i) {
                  var e = i.row;
                  return n(
                    "span",
                    new Date(1e3 * e.timestamp + 288e5).Format(
                      "yyyy-MM-dd hh:mm:ss"
                    )
                  );
                }
              },
              {
                title: "对方IP",
                render: function(n, i) {
                  return n("span", i.row.ipAddr);
                }
              },
              { title: "状态", key: "status" },
              { title: "收件人数", key: "nrcpt" },
              {
                title: "邮件大小(KB)",
                key: "mailSize",
                render: function(n, i) {
                  return n("span", (i.row.mailSize / 1e3).toFixed(2));
                }
              }
            ],
            loading: !1,
            data: [],
            total: 0,
            form: {
              status: "sent",
              page: 1,
              toAddr: "",
              begin: void 0,
              end: void 0
            },
            height: document.documentElement.clientHeight
          };
        },
        methods: {
          render: function() {
            this.init(), this.getData();
          },
          init: function() {
            this.form = {
              status: "sent",
              page: 1,
              toAddr: "",
              begin: void 0,
              end: void 0
            };
          },
          onCurrentChange: function(n) {
            (this.form.page = n), this.getData();
          },
          getData: function() {
            var n = this;
            if (
              ((this.loading = !0),
              this.email && (this.form.toAddr = this.email),
              this.date)
            ) {
              var i = this.getDate(this.date);
              0 != i[0] &&
                0 != i[1] &&
                ((this.form.begin = i[0] - 28800),
                (this.form.end = i[1] - 28800));
            }
            Object(a.r)(this.form).then(function(i) {
              var e = i.data;
              (n.total = e.count),
                (n.data = e.data.map(function(i, e) {
                  return (i.index = e), (i.page = n.form.page), i;
                })),
                (n.loading = !1);
            });
          },
          getDate: function(n) {
            return 2 == n.length
              ? [n[0].valueOf() / 1e3, n[1].valueOf() / 1e3]
              : [];
          }
        }
      };
    },
    iFNj: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticClass: "top-page" },
            [
              e("Spin", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: n.loading,
                    expression: "loading"
                  }
                ],
                attrs: { fix: "" }
              }),
              n._v(" "),
              e(
                "Form",
                {
                  ref: "form",
                  attrs: { model: n.form, "label-width": 80, inline: "" }
                },
                [
                  e(
                    "FormItem",
                    {
                      staticStyle: { color: "#fff" },
                      attrs: { label: "统计类型" }
                    },
                    [
                      e(
                        "Select",
                        {
                          staticStyle: { width: "200px" },
                          model: {
                            value: n.form.type,
                            callback: function(i) {
                              n.$set(n.form, "type", i);
                            },
                            expression: "form.type"
                          }
                        },
                        [
                          e("Option", { attrs: { value: "ipAddr" } }, [
                            n._v("ipAddr")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "fromAddr" } }, [
                            n._v("fromAddr")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "toAddr" } }, [
                            n._v("toAddr")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    {
                      staticStyle: { color: "#fff" },
                      attrs: { label: "统计范围" }
                    },
                    [
                      e(
                        "Select",
                        {
                          staticStyle: { width: "200px" },
                          model: {
                            value: n.form.range,
                            callback: function(i) {
                              n.$set(n.form, "range", i);
                            },
                            expression: "form.range"
                          }
                        },
                        [
                          e("Option", { attrs: { value: "hour" } }, [
                            n._v("最近1小时")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "day" } }, [
                            n._v("最近1天")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "week" } }, [
                            n._v("最近7天")
                          ]),
                          n._v(" "),
                          e("Option", { attrs: { value: "month" } }, [
                            n._v("最近30天")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "FormItem",
                    [
                      e(
                        "Button",
                        {
                          attrs: { icon: "search" },
                          on: { click: n.onSearch }
                        },
                        [n._v("查询")]
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "div",
                    { staticStyle: { float: "right", "margin-right": "20px" } },
                    [
                      e(
                        "ButtonGroup",
                        [
                          e("Button", {
                            attrs: {
                              type: "chart" == n.mode ? "primary" : "default",
                              icon: "stats-bars"
                            },
                            on: {
                              click: function(i) {
                                n.mode = "chart";
                              }
                            }
                          }),
                          n._v(" "),
                          e("Button", {
                            attrs: {
                              type: "table" == n.mode ? "primary" : "default",
                              icon: "navicon-round"
                            },
                            on: {
                              click: function(i) {
                                n.mode = "table";
                              }
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              n._v(" "),
              e(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "chart" == n.mode,
                      expression: "mode =='chart'"
                    }
                  ],
                  staticStyle: { padding: "0 10px" }
                },
                [e("div", { ref: "chart", style: { height: n.height } })]
              ),
              n._v(" "),
              e(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: "table" == n.mode,
                      expression: "mode=='table'"
                    }
                  ],
                  staticStyle: { padding: "0 10px" }
                },
                [e("Table", { attrs: { columns: n.columns, data: n.data } })],
                1
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "iq+0": function(n, i, e) {
      "use strict";
      function a(n) {
        e("U9Qk");
      }
      var t = e("Mhrc"),
        o = e("fVtT"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    kDMA: function(n, i, e) {
      "use strict";
      function a(n) {
        e("Ssm4");
      }
      var t = e("qZJa"),
        o = e("Nx/i"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    kYjW: function(n, i) {},
    mBwk: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e("div", { attrs: { id: "app" } }, [
            e(
              "div",
              { staticClass: "layout" },
              [
                e(
                  "Menu",
                  {
                    staticStyle: { "z-index": "3000" },
                    attrs: {
                      mode: "horizontal",
                      theme: "dark",
                      "active-name": n.target.id
                    },
                    on: { "on-select": n.onChangeModule }
                  },
                  [
                    e("div", { staticClass: "layout-logo" }, [
                      n._v("\n        电子邮件运行数据分析平台\n      ")
                    ]),
                    n._v(" "),
                    e(
                      "div",
                      { staticClass: "layout-nav" },
                      n._l(n.menu, function(i) {
                        return e(
                          "MenuItem",
                          { key: i.id, attrs: { name: i.id } },
                          [
                            e("Icon", { attrs: { type: i.icon } }),
                            n._v("\n          " + n._s(i.name) + "\n        ")
                          ],
                          1
                        );
                      }),
                      1
                    ),
                    n._v(" "),
                    e(
                      "div",
                      { staticClass: "layout-right" },
                      [
                        e("Avatar", { attrs: { icon: "person" } }),
                        n._v(" "),
                        e(
                          "Dropdown",
                          { on: { "on-click": n.onClick } },
                          [
                            e(
                              "a",
                              { attrs: { href: "javascript:void(0)" } },
                              [
                                n._v(
                                  "\n            " +
                                    n._s(n.username) +
                                    "\n            "
                                ),
                                e("Icon", { attrs: { type: "arrow-down-b" } })
                              ],
                              1
                            ),
                            n._v(" "),
                            e(
                              "DropdownMenu",
                              { attrs: { slot: "list" }, slot: "list" },
                              [
                                e(
                                  "DropdownItem",
                                  { attrs: { name: "修改密码" } },
                                  [n._v("修改密码")]
                                ),
                                n._v(" "),
                                e("DropdownItem", { attrs: { name: "注销" } }, [
                                  n._v("注销")
                                ])
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ]
                ),
                n._v(" "),
                e(
                  "Menu",
                  {
                    staticStyle: { "background-color": "#131a2c" },
                    attrs: { mode: "horizontal", "active-name": n.view },
                    on: { "on-select": n.onSelect }
                  },
                  [
                    e(
                      "div",
                      { staticClass: "layout-assistant" },
                      n._l(n.target.children, function(i) {
                        return n.isAdmin(i.admin)
                          ? e(
                              "MenuItem",
                              { key: i.id, attrs: { name: i.id } },
                              [n._v(n._s(i.name))]
                            )
                          : n._e();
                      }),
                      1
                    )
                  ]
                ),
                n._v(" "),
                e("div", { staticClass: "layout-content" }, [
                  e(
                    "div",
                    { staticClass: "layout-content-main" },
                    [e("router-view")],
                    1
                  )
                ]),
                n._v(" "),
                e(
                  "Modal",
                  {
                    attrs: { title: "修改密码" },
                    model: {
                      value: n.modal,
                      callback: function(i) {
                        n.modal = i;
                      },
                      expression: "modal"
                    }
                  },
                  [
                    e(
                      "Form",
                      {
                        ref: "formCustom",
                        attrs: {
                          model: n.form,
                          "label-width": 80,
                          rules: n.ruleCustom
                        }
                      },
                      [
                        e(
                          "FormItem",
                          { attrs: { label: "新密码", prop: "Password" } },
                          [
                            e("Input", {
                              attrs: {
                                type: "password",
                                placeholder: "请输入密码"
                              },
                              model: {
                                value: n.form.Password,
                                callback: function(i) {
                                  n.$set(n.form, "Password", i);
                                },
                                expression: "form.Password"
                              }
                            })
                          ],
                          1
                        ),
                        n._v(" "),
                        e(
                          "FormItem",
                          {
                            attrs: { label: "重复密码", prop: "PasswordCheck" }
                          },
                          [
                            e("Input", {
                              attrs: {
                                type: "password",
                                placeholder: "请重复输入密码"
                              },
                              model: {
                                value: n.form.PasswordCheck,
                                callback: function(i) {
                                  n.$set(n.form, "PasswordCheck", i);
                                },
                                expression: "form.PasswordCheck"
                              }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    n._v(" "),
                    e(
                      "div",
                      { attrs: { slot: "footer" }, slot: "footer" },
                      [
                        e(
                          "Button",
                          {
                            attrs: { type: "primary" },
                            on: { click: n.onUpdatePassword }
                          },
                          [n._v("提交")]
                        ),
                        n._v(" "),
                        e(
                          "Button",
                          {
                            staticStyle: { "margin-left": "8px" },
                            attrs: { type: "default" },
                            on: {
                              click: function(i) {
                                n.modal = !1;
                              }
                            }
                          },
                          [n._v("取消")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]);
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    nNGx: function(n, i) {},
    oaOm: function(n, i, e) {
      "use strict";
      e.d(i, "p", function() {
        return s;
      }),
        e.d(i, "i", function() {
          return p;
        }),
        e.d(i, "n", function() {
          return h;
        }),
        e.d(i, "t", function() {
          return u;
        }),
        e.d(i, "a", function() {
          return c;
        }),
        e.d(i, "k", function() {
          return m;
        }),
        e.d(i, "o", function() {
          return g;
        }),
        e.d(i, "u", function() {
          return y;
        }),
        e.d(i, "v", function() {
          return d;
        }),
        e.d(i, "b", function() {
          return f;
        }),
        e.d(i, "c", function() {
          return b;
        }),
        e.d(i, "h", function() {
          return z;
        }),
        e.d(i, "r", function() {
          return v;
        }),
        e.d(i, "q", function() {
          return x;
        }),
        e.d(i, "s", function() {
          return S;
        }),
        e.d(i, "g", function() {
          return w;
        }),
        e.d(i, "m", function() {
          return _;
        }),
        e.d(i, "e", function() {
          return M;
        }),
        e.d(i, "j", function() {
          return C;
        }),
        e.d(i, "l", function() {
          return L;
        }),
        e.d(i, "f", function() {
          return P;
        }),
        e.d(i, "d", function() {
          return k;
        });
      var a = e("//Fk"),
        t = e.n(a),
        o = e("mtWM"),
        l = e.n(o),
        r = e("IcnI");
      l.a.interceptors.request.use(
        function(n) {
          return (
            r.a.token && (n.headers.Authorization = "Bearer " + r.a.token), n
          );
        },
        function(n) {
          return t.a.reject(n);
        }
      ),
        l.a.interceptors.response.use(
          function(n) {
            return n.data;
          },
          function(n) {
            503 == n.response.status && (r.a.login = !1),
              403 == n.response.status &&
                (alert("没有权限！"),
                (r.a.login = !1),
                (localStorage.mail__token = null));
          }
        );
      var s = function(n) {
          return l.a.post("/api/mail-*/_search", n);
        },
        p = function() {
          return l.a.get("/service/mode");
        },
        h = function(n) {
          return l.a.post("/service/mode", n);
        },
        u = function(n) {
          return l.a.patch("/service/mode", n);
        },
        c = function(n) {
          return l.a.delete("/service/mode/" + n);
        },
        m = function(n) {
          return l.a.get("/service/user", { params: { page: n } });
        },
        g = function(n) {
          return l.a.post("/service/user", n);
        },
        y = function(n) {
          return l.a.patch("/service/user", n);
        },
        d = function(n, i) {
          return l.a.patch("/service/user/" + n, i);
        },
        f = function(n) {
          return l.a.delete("/service/user/" + n);
        },
        b = function(n) {
          return l.a.get("/service/ssh", { params: n });
        },
        z = function(n) {
          return l.a.get("/service/log", { params: { page: n } });
        },
        v = function(n) {
          return l.a.get("/mongo/api/search", { params: n });
        },
        x = function(n) {
          return l.a.get("/mongo/api/query", { params: n });
        },
        S = function(n) {
          return l.a.get("/mongo/api/top", { params: n });
        },
        w = function() {
          return l.a.get("/mongo/api/ip");
        },
        _ = function(n) {
          return l.a.post("/mongo/api/ip", n);
        },
        M = function() {
          return l.a.get("/mongo/api/domain");
        },
        C = function(n) {
          return l.a.get("/mongo/api/success", { params: n });
        },
        L = function(n) {
          return l.a.post("/mongo/api/domain", n);
        },
        P = function(n) {
          return l.a.get("/mongo/api/geotop", { params: n });
        },
        k = function(n) {
          return l.a.post("/auth/login", n);
        };
    },
    pYip: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e(
            "div",
            { staticStyle: { color: "#fff", padding: "0 10px" } },
            [
              e("div", { staticClass: "mode-add" }, [
                e(
                  "div",
                  { staticStyle: { float: "right" } },
                  [
                    e(
                      "Button",
                      { attrs: { icon: "plus" }, on: { click: n.onAdd } },
                      [n._v("新增")]
                    )
                  ],
                  1
                )
              ]),
              n._v(" "),
              e("Table", {
                attrs: {
                  loading: n.table_loading,
                  stripe: !0,
                  columns: n.columns,
                  data: n.list,
                  size: "small"
                }
              }),
              n._v(" "),
              e(
                "Modal",
                {
                  attrs: { title: n.modelTitle },
                  model: {
                    value: n.show,
                    callback: function(i) {
                      n.show = i;
                    },
                    expression: "show"
                  }
                },
                [
                  e(
                    "Form",
                    {
                      ref: "form",
                      attrs: {
                        model: n.model,
                        "label-width": 80,
                        rules: n.ruleValidate
                      }
                    },
                    [
                      e(
                        "FormItem",
                        { attrs: { label: "指标名称", prop: "Name" } },
                        [
                          e("Input", {
                            attrs: { placeholder: "请输入指标名称" },
                            model: {
                              value: n.model.Name,
                              callback: function(i) {
                                n.$set(n.model, "Name", i);
                              },
                              expression: "model.Name"
                            }
                          })
                        ],
                        1
                      ),
                      n._v(" "),
                      e(
                        "FormItem",
                        { attrs: { label: "查询条件", prop: "Query" } },
                        [
                          e("Input", {
                            attrs: {
                              type: "textarea",
                              autosize: { minRows: 2, maxRows: 5 },
                              placeholder: "请输入查询条件"
                            },
                            model: {
                              value: n.model.Query,
                              callback: function(i) {
                                n.$set(n.model, "Query", i);
                              },
                              expression: "model.Query"
                            }
                          })
                        ],
                        1
                      ),
                      n._v(" "),
                      e(
                        "FormItem",
                        { attrs: { label: "排序序号" } },
                        [
                          e("InputNumber", {
                            attrs: {
                              min: 0,
                              max: 9999,
                              placeholder: "请输入排序序号"
                            },
                            model: {
                              value: n.model.Index,
                              callback: function(i) {
                                n.$set(n.model, "Index", i);
                              },
                              expression: "model.Index"
                            }
                          })
                        ],
                        1
                      ),
                      n._v(" "),
                      e(
                        "FormItem",
                        { attrs: { label: "是否启用" } },
                        [
                          e(
                            "i-switch",
                            {
                              attrs: { size: "large" },
                              model: {
                                value: n.model.Visible,
                                callback: function(i) {
                                  n.$set(n.model, "Visible", i);
                                },
                                expression: "model.Visible"
                              }
                            },
                            [
                              e(
                                "span",
                                { attrs: { slot: "open" }, slot: "open" },
                                [n._v("启用")]
                              ),
                              n._v(" "),
                              e(
                                "span",
                                { attrs: { slot: "close" }, slot: "close" },
                                [n._v("禁用")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      e(
                        "Button",
                        {
                          attrs: { loading: n.loading, type: "primary" },
                          on: { click: n.onSave }
                        },
                        [n._v("提交")]
                      ),
                      n._v(" "),
                      e(
                        "Button",
                        {
                          staticStyle: { "margin-left": "8px" },
                          attrs: { type: "default" },
                          on: { click: n.onCancel }
                        },
                        [n._v("取消")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              n._v(" "),
              e(
                "Modal",
                {
                  attrs: { width: 600, title: "指标测试" },
                  model: {
                    value: n.testModal,
                    callback: function(i) {
                      n.testModal = i;
                    },
                    expression: "testModal"
                  }
                },
                [
                  e(
                    "div",
                    { staticStyle: { "background-color": "#495060" } },
                    [
                      e(
                        "div",
                        {
                          staticStyle: {
                            "text-align": "right",
                            "padding-top": "5px",
                            "padding-right": "5px"
                          }
                        },
                        [
                          e(
                            "ButtonGroup",
                            { attrs: { size: "small" } },
                            [
                              e(
                                "Button",
                                {
                                  attrs: {
                                    type:
                                      "24h" == n.testMode.type
                                        ? "primary"
                                        : "default"
                                  },
                                  on: {
                                    click: function(i) {
                                      n.onSelect("24h");
                                    }
                                  }
                                },
                                [n._v("最近24小时")]
                              ),
                              n._v(" "),
                              e(
                                "Button",
                                {
                                  attrs: {
                                    type:
                                      "30d" == n.testMode.type
                                        ? "primary"
                                        : "default"
                                  },
                                  on: {
                                    click: function(i) {
                                      n.onSelect("30d");
                                    }
                                  }
                                },
                                [n._v("最近30天")]
                              ),
                              n._v(" "),
                              e(
                                "Button",
                                {
                                  attrs: {
                                    type:
                                      "12m" == n.testMode.type
                                        ? "primary"
                                        : "default"
                                  },
                                  on: {
                                    click: function(i) {
                                      n.onSelect("12m");
                                    }
                                  }
                                },
                                [n._v("最近12月")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      n._v(" "),
                      n.testModal
                        ? e("v-chart", {
                            attrs: {
                              type: n.testMode.type,
                              query: n.testMode.query,
                              name: n.testMode.name,
                              height: n.testMode.height
                            }
                          })
                        : n._e()
                    ],
                    1
                  ),
                  n._v(" "),
                  e(
                    "div",
                    { attrs: { slot: "footer" }, slot: "footer" },
                    [
                      e(
                        "Button",
                        {
                          staticStyle: { "margin-left": "8px" },
                          attrs: { type: "default" },
                          on: {
                            click: function(i) {
                              n.testModal = !1;
                            }
                          }
                        },
                        [n._v("关闭")]
                      )
                    ],
                    1
                  )
                ]
              )
            ],
            1
          );
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    pxYw: function(n, i) {},
    pzdW: function(n, i, e) {
      "use strict";
      function a(n) {
        e("7MCe");
      }
      var t = e("Bg/3"),
        o = e("EKgW"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-239e3b14", null);
      i.a = s.exports;
    },
    "q2q/": function(n, i) {},
    qFDj: function(n, i) {
      Date.prototype.Format = function(n) {
        var i = {
          "M+": this.getMonth() + 1,
          "d+": this.getDate(),
          "h+": this.getHours(),
          "m+": this.getMinutes(),
          "s+": this.getSeconds(),
          "q+": Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds()
        };
        /(y+)/.test(n) &&
          (n = n.replace(
            RegExp.$1,
            (this.getFullYear() + "").substr(4 - RegExp.$1.length)
          ));
        for (var e in i)
          new RegExp("(" + e + ")").test(n) &&
            (n = n.replace(
              RegExp.$1,
              1 == RegExp.$1.length
                ? i[e]
                : ("00" + i[e]).substr(("" + i[e]).length)
            ));
        return n;
      };
    },
    qZJa: function(n, i, e) {
      "use strict";
      var a = e("oaOm"),
        t = e("XLwt"),
        o = e.n(t),
        l = e("Bhwq"),
        r = (e.n(l), e("9OQl")),
        s = (e.n(r), e("/Y0d"));
      i.a = {
        data: function() {
          return {
            form: { type: "china", range: "hour" },
            height: document.documentElement.clientHeight - 220 + "px",
            loading: !1,
            mode: "chart",
            data: [],
            columns: [
              { title: "#", key: "index" },
              { title: "对象", key: "_id" },
              { title: "数量", key: "count" }
            ]
          };
        },
        watch: {
          "form.type": function() {
            this.onSearch();
          },
          "form.range": function() {
            this.onSearch();
          }
        },
        methods: {
          onSearch: function() {
            var n = this;
            (this.loading = !0),
              Object(a.f)(this.form).then(function(i) {
                (n.data = n.convertData(i.data)),
                  n.renderChart(n.data),
                  (n.loading = !1);
              });
          },
          getCityName: function(n) {
            var i = s.a.find(function(i) {
              return i.pinyin == n;
            });
            return i ? i.name : n;
          },
          convertData: function(n) {
            var i = this;
            return (
              n.sort(function(n, i) {
                return i.count - n.count;
              }),
              n.map(function(n) {
                return {
                  name: i.getCityName(n._id),
                  value: [n.lag, n.lat, n.count]
                };
              })
            );
          },
          getNum: function() {
            var n = 1;
            switch (this.form.range) {
              case "hour":
                n = 20;
                break;
              case "day":
                n = 1e3;
                break;
              case "week":
                n = 4e3;
                break;
              case "month":
                n = 5e3;
            }
            return n;
          },
          renderChart: function(n) {
            var i = this,
              e = void 0;
            if ("china" == this.form.type)
              e = {
                backgroundColor: "#404a59",
                animation: !0,
                animationDuration: 1e3,
                animationEasing: "cubicInOut",
                animationDurationUpdate: 1e3,
                animationEasingUpdate: "cubicInOut",
                title: [
                  {
                    text: "邮件来源分布（中国）",
                    sublink: "",
                    left: "center",
                    textStyle: { color: "#fff" }
                  },
                  {
                    id: "statistic",
                    right: 120,
                    top: 40,
                    width: 100,
                    textStyle: { color: "#fff", fontSize: 16 }
                  }
                ],
                toolbox: {
                  iconStyle: {
                    normal: { borderColor: "#fff" },
                    emphasis: { borderColor: "#b1e4ff" }
                  }
                },
                brush: {
                  outOfBrush: { color: "#abc" },
                  brushStyle: {
                    borderWidth: 2,
                    color: "rgba(0,0,0,0.2)",
                    borderColor: "rgba(0,0,0,0.5)"
                  },
                  seriesIndex: [0, 1],
                  throttleType: "debounce",
                  throttleDelay: 300,
                  geoIndex: 0
                },
                geo: {
                  map: "china",
                  left: "10",
                  right: "35%",
                  center: [111.98561551896913, 33.20500049089619],
                  zoom: 1,
                  label: { emphasis: { show: !1 } },
                  roam: !0,
                  itemStyle: {
                    normal: { areaColor: "#323c48", borderColor: "#111" },
                    emphasis: { areaColor: "#2a333d" }
                  }
                },
                tooltip: {
                  trigger: "item",
                  formatter: function(n) {
                    return (
                      "\n              <div>" +
                      n.name +
                      "</div>\n              <div>" +
                      n.seriesName +
                      ": " +
                      n.value[2] +
                      "</div>\n            "
                    );
                  }
                },
                grid: { right: 40, top: 100, bottom: 40, width: "30%" },
                xAxis: {
                  type: "value",
                  scale: !0,
                  position: "top",
                  boundaryGap: !1,
                  splitLine: { show: !1 },
                  axisLine: { show: !1 },
                  axisTick: { show: !1 },
                  axisLabel: { margin: 2, textStyle: { color: "#aaa" } }
                },
                yAxis: {
                  type: "category",
                  nameGap: 16,
                  axisLine: { show: !1, lineStyle: { color: "#ddd" } },
                  axisTick: { show: !1, lineStyle: { color: "#ddd" } },
                  axisLabel: { interval: 0, textStyle: { color: "#ddd" } },
                  data: n
                    .slice(0, 20)
                    .map(function(n) {
                      return n.name;
                    })
                    .reverse()
                },
                series: [
                  {
                    name: "邮件数",
                    type: "scatter",
                    coordinateSystem: "geo",
                    data: this.data,
                    symbolSize: function(n) {
                      return Math.max(n[2] / i.getNum(), 8);
                    },
                    label: {
                      normal: { formatter: "{b}", position: "right", show: !1 },
                      emphasis: { show: !0 }
                    },
                    itemStyle: { normal: { color: "#ddb926" } }
                  },
                  {
                    name: "邮件数",
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    data: n.slice(0, 20),
                    symbolSize: function(n) {
                      return n[2] / i.getNum();
                    },
                    showEffectOn: "render",
                    rippleEffect: { brushType: "stroke" },
                    hoverAnimation: !0,
                    label: {
                      normal: { formatter: "{b}", position: "right", show: !0 }
                    },
                    itemStyle: {
                      normal: {
                        color: "#f4e925",
                        shadowBlur: 10,
                        shadowColor: "#333"
                      }
                    },
                    zlevel: 1
                  },
                  {
                    id: "bar",
                    zlevel: 2,
                    type: "bar",
                    symbol: "none",
                    itemStyle: { normal: { color: "#ddb926" } },
                    data: n
                      .slice(0, 20)
                      .map(function(n) {
                        return n.value[2];
                      })
                      .reverse()
                  }
                ]
              };
            else {
              var a = n[0].value[2];
              e = {
                backgroundColor: "#404a59",
                title: {
                  text: "邮件来源分布（世界）",
                  left: "center",
                  textStyle: { color: "#fff", fontSize: 24 },
                  padding: [20, 20, 20, 20]
                },
                tooltip: {
                  trigger: "item",
                  backgroundColor: "rgba(12, 204, 104, 0.92)",
                  borderColor: "#FFFFCC",
                  showDelay: 0,
                  hideDelay: 0,
                  enterable: !0,
                  transitionDuration: 0,
                  extraCssText: "z-index:100",
                  formatter: function(n, i, e) {
                    return (
                      "<span style='color:#fff;'>" +
                      n.name +
                      "</span><br/>数据：" +
                      n.value[n.seriesIndex + 1]
                    );
                  }
                },
                visualMap: {
                  min: 0,
                  max: a,
                  calculable: !0,
                  color: ["#ff3333", "orange", "yellow", "lime", "aqua"],
                  textStyle: { color: "#fff" }
                },
                geo: {
                  map: "world",
                  label: { emphasis: { show: !1 } },
                  roam: !0,
                  layoutCenter: ["50%", "50%"],
                  layoutSize: "200%",
                  itemStyle: {
                    normal: {
                      color: "rgba(51, 69, 89, .5)",
                      borderColor: "rgba(100,149,237,1)"
                    },
                    emphasis: { color: "rgba(37, 43, 61, .5)" }
                  }
                },
                series: [
                  {
                    type: "lines",
                    zlevel: 2,
                    effect: {
                      show: !0,
                      period: 4,
                      trailLength: 0.02,
                      symbol: "arrow",
                      symbolSize: 5
                    },
                    lineStyle: {
                      normal: { width: 1, opacity: 0, curveness: 0.3 }
                    },
                    data: n.map(function(n) {
                      return [
                        { coord: [n.value[0], n.value[1]], value: n.value[2] },
                        { coord: [121.4648, 31.2891] }
                      ];
                    })
                  },
                  {
                    type: "effectScatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: { period: 4, brushType: "stroke", scale: 4 },
                    label: {
                      normal: {
                        show: !0,
                        position: "right",
                        offset: [5, 0],
                        formatter: "{b}"
                      },
                      emphasis: { show: !0 }
                    },
                    symbol: "circle",
                    symbolSize: function(n) {
                      return Math.max(n[2] / i.getNum() / 10, 4);
                    },
                    itemStyle: { normal: { show: !1, color: "#f00" } },
                    data: n
                  },
                  {
                    type: "scatter",
                    coordinateSystem: "geo",
                    zlevel: 2,
                    rippleEffect: { period: 4, brushType: "stroke", scale: 4 },
                    label: {
                      normal: {
                        show: !0,
                        position: "right",
                        color: "#00ffff",
                        formatter: "{b}",
                        textStyle: { color: "#00ffff" }
                      },
                      emphasis: { show: !0 }
                    },
                    symbol: "pin",
                    symbolSize: 30,
                    itemStyle: { normal: { show: !0, color: "#9966cc" } },
                    data: [{ name: "上海", value: [121.4648, 31.2891, 100] }]
                  }
                ]
              };
            }
            this.chart && (this.chart.clear(), (this.chart = null)),
              this.chart ||
                ((this.chart = o.a.init(this.$refs[this.form.type])),
                this.chart.on("brushselected", this.renderBrushed)),
              this.chart.setOption(e);
          },
          renderBrushed: function(n) {
            for (
              var i = n.batch[0].selected[0],
                e = [],
                a = [],
                t = [],
                o = 0,
                l = 0,
                r = 0;
              r < i.dataIndex.length;
              r++
            ) {
              var s = i.dataIndex[r],
                p = this.data[s];
              (o += p.value[2]), l++, e.push(p);
            }
            e.sort(function(n, i) {
              return n.value[2] - i.value[2];
            });
            for (var r = 0; r < Math.min(e.length, 1e3); r++)
              a.push(e[r].name), t.push(e[r].value[2]);
            this.chart.setOption({
              yAxis: { data: a },
              xAxis: { axisLabel: { show: !!l } },
              title: {
                id: "statistic",
                text: l ? "平均: " + (o / l).toFixed(2) : ""
              },
              series: { id: "bar", data: t }
            });
          }
        },
        mounted: function() {
          this.onSearch();
        }
      };
    },
    tNR2: function(n, i) {},
    tfs9: function(n, i, e) {
      "use strict";
      function a(n) {
        e("h+Sb");
      }
      var t = e("5e79"),
        o = e("pYip"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    uPh3: function(n, i, e) {
      "use strict";
      var a = function() {
          var n = this,
            i = n.$createElement,
            e = n._self._c || i;
          return e("div", { attrs: { id: "clock" } }, [
            e("p", { staticClass: "date" }, [n._v(n._s(n.date))]),
            n._v(" "),
            e("p", { staticClass: "time" }, [n._v(n._s(n.time))])
          ]);
        },
        t = [],
        o = { render: a, staticRenderFns: t };
      i.a = o;
    },
    "v/+q": function(n, i, e) {
      "use strict";
      function a(n) {
        e("D5Sc");
      }
      var t = e("Vbuf"),
        o = e("BWw3"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, "data-v-747022b8", null);
      i.a = s.exports;
    },
    wRtQ: function(n, i, e) {
      "use strict";
      function a(n) {
        e("cYwH");
      }
      var t = e("1Vx0"),
        o = e("UhUd"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    wcQp: function(n, i, e) {
      "use strict";
      function a(n) {
        e("pxYw");
      }
      var t = e("chAY"),
        o = e("uPh3"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    wxRh: function(n, i, e) {
      "use strict";
      function a(n) {
        e("tNR2");
      }
      var t = e("ylou"),
        o = e("iFNj"),
        l = e("VU/8"),
        r = a,
        s = l(t.a, o.a, !1, r, null, null);
      i.a = s.exports;
    },
    xJD8: function(n, i, e) {
      "use strict";
      var a = e("wcQp"),
        t = e("oaOm");
      i.a = {
        store: ["modes", "admin", "username", "userId"],
        data: function() {
          var n = this;
          return {
            modal: !1,
            form: { Password: "", PasswordCheck: "" },
            menu: [
              {
                id: "mail",
                name: "邮件日志",
                icon: "ios-navigate",
                children: [
                  { id: "mail-index", name: "全部统计" },
                  { id: "mail-contrast", name: "指标对比" },
                  { id: "mail-success", name: "成功率统计" },
                  { id: "mail-config", name: "指标配置" }
                ]
              },
              {
                id: "search",
                icon: "ios-keypad",
                name: "邮件查询",
                children: [
                  { id: "search-record", name: "访问记录" },
                  { id: "search-email", name: "邮件传递记录" },
                  { id: "search-top", name: "Top统计" },
                  { id: "search-geo", name: "区域统计" }
                ]
              },
              {
                id: "config",
                icon: "gear-b",
                name: "管理中心",
                children: [
                  { id: "config-mail", name: "账号管理" },
                  { id: "config-user", name: "用户管理", admin: !0 },
                  { id: "config-ip", name: "ip白名单", admin: !0 },
                  { id: "config-domain", name: "邮箱统计配置", admin: !0 }
                ]
              }
            ],
            target: {},
            view: "mail-index",
            module: "mail",
            ruleCustom: {
              Password: [
                {
                  validator: function(i, e, a) {
                    "" === e
                      ? a(new Error("Please enter your password"))
                      : ("" !== n.form.PasswordCheck &&
                          n.$refs.formCustom.validateField("PasswordCheck"),
                        a());
                  },
                  trigger: "blur"
                }
              ],
              PasswordCheck: [
                {
                  validator: function(i, e, a) {
                    "" === e
                      ? a(new Error("Please enter your password again"))
                      : e !== n.form.Password
                      ? a(new Error("The two input passwords do not match!"))
                      : a();
                  },
                  trigger: "blur"
                }
              ]
            }
          };
        },
        components: { vClock: a.a },
        methods: {
          onSelect: function(n) {
            this.$router.push({ name: n });
          },
          onClick: function(n) {
            "注销" == n
              ? (this.$ls.set("token", null),
                this.$ls.set("username", null),
                this.$router.push("/"),
                window.location.reload())
              : "修改密码" == n &&
                ((this.modal = !0),
                (this.form.Password = ""),
                (this.form.PasswordCheck = ""));
          },
          isAdmin: function(n) {
            return !n || this.admin == n;
          },
          onChangeModule: function(n) {
            var i = this;
            (this.module = n),
              (this.target = this.menu.find(function(i) {
                return i.id == n;
              })),
              this.$router.push({ name: this.target.children[0].id }),
              this.$nextTick(function() {
                i.view = i.target.children[0].id;
              });
          },
          onUpdatePassword: function() {
            var n = this;
            this.$refs.formCustom.validate(function(i) {
              i &&
                Object(t.v)(n.userId, { Password: n.form.Password }).then(
                  function(i) {
                    0 == i.Code &&
                      (alert("更新成功，请重新登录。"), n.onClick("注销"));
                  }
                );
            });
          }
        },
        created: function() {
          var n = this;
          (this.view = this.$route.name || "mail-index"),
            (this.module = this.view.split("-")[0]),
            (this.target = this.menu.find(function(i) {
              return i.id == n.module;
            })),
            Object(t.i)().then(function(i) {
              0 == i.Code && (n.modes = i.Response);
            });
        }
      };
    },
    ylou: function(n, i, e) {
      "use strict";
      var a = e("oaOm"),
        t = e("XLwt"),
        o = e.n(t);
      i.a = {
        data: function() {
          return {
            form: { type: "ipAddr", range: "hour", k: "10" },
            height: document.documentElement.clientHeight - 250 + "px",
            loading: !1,
            mode: "chart",
            data: [],
            columns: [
              { title: "#", key: "index" },
              { title: "对象", key: "_id" },
              { title: "数量", key: "count" }
            ]
          };
        },
        methods: {
          onSearch: function() {
            var n = this;
            (this.loading = !0),
              Object(a.s)(this.form).then(function(i) {
                (n.data = i.data.map(function(n, i) {
                  return (n.index = i + 1), n;
                })),
                  n.renderChart(n.data),
                  (n.loading = !1);
              });
          },
          renderChart: function(n) {
            var i = {
              color: ["#3398DB"],
              tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },
              grid: { left: "3%", right: "4%", bottom: "3%", containLabel: !0 },
              xAxis: [
                {
                  type: "category",
                  data: n.map(function(n) {
                    return n._id;
                  }),
                  axisTick: { alignWithLabel: !0 },
                  axisLabel: { interval: 0 },
                  axisLine: { lineStyle: { color: "#fff" } }
                }
              ],
              yAxis: [
                { type: "value", axisLine: { lineStyle: { color: "#fff" } } }
              ],
              series: [
                {
                  name: this.type,
                  type: "bar",
                  barWidth: "60%",
                  data: n.map(function(n) {
                    return n.count;
                  })
                }
              ]
            };
            this.chart || (this.chart = o.a.init(this.$refs.chart)),
              this.chart.setOption(i);
          }
        },
        mounted: function() {
          this.onSearch();
        }
      };
    }
  },
  ["NHnr"]
);
//# sourceMappingURL=app.8bb090622e87ec6ad17b.js.map
