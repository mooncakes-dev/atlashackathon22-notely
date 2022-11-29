import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NewWorkNote from '@/views/NewWorkNote.vue';
import WorkNoteView from '@/views/WorkNoteView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
        },
        {
            path: '/new-work-note',
            name: 'newNote',
            component: NewWorkNote,
        },
        {
            path: '/work-note/:id',
            name: 'work-note-details',
            component: WorkNoteView,
        },
    ],
});

export default router;
