<template>
  <el-table :data="keysets">
    <el-table-column label="Name" prop="name"></el-table-column>
    <el-table-column label="Manufacturer" prop="manufacturer.name"></el-table-column>
    <el-table-column label="Material" prop="material.name"></el-table-column>
    <el-table-column label="Profile" prop="profile.name"></el-table-column>
    <el-table-column label="Colours">
      <template slot-scope="scope">
        <color-box style="margin: 1px" v-for="(color, index) in scope.row.colours.slice(0,3)" :key="index" :color="color.hexValue"></color-box>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import colorBox from './color-box.vue'

export default {
  data() {
    return {
      keysets: [
        {
          id: 3,
          releaseYear: 2017,
          name: "Pennine",
          profile: {
            id: 2,
            name: "Cherry"
          },
          material: {
            id: 4,
            name: "PBT"
          },
          manufacturer: {
            id: 1,
            name: "Maxkeys"
          },
          colours: [
            {
              id: 1,
              code: "N7",
              hexValue: "#058550"
            },
            {
              id: 1,
              code: "N7",
              hexValue: "#058550"
            },
            {
              id: 1,
              code: "N7",
              hexValue: "#058550"
            },
            {
              id: 1,
              code: "N7",
              hexValue: "#058550"
            }
          ]
        }
      ]
    };
  },
  components: {
    colorBox
  }
};
</script>

<style>

</style>
