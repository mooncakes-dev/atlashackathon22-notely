<template>
    <el-card>
        <template #header>
            <div class="card-header">
                <el-row justify="space-between">
                    <el-col :xs="12" :sm="12" :md="10" :lg="10">
                        <router-link :to="'/work-note/' + id">
                            <span>{{ date }}</span>
                        </router-link>
                    </el-col>

                    <el-col :xs="6" :sm="4" :md="4" :lg="4">
                        <el-button
                            text
                            plain
                            color="#f43f5e"
                            @click="deleteWorkNote()"
                        >
                            Delete
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </template>
        <div id="tags-section" v-for="tag in tags">
            <el-tag>
                {{ tag }}
            </el-tag>
        </div>
        <div id="highlights-section">
            <h3>Daily Highlights</h3>
            <el-icon> <SunIcon /></el-icon>
        </div>
        <div v-for="item in highlights" class="text item">
            {{ item }}
        </div>
    </el-card>
</template>

<script>
import { SunIcon } from '@heroicons/vue/24/outline';
import { useWorkNoteStore } from '@/stores/workNoteStore';
import { ElNotification } from 'element-plus';

export default {
    setup() {
        const workNoteStore = useWorkNoteStore();

        return { workNoteStore };
    },
    components: {
        SunIcon,
    },
    props: {
        id: { type: String },
        date: { type: String },
        highlights: { type: Array },
        tags: { type: Array },
    },
    methods: {
        deleteWorkNote() {
            const id = this.id;
            this.workNoteStore
                .deleteWorkNote(id)
                .then(() => {
                    ElNotification({
                        title: 'Deleted!',
                        message: 'We swept the day under the rug',
                        type: 'success',
                    });
                    this.workNoteStore.fetchAllWorkNotes();
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

<style lang="scss" scoped>
.el-card {
    a {
        color: var(--slate-700);
        text-decoration: none;
    }
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
