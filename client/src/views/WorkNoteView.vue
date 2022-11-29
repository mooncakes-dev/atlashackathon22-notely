<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col>
                    <header>
                        <el-row>
                            <el-col id="header" :md="12" :lg="8">
                                <div id="icon">
                                    <el-icon color="#6366f1">
                                        <MoonIcon />
                                    </el-icon>
                                </div>
                                <h1>Summary for {{ currentNote.date }}</h1>
                            </el-col>
                            <el-col :md="10" :lg="4">
                                <el-tag
                                    effect="light"
                                    class="custom-tag"
                                    size="large"
                                    v-for="tag in currentNote.tags"
                                >
                                    {{ tag }}
                                </el-tag>
                            </el-col>
                        </el-row>
                    </header>
                </el-col>
            </el-row>
            <el-row>
                <el-col :xs="20" :lg="10">
                    <el-card id="work-summary">
                        <h3>Highlights of the day</h3>
                        <p v-for="highlight in currentNote.highlights">
                            {{ highlight }}
                        </p>
                        <h3>Detailed Report</h3>
                        <p>{{ currentNote.report }}</p>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script setup>
import { MoonIcon } from '@heroicons/vue/24/outline';

import { useWorkNoteStore } from '@/stores/workNoteStore';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const noteStore = useWorkNoteStore();

const currentNote = computed(() => {
    return noteStore.workNote;
});

onMounted(() => {
    noteStore.fetchWorkNoteById(route.params.id);
});
</script>

<style scoped lang="scss">
.el-main {
    color: var(--gray-700);

    #header {
        display: flex;
        align-items: center;
        gap: 15px;
        //margin: 2em auto;

        h1 {
            font-size: 28px;
            font-weight: 600;
        }

        #icon {
            background-color: var(--violet-200);
            border-radius: 100px;
            box-shadow: var(--box-shadow);
            width: 3em;
            height: 3em;

            .el-icon {
                color: var(--violet-600);
                font-size: 1.8em;
                top: 0.3em;
                left: 0.39em;
            }
        }
    }

    .custom-tag {
        background-color: var(--indigo-200);
        color: var(--indigo-700);
        border-radius: 5px;
        border: 1px solid var(--indigo-100);
        box-shadow: var(--box-shadow);
        margin: 2em auto;
    }

    #work-summary {
        margin-top: 2em;
        h3 {
            color: var(--indigo-500);
        }

        p {
            color: var(--slate-700);
        }
    }
}
</style>
