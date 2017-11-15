<template>
  <div>
    <Row class="expand-row">
      <Col span="12">
      <span class="expand-key">邮件ID： </span>
      <span class="expand-value">{{ row.id }}</span>
      </Col>
      <Col span="12">
      <span class="expand-key">对方IP： </span>
      <span class="expand-value">{{ row.sendIp }}</span>
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
