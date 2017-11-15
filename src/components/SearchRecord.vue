<template>
  <div style="color: #fff">
    <Form ref="form" :model="form"  :label-width="80" :rules="rules" inline>
      <FormItem prop="email" label="目标邮件">
        <Input v-model="form.email">
        <span slot="append">@sjtu.edu.cn</span>
        </Input>
      </FormItem>
      <FormItem label="操作行为">
        <Select v-model="form.action" style="width:200px">
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
      <Table :loading="loading" :columns="columns"  :data="data"></Table>
      <div style="text-align: right;padding:10px 0">
        <Page :total="total" @on-change="handleCurrentChange" :page-size="20"></Page>
      </div>
    </div>

  </div>
</template>
<style>
  .ivu-form  .ivu-form-item-label{
    color: #fff;
  }

</style>
<script>

  import { searchRecord } from '../module/service';

  export default {
    data(){
      return{
        prefix:'@sjtu.edu.cn',
        form: {
          email:'qizhwei',
          date:[],
          action:'DELE',
          page:1,
          size:20
        },
        rules:{
          email:[
            {required:true,message:'必填项',trigger:'blur'}
          ]
        },
        data:[],
        height:document.documentElement.clientHeight - 190,
        total:0,
        loading:false,
        columns:[
          {
            title:'#',
            width: 60,
            render: (h, params) => {
              return h('span',params.index + (params.row.page-1)*20 +1)
            }
          },
          {
            title: '地址（address）',
            key: 'address'
          },
          {
            title: '操作行为（action）',
            key: 'action'
          },
          {
            title: '系统IP（systemIp）',
            key: 'systemIp'
          },
          {
            title: '操作时间（timestamp）',
            render:(h,{row})=>{
              return h('span',new Date(row.timestamp*1000).Format('yyyy-MM-dd hh:ss'))
            }
          }
        ],
        actions:[
          {value:"DELE",name:'DELE'},
          {value:"LOGIN",name:'LOGIN'},
          {value:"RETR",name:'RETR'},
          {value:"FETCH",name:'FETCH'},
          {value:"Adding",name:'Adding'},
          {value:"EXPUNGE",name:'EXPUNGE'},
          {value:"SendMsgRequest",name:'SendMsgRequest'},
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
        this.form.email = '';
        this.form.date = [];
        this.form.action = 'DELE';
        this.form.page = 1;
        this.data = [];
      },
      transData(data) {
        return data.map(d=>{
          let obj = d._fields[0].segments[0];

          return {
            address:obj.start.properties.address,
            action:obj.relationship.properties.action,
            timestamp:obj.relationship.properties.timestamp,
            systemIp:obj.relationship.properties.systemIp,
            page:this.form.page
          }
        });
      },
      getData() {
        this.loading = true;
        let params = JSON.parse(JSON.stringify(this.form));
        params.email += this.prefix;
        let query = {...params,...{date:this.getDate(this.form.date)}}
        searchRecord(query).then(rep=>{
          rep = rep.data;
          this.total = rep.total.records[0]._fields[0].low;
          this.data = this.transData(rep.data);
          this.loading = false;
        })
      },
      getDate(d){

        if(d.length == 2){
          return [d[0].valueOf()/1000,d[1].valueOf()/1000]
        }else{
          return [];
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
