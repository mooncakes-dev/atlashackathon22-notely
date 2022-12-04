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
                <el-input
                    v-model="searchTerm"
                    @input="searchNotes()"
                    placeholder="Search"
                    clearable
                    :prefix-icon="MagnifyingGlassIcon"
                    size="large"
                />
            </el-row>
            <el-row id="notes-section">
                <el-col :xs="24" :sm="20" :md="18" :lg="8">
                    <template v-if="searchResults !== []">
                        <div v-for="note in searchResults" class="note-card">
                            <NoteCard
                                :id="note._id"
                                :date="note.date"
                                :highlights="note.highlights"
                            />
                        </div>
                    </template>
                    <div
                        v-if="searchTerm === ''"
                        v-for="note in workNotes"
                        class="note-card"
                    >
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
import { onMounted, computed, ref } from 'vue';
import { useWorkNoteStore } from '@/stores/workNoteStore';

import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import NoteCard from '@/components/NoteCard.vue';

const store = useWorkNoteStore();
const searchTerm = ref('');

const searchResults = computed(() => {
    return store.getSearchResult;
});

const workNotes = computed(() => {
    return store.getNotes;
});

function searchNotes() {
    if (searchTerm.value !== '') {
        store.searchForNotes(searchTerm.value);
    }
}

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
