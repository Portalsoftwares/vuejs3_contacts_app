import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import EditContact from '../components/EditContact.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/edit/:id',
            name: 'edit',
            component: EditContact
        }
    ]
});

export default router