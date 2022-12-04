import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/work-notes/';

export const useWorkNoteStore = defineStore('workNoteStore', {
    state: () => ({
        workNotes: [],
        workNote: {},
    }),
    getters: {
        getNotes(state) {
            return state.workNotes;
        },
        getNoteById(state) {
            return state.workNote;
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

        async fetchWorkNoteById(id) {
            try {
                const response = await axios.get(API_URL + id);
                this.workNote = response.data;
                console.log(this.workNote);
            } catch (err) {
                console.log(err);
            }
        },

        async createWorkNote(payload) {
            try {
                return axios.post(API_URL, payload);
            } catch (err) {
                console.log(err);
            }
        },
    },
});
