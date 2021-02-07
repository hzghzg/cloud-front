<template>
  <div style='width: 100%'>
    <div id='bar' style='width: 500px;height: 500px;display: inline-block'/>
    <div id='line' style='width: 500px;height: 500px;display: inline-block'/>
    <div id='line1' style='width: 500px;height: 500px;display: inline-block'/>
    <div id='scatter' style='width: 500px;height: 500px;display: inline-block'/>
    <div id='effect-scatter' style='width: 500px;height: 500px;display: inline-block'/>
    <div id='pie' style='width: 500px;height: 500px;display: inline-block'/>
    <div id='pie1' style='width: 500px;height: 500px;display: inline-block'/>
    <div id='pie2' style='width: 500px;height: 500px;display: inline-block'/>
  </div>
</template>

<script>

  export default {
    name: 'charts',
    mounted() {
      this.genLineChart();
      this.genLineChart1();
      this.genBarChart();
      this.genScatterChart();
      this.genEffectScatterChart();
      this.genPieChart();
      this.genPieChart1();
      this.genPieChart2();
    },
    methods: {
      genLineChart() {
        let doc = document.getElementById('line');
        let barChart = this.$echarts.init(doc);
        let option = {
          xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [1000, 1200, 1050, 900, 1300, 1500, 800],
            type: 'line',
            smooth: true,
            lineStyle: {
              color: 'blue',
              type: 'dotted'
            },
            markPoint: {
              data: [
                {
                  type: 'min'
                },
                {
                  type: 'max'
                }
              ]
            },
            markLine: {
              data: [
                {
                  type: 'average'
                }
              ]
            }
          },
          ]
        };
        barChart.setOption(option)
      },
      genLineChart1() {
        let doc = document.getElementById('line1');
        let barChart = this.$echarts.init(doc);
        let option = {
          xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
          },
          yAxis: {
            type: 'value'
          },
          legend: {
            show: true,
            data: ['销量', '利润']
          },
          series: [{
            name: '销量',
            data: [1000, 1200, 1050, 900, 1300, 1500, 800],
            type: 'bar',
          }, {
            name: '利润',
            data: [10000, 12000, 15000, 9000, 10500, 10000, 11000],
            type: 'bar',
          }
          ]
        };
        barChart.setOption(option)
      },
      genBarChart() {
        let doc = document.getElementById('bar');
        let barChart = this.$echarts.init(doc);
        let option = {
          toolbox: {
            feature: {
              dataZoom: {},
              magicType: {
                type: ['bar', 'line']
              }
            }
          },
          xAxis: {
            type: 'category',
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [1000, 1200, 1050, 900, 1300, 1500, 800],
            type: 'bar',
            barWidth: 20,
            label: {
              show: true,
              rotate: 60,
              position: 'inside'
            },
            markPoint: {
              data: [
                {
                  type: 'min'
                },
                {
                  type: 'max'
                }
              ]
            },
            markLine: {
              data: [
                {
                  type: 'average'
                }
              ]
            }
          }]
        };
        barChart.setOption(option)
      },
      genScatterChart() {
        let doc = document.getElementById('scatter');
        let barChart = this.$echarts.init(doc);
        let option = {
          xAxis: {
            name: '身高',
            type: 'value',
            scale: true
          },
          yAxis: {
            name: '体重',
            type: 'value',
            scale: true
          },
          series: [{
            data: [
              [174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
              [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [179.8, 57.0],
              [184.0, 81.6], [177.8, 58.0]
            ],
            type: 'scatter',
            // symbolSize: 30,
            symbolSize: function (arg) {
              let height = arg[0] / 100;
              let weight = arg[1];
              let BMI = weight / (height * height);
              if (BMI < 18.5) {
                return 5
              } else if (BMI >= 18.5 && BMI < 24) {
                return 15;
              } else {
                return 25;
              }
            },
            itemStyle: {
              // color: 'green'
              color: function (arg) {
                let height = arg.data[0] / 100;
                let weight = arg.data[1];
                let BMI = weight / (height * height);
                if (BMI < 18.5) {
                  return 'orange'
                } else if (BMI >= 18.5 && BMI < 24) {
                  return 'green';
                } else {
                  return 'red';
                }
              }
            }
          }]
        };
        barChart.setOption(option)
      },
      genEffectScatterChart() {
        let doc = document.getElementById('effect-scatter');
        let barChart = this.$echarts.init(doc);
        let option = {
          xAxis: {
            name: '身高',
            type: 'value',
            scale: true
          },
          yAxis: {
            name: '体重',
            type: 'value',
            scale: true
          },
          series: [{
            data: [
              [174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
              [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
            ],
            type: 'effectScatter',
            rippleEffect: {
              scale: 5
            }
          }]
        };
        barChart.setOption(option)
      },
      genPieChart() {
        let doc = document.getElementById('pie');
        let barChart = this.$echarts.init(doc);
        let option = {
          title: {
            text: '男女比例',
            textStyle: {
              color: 'red'
            },
            left: 'center'
          },
          tooltip: {
            // trigger: 'axis'
            trigger: 'item',
            // triggerOn: 'click'
            triggerOn: 'mousemove',
            // formatter: '{b}占比为{d}%'
            formatter: function (arg) {
              return arg.name + '比例为' + arg.percent + '%';
            }
          },
          toolbox: {
            feature: {
              saveAsImage: {},//保存为图片
              dataView: {},//数据视图
              restore: {},//刷新还原
            }
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: '男女数量分布',
              type: 'pie',
              data: [
                {value: 1048, name: '男生'},
                {value: 556, name: '女生'}
              ],
              label: {
                show: true,
                formatter: '{b}比例为{d}'
                // formatter: function (arg) {
                //   return arg.name + '比例为' + arg.percent;
                // }
              }
            }
          ]
        };
        barChart.setOption(option)
      },
      genPieChart1() {
        let doc = document.getElementById('pie1');
        let barChart = this.$echarts.init(doc);
        let option = {
          title: {
            text: '男女比例',
            left: 'center'
          },
          series: [
            {
              type: 'pie',
              radius: ['100', '200'],
              data: [
                {value: 1048, name: '男生'},
                {value: 556, name: '女生'}
              ]
            }
          ]
        };
        barChart.setOption(option)
      },
      genPieChart2() {
        let doc = document.getElementById('pie2');
        let barChart = this.$echarts.init(doc);
        let option = {
          title: {
            text: '各国确诊病例数量',
            left: 'center'
          },
          series: [
            {
              type: 'pie',
              radius: [50, 250],
              roseType: 'radius',//area
              data: [
                {value: 2715, name: '美国'},
                {value: 10, name: '中国'},
                {value: 933, name: '巴西'},
                {value: 1079, name: '印度'},
                {value: 39, name: '日本'},
                {value: 387, name: '英国'},
                {value: 225, name: '德国'},
              ]
            }
          ]
        };
        barChart.setOption(option)
      }
    }
  }
  ;
</script>

<style scoped>

</style>
