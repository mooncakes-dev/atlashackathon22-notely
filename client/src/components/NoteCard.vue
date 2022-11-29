<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <el-row justify="space-between">
                    <el-col :xs="12" :sm="12" :md="10" :lg="10">
                        <span>{{ date }}</span>
                    </el-col>

                    <el-col :xs="6" :sm="4" :md="4" :lg="4">
                        <el-button text plain color="#f43f5e">
                            Delete
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </template>
        <div id="highlights-section">
            <!--            <el-icon><SunIcon /></el-icon>-->
            <h3>Daily Highlights</h3>
            <el-icon><SunIcon /></el-icon>
        </div>
        <div v-for="item in highlights" class="text item">
            {{ item.name }}
        </div>
    </el-card>
</template>

<script setup>
import { SunIcon } from '@heroicons/vue/24/outline';

const props = defineProps({
    date: { type: String },
    highlights: { type: Array },
});
</script>

<style lang="scss" scoped>
.el-card {
    padding: 0.8em;

    .el-row {
        align-items: end;
    }
    .card-header {
        align-items: end;
        color: var(--slate-700);
        font-size: 16px;
        font-weight: 600;
    }

    #highlights-section {
        color: var(--slate-700);
        display: flex;
        align-items: center;
        gap: 1em;

        .el-icon {
            color: var(--lime-500);
            font-size: 24px;
        }
    }

    .item {
        color: var(--slate-600);
    }
}
</style>
