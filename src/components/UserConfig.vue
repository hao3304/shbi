<template>
  <div style="color: #fff;padding:0 10px;">
    <div class="mode-add">
      <div style="float: right">
        <Button  icon="plus" @click="onAdd">新增</Button>
      </div>
    </div>
    <Table :loading="table_loading"  :stripe="true" :columns="columns" :data="list" size="small"></Table>
    <div style="text-align: right;padding:10px 0">
      <Page :total="total" @on-change="currentChange" :page-size="20"></Page>
    </div>
    <Modal
      v-model="show"
      :title="modelTitle"
    >

      <Form ref="form" :model="model" :label-width="80"  :rules="ruleValidate" >
        <FormItem label="姓名" prop="Name">
          <Input v-model="model.Name" placeholder="请输入用户姓名" />
        </FormItem>
        <FormItem label="用户名" prop="UserName">
          <Input v-model="model.UserName" placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" prop="Password">
          <Input v-model="model.Password" placeholder="请输入密码" />
        </FormItem>
        <FormItem label="是否启用">
          <i-switch v-model="model.Visible" size="large">
            <span slot="open">启用</span>
            <span slot="close">禁用</span>
          </i-switch>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button :loading="loading" type="primary" @click="onSave">提交</Button>
        <Button type="default" style="margin-left: 8px" @click="onCancel">取消</Button>
      </div>
    </Modal>
  </div>
</template>
<style>
  .mode-add{
    position: fixed;
    top:75px;
    right: 20px;
    width: 400px;
    z-index: 1000;
  }
</style>
<script>
  import { postUser,getUser,deleteUser,updateUser } from '../module/service'
  import vChart from '@/components/vChart'
  export default {
    data(){
      return {
        users:[],
        modelTitle:'新增用户',
        columns:[
          {
            type: 'index',
            width: 60,
            align: 'center'
          },
          {
            title:'名称',
            key:'Name',
          },
          {
            title:'用户名',
            key:'UserName'
          },
          {
            title:'密码',
            key:'Password'
          },
          {
            title:'状态',
            key:'Visible',
            width:80,
            align:'center',
            render:(h,params)=>{
              return h('div',[
                params.row.Visible?h('Icon',{
                  props: {
                    type:'checkmark-circled'
                  },
                  style:{
                    color:'#2d8cf0'
                  }
                }):h('Icon',{
                  props: {
                    type:'close-circled'
                  },
                  style:{
                    color:'red'
                  }
                })
              ])
            }
          },{
            title:'创建时间',
            key:'Created',
            width:180,
            align:'center',
            render:(h,params)=>{
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'clock'
                  }
                }),
                h('span', new Date(params.row.Created * 1000).Format(" yyyy-MM-dd hh:mm"))
              ]);
            }
          },
          {
            title: '操作',
            key: 'action',
            width: 200,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.onEdit(params.row)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.onRemove(params.row)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        show:false,
        loading:false,
        table_loading:false,
        model:{
          Id:'',
          Name:'',
          UserName:'',
          Password:'',
          Visible:true
        },
        ruleValidate:{
          Name:[
            {required:true,message:'必填',trigger:'blur'}
          ],
          UserName:[
            {required:true,message:'必填',trigger:'blur'}
          ],
          Password:[
            {required:true,message:'必填',trigger:'blur'}
          ]
        },
        testModal:false,
        testMode:{
          query:'',
          type:'24h',
          height:300,
          name:''
        },
        page:0,
        size:20,
        total:0
      }
    },
    computed:{
      list() {
        if(this.users) {
          return this.users.sort((a, b)=>{
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
      onAdd(){
        this.$refs.form.resetFields()
        this.modelTitle = '新增用户';
        this.show = true;
      },
      onSave() {
        this.$refs.form.validate(valid=>{
          if(valid) {
            this.loading = true;
            if(this.model.Id) {
              updateUser(this.model).then(data=>{
                if(data.Code == 0) {
                  this.loading = false;
                  this.show = false;
                  this.$Message.success('更新用户成功！');
                  this.refresh();
                }
              })
            }else{
              postUser(this.model).then(data=>{
                if(data.Code == 0) {
                  this.loading = false;
                  this.show = false;
                  this.$Message.success('新增用户成功！');
                  this.refresh();
                }

              })
            }
          }
        })
      },
      onCancel() {
        this.show = false;
        this.$refs.form.resetFields()
      },
      refresh() {
        this.table_loading = true;
        getUser(this.page*this.size).then(data=>{
          if(data.Code == 0) {
            this.users = data.Response.Data;
            this.page = data.Response.Page;
            this.total = data.Response.Total;
          }
          this.table_loading = false;
        })
      },
      onEdit(row) {
        this.modelTitle = '编辑用户';
        this.model = {...row};
        this.show = true;
      },
      onRemove(row) {
        this.$Modal.confirm({
          title: '提示',
          content: `确定要删除用户："<strong style="color:red">${row.Name}</strong>"？`,
          onOk: () => {
            deleteUser(row.Id).then(data=>{
              if(data.Code == 0) {
                this.$Message.success('删除成功');
                this.refresh();
              }
            })
          },
          onCancel: () => {

          }
        });
      },
      onTest(row) {
        this.testMode.name = row.Name;
        this.testMode.query = row.Query;
        this.testModal = true;
      },
      onSelect(t) {
        this.testMode.type = t;
      },
      currentChange(v) {
        this.page = v;
        this.refresh()
      }
    },
    mounted(){
      this.refresh();
    },
    components:{
      vChart
    }
  }
</script>
