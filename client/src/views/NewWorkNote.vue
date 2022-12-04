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
                <el-col :xs="20" :lg="12">
                    <el-row>
                        <DatePicker @saveDate="updateDate($event)" />
                    </el-row>
                    <el-row>
                        <Tags
                            @newTag="updateTags($event)"
                            @tagRemoval="removeTag($event)"
                    /></el-row>
                    <el-row>
                        <HighlightsCard
                            @updateHighlights="updateHighlights($event)"
                            @highlightRemoval="removeHighlight($event)"
                        />
                    </el-row>
                    <el-row>
                        <Report @sendReport="updateReport($event)" />
                    </el-row>
                </el-col>
                <el-col :lg="8">
                    <PreviewDay
                        :date="dayLog.date"
                        :tags="dayLog.tags"
                        :highlights="dayLog.highlights"
                        :report="dayLog.report"
                    />
                    <el-button
                        color="#65a30d"
                        size="large"
                        plain
                        id="saveBtn"
                        @click="saveWorkNote()"
                    >
                        Save
                    </el-button>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
import { DocumentPlusIcon } from '@heroicons/vue/24/solid';
import { ElNotification } from 'element-plus';

import HighlightsCard from '@/components/newWorkNote/HighlightsCard.vue';
import DatePicker from '@/components/newWorkNote/DatePicker.vue';
import Tags from '@/components/newWorkNote/Tags.vue';
import Report from '@/components/newWorkNote/Report.vue';
import PreviewDay from '@/components/newWorkNote/PreviewDay.vue';

import { useWorkNoteStore } from '@/stores/workNoteStore';
import router from '@/router';

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
            dayLog: { date: '', tags: [], highlights: [], report: '' },
            note_id: null,
        };
    },

    setup() {
        const workNoteStore = useWorkNoteStore();

        return { workNoteStore };
    },

    methods: {
        /* Functions to update each sections within the log day
         * Takes: date, tags, highlights, report
         */
        updateDate(newDate) {
            this.dayLog.date = newDate;
        },
        updateTags(newTag) {
            this.dayLog.tags.push(...newTag);
        },
        updateHighlights(newHighlight) {
            this.dayLog.highlights.push(newHighlight);
        },
        updateReport(newReport) {
            this.dayLog.report = newReport;
        },

        /* Functions to update log day, if items were removed in the preview component
         * Take tag & highlight updates
         */
        removeTag(tag) {
            this.dayLog.tags.push(tag);
        },

        removeHighlight(item) {
            this.dayLog.highlights.push(item);
        },

        /*
         * Post new work note to server
         */

        saveWorkNote() {
            const payload = {
                date: this.dayLog.date,
                tags: this.dayLog.tags,
                highlights: this.dayLog.highlights,
                report: this.dayLog.report,
            };

            this.workNoteStore
                .createWorkNote(payload)
                .then((response) => {
                    this.note_id = response.data._id;
                    router.push({
                        path: `/work-note/${this.note_id}`,
                    });
                })
                .catch((error) => {
                    ElNotification({
                        title: 'Something went wrong',
                        message:
                            'Oof, we have messed up somewhere. Please try again',
                        type: 'warning',
                    });
                    console.log(error);
                });
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
