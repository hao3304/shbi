<template>
  <div>
    <div class="mode-select">
      <Select v-model="mode" @on-change="onModeChange">
        <Option v-for="m in modes" :value="m.value" :key="m.value">{{m.name}}</Option>
      </Select>
    </div>
    <Row>
      <Col span="6">
      <div class="base-block">
        <div class="content">
          <h5>最近24小时</h5>
          <p>{{times.last24h | formatNum}}</p>
          <Spin size="large" fix v-if="times.last24h == null">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中</div>
          </Spin>
        </div>
      </div>
      </Col>
      <Col span="6">
      <div class="base-block">
        <div class="content">
          <h5>最近7天</h5>
          <p>{{times.last7d | formatNum}}</p>
          <Spin size="large" fix v-if="times.last7d == null">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中</div>
          </Spin>
        </div>
      </div>
      </Col>
      <Col span="6">
      <div class="base-block">
        <div class="content">
          <h5>最近30天</h5>
          <p>{{times.last30d | formatNum}}</p>
          <Spin size="large" fix v-if="times.last30d == null">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中</div>
          </Spin>
        </div>
      </div>
      </Col>
      <Col span="6">
      <div class="base-block">
        <div class="content">
          <h5>全部</h5>
          <p>{{times.all | formatNum}}</p>
          <Spin size="large" fix v-if="times.all == null">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中</div>
          </Spin>
        </div>
      </div>
      </Col>
    </Row>
    <Row style="margin-top: 15px">
      <Col>
      <div class="base-block">
        <div class="content" >
          <h5>实时数据

            <div style="float: right">
              <ButtonGroup size="small" >
                <Button  :type="type=='m'?'primary':'default'" @click="onSelect('m')" >分</Button>
                <Button  :type="type=='d'?'primary':'default'"  @click="onSelect('d')" >日</Button>
                <Button  :type="type=='M'?'primary':'default'"  @click="onSelect('M')" >月</Button>
              </ButtonGroup>
            </div>
          </h5>
          <div id="history-chart"></div>
          <Spin size="large" fix v-if="loading">
            <Icon type="load-c" size=18 class="demo-spin-icon-load"></Icon>
            <div>加载中</div>
          </Spin>
        </div>
      </div>
      </Col>
    </Row>
  </div>
</template>

