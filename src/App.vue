<template>
  <div id="app">
    <el-row class="left nav">
      <el-col :span="12">
        <el-menu
          default-active="/"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-shop"></i>
              <span>分店信息管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/shop">查询分店</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/staff">
            <i class="el-icon-user"></i>
            <span slot="title">员工信息管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-location"></i>
            <span slot="title">厂商信息管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-truck"></i>
            <span slot="title">汽车信息管理</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-s-custom"></i>
            <span slot="title">客户信息管理</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-s-home"></i>
            <span slot="title">库存信息管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-sold-out"></i>
            <span slot="title">采购信息管理</span>
          </el-menu-item>
          <el-menu-item index="8">
            <i class="el-icon-sell"></i>
            <span slot="title">销售信息管理</span>
          </el-menu-item>
          <el-menu-item
            v-for="(item, i) in navList"
            :key="i"
            :index="item.path"
          >
            {{ item.navItem }}
          </el-menu-item>
        </el-menu>
      </el-col>
      <router-link to="/">Go to /</router-link>
      <router-link to="/mall">Go to mall</router-link>
    </el-row>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navList: [
        { path: "/", name: "分店", icon: "" },
        { path: "/mall", name: "厂商" },
        { path: "/up", name: "员工" },
        { path: "/up", name: "员工" },
        { path: "/up", name: "员工" },
        { path: "/up", name: "员工" },
        { path: "/up", name: "员工" }
      ]
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.left {
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  width: 25%;
}
.right {
  float: right;
  width: 75%;
}
</style>
