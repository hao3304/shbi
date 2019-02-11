<template>
  <div class="top-page">
    <Spin v-show="loading" fix></Spin>
    <Form ref="form" :model="form" :label-width="80" inline>
      <FormItem style="color: #fff;" label="统计类型">
        <Select style="width: 200px" v-model="form.type">
          <Option value="china">中国</Option>
          <Option value="world">世界</Option>
        </Select>
      </FormItem>
      <FormItem label="统计范围" style="color: #fff;">
        <Select style="width: 200px" v-model="form.range">
          <Option value="hour">最近1小时</Option>
          <Option value="day">最近1天</Option>
          <Option value="week">最近7天</Option>
          <Option value="month">最近30天</Option>
        </Select>
      </FormItem>
      <!--<FormItem>-->
      <!--<Button icon="search" @click="onSearch" >查询</Button>-->
      <!--</FormItem>-->
    </Form>
    <div
      v-show="form.type == 'china'"
      ref="china"
      :style="{ height: height }"
    ></div>
    <div
      v-show="form.type == 'world'"
      ref="world"
      :style="{ height: height }"
    ></div>
  </div>
</template>
<script>
import { getGeoTop } from "@/module/service";
import echarts from "echarts";
import "echarts/map/js/china.js";
import "echarts/map/js/world";
import Cities from "@/components/chineseCities";

