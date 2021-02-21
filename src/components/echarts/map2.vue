<template>
  <div style='width: 100%'>
    <div id='map' style='width: 1000px;height: 1000px;display: inline-block'/>
  </div>
</template>

<script>
  import {CHINA_MAP} from '../../utils/constant/eChart.constant';
  import {CURRENT_NUMBER} from '../../utils/constant/number';

  export default {
    name: 'charts2',
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
            map: 'chinaMap',
            label: {
              show: true
            },
          },
          series: [
            {
              type: 'map',
              geoIndex: 0,
              data: CURRENT_NUMBER
            }
          ],
          visualMap: {
            type: 'piecewise',
            showLabel: true,
            pieces: [
              {
                gt: 100,
                label: "> 100 人",
                color: "#7f1100"
              },
              {
                gte: 10,
                lte: 100,
                label: "10 - 100 人",
                color: "#ff5428"
              },
              {
                gte: 1,
                lt: 10,
                label: "1 - 9 人",
                color: "#ff8c71"
              },
              {
                value: 0,
                label: "0 人",
                color: "#ffffff"
              }
            ]
          }
        };
        mapChart.setOption(option)
      }

    }
  };
</script>

<style scoped>

</style>
