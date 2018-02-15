<template>
  <el-table :data="manufacturers">
      <el-table-column label="Name" prop="name"></el-table-column>
      <el-table-column label="Keysets"><template slot-scope="scope"><el-button>Show</el-button></template></el-table-column>
      <el-table-column label="Colors"><template slot-scope="scope"><el-button>Show</el-button></template></el-table-column>
      <el-table-column label="Profiles"><template slot-scope="scope"><el-button>Show</el-button></template></el-table-column>
      <el-table-column label="Materials"><template slot-scope="scope"><el-button>Show</el-button></template></el-table-column>
    </el-table>
</template>

<script>
export default {
  data() {
    return {
      manufacturers: [
        {
          id: 1,
          name: "Maxkeys"
        }
      ]
    };
  }
};
</script>

<style>

</style>
