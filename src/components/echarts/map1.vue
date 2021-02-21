<template>
  <div style='width: 100%'>
    <div id='map' style='width: 1000px;height: 1000px;display: inline-block'/>
  </div>
</template>

<script>
  import {CHINA_MAP} from '../../utils/constant/eChart.constant';
  import {CURRENT_NUMBER} from '../../utils/constant/number';

  export default {
    name: 'charts1',
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
            zoom: 1,
            roam: true
          },
          series: [
            {
              type: 'effectScatter',
              // coordinateSystem: 'cartesian2d',
              coordinateSystem: 'geo',
              data: [
                [113.280637, 23.125178],
              ],
              rippleEffect: {
                color: 'green',
                scale: 5
              }
            },
            {
              type: 'map',
              geoIndex: 0,
              data: CURRENT_NUMBER
            }
          ],
          visualMap: {
            type: 'continuous',
            min: 0,
            max: 200,
            inRange: {
              color: ['white', 'red']
            },
            calculable: true
          }
        };
        mapChart.setOption(option)
      }

    }
  };
</script>

<style scoped>

</style>
