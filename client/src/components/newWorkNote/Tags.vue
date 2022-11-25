<template>
    <el-card class="--log-card">
        <div id="card-header">
            <h2>Tags</h2>
            <p>Add tags to help you search for specific entries</p>
        </div>
        <el-select
            v-model="userValue"
            multiple
            filterable
            allow-create
            default-first-option
            :reserve-keyword="false"
            placeholder="Choose tags or create a new one"
            tag-type="info"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
        </el-select>
        <el-button @click="saveTags()" plain color="#a78bfa"> Add </el-button>
    </el-card>
</template>

<script>
// TODO: Save user created tags - Array Some(?)

export default {
    name: 'Tags.vue',
    data() {
        return {
            userValue: '',
            options: [
                {
                    value: 'Meeting Heavy',
                    label: 'Meeting Heavy',
                },
                {
                    value: 'Focused Work',
                    label: 'Focused Work',
                },
                {
                    value: 'Slow Day',
                    label: 'Slow Day',
                },
            ],
        };
    },
    methods: {
        saveTags() {
            const tagsArr = this.userValue;
            this.$emit('newTag', tagsArr);
            this.userValue = '';
        },
    },
};
</script>

<style scoped lang="scss">
.el-card {
    .el-select {
        width: 20em;
    }
    .el-button {
        margin-left: 1em;
    }
}
</style>
