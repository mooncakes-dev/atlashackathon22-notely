<template>
<div class="container">
  <h1>Notely</h1>
  <el-autocomplete
      placeholder="Search"
      clearable
      class="w-50 m-2"
      :prefix-icon="Search"
      size="large"
  />
</div>
</template>

<script>
import { Search } from '@element-plus/icons-vue'

export default {
  name: "Navbar",
  components: {
    Search
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>