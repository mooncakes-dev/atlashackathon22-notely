<template>
    <el-card class="--log-card">
        <div id="card-header">
            <h2>Detailed Report</h2>
            <p>Treat this as a journal entry, inlude as much as you see fit</p>
        </div>
        <el-input
            v-model="reportText"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
        />
        <el-button @click="saveReport()" plain color="#a78bfa" size="large"> Save </el-button>
    </el-card>
</template>

<script>
export default {
    name: 'Report',
    data() {
        return {
            reportText: '',
        };
    },
    methods: {
        saveReport() {
            this.$emit('sendReport', this.reportText);
        },
    },
};
</script>

<style scoped lang="scss">
.el-card {
    .el-button {
      font-family: 'Poppins', sans-serif;
      margin-top: 1em;
    }
}
</style>
