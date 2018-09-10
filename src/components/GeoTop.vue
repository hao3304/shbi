<template>
  <div class="top-page">
    <Spin v-show="loading" fix></Spin>
    <Form ref="form" :model="form"  :label-width="80" inline>
      <FormItem style="color: #fff;" label="统计类型">
        <Select  style="width: 200px" v-model="form.type">
          <Option value="china">中国</Option>
        </Select>
      </FormItem>
      <FormItem label="统计范围" style="color: #fff;" >
        <Select style="width: 200px"  v-model="form.range">
          <Option value="hour">最近1小时</Option>
          <Option value="day">最近1天</Option>
          <Option value="week">最近7天</Option>
          <Option value="month">最近30天</Option>
        </Select>
      </FormItem>
      <FormItem>
        <Button icon="search" @click="onSearch" >查询</Button>
      </FormItem>
    </Form>
    <div ref="chart" :style="{height: height}"  ></div>
  </div>
</template>
<script>
  import { getGeoTop } from '@/module/service'
  import echarts from 'echarts'
  import 'echarts/map/js/china.js'
  import Cities from '@/components/chineseCities'

  export default {
    data() {
      return {
        form: {
          type: 'china',
          range: 'hour'
        },
        height: document.documentElement.clientHeight - 200 + 'px',
        loading: false,
        mode: 'chart',
        data: [],
        columns: [
          {
            title: '#',
            key: 'index'
          },
          {
            title: '对象',
            key: '_id'
          },
          {
            title: '数量',
            key: 'count'
          }
        ]
      }
    },
    methods: {
      onSearch() {
        this.loading = true;
        getGeoTop(this.form).then(rep=> {
          this.data = this.convertData(rep.data);
          this.renderChart(this.data);
          this.loading = false;
        })
      },
      getCityName(id) {
        let city =  Cities.find(city => city.pinyin == id)
        return city?city.name:id
      },
      convertData(data) {
        data.sort((a, b)=> {
          return b.count - a.count
        })
        return data.map(item => {

          return {
            name: this.getCityName(item._id),
            value: [item.lag, item.lat, item.count]
          }
        })
      },
      getNum() {
        let t = 1
        switch (this.form.range) {
          case 'hour':
            t = 10;
            break;
          case 'day':
            t = 1000;
            break;
          case 'week':
            t = 4000;
            break;
          case 'month':
            t = 5000;
            break;
        }
        return t;
      },
      renderChart(data) {
        let option = {
          backgroundColor: '#404a59',
          animation: true,
          animationDuration: 1000,
          animationEasing: 'cubicInOut',
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut',
          title: [
            {
              text: '全国区域邮件数量统计分布',
              sublink: '',
              left: 'center',
              textStyle: {
                color: '#fff'
              }
            },
            {
              id: 'statistic',
              right: 120,
              top: 40,
              width: 100,
              textStyle: {
                color: '#fff',
                fontSize: 16
              }
            }
          ],
          toolbox: {
            iconStyle: {
              normal: {
                borderColor: '#fff'
              },
              emphasis: {
                borderColor: '#b1e4ff'
              }
            }
          },
          brush: {
            outOfBrush: {
              color: '#abc'
            },
            brushStyle: {
              borderWidth: 2,
              color: 'rgba(0,0,0,0.2)',
              borderColor: 'rgba(0,0,0,0.5)',
            },
            seriesIndex: [0, 1],
            throttleType: 'debounce',
            throttleDelay: 300,
            geoIndex: 0
          },
          geo: {
            map: 'china',
            left: '10',
            right: '35%',
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
                areaColor: '#323c48',
                borderColor: '#111'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          tooltip : {
            trigger: 'item'
          },
          grid: {
            right: 40,
            top: 100,
            bottom: 40,
            width: '30%'
          },
          xAxis: {
            type: 'value',
            scale: true,
            position: 'top',
            boundaryGap: false,
            splitLine: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
            axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
          },
          yAxis: {
            type: 'category',
            nameGap: 16,
            axisLine: {show: false, lineStyle: {color: '#ddd'}},
            axisTick: {show: false, lineStyle: {color: '#ddd'}},
            axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
            data: data.slice(0, 20).map(d=> d.name).reverse()
          },
          series : [
            {
              name: '邮件数',
              type: 'scatter',
              coordinateSystem: 'geo',
              data: this.data,
              symbolSize:  (val) => {
                return Math.max(val[2] / this.getNum(), 8);
              },
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                },
                emphasis: {
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#ddb926'
                }
              }
            },
            {

              name: '邮件数',
              type: 'effectScatter',
              coordinateSystem: 'geo',
              data: data.slice(0, 20),
              symbolSize:  (val) => {
                return val[2] / this.getNum();
              },
              showEffectOn: 'render',
              rippleEffect: {
                brushType: 'stroke'
              },
              hoverAnimation: true,
              label: {
                normal: {
                  formatter: '{b}',
                  position: 'right',
                  show: true
                }
              },
              itemStyle: {
                normal: {
                  color: '#f4e925',
                  shadowBlur: 10,
                  shadowColor: '#333'
                }
              },
              zlevel: 1
            },
            {
              id: 'bar',
              zlevel: 2,
              type: 'bar',
              symbol: 'none',
              itemStyle: {
                normal: {
                  color: '#ddb926'
                }
              },
              data: data.slice(0, 20).map(d => d.value[2]).reverse(),
            }
          ]
        };

        if(!this.chart){
          this.chart = echarts.init(this.$refs.chart);
          this.chart.on('brushselected', this.renderBrushed)
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

        selectedItems.sort(function (a, b) {
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
            axisLabel: {show: !!count}
          },
          title: {
            id: 'statistic',
            text: count ? '平均: ' + (sum / count).toFixed(2) : ''
          },
          series: {
            id: 'bar',
            data: barData
          }
        });
      }
    },
    mounted() {
      this.onSearch();
    }
  }
</script>
<style lang="less">
  .top-page {
    .ivu-form .ivu-form-item-label {
      color: #fff;
    }
    color: #fff;

  }

</style>
