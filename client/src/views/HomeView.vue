<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="24">
                    <header id="header">
                        <h1>Your Work Logs</h1>
                        <router-link to="/new-work-note">
                            <el-button color="#6366f1">New Log</el-button>
                        </router-link>
                    </header>
                </el-col>
            </el-row>
            <el-row>
                <el-autocomplete
                    placeholder="Search"
                    clearable
                    :prefix-icon="MagnifyingGlassIcon"
                    size="large"
                />
            </el-row>
            <el-row id="notes-section">
                <el-col :xs="24" :sm="20" :md="18" :lg="8">
                    <div v-for="note in workNotes" class="note-card">
                        <NoteCard
                            :id="note._id"
                            :date="note.date"
                            :highlights="note.highlights"
                        />
                    </div>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useWorkNoteStore } from '@/stores/workNoteStore';

import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import NoteCard from '@/components/NoteCard.vue';

const store = useWorkNoteStore();

const workNotes = computed(() => {
    return store.workNotes;
});

onMounted(() => {
    store.fetchAllWorkNotes();
});
</script>

<style scoped lang="scss">
.el-container {
    .el-main {
        #header {
            display: flex;
            align-items: center;
            gap: 1em;

            h1 {
                color: var(--slate-800);
                font-weight: 500;
            }

            .el-button {
                box-shadow: var(--box-shadow);
            }
        }

        #notes-section {
            margin-top: 3em;
        }
        .note-card {
            margin-bottom: 3em;
        }
    }
}
</style>
