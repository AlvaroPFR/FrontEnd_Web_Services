import {createI18n} from "vue-i18n";

import es from "@/locale/es.js"
import en from "@/locale/en.js"


// create the const
const i18n = createI18n({
    locale: 'es',
    messages:{
        es,
        en,
        fr:{
            hello:'Bonjour',
            greet:'Bonjour {user}',
        }
    }
})

export default i18n;