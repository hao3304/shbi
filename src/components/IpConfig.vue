<template>
  <div style="color: #fff;padding:0 10px;">
    <Input v-model="ips" type="textarea" :autosize="{minRows: 10}" placeholder="请输入"></Input>
    <div @click="onSave" style="padding: 10px;text-align: right"><Button type="primary">保存</Button></div>
  </div>
</template>
<style>

</style>
<script>
  import { getIp,postIp } from '../module/service'
  export default {
    data(){
      return {
        ips:''
      }
    },
    methods:{
      onSave() {
        let ips = this.ips.split('\n');
        postIp({ips:ips}).then(rep=> {
          alert('保存成功！');
          this.render();
        })
      },
      render() {
        getIp().then(rep=> {
          if(rep.errno == 0 && rep.data ) {
            this.ips =rep.data.ips.join('\n')
          }
        })
      }

    },
    mounted(){
      this.render();
    }
  }
</script>
