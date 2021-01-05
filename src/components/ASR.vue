<template>
  <div id='asr'>
    <h3>Automatic Speech Recognition</h3>
    <div id='operation'>
      <div id='inputPath'>
        <el-input v-model='input' placeholder='请输入文件路径'/>
      </div>
      <div id='trigger'>
        <el-button type='primary' v-on:click='callBackend'
        >点击开始生成报告<i class='el-icon-upload el-icon--right'/></el-button>
      </div>
    </div>
    <div id='result'>
      右边文字高亮后请点击获取转换后的文档：
      <el-link type='primary'>点击下载</el-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ASR',
    data() {
      return {
        input: ''
      };
    },
    methods: {
      callBackend() {
        this.$store.dispatch('ASR/callBackend')
          .then((response) => {
            console.log("reponse success!")
          })
          .catch((error) => {
            this.$message.error(error.response.data);
          });
        ;
      }
    }
  };
</script>

<style scoped>
  h3 {
    margin: 10px;
    color: lime;
  }

  #asr {
    border: 1px solid black;
    width: 600px;
    height: 400px;
    margin: auto;
  }

  #inputPath {
    width: 300px;
    float: left;
    margin-left: 64px;
    margin-top: 100px;
  }

  #trigger {
    width: 100px;
    float: left;
    margin-top: 100px;
  }

  #operation {
    height: 150px;
  }

  #result {
    margin-left: 64px;
  }
</style>
