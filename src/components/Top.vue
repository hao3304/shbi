<template>
  <div class="top-page">
    <Spin v-show="loading" fix></Spin>
    <Form ref="form" :model="form"  :label-width="80" inline>
      <FormItem style="color: #fff;" label="统计类型">
        <Select  style="width: 200px" v-model="form.type">
          <Option value="ipAddr">ipAddr</Option>
          <Option value="fromAddr">fromAddr</Option>
          <Option value="toAddr">toAddr</Option>
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
      <!--<FormItem label="统计数量" style="color: #fff;" >-->
        <!--<Select style="width: 200px"  v-model="form.k">-->
          <!--<Option value="10">Top10</Option>-->
          <!--<Option value="50">Top50</Option>-->
          <!--<Option value="100">Top100</Option>-->
        <!--</Select>-->
      <!--</FormItem>-->

      <FormItem>
        <Button icon="search" @click="onSearch" >查询</Button>
      </FormItem>

      <div style="float: right;margin-right: 20px;">
        <ButtonGroup>
          <Button @click="mode= 'chart'" :type="mode == 'chart'?'primary':'default'" icon="stats-bars"></Button>
          <Button @click="mode='table'" :type="mode == 'table'?'primary':'default'"  icon="navicon-round"></Button>
        </ButtonGroup>
      </div>

    </Form>

    <div style="padding: 0 10px;"  v-show="mode =='chart'">
      <div ref="chart"  style="height: 400px" ></div>
    </div>

    <div style="padding:0 10px;" v-show="mode=='table'">
      <Table :columns="columns"  :data="data"></Table>
    </div>
  </div>
</template>
<script>
  import { searchTop } from '@/module/service'
  import echarts from 'echarts'
  export default {
    data() {
      return {
        form: {
          type: 'ipAddr',
          range: 'hour',
          k: '10'
        },
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
        searchTop(this.form).then(rep=> {
          this.data = rep.data.map((d,index)=> {
            d.index = index +1;
            return d;
          })
          this.renderChart(this.data);
          this.loading = false;
        })
      },
      renderChart(data) {
    debugger
        let option = {
          color: ['#3398DB'],
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : data.map(d=> d._id),
              axisTick: {
                alignWithLabel: true
              },
              'axisLabel':{'interval':0},
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              }
            }
          ],
          series : [
            {
              name: this.type,
              type:'bar',
              barWidth: '60%',
              data: data.map(d=> d.count)
            }
          ]
        };;
        if(!this.chart){
          this.chart = echarts.init(this.$refs.chart);
        }
        this.chart.setOption(option);
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
