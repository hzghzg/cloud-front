<template>
  <div id="main">
    <el-row id="login">
      <el-col :span="8" :offset="8">
        <div class="grid-content">
          <LoginForm />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LoginForm from "./LoginForm.vue";

export default {
  name: "login",
  components: {
    LoginForm
  }
};
</script>

<style scoped>

.grid-content {
  margin-top: 100px;
  text-align: center;
}

#main {
  background: url("../assets/background.png");
  height: 1100px;
  margin-top: -70px;
  background-size: cover;
}

#login h1 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: white;
  margin-left: 100px;
}
</style>
