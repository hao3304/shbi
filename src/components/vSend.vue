<template>
  <div>
    <Row class="expand-row">
      <Col span="12">
      <span class="expand-key">邮件ID： </span>
      <span class="expand-value">{{ row.id }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">对方地址： </span>
      <span class="expand-value">{{ row.address }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">发送IP： </span>
      <span class="expand-value">{{ row.sendIp }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">发送时间： </span>
      <span class="expand-value">{{ new Date(row.sendTime*1000).Format('yyyy-MM-dd hh:ss') }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">目标IP： </span>
      <span class="expand-value">{{ row.receiveIp }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">接收时间： </span>
      <span class="expand-value">{{ new Date(row.receiveTime*1000).Format('yyyy-MM-dd hh:ss') }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">状态： </span>
      <span class="expand-value">{{ row.status }}</span>
      </Col>
    </Row>
  </div>
</template>
<style>
  .expand-row{
    margin-bottom: 16px;
  }
</style>
<script>

  export default {
    props:{
      row:Object
    },
    data(){
      return {

      }
    }
  }

</script>
