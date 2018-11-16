<template>
  <div>
    <div class="chart" ref="chart" :style="{height:height +'px'}" style="width:100%">
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
  import { getSuccess } from '@/module/service';
  import echarts from 'echarts';

  export default {
    props:['domain','height','type'],
    data(){
      return {
        loading:true
      }
    },
    methods:{
      renderChart(data) {
        let option = {
          color: ['#3398DB', '#6AB0B8', '#E98F6F', '#9FDABF', '#DE9325'],
          title:{
            text:this.domain,
            textStyle:{
              color:'#fff'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          label: {
            normal: {
              formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
              backgroundColor: '#eee',
              borderColor: '#aaa',
              borderWidth: 1,
              borderRadius: 4,
              // shadowBlur:3,
              // shadowOffsetX: 2,
              // shadowOffsetY: 2,
              // shadowColor: '#999',
              // padding: [0, 7],
              rich: {
                a: {
                  color: '#999',
                  lineHeight: 22,
                  align: 'center'
                },
                // abg: {
                //     backgroundColor: '#333',
                //     width: '100%',
                //     align: 'right',
                //     height: 22,
                //     borderRadius: [4, 4, 0, 0]
                // },
                hr: {
                  borderColor: '#aaa',
                  width: '100%',
                  borderWidth: 0.5,
                  height: 0
                },
                b: {
                  fontSize: 16,
                  lineHeight: 33
                },
                per: {
                  color: '#eee',
                  backgroundColor: '#334455',
                  padding: [2, 4],
                  borderRadius: 2
                }
              }
            }
          },
          grid: {
            left: '3%',
            bottom: '3%',
            containLabel: true
          },
          series: [
            {
              name:this.domain,
              type:'pie',
              roseType: 'radius',
              radius: [ 0, '55%'],
              labelLine: {
                normal: {
                  show: false
                }
              },
              data:data.map(d => {
                return {
                  value: d.count,
                  name: d._id
                }
              })
            }
          ]
        };
        if(!this.chart){
          this.chart = echarts.init(this.$refs.chart);
        }
        this.chart.setOption(option);
        this.loading = false;
      },
      render() {
        this.loading = true;
        getSuccess({
          domain: this.domain,
          type: this.type
        }).then(rep => {
          this.renderChart(rep.data);
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
