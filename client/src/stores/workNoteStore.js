import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/work-notes/';
const SEARCH_URL = 'http://localhost:3000/search?term=';

export const useWorkNoteStore = defineStore('workNoteStore', {
    state: () => ({
        workNotes: [],
        workNote: {},
        searchNotes: [],
    }),
    getters: {
        getNotes(state) {
            return state.workNotes;
        },
        getNoteById(state) {
            return state.workNote;
        },
        getSearchResult(state) {
            return state.searchNotes;
        },
    },
    actions: {
        async fetchAllWorkNotes() {
            try {
                const response = await axios.get(API_URL);
                this.workNotes = response.data;
            } catch (err) {
                console.log(err);
            }
        },

        async fetchWorkNoteById(id) {
            try {
                const response = await axios.get(API_URL + id);
                this.workNote = response.data;
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

        async deleteWorkNote(id) {
            try {
                return axios.delete(API_URL + id);
            } catch (err) {
                console.log(err);
            }
        },

        async searchForNotes(term) {
            try {
                const response = await axios.get(SEARCH_URL + term);
                this.searchNotes = response.data;
            } catch (err) {
                console.log(err);
            }
        },
    },
});
