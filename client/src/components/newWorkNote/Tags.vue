<template>
    <el-card class="--log-card">
        <div id="card-header">
            <h2>
                <el-icon> <HashtagIcon /></el-icon> Tags
            </h2>
            <p>Add tags to help you search for specific entries</p>
        </div>
        <el-form>
            <el-form-item>
                <el-select
                    v-model="userValue"
                    multiple
                    filterable
                    allow-create
                    default-first-option
                    :reserve-keyword="false"
                    placeholder="Choose tags or create a new one"
                    tag-type="info"
                    size="large"
                >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </el-form-item>
            <el-button @click="saveTags()" plain color="#a78bfa" size="large">
                Add
            </el-button>
        </el-form>
    </el-card>
</template>

<script>
// TODO: Save user created tags - Array Some(?)
import { HashtagIcon } from '@heroicons/vue/24/outline';

export default {
    name: 'Tags.vue',
    components: {
        HashtagIcon,
    },
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
