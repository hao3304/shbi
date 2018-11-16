<template>
  <div>
    <div class="mode-change">
      <div style="float: right">
        <ButtonGroup>
          <Button  :type="type=='hour'?'primary':'default'" @click="onSelect('hour')" >最近1小时</Button>
          <Button  :type="type=='day'?'primary':'default'" @click="onSelect('day')" >最近24小时</Button>
          <Button  :type="type=='week'?'primary':'default'" @click="onSelect('week')" >最近7天</Button>
          <Button  :type="type=='month'?'primary':'default'"  @click="onSelect('month')" >最近30天</Button>
        </ButtonGroup>
      </div>
    </div>
    <Row>
      <Col :lg="8" :md="8" :sm="12" :xs="24" v-for="(m , index) in domains"   :key="index" style="padding: 5px">
        <div class="chart-box">
          <b-chart :type="type" :domain="m"  :height="height"></b-chart>
        </div>
      </Col>
    </Row>
  </div>
</template>
<style lang="less" scoped>
  .chart-box{
    background-color: rgba(255,255,255,0.1);
    padding-top: 5px;
  }

  .mode-change{
    position: fixed;
    top:75px;
    right: 20px;
    width: 500px;
    z-index: 1000;
  }

</style>
<script>

  import bChart from '@/components/bChart';
  import { getDomain } from '@/module/service'

  export default {
    data(){
      return {
        height:'200px',
        type:'hour',
        domains: []
      }
    },
    computed:{
      list() {

      }
    },
    methods:{
      onSelect(t) {
        this.type = t;
      },
      render() {
        getDomain().then(rep => {
          this.domains = rep.data.domain;
        })
      }
    },
    components:{
      bChart
    },
    created(){
      let h = document.documentElement.clientHeight/2;
      this.height = h<220?220:h;
      this.render();
    }
  }
</script>
