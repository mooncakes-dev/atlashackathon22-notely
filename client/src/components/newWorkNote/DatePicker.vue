<template>
    <el-date-picker
        v-model="dateSelected"
        tabindex="1"
        label="Pick a date for the log"
        type="date"
        placeholder="Pick a day"
        size="large"
        format="YYYY/MM/DD"
        value-format="YYYY-MM-DD"
        @change=sendNewDate
    />
</template>

<script>
export default {
    name: 'DatePicker',
    data() {
        return {
            dateSelected: '',
        };
    },
    methods: {
        sendNewDate() {
          this.$emit('saveDate', this.dateSelected);
        },
    },
};
</script>

<style scoped lang="scss">
.el-date-picker {
    margin-bottom: 3em;
}
</style>
