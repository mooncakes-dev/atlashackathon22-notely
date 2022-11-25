<template>
    <el-card>
        <div id="card-header">
            <h2>Highlights</h2>
            <p>
                Treat this as an outline of your day that you can quickly scan
            </p>
        </div>
        <el-form label-position="top" @submit.prevent="onSubmit()">
            <el-form-item label="Name">
                <el-input
                    v-model="log.title"
                    label="Enter a highlight of the day"
                    tabindex="1"
                    placeholder="What did you do today?"
                    clearable
                    large
                >
                    <template #append>
                        <el-button @click="onSubmit(log)"> Add </el-button>
                    </template>
                </el-input>
            </el-form-item>
        </el-form>
        <div id="highlights-content" v-for="item in highlights">
            <p>{{ item.title }}</p>
        </div>
    </el-card>
</template>

<script>
export default {
    name: 'highlightsCard',
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
    #card-header {
        h2 {
            color: var(--slate-700);
            margin: 0;
        }

        p {
            color: var(--slate-500);
            margin-top: 0;
        }
    }

    #highlights-content {
        p {
            color: var(--gray-700);
        }
    }
}
</style>
