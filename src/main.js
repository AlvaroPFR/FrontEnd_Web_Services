import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from "primevue/config";
import 'primevue/resources/themes/aura-light-green/theme.css'
import Button from "primevue/button";
import Calendar from 'primevue/calendar';
import Rating from 'primevue/rating';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask'
import i18n from "@/locale/i18n.js";
import router from '@/router.js'
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import 'primeicons/primeicons.css';
import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";



const app = createApp(App);

app.use(PrimeVue); // inyección de depencias
app.use(i18n);
app.use(router)


app.component('pv-button',Button)
app.component('pv-calendar',Calendar)
app.component('pv-rating',Rating)
app.component('pv-input-text',InputText)
app.component('pv-input-mask',InputMask)
app.component('pv-column', Column)
app.component('pv-dataTable', DataTable)
app.component('pv-columnGroup', ColumnGroup)
app.component('pv-row', Row)

app.mount('#app')