<template>
  <div class="app" style="color: #fff">
      <Form ref="form" :model="form"  :label-width="80" :rules="rules" inline>
        <FormItem prop="email" style="color: #fff;" label="目标邮件">
          <Input v-model="form.email">
            <span slot="append">@sjtu.edu.cn</span>
          </Input>
        </FormItem>
        <FormItem label="日期范围" style="color: #fff;" >
          <DatePicker v-model="form.date" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="请选择日期范围" style="width: 200px"></DatePicker>
        </FormItem>
        <FormItem>
          <Button icon="search" @click="onSearch" >查询</Button>
        </FormItem>
      </Form>

    <div style="padding:0 10px;">
      <Tabs :value="activeName" @on-click="onTabChange">
        <TabPane label="收件箱" name="receive">
          <Table :loading="receive_loading" :columns="columns2"  :data="receive"></Table>
          <div style="text-align: right;padding:10px 0">
            <Page :total="receive_total" @on-change="receiveCurrentChange" :page-size="20"></Page>
          </div>
        </TabPane>
        <!--<TabPane label="发件箱" name="send">-->
          <!--<Table :loading="send_loading" :columns="columns2"  :data="send"></Table>-->
          <!--<div style="text-align: right;padding:10px 0">-->
            <!--<Page :total="send_total" @on-change="sendCurrentChange" :page-size="20"></Page>-->
          <!--</div>-->
        <!--</TabPane>-->
      </Tabs>

    </div>

  </div>
</template>
<style>
  .app .ivu-form .ivu-form-item-label{
    color: #fff;
  }
</style>
<script>

  import { searchRecord } from '../module/service';
  import vSend from '@/components/vSend';
  import vReceive from '@/components/vReceive';


  export default {
    data(){
      return{
        prefix:'@sjtu.edu.cn',
        form: {
          email:'zhujunx',
          date:[],
          size:20
        },
        send_page:1,
        receive_page:1,
        send_total:0,
        receive_total:0,
        send:[],
        receive:[],
        rules:{
          email:[
            {required:true,message:'必填项',trigger:'blur'}
          ]
        },
        height:document.documentElement.clientHeight - 247,

        send_loading:false,
        receive_loading:false,
        activeName:'receive',
        hasSearch:false,
        columns2:[
//          {
//            type: 'expand',
//            width: 50,
//            render: (h, params) => {
//              return h(vSend, {
//                props: {
//                  row: params.row
//                }
//              })
//            }
//          },
          {
            title:'#',
            width: 60,
            render: (h, {row}) => {
              return h('span',row.index + (row.page-1)*20 +1)
            }
          },
          {
            title:'邮件ID',
            key:'messageId'
          },
          {
            title:'对方地址',
            key:'fromAddr'
          },
          {
            title:'收件时间',
            render:(h,{row})=>{
              return h('span',new Date(row.timestamp*1000 + 8*3600*1000).Format('yyyy-MM-dd hh:mm:ss'))
            }
          },
          {
            title:'对方IP',
            render:(h,{row})=>{
              return h('span', row.ipAddr)
            }
          },
          {
            title:'状态',
            key: 'status'
          },
          {
            title: '收件人数',
            key: 'nrcpt'
          },
          {
            title: '邮件大小(KB)',
            key: 'mailSize',
            render: () => {
              return h('span', (row.mailSize/1000).toFixed(2))
            }
          }
        ],
        columns:[
          {
            type: 'expand',
            width: 50,
            render: (h, params) => {
              return h(vReceive, {
                props: {
                  row: params.row
                }
              })
            }
          },
          {
            title:'#',
            width: 60,
            render: (h, params) => {
              return h('span',params.index + (params.row.page-1)*20 +1)
            }
          },
          {
            title: '对方地址',
            key: 'address'
          },
          {
            title: '对方发送时间',
            render:(h,{row})=>{
              return h('span',new Date(row.sendTime*1000).Format('yyyy-MM-dd hh:mm:ss'))
            }
          },
          {
            title: '邮件大小(Kb)',
            render:(h,{row})=>{
              return h('span',(row.mailSize/1024).toFixed(2))
            }
          }
        ]
      }
    },
    methods:{
      onSearch() {
        if(this.loading){
          return;
        }

        this.send = [];
        this.receive = [];
        this.send_page = 1;
        this.receive_page = 1;

        this.$refs.form.validate(valid =>{
          if(valid){
            this.hasSearch = true;
            this.getData();
          }
        })
      },
      onTabChange(n){
        this.activeName = n;
      },
      onReset(){
        this.send = [];
        this.receive = [];
        this.send_page = 1;
        this.receive_page = 1;
        this.form.email = '';
        this.form.date = [];
      },
      transData(data) {
        return data.map((d)=>{
          if(this.activeName == 'receive'){
            return {
              id:d._fields[0],
              address:d._fields[1],
              sendIp:d._fields[2].properties.sendIp,
              sendTime:d._fields[2].properties.sendTime,
              status:d._fields[2].properties.status,
              size:d._fields[2].properties.size.low,
              page:this.send_page
            }

          }else{
            return {
              id:d._fields[0],
              address:d._fields[1],
              sendIp:d._fields[2].properties.sendIp,
              sendTime:d._fields[2].properties.sendTime,
              receiveIp:d._fields[2].properties.receiveIp,
              receiveTime:d._fields[2].properties.receiveTime,
              status:d._fields[2].properties.status,
              size:d._fields[2].properties.size.low,
              page:this.receive_page
            }
          }

        });
      },
      getData() {
        this[this.activeName+'_loading'] = true;
        let email = this.form.email;
        let type = this.activeName;
        let page = this.activeName == 'send'?this.send_page:this.receive_page;
        let prefix = this.prefix;

        let where = {status: 'sent', page: page};
        if(email) {
          where['toAddr'] = email + prefix;
        }
        if(this.form.date) {
          let date = this.getDate(this.form.date);
          if(date[0]!=0 && date[1]!=0) {
            where['begin'] = date[0] - 8*3600;
            where['end']= date[1]- 8*3600;
          }

        }

//        let search = process.env.SEARCH_ROOT;

//        axios.get(search + `/${email}${prefix}/${type}/${page}`,{params:{date:this.getDate(this.form.date)}}).then(rep=>{
//          this[this.activeName+'_total'] = rep.total.records[0]._fields[0].low;
//          this[this.activeName] = this.transData(rep.data);
//          this[this.activeName+'_loading'] = false;
//        })

        searchRecord(where).then(rep=> {
          let data = rep.data;
          this['receive_total'] = data.count;
          this['receive'] = data.data.map((d,index)=>{
            d.index = index;
            d.page = page;
            return d;
          });
          this['receive_loading'] = false;
        })

      },
      getDate(d){
        if(d.length == 2){
          return [d[0].valueOf()/1000,d[1].valueOf()/1000]
        }else{
          return [];
        }
      },
      receiveCurrentChange(p) {
        this.receive_page = p;
        this.getData();
      },
      sendCurrentChange(p) {
        this.send_page = p;
        this.getData();
      }
    },
    watch:{
      activeName(){

        if(this[this.activeName].length == 0 && this.hasSearch) {
          this.getData();
        }
      }
    },
    mounted(){

    }
  }
</script>
