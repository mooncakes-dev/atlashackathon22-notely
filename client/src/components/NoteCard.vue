<template>
    <el-card class="box-card">
        <template #header>
            <div class="card-header">
                <el-row justify="space-between">
                    <el-col :span="10">
                        <span>{{ date }}</span>
                    </el-col>

                    <el-col :span="2">
                        <el-button :icon="Edit" circle plain color="#94a3b8"/>
                    </el-col>
                </el-row>
            </div>
        </template>
        <h3>Daily Highlights:</h3>
        <div v-for="item in highlights" class="text item">
            {{ item.name }}
        </div>
    </el-card>
</template>

<script setup>
import { Edit } from '@element-plus/icons-vue';

const props = defineProps({
    date: { type: Date },
    highlights: { type: Array },
});
</script>

<style lang="scss" scoped>
.el-card {
    border-radius: 10px;
    box-shadow: var(--box-shadow);

  .card-header {
    color: var(--slate-700);
    font-size: 16px;
    font-weight: 600;
  }

  h3 {
    color: var(--indigo-500);
  }

  .item {
    color: var(--slate-600);
  }
}
</style>