export default {
  data() {
    return {
      form: {
        type: "china",
        range: "hour"
      },
      height: document.documentElement.clientHeight - 220 + "px",
      loading: false,
      mode: "chart",
      data: [],
      columns: [
        {
          title: "#",

          key: "index"
        },
        {
          title: "对象",
          key: "_id"
        },
        {
          title: "数量",
          key: "count"
        }
      ]
    };
  },
  watch: {
    "form.type"() {
      this.onSearch();
    },
    "form.range"() {
      this.onSearch();
    }
  },
  methods: {
    onSearch() {
      this.loading = true;
      getGeoTop(this.form).then(rep => {
        this.data = this.convertData(rep.data);
        this.renderChart(this.data);
        this.loading = false;
      });
    },
    getCityName(id) {
      let city = Cities.find(city => city.pinyin == id);
      return city ? city.name : id;
    },
    convertData(data) {
      data.sort((a, b) => {
        return b.count - a.count;
      });
      return data.map(item => {
        return {
          name: this.getCityName(item._id),
          value: [item.lag, item.lat, item.count]
        };
      });
    },
    getNum() {
      let t = 1;
      switch (this.form.range) {
        case "hour":
          t = 20;
          break;
        case "day":
          t = 1000;
          break;
        case "week":
          t = 4000;
          break;
        case "month":
          t = 5000;
          break;
      }
      return t;
    },
    renderChart(data) {
      let option;

      if (this.form.type == "china") {
        option = {
          backgroundColor: "#404a59",
          animation: true,
          animationDuration: 1000,
          animationEasing: "cubicInOut",
          animationDurationUpdate: 1000,
          animationEasingUpdate: "cubicInOut",
          title: [
            {
              text: "邮件来源分布（中国）",
              sublink: "",
              left: "center",
              textStyle: {
                color: "#fff"
              }
            },
            {
              id: "statistic",
              right: 120,
              top: 40,
              width: 100,
              textStyle: {
                color: "#fff",
                fontSize: 16
              }
            }
          ],
          toolbox: {
            iconStyle: {
              normal: {
                borderColor: "#fff"
              },
              emphasis: {
                borderColor: "#b1e4ff"
              }
            }
          },
          brush: {
            outOfBrush: {
              color: "#abc"
            },
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
            center: [111.98561551896913, 33.205000490896193],
            zoom: 1,
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true,
            itemStyle: {
              normal: {
                areaColor: "#323c48",
                borderColor: "#111"
              },
              emphasis: {
                areaColor: "#2a333d"
              }
            }
          },
          tooltip: {
            trigger: "item",
            formatter: p => {
              return `
                <div>${p.name}</div>
                <div>${p.seriesName}: ${p.value[2]}</div>
              `;
            }
          },
          grid: {
            right: 40,
            top: 100,
            bottom: 40,
            width: "30%"
          },
          xAxis: {
            type: "value",
            scale: true,
            position: "top",
            boundaryGap: false,
            splitLine: { show: false },
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: { margin: 2, textStyle: { color: "#aaa" } }
          },
          yAxis: {
            type: "category",
            nameGap: 16,
            axisLine: { show: false, lineStyle: { color: "#ddd" } },
            axisTick: { show: false, lineStyle: { color: "#ddd" } },
            axisLabel: { interval: 0, textStyle: { color: "#ddd" } },
            data: data
              .slice(0, 20)
              .map(d => d.name)
              .reverse()
          },
          series: [
            {
              name: "邮件数",
              type: "scatter",
              coordinateSystem: "geo",
              data: this.data,
              symbolSize: val => {
                return Math.max(val[2] / this.getNum(), 8);
              },
              label: {
                normal: {
                  formatter: "{b}",
                  position: "right",
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: "#ddb926"
                }
              }
            },
            {
              name: "邮件数",
              type: "effectScatter",
              coordinateSystem: "geo",
              data: data.slice(0, 20),
              symbolSize: val => {
                return val[2] / this.getNum();
              },
              showEffectOn: "render",
              rippleEffect: {
                brushType: "stroke"
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: "{b}",
                  position: "right",
                  show: true
                }
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
              itemStyle: {
                normal: {
                  color: "#ddb926"
                }
              },
              tooltip: {
                formatter: params => {
                  return `<div>${params.name}:${params.data}</div>`;
                }
              },
              data: data
                .slice(0, 20)
                .map(d => d.value[2])
                .reverse()
            }
          ]
        };
      } else {
        let max = data[0].value[2];
        option = {
          backgroundColor: "#404a59",
          title: {
            text: "邮件来源分布（世界）",
            left: "center",
            textStyle: {
              color: "#fff",
              fontSize: 24
            },
            padding: [20, 20, 20, 20]
          },
          tooltip: {
            trigger: "item",
            backgroundColor: "rgba(12, 204, 104, 0.92)",
            borderColor: "#FFFFCC",
            showDelay: 0,
            hideDelay: 0,
            enterable: true,
            transitionDuration: 0,
            extraCssText: "z-index:100",
            formatter: function(params, ticket, callback) {
              //根据业务自己拓展要显示的内容
              var res = "";
              var name = params.name;
              var value = params.value[params.seriesIndex + 1];
              res =
                "<span style='color:#fff;'>" +
                name +
                "</span><br/>数据：" +
                value;
              return res;
            }
          },
          visualMap: {
            //图例值控制
            min: 0,
            max: max,
            calculable: true,
            color: ["#ff3333", "orange", "yellow", "lime", "aqua"],
            textStyle: {
              color: "#fff"
            }
          },
          geo: {
            map: "world",
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true, //是否允许缩放
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: "200%",
            itemStyle: {
              normal: {
                color: "rgba(51, 69, 89, .5)", //地图背景色
                borderColor: "rgba(100,149,237,1)" //省市边界线
              },
              emphasis: {
                color: "rgba(37, 43, 61, .5)" //悬浮背景
              }
            }
          },
          series: [
            {
              type: "lines",
              zlevel: 2,
              effect: {
                show: true,
                period: 4, //箭头指向速度，值越小速度越快
                trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                symbol: "arrow", //箭头图标
                symbolSize: 5 //图标大小
              },
              lineStyle: {
                normal: {
                  width: 1, //尾迹线条宽度
                  opacity: 0, //尾迹线条透明度
                  curveness: 0.3 //尾迹线条曲直度
                }
              },
              tooltip: {
                formatter: params => {
                  if (!params.name || !params.data) return null;
                  return `<div>${params.name}:${params.data}</div>`;
                }
              },
              data: data.map(item => {
                return [
                  {
                    coord: [item.value[0], item.value[1]],
                    value: item.value[2]
                  },
                  {
                    coord: [121.4648, 31.2891]
                  }
                ];
              })
            },
            {
              type: "effectScatter",
              coordinateSystem: "geo",
              zlevel: 2,
              rippleEffect: {
                //涟漪特效
                period: 4, //动画时间，值越小速度越快
                brushType: "stroke", //波纹绘制方式 stroke, fill
                scale: 4 //波纹圆环最大限制，值越大波纹越大
              },
              label: {
                normal: {
                  show: true,
                  position: "right", //显示位置
                  offset: [5, 0], //偏移设置
                  formatter: "{b}" //圆环显示文字
                },
                emphasis: {
                  show: true
                }
              },
              symbol: "circle",
              symbolSize: val => {
                return Math.max(val[2] / this.getNum() / 10, 4); //圆环大小
              },
              itemStyle: {
                normal: {
                  show: false,
                  color: "#f00"
                }
              },
              data: data
            },
            {
              type: "scatter",
              coordinateSystem: "geo",
              zlevel: 2,
              rippleEffect: {
                period: 4,
                brushType: "stroke",
                scale: 4
              },
              label: {
                normal: {
                  show: true,
                  position: "right",
                  //offset:[5, 0],
                  color: "#00ffff",
                  formatter: "{b}",
                  textStyle: {
                    color: "#00ffff"
                  }
                },
                emphasis: {
                  show: true
                }
              },
              symbol: "pin",
              symbolSize: 30,
              itemStyle: {
                normal: {
                  show: true,
                  color: "#9966cc"
                }
              },
              data: [
                {
                  name: "上海",
                  value: [121.4648, 31.2891, 100]
                }
              ]
            }
          ]
        };
      }
      if (this.chart) {
        this.chart.clear();
        this.chart = null;
      }
      if (!this.chart) {
        this.chart = echarts.init(this.$refs[this.form.type]);
        this.chart.on("brushselected", this.renderBrushed);
      }
      this.chart.setOption(option);
    },
    renderBrushed(params) {
      var mainSeries = params.batch[0].selected[0];

      var selectedItems = [];
      var categoryData = [];
      var barData = [];
      var maxBar = 1000;
      var sum = 0;
      var count = 0;

      for (var i = 0; i < mainSeries.dataIndex.length; i++) {
        var rawIndex = mainSeries.dataIndex[i];
        var dataItem = this.data[rawIndex];
        var pmValue = dataItem.value[2];

        sum += pmValue;
        count++;

        selectedItems.push(dataItem);
      }

      selectedItems.sort(function(a, b) {
        return a.value[2] - b.value[2];
      });

      for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
        categoryData.push(selectedItems[i].name);
        barData.push(selectedItems[i].value[2]);
      }

      this.chart.setOption({
        yAxis: {
          data: categoryData
        },
        xAxis: {
          axisLabel: { show: !!count }
        },
        title: {
          id: "statistic",
          text: count ? "平均: " + (sum / count).toFixed(2) : ""
        },
        series: {
          id: "bar",
          data: barData
        }
      });
    }
  },
  mounted() {
    this.onSearch();
  }
};
</script>
<style lang="less">
.top-page {
  .ivu-form .ivu-form-item-label {
    color: #fff;
  }
  color: #fff;
}
</style>
