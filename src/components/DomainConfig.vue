<template>
  <div style="color: #fff;padding:0 10px;">
    <Input v-model="domain" type="textarea" :autosize="{minRows: 10}" placeholder="请输入"></Input>
    <div @click="onSave" style="padding: 10px;text-align: right"><Button type="primary">保存</Button></div>
  </div>
</template>
<style>

</style>
<script>
  import { getDomain,postDomain } from '../module/service'
  export default {
    data(){
      return {
        domain:''
      }
    },
    methods:{
      onSave() {
        let domain = this.domain.split('\n');
        postDomain({domain:domain}).then(rep=> {
          alert('保存成功！');
          this.render();
        })
      },
      render() {
        getDomain().then(rep=> {
          if(rep.errno == 0 && rep.data ) {
            this.domain =rep.data.domain.join('\n')
          }
        })
      }

    },
    mounted(){
      this.render();
    }
  }
</script>
