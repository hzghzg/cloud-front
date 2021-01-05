<template>
  <el-row class="tac">
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1" @click="locationView(1)">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>资源模块一</span>
        </template>
      </el-menu-item>
      <el-menu-item index="2" @click="locationView(2)">
        <i class="el-icon-menu"></i>
        <span slot="title">资源模块二</span>
      </el-menu-item>
      <el-menu-item index="3" @click="locationView(3)">
        <i class="el-icon-setting"></i>
        <span slot="title">资源模块三</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      showOrder: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // eslint-disable-next-line no-console
      console.log(key, keyPath);
    },
    relocation(val) {
      this.$router.push(val);
    },
    locationView(index) {
      switch (index) {
        case 1:
          this.$router.push("/home");
          break;
        case 2:
          this.$router.push("/home/resource2");
          break;
        case 3:
          this.$router.push("/home/resource3");
          break;
      }
    }
  }
};
</script>

<style>
.el-menu-item,
.el-submenu__title {
  text-align: left;
}
</style>
