<template>
  <div class="app" style="color: #fff">
    <Form ref="form" :model="form" :label-width="80" :rules="rules" inline>
      <FormItem prop="email" style="color: #fff;" label="目标邮件">
        <Input v-model="form.email" />
      </FormItem>
      <FormItem label="日期范围" style="color: #fff;">
        <DatePicker
          v-model="form.date"
          format="yyyy/MM/dd"
          type="daterange"
          placement="bottom-end"
          placeholder="请选择日期范围"
          style="width: 200px"
        ></DatePicker>
      </FormItem>
      <FormItem>
        <Button icon="search" @click="onSearch">查询</Button>
      </FormItem>
    </Form>

    <div style="padding:0 10px;">
      <Tabs :value="activeName">
        <TabPane label="收件箱" name="receive">
          <!--<Table-->
          <!--:loading="receive_loading"-->
          <!--:columns="columns2"-->
          <!--:data="receive"-->
          <!--&gt;</Table>-->
          <!--<div style="text-align: right;padding:10px 0">-->
          <!--<Page-->
          <!--:total="receive_total"-->
          <!--@on-change="receiveCurrentChange"-->
          <!--:page-size="20"-->
          <!--&gt;</Page>-->
          <!--</div>-->
          <receive
            :email="form.email"
            :date="form.date"
            ref="receive"
          ></receive>
        </TabPane>
        <TabPane label="发件箱" name="send">
          <sent :email="form.email" :date="form.date" ref="sent"></sent>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>
<style>
.app .ivu-form .ivu-form-item-label {
  color: #fff;
}
</style>
<script>
import receive from "./module/Receive";
import sent from "./module/Sent";

export default {
  components: {
    receive,
    sent
  },
  data() {
    return {
      form: {
        email: "zhujunx@sjtu.edu.cn",
        date: [],
        size: 20
      },
      rules: {
        email: [{ required: true, message: "必填项", trigger: "blur" }]
      },
      height: document.documentElement.clientHeight - 247,
      activeName: "receive"
    };
  },
  methods: {
    onSearch() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$refs.receive.render();
          this.$refs.sent.render();
        }
      });
    }
  },

  mounted() {}
};
</script>
