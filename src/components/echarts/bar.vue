<template>
  <div style='width: 100%'>
    <div id='bar' style='width: 500px;height: 500px'/>
  </div>
</template>

<script>

export default {
  name: 'bar',
  mounted () {
    this.genChart();
  },
  methods: {
    genChart () {
      let doc = document.getElementById('bar');
      let barChart = this.$echarts.init(doc);
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }]
      };
      barChart.setOption(option)
    }
  }
};
</script>

<style scoped>

</style>
