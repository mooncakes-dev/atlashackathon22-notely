<template>
    <el-card class="--log-card">
        <div id="card-header">
            <h2>
                <el-icon><CalendarDaysIcon /></el-icon>Date
            </h2>
            <p>Pick a date for the log, can be today or past days</p>
        </div>
        <el-date-picker
            v-model="dateSelected"
            tabindex="1"
            label="Pick a date for the log"
            type="date"
            placeholder="Pick a day"
            size="large"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
            @change="sendNewDate"
        />
    </el-card>
</template>

<script>
import { CalendarDaysIcon } from '@heroicons/vue/24/outline';
export default {
    name: 'DatePicker',
    components: {
        CalendarDaysIcon,
    },
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
.--log-card {
  margin-top: 0;
}
</style>
