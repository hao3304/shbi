<template>
  <div id="app">
    <div class="layout">
      <Menu mode="horizontal" @on-select="onChangeModule"  style="z-index: 3000" theme="dark" :active-name="target.id">
        <div class="layout-logo">
          电子邮件运行数据分析平台
        </div>
        <div class="layout-nav">
          <MenuItem :name="m.id" :key="m.id" v-for="m in menu">
            <Icon :type="m.icon" ></Icon>
            {{m.name}}
          </MenuItem>
        </div>

        <div class="layout-right">
          <!--<v-clock></v-clock>-->

            <Avatar icon="person"  />
          <Dropdown @on-click="onClick">
            <a href="javascript:void(0)">
              {{username}}
              <Icon type="arrow-down-b"></Icon>
            </a>
            <DropdownMenu  slot="list">
              <DropdownItem name="修改密码">修改密码</DropdownItem>
              <DropdownItem name="注销">注销</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </Menu>
      <Menu @on-select="onSelect" mode="horizontal" :active-name="view" style="background-color: #131a2c">
        <div class="layout-assistant">
          <MenuItem v-if="isAdmin(c.admin)" :name="c.id" :key="c.id" v-for="c in target.children">{{c.name}}</MenuItem>
        </div>
      </Menu>
      <!--<div class="layout-breadcrumb">-->
      <!--<Breadcrumb>-->
      <!--<BreadcrumbItem href="#">首页</BreadcrumbItem>-->
      <!--<BreadcrumbItem href="#">应用中心</BreadcrumbItem>-->
      <!--<BreadcrumbItem>某应用</BreadcrumbItem>-->
      <!--</Breadcrumb>-->
      <!--</div>-->
      <div class="layout-content">
        <div class="layout-content-main">
          <router-view/>
        </div>
      </div>

      <Modal
        v-model='modal'
        title="修改密码"
        >
        <Form ref="formCustom" :model="form" :label-width="80"  :rules="ruleCustom" >
          <FormItem label="新密码" prop="Password">
            <Input v-model="form.Password" type="password" placeholder="请输入密码" />
          </FormItem>
          <FormItem label="重复密码" prop="PasswordCheck">
            <Input v-model="form.PasswordCheck" type="password" placeholder="请重复输入密码" />
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="primary" @click="onUpdatePassword">提交</Button>
          <Button type="default" style="margin-left: 8px" @click="modal=false">取消</Button>
        </div>
      </Modal>

      <!--<div class="layout-copy">-->
      <!--2011-2018 &copy; 上海交通大学-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>

  import vClock from "@/components/vClock"
  import { getModes,postMode,updateUserById } from './module/service'

  export default {
    store:['modes','admin','username','userId'],
    data(){

      const validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password'));
        } else {
          if (this.form.PasswordCheck !== '') {
            // 对第二个密码框单独验证
            this.$refs.formCustom.validateField('PasswordCheck');
          }
          callback();
        }
      };
      const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('Please enter your password again'));
        } else if (value !== this.form.Password) {
          callback(new Error('The two input passwords do not match!'));
        } else {
          callback();
        }
      };

      return {
        modal:false,
        form:{
          Password:'',
          PasswordCheck:''
        },
        menu:[
          {
            id:'mail',
            name:'邮件日志',
            icon:'ios-navigate',
            children:[
              {
                id:'mail-index',
                name:'全部统计'
              },
              {
                id:'mail-contrast',
                name:'指标对比'
              },
              {
                id:'mail-config',
                name:'指标配置'
              }
            ]
          },{
            id:"search",
            icon:'ios-keypad',
            name:"邮件查询",
            children:[
              {
                id:'search-record',
                name:'访问记录'
              },
              {
                id:'search-email',
                name:'邮件传递记录'
              }
            ]
          },{
            id:'config',
            icon:'gear-b',
            name:'管理中心',
            children:[
              {
                id:'config-mail',
                name:'账号管理'
              },
              {
                id:'config-user',
                name:'用户管理',
                admin:true
              }
            ]
          }
        ],
        target:{},
        view:'mail-index',
        module:'mail',
        ruleCustom: {
          Password: [
            { validator: validatePass, trigger: 'blur' }
          ],
          PasswordCheck: [
            { validator: validatePassCheck, trigger: 'blur' }
          ]
        }
      }
    },
    components:{
      vClock
    },
    methods:{
      onSelect(v){
        this.$router.push({name:v});
      },
      onClick(v){

        if(v == "注销") {
          this.$ls.set('token',null);
          this.$ls.set('username',null);
          this.$router.push("/");
          window.location.reload();
        }else if(v == "修改密码") {
          this.modal = true;
          this.form.Password = '';
          this.form.PasswordCheck = '';
        }
      },
      isAdmin(b){
        if(b) {
          return this.admin == b;
        }else{
          return true;
        }
      },
      onChangeModule(v) {
        this.module = v;
        this.target = this.menu.find(m=>{
          return m.id == v;
        });
        this.$router.push({name:this.target.children[0].id});
        this.$nextTick(()=>{
          this.view = this.target.children[0].id;
        })
      },
      onUpdatePassword() {
        this.$refs.formCustom.validate(valid=>{
          if(valid) {

            updateUserById(this.userId,{Password:this.form.Password}).then(rep=>{
              if(rep.Code == 0) {
                alert('更新成功，请重新登录。');
                this.onClick('注销');
              }
            })

          }
        })
      }
    },
    created(){
      this.view = this.$route.name || 'mail-index';
      this.module = this.view.split('-')[0];
      this.target =  this.menu.find(m=>{
        return m.id == this.module;
      });
      getModes().then(data=>{
        if(data.Code == 0) {
          this.modes = data.Response;
        }
      });
    }
  }
</script>

<style  scoped >
  #app{
    height: 100%;
  }

  .layout{
    border: 1px solid #d7dde4;
    background: #131a2c;
    height: 100%;
  }
  .layout-logo{
    border-radius: 3px;
    display: inline;
    color: #fff;
    float: left;
    padding: 0 15px;
    font-size: 22px;
    position: relative;
  }
  .layout-nav{
    margin-left: 220px;
  }
  .layout-assistant{
    width: 400px;
    height: inherit;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    padding: 15px 5px;
    overflow: hidden;
    border-radius: 4px;
    height: calc(100% - 120px);
    overflow-y: auto;
  }
  .layout-content-main{
  }
  .layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
  }

  .layout-right{
    float:right;
    width:130px;
    position: relative;


  }

  .layout-right .ivu-avatar{
    position: absolute;
    top:15px;
  }

  .layout-right .ivu-dropdown{
    margin-left: 40px;

  }

  .layout-right .ivu-dropdown .ivu-dropdown-rel a{
    color: #fff;
  }
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    color: #fff;
  }
</style>