<script>

  import { queryMail } from '../module/service';
  import echarts from 'echarts';


  export default {
    data () {
      return {
        times:{
          last24h:null,
          last7d:null,
          last30d:null,
          all:null
        },
        loading:true,
        type:'m',
        modes:[
          {name:'全部',value:'all'},
          {name:'正常接收邮件数量', value:'mx AND "client=" AND "postfix/smtpd" NOT "NOQUEUE"'},
          {name:'拒收邮件数量', value:'mx AND "client=" AND "postfix/smtpd" AND "NOQUEUE"'},
          {name:'被梭子鱼黑名单拦截的邮件数量', value:'"Client host blocked using Barracuda Reputation" AND mx'},
          {name:'交大用户通过客户端发送的邮件数量', value:'sasl_username AND (proxy01 OR proxy08)'},
          {name:'交大用户通过webmail发送邮件数量', value:'(mta01 OR mta03) AND "postfix/smtpd" AND  {mailstore01 TO mailstore22} AND "client="'},
          {name:'正常接收清华大学的邮件', value:'mx AND ".tsinghua.edu.cn" AND "postfix/smtpd" AND "client=" AND {smtp01 TO smtp99} NOT "NOQUEUE"'},
          {name:'拒收清华大学的邮件', value:'mx AND ".tsinghua.edu.cn" AND "postfix/smtpd" AND "client=" AND {smtp01 TO smtp99} AND "NOQUEUE"'},
          {name:'正常接收北京大学的邮件', value:'mx AND ".pku.edu.cn" AND "postfix/smtpd" AND "client=" AND {mx01 TO mx99} NOT "NOQUEUE"'},
          {name:'拒收北京大学的邮件', value:'mx AND ".pku.edu.cn" AND "postfix/smtpd" AND "client=" AND {mx01 TO mx99} AND "NOQUEUE"'},
          {name:'正常接收复旦大学的邮件', value:'mx AND "client=mail.fudan.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
          {name:'拒收复旦大学的邮件', value:'mx AND "client=mail.fudan.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'},
          {name:'正常接收浙江大学的邮件', value:'mx AND "client=spam.zju.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
          {name:'拒收浙江大学的邮件', value:'mx AND "client=spam.zju.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'},
          {name:'正常接收中科大的邮件', value:'mx AND ".ustc.edu.cn" AND "postfix/smtpd"  AND "client=" AND {smtp1 TO smtp99} NOT "NOQUEUE"'},
          {name:'拒收中科大的邮件', value:'mx AND ".ustc.edu.cn" AND "postfix/smtpd"  AND "client=" AND {smtp1 TO smtp99} AND "NOQUEUE"'},
          {name:'正常接收西安交通大学的邮件', value:'mx AND "client=mail.xjtu.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
          {name:'拒收西安交通大学的邮件', value:'mx AND "client=mail.xjtu.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'},
          {name:'正常接收哈尔滨工程大学的邮件', value:'mx AND "client=mail.hit.edu.cn" AND "postfix/smtpd" NOT "NOQUEUE"'},
          {name:'拒收哈尔滨工程大学的邮件', value:'mx AND "client=mail.hit.edu.cn" AND "postfix/smtpd" AND "NOQUEUE"'},
        ],
        mode:'all'

      }
    },
    methods:{
      render() {
        this.renderTarget();
      },
      renderTarget() {
        queryMail(this.getParams('24h')).then(({data})=>{
          let {hits:{total}} = data;
          this.times.last24h = total;
        })
        queryMail(this.getParams('7d')).then(({data})=>{
          let {hits:{total}} = data;
          this.times.last7d = total;
        })
        queryMail(this.getParams('30d')).then(({data})=>{
          let {hits:{total}} = data;
          this.times.last30d = total;
        })
        queryMail(this.getParams('all')).then(({data})=>{
          this.times.all = data.hits.total;
        });
        this.renderHistory();
      },
      renderHistory(){
        queryMail(this.getHistoryParams(this.type)).then(({data})=>{
          let {aggregations:{mail:{buckets=[]}}} = data;
          this.renderChart(buckets);
        })
      },
      renderChart(data) {
        let option = {
          color: ['#1cb781'],
          backgroundColor:'rgba(255,255,255,0)',
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top:'12%',
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
          let dom = document.getElementById('history-chart');
          dom.style.height = document.documentElement.clientHeight - 310 + 'px';
          this.chart = echarts.init(dom);
        }
        this.chart.setOption(option);
        this.loading = false;
      },
      onSelect(t){
        if(t != this.type) {
          this.type = t;
          this.loading = true;
          this.renderHistory()
        }
      },
      getParams(range){



        let p = {
          "size":0,
          "query":{
            "bool": {
              "must": [
                {
                  "range": {
                    "@timestamp": {
                      "gt": `now-${range}`,
                      "lt": "now"
                    }
                  }
                }
              ]
            }
          }
        };

        if(range == 'all') {
          p = {
            size:0,
            query:{
              bool:{
                must:[]
              }
            }
          }
        }

        if(this.mode!= 'all'){
          p.query.bool.must.push( {
            "query_string": {
              "query": this.mode,
              "all_fields": true
            }
          })
        }

        return p;
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

        if(this.mode!= 'all'){
          p.query.bool.must.push( {
            "query_string": {
              "query": this.mode,
              "all_fields": true
            }
          })
        }

        return p
      },
      onModeChange(m){

        this.times.last24h = null;
        this.times.last30d = null;
        this.times.last7d = null;
        this.times.all = null;
        this.loading = true;
        this.render();
      }
    },
    mounted(){
      this.render();
//      setInterval(()=>this.render(),30000);
    }
  }
</script>

<style lang="less" scoped>
  .base-block{
    padding: 0 10px;

    .content{
      background-color: rgba(255,255,255,0.1);
      padding: 10px;
      box-shadow: 1px 1px 1px rgba(0,0,0,.2);
      h5{
        font-size: 14px;
        color: #ddd;
      }
      p{
        font-size: 28px;
        padding: 5px 0;
        font-weight: 200;
        color: #fff;
      }
    }
  }

  .mode-select{
    position: fixed;
    top:75px;
    right: 20px;
    width: 400px;
    z-index: 1000;
  }

  .ivu-spin-fix{
    background-color: rgba(255,255,255,.4);
  }

  .ivu-spin{
    color: #fff;
  }


</style>
