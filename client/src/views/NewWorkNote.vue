<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="24">
                    <header id="header">
                        <div id="icon">
                            <el-icon color="#84cc16">
                                <DocumentPlusIcon />
                            </el-icon>
                        </div>
                        <h1>Log your day</h1>
                    </header>
                </el-col>
            </el-row>
            <el-row> <highlights-card /></el-row>
        </el-main>
    </el-container>
</template>

<script>
import { DocumentPlusIcon } from '@heroicons/vue/24/solid';
import highlightsCard from '@/components/newWorkNote/highlightsCard.vue';

export default {
    name: 'new-work-note',
    components: {
        DocumentPlusIcon,
        highlightsCard,
    },
};
</script>

<style scoped lang="scss">
.el-main {
    color: var(--gray-700);

    #header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 2em auto;

        #icon {
            background-color: var(--lime-200);
            border-radius: 100px;
            box-shadow: var(--box-shadow);
            width: 3em;
            height: 3em;

            .el-icon {
                color: var(--lime-600);
                font-size: 1.8em;
                top: 0.3em;
                left: 0.39em;
            }
        }
        p {
            color: var(--slate-500);
            font-weight: 300;
        }
    }
}
</style>
