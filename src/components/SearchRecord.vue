<template>
  <div class="app" style="color: #fff">
    <Form ref="form" :model="form"  :label-width="80" :rules="rules" inline>
      <FormItem prop="name" label="目标邮件">
        <Input v-model="form.name">
        <span slot="append">@sjtu.edu.cn</span>
        </Input>
      </FormItem>
      <FormItem label="操作行为">
        <Select v-model="form.type" style="width:200px">
          <Option v-for="item in actions" :value="item.value" :key="item.value">{{ item.name }}</Option>
        </Select>
      </FormItem>
      <FormItem label="日期范围">
        <DatePicker v-model="form.date" format="yyyy-MM-dd" type="daterange" placement="bottom-end" placeholder="请选择日期范围" style="width: 200px"></DatePicker>
      </FormItem>
      <FormItem>
        <Button icon="search" @click="onSearch" >查询</Button>
      </FormItem>
    </Form>

    <div style="padding:0 10px;">
      <Table :height="height" :loading="loading" :columns="columns"  :data="data"></Table>
      <div style="text-align: right;padding:10px 0">
        <Page :total="total" @on-change="handleCurrentChange" :page-size="20"></Page>
      </div>
    </div>

  </div>
</template>
<style>


</style>
<script>

  import { queryRecord } from '../module/service';
  export default {
    data(){
      return{
        height: document.documentElement.clientHeight - 350,
        prefix:'@sjtu.edu.cn',
        form: {
          name:'qizhwei',
          date:[],
          type:'imap_login',
          page:1,
          size:20
        },
        rules:{
          name:[
            {required:true,message:'必填项',trigger:'blur'}
          ]
        },
        data:[],
        total:0,
        loading:false,
        columns:[
          {
            title:'#',
            width: 60,
            render: (h, params) => {
              return h('span',params.index + (this.form.page-1)*20 +1)
            }
          },
          {
            title: '地址',
            key: 'name'
          },
          {
            title: '系统IP（oip）',
            key: 'oip'
          },
          {
            title: 'via',
            key: 'via'
          },
          {
            title: 'city',
            key: 'city'
          },
          {
            title: 'country',
            key: 'country'
          },
          {
            title: '操作时间（timestamp）',
            render:(h,{row})=>{
              return h('span',new Date(row.timestamp*1000).Format('yyyy-MM-dd hh:ss'))
            }
          }
        ],
        actions:[
          {value:"imap_login",name:'imap_login'},
          {value:"imap_delete",name:'imap_delete'},
          {value:"pop3_login",name:'pop3_login'},
          {value:"pop3_delete",name:'pop3_delete'}
          // {value:"RETR",name:'RETR'},
          // {value:"FETCH",name:'FETCH'},
          // {value:"Adding",name:'Adding'},
          // {value:"EXPUNGE",name:'EXPUNGE'},
          // {value:"SendMsgRequest",name:'SendMsgRequest'},
        ]
      }
    },
    methods:{
      onSearch() {
        if(this.loading){
          return;
        }

        this.$refs.form.validate(valid =>{
          if(valid){
            this.getData();
          }
        })
      },
      onReset(){
        this.form.name = '';
        this.form.date = [];
        this.form.type = 'authlogin';
        this.form.page = 1;
        this.data = [];
      },
      getData() {
        this.loading = true;
        let params = JSON.parse(JSON.stringify(this.form));
        params.name += this.prefix;

        const date = this.getDate(this.form.date);
        if(date.begin) {
          params.begin = date.begin
          params.end = date.end
        }
        // let query = {...params,...this.getDate(this.form.date)}
        queryRecord(params).then(({data})=>{
          this.total = data.count;
          this.data = data.data;
          this.loading = false;
        })
      },
      getDate(d){
        if(d.length == 2){
          return {
            begin: d[0].valueOf()/1000,
            end: d[1].valueOf()/1000
          }
        }else {
          return {}
        }
      },
      handleCurrentChange(p) {
        this.form.page = p;
        this.getData();
      }
    },
    mounted(){

    }
  }
</script>
