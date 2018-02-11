<template>
  <div id="app">
    <el-container>
      <el-aside width="15%">
        <el-menu :default-active="$route.path" router>
            <template v-for="(route, key) in $router.options.routes" v-if="!route.meta.hidden">
                <el-menu-item v-if="!route.children || route.children.length == 1" :index="route.path" :key="route.path">
                    <template v-if="route.meta.icon"><i :class="route.meta.icon"></i></template>{{ route.meta.title }}
                </el-menu-item>
                <el-submenu v-else :key="key" :index="route.path">
                    <template slot="title"><i class="el-icon-menu"></i>{{ route.meta.title }}</template>
                    <el-menu-item v-for="child in route.children" v-if="!child.meta.hidden" :index="route.path + '/' + child.path" :key="route.path + '/' + child.path">
                      <template v-if="child.meta.icon"><i class="child.meta.icon"></i></template>{{ child.meta.title }}
                    </el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  color: #606266
}
</style>
