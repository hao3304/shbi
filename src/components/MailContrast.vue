<template>
  <div>
    <div class="mode-change">
      <div style="float: right">
        <ButtonGroup>
          <Button  :type="type=='m'?'primary':'default'" @click="onSelect('m')" >最近24小时</Button>
          <Button  :type="type=='d'?'primary':'default'"  @click="onSelect('d')" >最近30天</Button>
          <Button  :type="type=='M'?'primary':'default'"  @click="onSelect('M')" >最近12月</Button>
        </ButtonGroup>
      </div>
    </div>
    <Row>
      <Col :lg="8" :md="8" :sm="12" :xs="24" v-for="(m , index) in list"  v-if="m.Visible" :key="index" style="padding: 5px">
        <div class="chart-box">
          <v-chart :type="type" :query="m.Query" :name="m.Name" :height="height"></v-chart>
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
    width: 400px;
    z-index: 1000;
  }

</style>
<script>

  import vChart from '@/components/vChart';

  export default {
    store:['modes'],
    data(){
      return {
        height:'200px',
        type:'m'
      }
    },
    computed:{
      list() {
        if(this.modes) {
          return this.modes.sort((a, b)=>{
            return b.Created - a.Created
          }).sort((a,b)=>{
            return b.Index - a.Index
          })
        }else{
          return [];
        }
      }
    },
    methods:{
      onSelect(t) {
        this.type = t;
      }
    },
    components:{
      vChart
    },
    created(){
      let h = document.documentElement.clientHeight/4;
      this.height = h<220?220:h;
    }
  }
</script>
