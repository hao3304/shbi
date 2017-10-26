<template>
  <div>
    <div class="chart" ref="chart" :style="{height:height +'px'}">
    </div>
    <Spin size="large" fix v-if="loading">
      <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
      <div>加载中</div>
    </Spin>
  </div>
</template>
<style scoped>

  .ivu-spin-fix{
    background-color: rgba(255,255,255,.4);
  }

  .ivu-spin{
    color: #fff;
  }


</style>
<script>
  import { queryMail } from '@/module/service';
  import echarts from 'echarts';

  export default {
    props:['query','name','height','type'],
    data(){
      return {
        loading:true
      }
    },
    methods:{
      renderChart(data) {
        let option = {
          title:{
            text:this.name,
            textStyle:{
              color:'#fff'
            }
          },
          color: ['#677cd5'],
          backgroundColor:'rgba(255,255,255,0)',
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            bottom: '3%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : data.map(d=>d.key_as_string),
              axisTick: {
                alignWithLabel: true
              },
              axisLabel:{
                color:'#fff'
              },
              axisLine:{
                lineStyle:{
                  color:'#ccc'
                }
              }
            }
          ],
          yAxis : [
            {
              type : 'value',
              axisLabel:{
                color:'#fff'
              }
            }
          ],
          series : [
            {
              name:'日志数量',
              type:'bar',
              barWidth: '60%',
              label: {
                normal: {
                  show: false,
                  position: 'inside'
                }
              },
              data:data.map(d=>d.doc_count),
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              }
            }
          ]
        };
        if(!this.chart){
          this.chart = echarts.init(this.$refs.chart);
        }
        this.chart.setOption(option);
        this.loading = false;
      },
      getHistoryParams(type) {

        let t = '1h',f = 'YYYY-MM-dd',i;

        switch (type){
          case 'm':
            t = '1h';
            f = 'HH:mm:ss';
            i = '60s';
            break;
          case 'd':
            t = '30d';
            f = 'YYYY-MM-dd';
            i = '1d';
            break;
          case 'M':
            t = '12M';
            f = 'YYYY-MM';
            i = '1M';
        }

        let p = {
          "size":0,
          "query":{
            "bool": {
              "must": [
                {
                  "range": {
                    "@timestamp": {
                      "gte": `now-${t}`,
                      "lte": "now"
                    }
                  }
                }
              ]
            }
          },
          "aggs": {
            "mail": {
              "date_histogram": {
                "field": "@timestamp",
                "interval": i,
                "format": f,
                "min_doc_count": 0,
                "time_zone": "+08:00"
              }
            }
          }
        }

        if(this.query!= 'all'){
          p.query.bool.must.push( {
            "query_string": {
              "query": this.query,
              "all_fields": true
            }
          })
        }

        return p
      },
      render() {
        this.loading = true;
        let params = this.getHistoryParams(this.type);
        queryMail(params).then(({data})=>{
          let {aggregations:{mail:{buckets=[]}}} = data;
          this.renderChart(buckets);
        })
      }
    },
    watch:{
      type(t){
        this.render();
      }
    },
    mounted(){
        this.render();
    }
  }

</script>
