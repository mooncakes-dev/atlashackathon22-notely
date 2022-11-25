<template>
    <el-card id="preview-card">
        <h3>{{ date }}</h3>
        <el-divider />
        <el-descriptions>
            <el-descriptions-item label="Tags:">
                <el-tag type="success" effect="light">Meeting Heavy</el-tag>
              <el-tag type="success" effect="light">Exhausting</el-tag>
            </el-descriptions-item>
        </el-descriptions>
        <h4>Highlights of the day</h4>
        <h4>Tasks finished</h4>
        <h4>Detailed Report</h4>
    </el-card>
</template>

<script>
export default {
    name: 'PreviewDay',
    props: {
        date: '',
    },
};
</script>

<style scoped lang="scss">
#preview-card {
    h3 {
        color: var(--gray-700);
    }
    h4 {
        color: var(--lime-600);
    }

  .el-tag {
    margin-right: 1em;
  }
}
</style>
