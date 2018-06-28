<template>
  <div class="top-page">
    <Spin v-show="loading" fix></Spin>
    <Form ref="form" :model="form"  :label-width="80" inline>
      <FormItem style="color: #fff;" label="统计类型">
        <Select  style="width: 200px" v-model="form.type">
          <Option value="ipAddr">ipAddr</Option>
          <Option value="fromAddr">fromAddr</Option>
          <Option value="toAddr">toAddr</Option>
        </Select>
      </FormItem>
      <FormItem label="统计范围" style="color: #fff;" >
        <Select style="width: 200px"  v-model="form.range">
          <Option value="hour">最近1小时</Option>
          <Option value="day">最近1天</Option>
          <Option value="week">最近7天</Option>
          <Option value="month">最近30天</Option>
        </Select>
      </FormItem>
      <FormItem label="统计数量" style="color: #fff;" >
        <Select style="width: 200px"  v-model="form.k">
          <Option value="10">Top10</Option>
          <Option value="50">Top50</Option>
          <Option value="100">Top100</Option>
        </Select>
      </FormItem>

      <FormItem>
        <Button icon="search" @click="onSearch" >查询</Button>
      </FormItem>
    </Form>
    <div style="padding:0 10px;">
      <Table :columns="columns"  :data="data"></Table>
    </div>
  </div>
</template>
<script>
  import { searchTop } from '@/module/service'
  export default {
    data() {
      return {
        form: {
          type: 'ipAddr',
          range: 'hour',
          k: '10'
        },
        loading: false,
        data: [],
        columns: [
          {
              title: '#',
              key: 'index'
          },
          {
            title: '对象',
            key: '_id'
          },
          {
            title: '数量',
            key: 'count'
          }
        ]
      }
    },
    methods: {
      onSearch() {
        this.loading = true;
        searchTop(this.form).then(rep=> {
          this.data = rep.data.map((d,index)=> {
            d.index = index +1;
            return d;
          })
          this.loading = false;
        })
      }
    }
  }
</script>
<style lang="less">
  .top-page {
    .ivu-form .ivu-form-item-label {
      color: #fff;
    }
    color: #fff;
  }
</style>
