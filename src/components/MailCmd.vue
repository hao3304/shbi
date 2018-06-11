<template>
  <div class="app" style="color: #fff">
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
          <Button icon="unlocked"  @click="onCmd('active')"  type="primary" >Active</Button>
        </FormItem>
      </Form>

    <div style="padding:0 10px;">
      <Table :loading="loading" :columns="columns"  :data="logs"></Table>
      <div style="text-align: right;padding:10px 0">
        <Page :total="total" @on-change="currentChange" :page-size="20"></Page>
      </div>
    </div>
    <Spin size="large" fix v-if="loading"></Spin>

  </div>
</template>
<style>
  .app .ivu-form  .ivu-form-item-label{
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

  import { doCmd,getLogs } from '../module/service';


  export default {
    data(){
      return{
        form: {
          email:'aquarius@sjtu.edu.cn'
        },
        logs:[],
        loading:false,
        rules:{
          email:[
            {required:true,message:'必填项',trigger:'blur'}
          ]
        },
        columns:[
          {
            title:'#',
            width: 60,
            render: (h, params) => {
              return h('span',params.index + (params.row.page)*20 +1)
            }
          },
          {
            title:'目标邮箱',
            key:'Mail'
          },
          {
            title:'操作用户',
            key:'UserName'
          },
          {
            title:'操作时间',
            render:(h,{row})=>{
              return h('span',new Date(row.Created*1000).Format('yyyy-MM-dd hh:mm:ss'))
            }
          },{
            title:'操作指令',
            render:(h,{row})=>{

              let color = '#666';
              switch (row.Action) {
                case 'locked':
                  color = 'red';
                  break;
                case 'active':
                  color = 'green';
                  break;
              }

              return h('span',{
                style:{
                  color:color
                }
              },row.Action)
            }
          },{
            title:'结果',
            key:"Content"
          }
        ],
        loading:false,
        page:0,
        size:20,
        total:0
      }
    },
    methods:{
      onCmd(action) {
        this.$refs.form.validate(valid =>{
          this.loading = true;
          if(valid){
            doCmd({mail:this.form.email,action:action}).then(data=>{
              this.loading = false;
              if(data.Code == 0) {
                this.render();
              }else{
                alert(data.Response)
              }
            })
          }
        })
      },
      render() {
        this.loading = true;
        getLogs(this.page*this.size).then(data=>{
          this.loading = false;
          if(data.Code == 0) {
            this.logs = data.Response.Data;
            this.logs.forEach(l=>{
              l.page = this.page
            })
            this.total = data.Response.Total;
          }else{
            alert(data.Response)
          }
        })
      },
      currentChange(p) {
        this.page = p;
        this.render();
      }
    },
    watch:{

    },
    mounted(){
      this.render();
    }
  }
</script>
