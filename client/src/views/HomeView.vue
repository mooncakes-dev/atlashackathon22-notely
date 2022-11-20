<script setup>
import Navbar from '../components/Navbar.vue';
</script>

<template>
    <el-container>
        <el-header>
            <Navbar />
        </el-header>
    </el-container>
    <main></main>
</template>

<style scoped lang="scss">
.el-container {
    margin: 0 30em;
}
</style>
