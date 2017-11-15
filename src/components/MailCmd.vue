<template>
  <div style="color: #fff">
      <Form ref="form" :model="form"  :label-width="80" :rules="rules" inline>
        <FormItem prop="email" label="目标邮箱">
          <Input v-model="form.email" placeholder="请输入邮箱地址" style="width: 300px;">
          </Input>
        </FormItem>
        <FormItem>
          <Button icon="search" @click="onCmd('status')" >状态</Button>
          &nbsp;&nbsp;
          <Button icon="locked"  @click="onCmd('locked')"  type="warning"  >Locked</Button>
          &nbsp;&nbsp;
          <Button icon="unlocked"  @click="onCmd('active')"  type="primary" >Action</Button>
        </FormItem>
      </Form>

    <div style="padding:0 10px;">
      <div  class="content" >
        <strong>操作记录</strong>
        <ul>
          <li v-for="l in logs">
             {{l}}
          </li>
        </ul>
      </div>
    </div>
    <Spin size="large" fix v-if="loading"></Spin>

  </div>
</template>
<style>
  .ivu-form .ivu-form-item-label{
    color: #fff;
  }

  .content{
    padding: 10px;
    border: 1px solid #ddd;
    background-color: rgba(255,255,255,.4);
    border-radius: 4px;
  }
</style>
<script>

  import { doCmd } from '../module/service';


  export default {
    data(){
      return{
        form: {
          email:'aquarius@sjtu.edu.cn'
        },
        logs:[],
        rules:{
          email:[
            {required:true,message:'必填项',trigger:'blur'}
          ]
        },
        loading:false
      }
    },
    methods:{
      onCmd(action) {
        this.$refs.form.validate(valid =>{
          this.loading = true;
          if(valid){
            doCmd({mail:this.form.email,action:action}).then(({data})=>{
              this.loading = false;
              if(data.Code == 0) {
                this.logs.unshift(new Date().Format('yyyy-MM-dd hh:ss:mm') + ' ' + data.Response );
              }else{
                alert(data.Response)
              }
            })
          }
        })
      }
    },
    watch:{

    },
    mounted(){

    }
  }
</script>
