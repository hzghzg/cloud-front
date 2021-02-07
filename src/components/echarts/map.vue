<template>
  <div style='width: 100%'>
    <div id='map' style='width: 1000px;height: 1000px;display: inline-block'/>
  </div>
</template>

<script>
  import {CHINA_MAP} from '../../utils/constant/eChart.constant';

  export default {
    name: 'charts',
    mounted() {
      this.genMapChart();
    },
    methods: {
      genMapChart() {
        let doc = document.getElementById('map');
        let mapChart = this.$echarts.init(doc);
        this.$echarts.registerMap('chinaMap', CHINA_MAP)
        let option = {
          geo: {
            type: 'map',
            map: 'chinaMap',
            label: {
                show: true
              }
          }
        };
        mapChart.setOption(option)
      }

    }
  };
</script>

<style scoped>

</style>
