<template>
    <el-card>
        <div id="card-header">
            <h2>Highlights</h2>
            <p>
                Treat this as an outline of your day that you can quickly scan
            </p>
        </div>
        <el-form label-position="top" @submit.prevent="onSubmit()">
            <el-form-item>
                <el-input
                    v-model="log.title"
                    label="Enter a highlight of the day"
                    tabindex="2"
                    placeholder="What did you do today?"
                    clearable
                    size="large"
                >
                    <template #append>
                        <el-button @click="onSubmit(log)"> Add </el-button>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
<!--        <div id="highlights-content" v-for="item in highlights">-->
<!--            <p>-->
<!--                {{ item.title }}-->
<!--            </p>-->
<!--            <el-icon> <XMarkIcon/></el-icon>-->
<!--        </div>-->
    </el-card>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/outline';

export default {
    name: 'HighlightsCard',
    components: {
        XMarkIcon
    },
    data() {
        return {
            log: {
                title: '',
            },
            highlights: [
                {
                    title: 'item 1',
                },
            ],
        };
    },
    methods: {
        onSubmit(log) {
            this.highlights.push(log);
        },
    },
};
</script>

<style scoped lang="scss">
.el-card {
    margin-top: 3em;
    padding: 0.8em;

    #card-header {
        h2 {
            color: var(--slate-700);
            margin: 0;
        }

        p {
            color: var(--slate-500);
            margin-top: 0;
            font-size: 14px;
        }
    }

    #highlights-content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
            color: var(--gray-700);
        }
        .el-icon {
            font-size: 20px;
        }
    }
}
</style>
