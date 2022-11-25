<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="12">
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
            <el-row>
                <el-col :xs="24" :lg="12">
                    <el-row>
                        <DatePicker @saveDate="updateDate($event)" />
                    </el-row>
                    <el-row> <HighlightsCard /></el-row>
                    <el-row> <Tags @newTag="updateTags($event)" /></el-row>
                    <el-row> <Report /> </el-row>
                    <el-button color="#65a30d" size="large" plain id="saveBtn">
                        Save</el-button
                    >
                </el-col>
                <el-col :lg="12">
                    <PreviewDay :date="dayLog.date" :tags="dayLog.tags" />
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import { DocumentPlusIcon } from '@heroicons/vue/24/solid';
import HighlightsCard from '@/components/newWorkNote/HighlightsCard.vue';
import DatePicker from '@/components/newWorkNote/DatePicker.vue';
import Tags from '@/components/newWorkNote/Tags.vue';
import Report from '@/components/newWorkNote/Report.vue';
import PreviewDay from '@/components/newWorkNote/PreviewDay.vue';

export default {
    name: 'new-work-note',
    components: {
        Report,
        DocumentPlusIcon,
        HighlightsCard,
        DatePicker,
        Tags,
        PreviewDay,
    },
    data() {
        return {
            dayLog: { date: '', tags: [] },
        };
    },

    methods: {
        updateDate(newDate) {
            this.dayLog.date = newDate;
        },
        updateTags(newTag) {
            this.dayLog.tags.push(...newTag);
        },
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

        h1 {
            font-size: 28px;
        }

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

    #saveBtn {
        border-radius: 5px;
        box-shadow: var(--box-shadow);
        font-family: 'Poppins', sans-serif;
        margin-top: 2em;

        width: 6em;
        height: 3em;
    }
}
</style>
