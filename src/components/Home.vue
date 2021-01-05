<template>
  <el-container>
    <el-header>
      <span style="margin-left: 1400px" v-if="userName != undefined"
        >Hello, {{ userName }}</span
      >
      <el-button
        type="primary"
        plain
        style="float:right;margin-top:-10px"
        @click="logout"
        v-if="userName != undefined"
        >登出系统</el-button
      >
    </el-header>
    <el-container>
      <el-aside>
        <Nav></Nav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Nav from "./Nav.vue";

export default {
  name: "Home",
  components: { Nav },
  data() {
    return {
      userName: undefined
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
  methods: {
    logout() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>
>>> .el-header {
  height: 30px;
  width: 100%;
  background-color: rgba(30, 44, 76, 0.93);
  color: white;
  text-align: left;
}

>>> .el-aside {
  height: 700px;
  background-color: rgba(30, 44, 76, 0.93);

}
>>> .tac el-row {
  background-color: rgba(30, 44, 76, 0.93);
}


>>> element.style {
  background-color: rgba(214, 214, 214, 0.02);
}
</style>
