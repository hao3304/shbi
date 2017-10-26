<template>
  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>
<style>
  #clock {
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    height: 60px;
    color: #daf6ff;
    text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
  }
  #clock .time {
    letter-spacing: 0.05em;
    font-size: 28px;
    line-height: 20px;
  }
  #clock .date {
    letter-spacing: 0.1em;
    color: #fff;
    font-size: 12px;
    line-height: 30px;
  }
  #clock .text {
    letter-spacing: 0.1em;
    font-size: 12px;
    padding: 20px 0 0;
  }
</style>
<script>

  export default {
    data(){
      return {
          time: '',
          date:'',
          week:['周日', '周一', '周二', '周三', '周四', '周五', '周六']

    }
    },
    methods:{
      updateTime() {
        let cd = new Date();
        this.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
        this.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth()+1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];

      },
      zeroPadding(num, digit) {
        var zero = '';
        for(var i = 0; i < digit; i++) {
          zero += '0';
        }
        return (zero + num).slice(-digit);
      }
    },
    mounted(){
      this.updateTime();
      var timerID = setInterval(this.updateTime, 1000);
    }
  }

</script>
