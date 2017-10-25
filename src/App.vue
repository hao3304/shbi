<template>
  <div id="app">
    <div class="layout">
      <Menu mode="horizontal" theme="dark" :active-name="target.id">
        <div class="layout-logo">
          邮件日志分析系统
        </div>
        <div class="layout-nav">
          <MenuItem :name="m.id" :key="m.id" v-for="m in menu">
            <Icon :type="m.icon" ></Icon>
            {{m.name}}
          </MenuItem>
        </div>
      </Menu>
      <Menu @on-select="onSelect" mode="horizontal" :active-name="view" style="background-color: #131a2c">
        <div class="layout-assistant">
          <MenuItem :name="c.id" :key="c.id" v-for="c in target.children">{{c.name}}</MenuItem>
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
      <!--<div class="layout-copy">-->
        <!--2011-2018 &copy; 上海交通大学-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
export default {
  data:()=>({
    menu:[
      {
        id:'1',
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
          }
        ]
      },
      {
        id:'2',
        name:'其他日志',
        icon:'ios-keypad',
        children:[]
      }
    ],
    target:{},
    view:'mail-index'
  }),
  methods:{
    onSelect(v){
      this.$router.push({name:v});
    }
  },
  created(){
    this.target = this.menu[0];
  }
}
</script>

<style scoped >
  #app{
    height: 100%;
  }

  .layout{
    border: 1px solid #d7dde4;
    background: #131a2c;;
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
    width: 420px;
    margin-left: 220px;
  }
  .layout-assistant{
    width: 300px;
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
  .ivu-menu-light.ivu-menu-horizontal .ivu-menu-item, .ivu-menu-light.ivu-menu-horizontal .ivu-menu-submenu{
    color: #fff;
  }
</style>
