import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/work-notes';

export const useWorkNoteStore = defineStore('workNoteStore', {
    state: () => ({
        workNotes: [],
    }),
    getters: {
        getNotes(state) {
            return state.workNotes;
        },
    },

    actions: {
        async fetchAllWorkNotes() {
            try {
                const response = await axios.get(API_URL);
                this.workNotes = response.data;
                console.log(this.workNotes);
            } catch (err) {
                console.log(err);
            }
        },
    },
});
