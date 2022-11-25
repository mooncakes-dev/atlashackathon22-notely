<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <el-header>
        <Navbar />
    </el-header>
    <RouterView />
</template>
