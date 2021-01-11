<template>
  <el-container >
    <el-header id="my-header">
      <h1>数据可视化-EChart</h1>
      <span style="margin-left: 1400px" v-if="userName != undefined"
      >Hello, {{ userName }}</span
      >
      <el-button
        type="primary"
        plain
        style="float:right;margin-top:-10px"
        @click="logout"
        v-if="userName != undefined"
      >登出系统
      </el-button
      >
    </el-header>
    <el-container id="mainbox">
      <el-aside :style='`height: ${height}px`' id="mainbox-aside-left">
        <Nav></Nav>
      </el-aside>
      <el-main id="mainbox-main">
        <router-view></router-view>
      </el-main>
      <el-aside :style='`height: ${height}px`' id="mainbox-aside-right">
        <Nav></Nav>
      </el-aside>
    </el-container>
  </el-container>
</template>

<script>
  import Nav from "./Nav.vue";

  export default {
    name: "Home",
    components: {Nav},
    data() {
      return {
        userName: undefined,
        height: ''
      };
    },
    // mounted() {
    //   if (localStorage.getItem("user")) {
    //     this.userName = JSON.parse(localStorage.getItem("user")).userName;
    //   } else {
    //     this.$message.error("请您先登录！", 3);
    //     this.$router.push("/login");
    //   }
    // },
    mounted() {
      this.height = window.innerHeight;
      window.addEventListener('resize', () => {
        this.height = window.innerHeight;
      });
    },
    methods: {
      logout() {
        this.$router.push("/login");
      }
    }
  };
</script>

<style scoped>
  #my-header {
    height: 1.25rem;
    background-color: rgba(30, 44, 76, 0.93);
    color: white;
  }
  h1{
    font-size: 0.475rem;
    color: white;
    text-align: center;
    margin: 0 auto;
    line-height: 1rem;
  }
  #mainbox {
    display: flex;
  }
  #mainbox-aside-left {
    min-width: 150px;
    flex: 1;
  }
  #mainbox-main {
    flex: 2;
  }
  #mainbox-aside-right {
    min-width: 150px;
    flex: 1;
  }
  >>> .el-aside {
    background-color: rgba(30, 44, 76, 0.93);
  }
  >>> .tac el-row {
    background-color: rgba(30, 44, 76, 0.93);
  }
  >>> element.style {
    background-color: rgba(214, 214, 214, 0.02);
  }
</style>
