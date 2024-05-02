import TheLogin from '@/pages/the-login.vue'
import TheRegister from '@/pages/the-register.vue'
import TheHome from '@/pages/the-home.vue'
import TheMain from '@/pages/the-main.vue'
import TheFinances from '@/pages/the-finances.vue'
import TheCrops from "@/pages/the-crops.vue";
import TheOrders from "@/pages/the-orders.vue";
import ThePendingPayments from "@/pages/the-pending-payments.vue";
import TheFarmersChat from "@/pages/the-farmers-chat.vue";
import TheStores from "@/pages/the-stores.vue";

import TheFooter from '@/components/the-footer.component.vue'
import { createRouter, createWebHistory } from 'vue-router'
import viewCropComponent from "@/components/view-crop.component.vue";
import addCrops from "@/pages/add-crops.vue";
import TheCalendari from "@/pages/the-calendari.vue";

const routes = [
    { path: '/', component: TheMain },
    { path: '/login', component: TheLogin },
    { path: '/register', component: TheRegister },
    { path: '/home', component: TheHome },
    { path: '/users', component: TheLogin },
    { path: '/finances', component: TheFinances },
    { path: '/orders', component: TheOrders },
    {path: '/pending_payments', component: ThePendingPayments},
    {path: '/farmer_chat', component: TheFarmersChat},
    {path: '/view-crow',component: viewCropComponent},
    {path: '/store', component: TheStores},
    { path: '/crops', component: TheCrops },
    {path:'/add-crops', component: addCrops},
    {path: '/calendari', component: TheCalendari}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
