<template>
  <div style="color: #fff;padding:0 10px;">
    <div class="mode-add">
      <div style="float: right">
        <Button  icon="plus" @click="onAdd">新增</Button>
      </div>
    </div>
    <Table :loading="table_loading"  :stripe="true" :columns="columns" :data="list" size="small"></Table>
    <Modal
      v-model="show"
      :title="modelTitle"
    >

      <Form ref="form" :model="model" :label-width="80"  :rules="ruleValidate" >
        <FormItem label="指标名称" prop="Name">
          <Input v-model="model.Name" placeholder="请输入指标名称" />
        </FormItem>
        <FormItem label="查询条件" prop="Query">
          <Input v-model="model.Query"  type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入查询条件" />
        </FormItem>
        <FormItem label="排序序号">
          <InputNumber v-model="model.Index" :min="0" :max="9999" placeholder="请输入排序序号" />
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

    <Modal v-model="testModal" :width='600' title="指标测试">
      <div style="background-color: #495060;">
        <div style="text-align: right;padding-top: 5px;padding-right: 5px;">
          <ButtonGroup size="small">
            <Button  :type="testMode.type=='m'?'primary':'default'" @click="onSelect('m')" >最近24小时</Button>
            <Button  :type="testMode.type=='d'?'primary':'default'"  @click="onSelect('d')" >最近30天</Button>
            <Button  :type="testMode.type=='M'?'primary':'default'"  @click="onSelect('M')" >最近12月</Button>
          </ButtonGroup>
        </div>
        <v-chart :type="testMode.type" :query="testMode.query" :name="testMode.name" :height="testMode.height" v-if="testModal">
        </v-chart>
      </div>
      <div slot="footer">
        <Button type="default" style="margin-left: 8px" @click="testModal = false">关闭</Button>
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
  import { postMode,getModes,deleteMode,updateMode } from '../module/service'
  import vChart from '@/components/vChart'
  export default {
    store:['modes'],
    data(){
      return {
        modelTitle:'新增指标',
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
            title:'查询条件',
            key:'Query'
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
            title:'排序',
            key:'Index',
            width:80,
            align:'center',
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
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.onTest(params.row)
                    }
                  }
                }, '测试'),
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
          Query:'',
          Index:0,
          Visible:true
        },
        ruleValidate:{
          Name:[
            {required:true,message:'必填',trigger:'blur'}
          ],
          Query:[
            {required:true,message:'必填',trigger:'blur'}
          ]
        },
        testModal:false,
        testMode:{
          query:'',
          type:'m',
          height:300,
          name:''
        }
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
      onAdd(){
        this.modelTitle = '新增指标';
        this.show = true;
      },
      onSave() {
        this.$refs.form.validate(valid=>{
          if(valid) {
            this.loading = true;
            if(this.model.Id) {
              updateMode(this.model).then(({data})=>{
                if(data.Code == 0) {
                  this.loading = false;
                  this.show = false;
                  this.$Message.success('更新指标成功！');
                  this.refresh();
                }
              })
            }else{
              postMode(this.model).then(({data})=>{
                if(data.Code == 0) {
                  this.loading = false;
                  this.show = false;
                  this.$Message.success('新增指标成功！');
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
        getModes().then(({data})=>{
          if(data.Code == 0) {
            this.modes = data.Response;
          }
          this.table_loading = false;
        })
      },
      onEdit(row) {
        this.modelTitle = '编辑指标';
        this.model = {...row};
        this.show = true;
      },
      onRemove(row) {
        this.$Modal.confirm({
          title: '提示',
          content: `确定要删除指标："<strong style="color:red">${row.Name}</strong>"？`,
          onOk: () => {
            deleteMode(row.Id).then(({data})=>{
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
      }
    },
    components:{
      vChart
    }
  }
</script>
