import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import 'swiper/swiper-bundle.css';


const messages = {
  en: {
    portalName: 'xxxx Power Plant',
    contact: 'Contact: 13800000000 123@out.com',
    companyInfo: 'Company Information...',
    qualification: 'Qualifications...',
    aboutUs: 'About Us...',
    contactUs: 'Contact Us...'
  },
  cn: {
    portalName: 'xxxx电厂',
    contact: '联系方式: 13800000000 123@out.com',
    companyInfo: '公司信息...',
    qualification: '相关资质...',
    aboutUs: '关于我们...',
    contactUs: '联系我们...'
  }
};

const i18n = createI18n({
  locale: 'cn',
  messages
});

createApp(App).use(i18n).mount('#app');
