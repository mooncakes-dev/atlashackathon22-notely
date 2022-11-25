<template>
    <el-container>
        <el-main>
            <el-row>
                <el-col :span="24">
                    <header id="header">
                        <h1>Your Notes</h1>
                        <router-link to="/new-work-note">
                            <el-button
                                :icon="PlusIcon"
                                circle
                                plain
                                color="#6366f1"
                            />
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
            <el-row>
                <el-col :xs="24" :sm="20" :md="18" :lg="10">
                    <div v-for="note in notes" class="note-card">
                        <NoteCard
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
import { PlusIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import NoteCard from '@/components/NoteCard.vue';

const notes = [
    {
        date: '12/03/2022',
        highlights: [{ name: '1:1 w. Team Lead' }, { name: 'Product Demo' }],
    },
    {
        date: '12/04/2022',
        highlights: [{ name: '1:1 w. Team Lead' }, { name: 'Product Demo' }],
    },
    {
        date: '12/05/2022',
        highlights: [{ name: '1:1 w. Team Lead' }, { name: 'Product Demo' }],
    },
    {
        date: '12/05/2022',
        highlights: [{ name: '1:1 w. Team Lead' }, { name: 'Product Demo' }],
    },
];
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

        .el-autocomplete {
            margin-bottom: 3em;
        }
        .note-card {
            margin-bottom: 3em;
        }
    }
}
</style>
