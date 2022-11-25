<template>
    <el-card class="--log-card">
        <div id="card-header">
            <h2>Detailed Report</h2>
            <p>
                Treat this as a journal entry, inlude as much as you see fit
            </p>
        </div>
        <el-input
            v-model="textarea2"
            :autosize="{ minRows: 2, maxRows: 4 }"
            type="textarea"
            placeholder="Please input"
        />
    </el-card>
</template>

<script>
export default {
    name: 'Report',
};
</script>

<style scoped lang="scss">

</style>
