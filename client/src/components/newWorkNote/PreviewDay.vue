<template>
    <el-card id="preview-card">
        <h3>{{ date }}</h3>
        <el-divider />
        <el-descriptions>
            <el-descriptions-item label="Tags:">
                <el-tag
                    closable
                    @close="handleClose(tag)"
                    type="success"
                    effect="light"
                    v-for="tag in tags"
                    >{{ tag }}</el-tag
                >
            </el-descriptions-item>
        </el-descriptions>
        <h4>Highlights of the day</h4>
        <h4>Tasks finished</h4>
        <h4>Detailed Report</h4>
        <p>{{ report }}</p>
    </el-card>
</template>

<script>
export default {
    name: 'PreviewDay',
    props: {
        date: String,
        tags: Array,
        report: String,
    },
  methods: {
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      }
  }
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
