<template>
  <el-table :data="colors">
    <el-table-column label="Preview" width="100">
      <template slot-scope="scope">
        <color-box style="margin: 1px; display: inline-block" :color="scope.row.hexValue"></color-box>
      </template>
    </el-table-column>
    <el-table-column label="HEX Code" prop="hexValue"></el-table-column>
    <el-table-column label="Manufacturer's code" prop="code"></el-table-column>
    <el-table-column label="Manufacturer" prop="manufacturer.name"></el-table-column>
  </el-table>
</template>

<script>
import colorBox from '../components/color-box'

export default {
  components: {
    colorBox
  },
  data() {
    return {
      colors: [
        {
          id: 1,
          code: "N7",
          hexValue: "#058550",
          manufacturer: {
            id: 1,
            name: "Maxkeys"
          }
        },
        {
          id: 2,
          hexValue: "#FFF",
          manufacturer: {
            id: 1,
            name: "Maxkeys"
          }
        }
      ]
    };
  }
};
</script>

<style>

</style>
