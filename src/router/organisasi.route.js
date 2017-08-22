import Main from '@/components/layouts/Main'
import Index from '@/components/modules/Organisasi/Index.vue'
import Unit from '@/components/modules/Organisasi/Unit.vue'

export default {
    path: '/organisasi',
    component: Main,
    children: [
        {
            path: '',
            component: Index
        },
        {
            path: 'unit/:id',
            component: Unit
        }
    ]
}