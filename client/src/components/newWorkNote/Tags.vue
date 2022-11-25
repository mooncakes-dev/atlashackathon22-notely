<template>
    <el-card>
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
            tag-type="primary"
        >
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                @click="checkIfExists(item.value)"
            />
        </el-select>
    </el-card>
</template>

<script>
export default {
    name: 'Tags.vue',
    data() {
        return {
            userValue: '',
            options: [
                {
                    value: 'HTML',
                    label: 'HTML',
                },
                {
                    value: 'CSS',
                    label: 'CSS',
                },
                {
                    value: 'JavaScript',
                    label: 'JavaScript',
                },
            ],
        };
    },
    methods: {
        checkIfExists(value) {
            const exists = this.options.some((value) => {
                return element.value === this.element.value;
            });

            if (!exists) {
                this.options.push(this.value);
            }

            console.log(this.options);
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
}
</style>
