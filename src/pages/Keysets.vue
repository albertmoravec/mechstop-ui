<template>
  <el-table :data="keysets">
    <el-table-column label="Name" prop="name"></el-table-column>
    <el-table-column label="Manufacturer" prop="manufacturer.name"></el-table-column>
    <el-table-column label="Material" prop="material.name"></el-table-column>
    <el-table-column label="Profile" prop="profile.name"></el-table-column>
    <el-table-column label="Colors">
      <template slot-scope="scope">
        <color-box v-for="(color, index) in scope.row.colors.slice(0,3)" style="margin: 1px; display: inline-block" :key="index" :color="color.hexValue">
          <div>
            <template v-if="color.code"><b>Code:</b> {{ color.code }}<br></template>
            <template v-if="color.hexValue"><b>HEX:</b> {{ color.hexValue }}<br></template>
          </div>
        </color-box>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import axios from "axios";
import colorBox from "../components/color-box.vue";

export default {
  components: {
    colorBox
  },
  data() {
    return {
      keysets: [
        {
          id: 4,
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
          colors: [
            {
              id: 1,
              code: "N7",
              hexValue: "#058550"
            },
            {
              id: 2,
              code: "RO2",
              hexValue: "#8d242f"
            }
          ]
        },
        {
          id: 5,
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
          colors: [
            {
              id: 1,
              code: "N7",
              hexValue: "#058550"
            },
            {
              id: 2,
              code: "FF",
              hexValue: "#FFF"
            }
          ]
        }
      ]
    };
  },
  created() {
    //axios.get("/api/keysets").then(response => (this.keysets = response.data));
  }
};
</script>

<style>

</style>
