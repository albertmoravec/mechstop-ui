<template>
  <el-table :data="keysets">
    <el-table-column label="Name" prop="name"></el-table-column>
    <el-table-column label="Manufacturer" prop="manufacturer.name"></el-table-column>
    <el-table-column label="Material" prop="material.name"></el-table-column>
    <el-table-column label="Profile" prop="profile.name"></el-table-column>
    <el-table-column label="Colours">
      <template slot-scope="scope">
        <color-box style="margin: 1px" v-for="(color, index) in scope.row.colors.slice(0,3)" :key="index" :color="color.hexValue"></color-box>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from 'axios';
import colorBox from '../components/color-box.vue'

export default {
  components: {
    colorBox
  },
  data() {
    return {
      keysets: []
    };
  },
  created() {
    axios.get('/api/keysets').then(response => this.keysets = response.data)
  }
};
</script>

<style>

</style>
