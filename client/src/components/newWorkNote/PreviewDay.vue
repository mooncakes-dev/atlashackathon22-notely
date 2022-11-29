<template>
    <el-card id="preview-card">
        <h3 id="date-title">{{ date }}</h3>
        <el-divider />
        <el-descriptions>
            <el-descriptions-item label="Tags">
                <el-tag
                    closable
                    @close="removeTag(tag)"
                    type="success"
                    effect="light"
                    v-for="tag in tags"
                >
                    {{ tag }}
                </el-tag>
            </el-descriptions-item>
        </el-descriptions>
        <h4>Highlights of the day</h4>
        <p id="highlight-item" v-for="item in highlights">
            {{ item }}
            <el-icon @click="removeHighlight(item)"> <XCircleIcon /> </el-icon>
        </p>
        <h4>Tasks finished</h4>
        <h4>Detailed Report</h4>
        <p id="detailed-report">{{ report }}</p>
    </el-card>
</template>

<script>
import { XCircleIcon } from '@heroicons/vue/24/outline';

export default {
    name: 'PreviewDay',
    components: {
        XCircleIcon,
    },
    props: {
        date: String,
        tags: Array,
        highlights: Array,
        report: String,
    },
    methods: {
        removeTag(tag) {
            this.tags.splice(this.tags.indexOf(tag), 1);
            this.$emit('tagRemoval', this.tags);
        },

        removeHighlight(item) {
            this.highlights.splice(this.highlights.indexOf(item), 1);
            this.$emit('highlightRemoval', this.highlights);
        },
    },
};
</script>

<style scoped lang="scss">
#preview-card {
    h3 {
        color: var(--gray-700);
    }
    h4 {
        color: var(--lime-700);
    }

    .el-tag {
        margin-right: 1em;
    }

    #highlight-item {
        display: flex;
        align-items: center;
        justify-content: space-between;

        color: var(--gray-700);
        font-size: 14px;
        margin: 0.3em auto;

        .el-icon {
            font-size: 22px;
            margin-left: 1em;

            &:hover {
                color: var(--red-700);
                cursor: pointer;
            }
        }
    }
    #detailed-report {
        color: var(--gray-700);
        font-size: 14px;
        white-space: pre-line;
    }
}
</style>
