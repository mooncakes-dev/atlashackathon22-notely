<template>
    <el-card class="--log-card">
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
                    placeholder="What did you do today?"
                    clearable
                    size="large"
                >
                </el-input>
            </el-form-item>
            <el-button @click="onSubmit()" plain color="#a78bfa" size="large">
                Save
            </el-button>
        </el-form>
    </el-card>
</template>

<script>
export default {
    name: 'HighlightsCard',
    components: {},
    data() {
        return {
            log: {
                title: '',
            },
        };
    },
    methods: {
        onSubmit() {
            this.$emit('updateHighlights', this.log.title);
            this.log.title = '';
        },
    },
};
</script>

<style scoped lang="scss">
.el-card {
    .el-form {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .el-button {
        font-family: 'Poppins', sans-serif;
    }
}
</style>
