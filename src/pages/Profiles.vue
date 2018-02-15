<template>
  <el-table :data="profiles">
    <el-table-column label="Name" prop="name"></el-table-column>
    <el-table-column label="Manufacturer" prop="manufacturer.name"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      profiles: 
    }
  }
}
</script>

<style>

</style>
